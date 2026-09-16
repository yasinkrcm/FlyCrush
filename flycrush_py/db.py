"""PostgreSQL persistence for readout weights + training telemetry.

SPEED CONTRACT (the game loop must never wait on the database):
  * All hot-path writes go through AsyncDb: a single background thread with
    an unbounded queue. submit() only enqueues (microseconds) and never
    raises — DB down/slow => jobs drop silently, game keeps running 60fps.
  * Weights stored as float32 BYTEA (2KB per readout): no JSON bloat.
  * Latest-weight lookup is one indexed query (ORDER BY id DESC LIMIT 1).
  * Telemetry uses executemany batches, one transaction per flush.

OFFLINE CONTRACT: connect() fast-fails (2s timeout). Anything raising =>
None / False, caller falls back to JSON files. Importing this module never
requires psycopg: it is imported lazily inside connect().

Schema (created by init_schema, idempotent):
  readouts(name, updates, avg50, arch JSONB, meta JSONB, w1/b1/w2/b2/wprior BYTEA)
  training_runs(name, config JSONB, report JSONB, started/finished)
  run_metrics(run_id, episode, avg_score)  PK(run_id, episode)
"""
from __future__ import annotations

import json
import os
import queue
import threading
import time

SCHEMA = """
CREATE TABLE IF NOT EXISTS readouts(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updates INT NOT NULL DEFAULT 0,
  avg50 REAL,
  arch JSONB NOT NULL,
  meta JSONB,
  w1 BYTEA NOT NULL, b1 BYTEA NOT NULL, w2 BYTEA NOT NULL,
  b2 BYTEA NOT NULL, wprior BYTEA NOT NULL);
CREATE INDEX IF NOT EXISTS ix_readouts_name_id ON readouts(name, id DESC);
CREATE TABLE IF NOT EXISTS training_runs(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  config JSONB,
  report JSONB,
  started_at TIMESTAMPTZ DEFAULT now(),
  finished_at TIMESTAMPTZ);
CREATE TABLE IF NOT EXISTS run_metrics(
  run_id INT NOT NULL REFERENCES training_runs(id) ON DELETE CASCADE,
  episode INT NOT NULL,
  avg_score REAL NOT NULL,
  PRIMARY KEY (run_id, episode));
CREATE TABLE IF NOT EXISTS game_state(
  id INT PRIMARY KEY,
  board JSONB NOT NULL,
  moves_left INT, moves_total INT,
  score INT NOT NULL DEFAULT 0, combo INT NOT NULL DEFAULT 1,
  chain INT NOT NULL DEFAULT 0, best INT NOT NULL DEFAULT 0,
  overv BOOL NOT NULL DEFAULT FALSE,
  baseline REAL NOT NULL DEFAULT 0, updates INT NOT NULL DEFAULT 0,
  hist JSONB, eps REAL NOT NULL DEFAULT 0.3, dopa REAL NOT NULL DEFAULT 0,
  say TEXT,
  updated_at TIMESTAMPTZ DEFAULT now(),
  CONSTRAINT one_row CHECK (id = 1));
"""

# Idempotent migrations for pre-existing databases (run on every init).
MIGRATIONS = [
    "ALTER TABLE game_state ADD COLUMN IF NOT EXISTS invalid_count INT NOT NULL DEFAULT 0",
    "ALTER TABLE game_state ADD COLUMN IF NOT EXISTS move_count INT NOT NULL DEFAULT 0",
    "ALTER TABLE game_state ADD COLUMN IF NOT EXISTS invalid_log JSONB",
]

AUTOSAVE_EVERY = 100  # game/session: persist weights every N learning updates


def _load_dotenv():
    """Read repo-root .env (same file docker compose uses) without overriding
    real environment variables. Stdlib only, runs once at import."""
    try:
        root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        with open(os.path.join(root, ".env"), "r", encoding="utf-8") as fh:
            for line in fh:
                line = line.strip()
                if not line or line.startswith("#") or "=" not in line:
                    continue
                k, v = line.split("=", 1)
                k, v = k.strip(), v.strip().strip("'\"")
                if k and k not in os.environ:
                    os.environ[k] = v
    except Exception:
        pass


_load_dotenv()


def dsn_from_env() -> str:
    override = os.environ.get("FLYCRUSH_PG_DSN")
    if override:
        return override
    u = os.environ.get("POSTGRES_USER", "fly")
    p = os.environ.get("POSTGRES_PASSWORD", "flypw")
    db = os.environ.get("POSTGRES_DB", "flycrush")
    port = os.environ.get("POSTGRES_PORT", "5432")
    host = os.environ.get("POSTGRES_HOST", "localhost")
    return f"postgresql://{u}:{p}@{host}:{port}/{db}"


def connect(timeout: float = 2.0):
    """Returns a connection or None. Never raises, never blocks long."""
    try:
        import psycopg
        return psycopg.connect(dsn_from_env(), connect_timeout=timeout, autocommit=True)
    except Exception:
        return None


def init_schema(conn) -> bool:
    try:
        with conn.cursor() as cur:
            cur.execute(SCHEMA)
            for stmt in MIGRATIONS:
                try:
                    cur.execute(stmt)
                except Exception:
                    pass
        return True
    except Exception:
        return False


def _arr_bytes(arr) -> bytes:
    import numpy as np
    return np.ascontiguousarray(arr, dtype="<f4").tobytes()


def save_readout(conn, name: str, policy, updates: int = 0, avg50: float = 0.0,
                 meta_extra: dict | None = None) -> bool:
    """Upsert-free INSERT (history kept). One roundtrip. Returns ok."""
    try:
        import numpy as np  # noqa: F401  (ensures float32 path)
        arch = {"CF": int(policy.W1.shape[0]), "H": int(policy.W1.shape[1]),
                "C": 64, "D": 4, "F": int(policy.Wprior.shape[0])}
        meta = {"algo": "REINFORCE joint 256-way (live)", "seed": int(getattr(policy, "seed", 0))}
        if meta_extra:
            meta.update(meta_extra)
        with conn.cursor() as cur:
            cur.execute(
                """INSERT INTO readouts(name, updates, avg50, arch, meta, w1, b1, w2, b2, wprior)
                   VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)""",
                (name, int(updates), float(avg50), json.dumps(arch), json.dumps(meta),
                 _arr_bytes(policy.W1), _arr_bytes(policy.b1), _arr_bytes(policy.W2),
                 _arr_bytes(policy.b2), _arr_bytes(policy.Wprior)))
        return True
    except Exception:
        return False


def _bytes_to_policy(policy, row: dict) -> bool:
    """row: dict with w1/b1/w2/b2/wprior bytes + arch dict. Validated, clipped."""
    try:
        import numpy as np
        a = row.get("arch") or {}
        exp = {"CF": 10, "H": 16, "C": 64, "D": 4, "F": 73}
        if any(a.get(k) != v for k, v in exp.items()):
            return False
        parts = (("w1", policy.W1), ("b1", policy.b1), ("w2", policy.W2),
                 ("b2", policy.b2), ("wprior", policy.Wprior))
        for key, dst in parts:
            raw = row.get(key)
            if raw is None:
                return False
            v = np.frombuffer(bytes(raw), dtype="<f4").reshape(dst.shape)
            if not np.all(np.isfinite(v)):
                return False
            np.copyto(dst, np.clip(v, -5, 5))
        return True
    except Exception:
        return False


def load_latest_into(conn, name: str, policy):
    """Load newest readout into policy.
    Returns (ok, updates, avg50, created_at_iso). Never raises."""
    try:
        with conn.cursor() as cur:
            cur.execute(
                """SELECT updates, avg50, arch, w1, b1, w2, b2, wprior, created_at FROM readouts
                   WHERE name=%s ORDER BY id DESC LIMIT 1""", (name,))
            r = cur.fetchone()
        if not r:
            return False, 0, 0.0, ""
        updates, avg50, arch, w1, b1, w2, b2, wprior, created = r
        if isinstance(arch, str):
            arch = json.loads(arch)
        ok = _bytes_to_policy(policy, {"arch": arch, "w1": w1, "b1": b1,
                                       "w2": w2, "b2": b2, "wprior": wprior})
        try:
            ts = created.isoformat() if hasattr(created, "isoformat") else ""
        except Exception:
            ts = ""
        return ok, int(updates or 0), float(avg50 or 0.0), ts
    except Exception:
        return False, 0, 0.0, ""


def log_run(conn, name: str, config: dict, report: dict, curve: list) -> bool:
    """One run row + batched metrics. Returns ok."""
    try:
        with conn.cursor() as cur:
            cur.execute(
                """INSERT INTO training_runs(name, config, report, finished_at)
                   VALUES (%s,%s,%s,now()) RETURNING id""",
                (name, json.dumps(config or {}), json.dumps(report or {})))
            run_id = cur.fetchone()[0]
            rows = [(run_id, (i + 1) * 20, float(v)) for i, v in enumerate(curve or [])]
            if rows:
                cur.executemany(
                    "INSERT INTO run_metrics(run_id, episode, avg_score) VALUES (%s,%s,%s)"
                    " ON CONFLICT DO NOTHING", rows)
        return True
    except Exception:
        return False


def _valid_board(b) -> bool:
    try:
        return (isinstance(b, list) and len(b) == 8
                and all(isinstance(row, list) and len(row) == 8
                        and all(isinstance(v, int) and 0 <= v < 6 for v in row)
                        for row in b))
    except Exception:
        return False


def save_game_state(conn, d: dict) -> bool:
    """Upsert the singleton game row (id=1). Board validated first."""
    try:
        if not _valid_board(d.get("board")):
            return False
        hist = d.get("hist") or []
        ilog = d.get("invalid_log") or []
        with conn.cursor() as cur:
            cur.execute(
                """INSERT INTO game_state(id, board, moves_left, moves_total, score,
                   combo, chain, best, overv, baseline, updates, hist, eps, dopa, say,
                   move_count, invalid_count, invalid_log, updated_at)
                   VALUES (1,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,now())
                   ON CONFLICT (id) DO UPDATE SET board=EXCLUDED.board,
                   moves_left=EXCLUDED.moves_left, moves_total=EXCLUDED.moves_total,
                   score=EXCLUDED.score, combo=EXCLUDED.combo, chain=EXCLUDED.chain,
                   best=EXCLUDED.best, overv=EXCLUDED.overv, baseline=EXCLUDED.baseline,
                   updates=EXCLUDED.updates, hist=EXCLUDED.hist, eps=EXCLUDED.eps,
                   dopa=EXCLUDED.dopa, say=EXCLUDED.say,
                   move_count=EXCLUDED.move_count, invalid_count=EXCLUDED.invalid_count,
                   invalid_log=EXCLUDED.invalid_log, updated_at=now()""",
                (json.dumps(d["board"]), d.get("moves_left"), d.get("moves_total"),
                 int(d.get("score", 0)), int(d.get("combo", 1)), int(d.get("chain", 0)),
                 int(d.get("best", 0)), bool(d.get("over", False)),
                 float(d.get("baseline", 0.0)), int(d.get("updates", 0)),
                 json.dumps(list(hist)[-600:]), float(d.get("eps", 0.3)),
                 float(d.get("dopa", 0.0)), str(d.get("say", ""))[:200],
                 int(d.get("move_count", 0)), int(d.get("invalid_count", 0)),
                 json.dumps(list(ilog)[-12:])))
        return True
    except Exception:
        return False


def load_game_state(conn):
    """Returns validated state dict or None. Never raises."""
    try:
        with conn.cursor() as cur:
            cur.execute("""SELECT board, moves_left, moves_total, score, combo,
               chain, best, overv, baseline, updates, hist, eps, dopa, say,
               move_count, invalid_count, invalid_log
               FROM game_state WHERE id=1""")
            r = cur.fetchone()
        if not r:
            return None
        keys = ("board", "moves_left", "moves_total", "score", "combo", "chain",
                "best", "over", "baseline", "updates", "hist", "eps", "dopa", "say",
                "move_count", "invalid_count", "invalid_log")
        d = dict(zip(keys, r))
        if isinstance(d.get("board"), str):
            d["board"] = json.loads(d["board"])
        if isinstance(d.get("hist"), str):
            d["hist"] = json.loads(d["hist"])
        if isinstance(d.get("invalid_log"), str):
            d["invalid_log"] = json.loads(d["invalid_log"])
        if not _valid_board(d.get("board")):
            return None
        return d
    except Exception:
        return None


class AsyncDb:
    """Non-blocking DB writer: submit() enqueues, a daemon thread executes.

    Usage:
        db = AsyncDb()            # connects+inits in background, fast-fail
        db.submit(save_readout, "live", policy, updates, avg, {"note": "x"})
        ...
        db.close()                # flush + stop (call on shutdown)
    If postgres is unreachable, every submit is a silent no-op.
    """

    def __init__(self, timeout: float = 2.0):
        self._q: queue.Queue = queue.Queue()
        self._stop = threading.Event()
        self._ready = threading.Event()
        self._conn = None
        self._th = threading.Thread(target=self._run, args=(timeout,), daemon=True)
        self._th.start()

    def _run(self, timeout):
        try:
            conn = connect(timeout)
            if conn is not None and init_schema(conn):
                self._conn = conn
                self._ready.set()
            else:
                try:
                    if conn is not None:
                        conn.close()
                except Exception:
                    pass
                return
            while not self._stop.is_set():
                try:
                    fn = self._q.get(timeout=0.2)
                except queue.Empty:
                    continue
                try:
                    fn(self._conn)
                except Exception:
                    pass
                finally:
                    try:
                        self._q.task_done()
                    except Exception:
                        pass
        except Exception:
            pass

    @property
    def live(self) -> bool:
        return self._ready.is_set()

    def submit(self, fn, *args, **kwargs):
        """Enqueue fn(conn, *args, **kwargs). Never raises, never blocks."""
        try:
            if self._stop.is_set():
                return False
            self._q.put_nowait(lambda conn: fn(conn, *args, **kwargs))
            return True
        except Exception:
            return False

    def close(self, drain: bool = True):
        try:
            if drain:
                deadline = time.time() + 5
                while not self._q.empty() and time.time() < deadline:
                    time.sleep(0.05)
            self._stop.set()
            if self._conn is not None:
                try:
                    self._conn.close()
                except Exception:
                    pass
        except Exception:
            pass


def load_boot_policy(policy, import_weights, from_scratch):
    """Boot priority: NEWEST artifact wins — DB-latest('live') vs baked JSON
    (compared by timestamp, so a retrain rebake correctly supersedes stale
    live weights). Falls back to random-init. Never raises."""
    if from_scratch:
        return "random-init(from-scratch)", 0
    db_ok, db_upd, db_ts = False, 0, ""
    try:
        conn = connect(2.0)
        if conn is not None:
            try:
                ok, upd, _avg, ts = load_latest_into(conn, "live", policy)
                if ok:
                    db_ok, db_upd, db_ts = True, int(upd), ts or ""
                    # hold a copy: JSON may still win below (newer bake)
                    import copy as _copy  # noqa
                    _saved = {k: getattr(policy, k).copy()
                              for k in ("W1", "b1", "W2", "b2", "Wprior")}
                else:
                    _saved = None
            finally:
                try:
                    conn.close()
                except Exception:
                    pass
    except Exception:
        db_ok, db_upd, db_ts, _saved = False, 0, "", None
    try:
        from flycrush_py.data import load_json
        ok, wdoc = load_json("readout-weights.json")
        if ok:
            ts = ((wdoc.get("meta") or {}).get("trainedAt")
                  or (wdoc.get("meta") or {}).get("savedAt") or "")
            if ts and db_ts and ts > db_ts:
                import_weights(policy, wdoc)  # fresher bake wins
                return "static-trained", 0
            if not db_ok:
                import_weights(policy, wdoc)
                return "static-trained", 0
            # DB row is newest (or undated bake): restore held DB weights
            import numpy as _np
            for k, v in _saved.items():
                _np.copyto(getattr(policy, k), v)
            return "postgres(live)", db_upd
    except Exception:
        pass
    if db_ok:
        import numpy as _np
        try:
            for k, v in _saved.items():
                _np.copyto(getattr(policy, k), v)
        except Exception:
            pass
        return "postgres(live)", db_upd
    return "random-init", 0


def maybe_autosave(async_db, name: str, policy, updates: int, avg50: float) -> bool:
    """Call after each learning update; persists every AUTOSAVE_EVERY.
    Cheap guard. Returns True when a save was submitted (for UI notes)."""
    try:
        if async_db is not None and updates > 0 and updates % AUTOSAVE_EVERY == 0:
            async_db.submit(save_readout, name, policy, updates, avg50,
                            {"autosave": True})
            return True
        return False
    except Exception:
        return False
