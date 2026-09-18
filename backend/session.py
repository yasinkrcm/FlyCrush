"""Game session: brain + board + live REINFORCE, no UI.

Owns the full turn: decide (eye->LIF->readout) -> apply -> stepwise eager
resolution (flash/pop/fall data for the frontend animator) -> learn.
The SAME math as flycrush_py.game, minus pygame. Thread-safe via external lock.
"""
from __future__ import annotations

import threading
import time

from flycrush_py.board import (
    DIRS, Rng, create_board, find_matches, find_valid_move,
    reshuffle, score_for_match, try_action, valid_dirs,
)
from flycrush_py.data import load_json
from flycrush_py.db import AsyncDb, load_boot_policy, maybe_autosave, save_readout
from flycrush_py.rl import (
    create_policy, export_weights, extract_features,
    import_weights, pair_features, policy_act, reinforce_update, shape_reward,
)
from flycrush_py.lif import create_network, decode_motor, reset_network, reward_drive, step_network
from flycrush_py.sensory import Eye

CELL_PX = 62
EPS_START, EPS_END, EPS_DECAY_N = 0.15, 0.06, 300  # pretrained brain: light exploration from boot
WORDS = {1: "Sweet!", 2: "Tasty!", 3: "Divine!", 4: "Sugar Crush!"}
_DV = {"up": (-1, 0), "down": (1, 0), "left": (0, -1), "right": (0, 1)}


class Session:
    def __init__(self, moves=None, from_scratch=False):
        self.moves_total = moves  # None = unlimited
        self.rng = Rng(99)
        self.refill = Rng(7)
        self.eye = Eye()
        self.baseline, self.updates, self.hist = 0.0, 0, []
        self.saved_updates = 0
        self.move_count, self.invalid_count = 0, 0
        self._invalid_log = []
        self.eps = EPS_START  # decays toward EPS_END as updates accumulate
        self.prov = "random-init"
        self.report = {}
        ok, doc = load_json("connectome-subset.json")
        self.subset = doc if ok else {"neurons": [], "weights": [], "decoders": {}}
        self.net = create_network(self.subset)
        self.idx_of = {}
        try:
            self.idx_of = {n["id"]: i for i, n in enumerate(self.subset.get("neurons", []))}
        except Exception:
            pass
        self.policy = create_policy(1337)
        self._adb = AsyncDb()
        if not from_scratch:
            self.prov, db_upd = load_boot_policy(self.policy, import_weights, False)
            self.updates = int(db_upd)
        else:
            self.prov = "random-init(from-scratch)"
        try:
            okr, rep = load_json("training-report.json")
            self.report = rep if okr else {}
        except Exception:
            pass
        self._transition = None
        self._last_t = time.time()
        self._job_lock = threading.Lock()
        self.train_lock = threading.Lock()  # serializes policy/updates writers (live + turbo)
        self._job = {"running": False, "done": 0, "total": 0, "avg": 0.0, "curve": []}
        # spike accounting sets (rebuilt indexes into net arrays)
        try:
            self._idx_optic = list(map(int, self.net.optic))
            self._idx_desc = list(map(int, self.net.col + self.net.row + self.net.gate
                                      + list(self.net.dir_idx.values())))
            self._idx_pam = list(map(int, self.net.pam))
            _desc_set = set(self._idx_desc)
            self._idx_mod = [i for i in range(self.net.n)
                             if i not in set(self._idx_optic) and i not in _desc_set
                             and i not in set(self._idx_pam)]
        except Exception:
            self._idx_optic, self._idx_desc, self._idx_pam, self._idx_mod = [], [], [], []
        self._last_spikes = {"optic": 0, "desc": 0, "pam": 0, "mod": 0}
        self._move_log = []   # last 60 moves: {cell, di, r, gained, o, d, p}
        self._last_move = None
        self.new_game(moves)
        # refresh-proof boot: restore last persisted game (board+score+curve)
        try:
            from flycrush_py.db import connect as _connect, load_game_state as _load_gs
            _c = _connect(2.0)
            if _c is not None:
                try:
                    _gs = _load_gs(_c)
                    if _gs and self.restore_state(_gs):
                        self.say = "restored autosave — refresh-proof"
                finally:
                    try:
                        _c.close()
                    except Exception:
                        pass
        except Exception:
            pass

    # ---------- helpers ----------
    def _dec_public(self):
        d = self.dec
        return {"L": d["L"], "R": d["R"], "gate": round(d["gate"], 3), "dir": d["dir"],
                "dirs": {k: round(v, 3) for k, v in d["dirs"].items()}}

    def new_game(self, moves=None):
        if moves:
            self.moves_total = moves
        self.board = create_board(int(time.time() * 1000) % 100000 or 1)
        if not find_valid_move(self.board):
            self.board = reshuffle(self.board, 5)["board"]
        self.moves_left = self.moves_total
        self.score, self.combo, self.chain, self.best = 0, 1, 0, 0
        self.dopa, self.pam_drive, self.active = 0.0, 0.0, 0
        self.dec = {"L": 0, "R": 0, "gate": 0.0, "dir": "up",
                    "dirs": {"up": 0.0, "down": 0.0, "left": 0.0, "right": 0.0}}
        self.say = "the fly plays"
        self.over = False
        self.eye.reset()
        self._transition = None
        self._last_t = time.time()
        self._persist_game_state(force=True)

    def snapshot_state(self) -> dict:
        """Serializable full game snapshot for postgres persistence."""
        try:
            return {"board": [row[:] for row in self.board], "moves_left": self.moves_left,
                    "moves_total": self.moves_total, "score": int(self.score),
                    "combo": int(self.combo), "chain": int(self.chain), "best": int(self.best),
                    "over": bool(self.over), "baseline": float(self.baseline),
                    "updates": int(self.updates), "hist": [float(x) for x in self.hist[-600:]],
                    "eps": float(self.eps), "dopa": float(self.dopa),
                    "say": str(self.say)[:200], "move_count": int(self.move_count),
                    "invalid_count": int(self.invalid_count),
                    "invalid_log": [dict(e) for e in self._invalid_log[-12:]]}
        except Exception:
            return {}

    def restore_state(self, d: dict) -> bool:
        """Apply a validated persisted snapshot. Never raises, never half-applies."""
        try:
            from flycrush_py.db import _valid_board
            if not _valid_board(d.get("board")):
                return False
            board = [row[:] for row in d["board"]]
            score = int(d.get("score", 0))
            combo = max(1, int(d.get("combo", 1)))
            chain = max(0, int(d.get("chain", 0)))
            best = max(0, int(d.get("best", 0)))
            ml = d.get("moves_left")
            mt = d.get("moves_total")
            baseline = float(d.get("baseline", 0.0))
            updates = max(0, int(d.get("updates", 0)))
            hist = [float(x) for x in (d.get("hist") or [])][-600:]
            eps = min(1.0, max(0.0, float(d.get("eps", 0.3))))
            dopa = max(0.0, float(d.get("dopa", 0.0)))
            mc = max(0, int(d.get("move_count", 0)))
            ic = max(0, int(d.get("invalid_count", 0)))
            il = d.get("invalid_log") or []
            il = [e for e in il if isinstance(e, dict)][:12]
            self.board = board
            self.moves_left, self.moves_total = ml, mt
            self.score, self.combo, self.chain, self.best = score, combo, chain, best
            self.over = bool(d.get("over", False))  # exact snapshot: over stays over
            self.baseline, self.updates, self.hist = baseline, updates, hist
            self.eps, self.dopa = eps, dopa
            self.move_count, self.invalid_count, self._invalid_log = mc, ic, il
            self.say = str(d.get("say", ""))[:200] or "restored autosave — refresh-proof"
            self.eye.reset()
            return True
        except Exception:
            return False

    def _persist_game_state(self, force=False):
        try:
            import time as _t
            now = _t.time()
            if not force and now - getattr(self, "_last_gs", 0) < 2.0:
                return
            self._last_gs = now
            snap = self.snapshot_state()
            if snap:
                from flycrush_py.db import save_game_state as _sgs
                self._adb.submit(_sgs, snap)
        except Exception:
            pass

    def _tick_dopa(self):
        now = time.time()
        self.dopa = max(0.0, self.dopa - (now - self._last_t) * 26)
        self._last_t = now

    # ---------- brain ----------
    def decide(self):
        try:
            # fresh perception per move (matches training: reset state, 4 LIF steps)
            self.eye.reset()
            reset_network(self.net)
            vec, _ = self.eye.observe(self.board)
            so = sd = sp = sm = 0
            for _ in range(4):
                step_network(self.net, vec, self.pam_drive)
                try:
                    spk = self.net.spikes
                    if self._idx_optic:
                        so += int(spk[self._idx_optic].sum())
                    if self._idx_desc:
                        sd += int(spk[self._idx_desc].sum())
                    if self._idx_pam:
                        sp += int(spk[self._idx_pam].sum())
                    if self._idx_mod:
                        sm += int(spk[self._idx_mod].sum())
                except Exception:
                    pass
            self.pam_drive *= 0.88
            self._last_spikes = {"optic": so, "desc": sd, "pam": sp, "mod": sm}
            self._last_in_energy = round(float(abs(vec).sum()), 2)
            dec = decode_motor(self.net)
            feat = extract_features(vec, dec, self.net.pam_hz)
            pf = pair_features(self.board)
            self.eps = EPS_END + (EPS_START - EPS_END) * max(0.0, 1.0 - self.updates / EPS_DECAY_N)
            act = policy_act(self.policy, feat, pf, self.rng, epsilon=self.eps)
            self._transition = {"feat": feat, "pf": pf, "cell": act["cell"], "di": act["di"]}
            self.dec = {"L": act["cell"] % 8, "R": act["cell"] // 8, "gate": act["gate"],
                        "dir": act["dir"], "dirs": dec["dirs"]}
            self.active = 900 + int((act["gate"] or 0) * 360)
            self.dopa = max(self.dopa, self.net.pam_hz or 0.0)
            return {"cell": act["cell"], "dir": act["dir"], **self._dec_public()}
        except Exception:
            return None

    def _learn(self, gained):
        try:
            st = self._transition
            self._transition = None
            if not st:
                return 0.0
            r = shape_reward({"ok": gained > 0, "score": gained})
            with self.train_lock:
                self.baseline += 0.05 * (r - self.baseline)
                from flycrush_py.rl import reinforce_update
                reinforce_update(self.policy, st["feat"], st["pf"], st["cell"], st["di"],
                                 r - self.baseline, 0.05)
                self.hist.append(r)
                if len(self.hist) > 600:
                    self.hist = self.hist[-600:]
                self.updates += 1
            recent = self.hist[-50:]
            if maybe_autosave(self._adb, "live", self.policy, self.updates,
                              sum(recent) / len(recent)):
                self.saved_updates = self.updates
            try:  # move log: what fired, what was chosen, what it earned
                sp = self._last_spikes
                rec = {"n": int(self.move_count), "cell": int(st["cell"]), "di": int(st["di"]),
                       "r": round(float(r), 3), "gained": int(gained),
                       "o": int(sp.get("optic", 0)), "d": int(sp.get("desc", 0)),
                       "p": int(sp.get("pam", 0))}
                self._move_log.append(rec)
                if len(self._move_log) > 60:
                    self._move_log = self._move_log[-60:]
                self._last_move = dict(rec, in_energy=getattr(self, "_last_in_energy", 0.0),
                                       eps=round(self.eps, 3), updates=int(self.updates))
            except Exception:
                pass
            return r
        except Exception:
            return 0.0

    # ---------- resolution (eager, stepwise) ----------
    def _collapse(self, matched):
        falls = {}
        for c in range(8):
            kept = [(r, self.board[r][c]) for r in range(7, -1, -1) if (r, c) not in matched]
            need = 8 - len(kept)
            newvals = [self.refill.randint(6) for _ in range(need)]
            col = kept + [(None, v) for v in newvals]
            for i, (ro, v) in enumerate(col):
                r = 7 - i
                self.board[r][c] = v
                oy0 = -need * CELL_PX if ro is None else (ro - r) * CELL_PX
                if oy0:
                    falls[f"{r},{c}"] = oy0
        return falls

    def _apply_and_resolve(self, cell, direction, learn, via="fly"):
        r1, c1 = divmod(cell, 8)
        d = _DV.get(direction)
        if d is None:
            return {"ok": False, "reason": "bad-dir"}
        r2, c2 = r1 + d[0], c1 + d[1]
        if not (0 <= r2 < 8 and 0 <= c2 < 8):
            return {"ok": False, "reason": "off-board"}
        self.board[r1][c1], self.board[r2][c2] = self.board[r2][c2], self.board[r1][c1]
        if self.moves_left is not None:
            self.moves_left = max(0, self.moves_left - 1)
        self.move_count += 1
        self.combo = 1
        score0 = self.score
        steps, cascade, valid = [], 1, False
        m = find_matches(self.board)
        if not m:
            self.board[r1][c1], self.board[r2][c2] = self.board[r2][c2], self.board[r1][c1]
            self.combo, self.chain = 1, 0
            self.invalid_count += 1
            self._invalid_log.append({"n": self.move_count, "L": c1, "R": r1,
                                      "dir": direction, "via": via})
            if len(self._invalid_log) > 12:
                self._invalid_log = self._invalid_log[-12:]
            if learn:
                self._learn(0)
            out = {"ok": False, "reason": "no-match", "valid": False}
        else:
            valid = True
            for _ in range(12):  # cascade cap
                m = find_matches(self.board)
                if not m:
                    break
                removed = len(m)
                pts = score_for_match(removed) * cascade
                self.score += pts
                self.combo = cascade
                self.chain += 1
                self.best = max(self.best, self.chain)
                spike = 90 if removed >= 5 else 60 if removed == 4 else 38
                self.dopa = min(120.0, self.dopa + spike)
                matched = [[r, c] for r, c in m]
                falls = self._collapse(set(m))
                steps.append({"matched": matched, "gained": pts, "cascade": cascade,
                              "word": WORDS.get(min(cascade, 4), "Sweet!"),
                              "falls": falls, "board": [row[:] for row in self.board]})
                cascade += 1
                try:
                    self.pam_drive = min(2.0, self.pam_drive + reward_drive(len(matched)))
                except Exception:
                    pass
            if learn:
                self._learn(self.score - score0)
            out = {"ok": True, "valid": True, "steps": steps}
        reshuffled = False
        if not find_valid_move(self.board):
            self.board = reshuffle(self.board, 5)["board"]
            reshuffled = True
        if self.moves_left is not None and self.moves_left <= 0:
            self.over = True
            try:  # game over = checkpoint: persist, no key needed
                recent = self.hist[-50:]
                self._adb.submit(save_readout, "live", self.policy, self.updates,
                                 sum(recent) / len(recent) if recent else 0.0,
                                 {"checkpoint": "game-over"})
                self.saved_updates = self.updates
            except Exception:
                pass
        out.update({"moves_left": self.moves_left, "score": self.score, "combo": self.combo,
                    "chain": self.chain, "best": self.best, "reshuffled": reshuffled,
                    "over": self.over, "board": [row[:] for row in self.board]})
        return out

    def fly_step(self):
        if self.over or (self.moves_left is not None and self.moves_left <= 0):
            return {"ok": False, "reason": "game-over"}
        self._tick_dopa()
        dec = self.decide()
        if not dec:
            return {"ok": False, "reason": "brain-error"}
        res = self._apply_and_resolve(dec["cell"], dec["dir"], learn=True)
        res["decision"] = dec
        self._persist_game_state()
        res.update(self._pub())
        return res

    def human_move(self, cell, direction):
        if self.over or (self.moves_left is not None and self.moves_left <= 0):
            return {"ok": False, "reason": "game-over"}
        try:
            cell = int(cell)
            r1, c1 = divmod(cell, 8)
            d = _DV.get(direction)
            if not d or not (0 <= r1 + d[0] < 8 and 0 <= c1 + d[1] < 8):
                return {"ok": False, "reason": "not-adjacent"}
        except Exception:
            return {"ok": False, "reason": "bad-input"}
        self._tick_dopa()
        self._transition = None  # human move: no policy transition to learn from
        res = self._apply_and_resolve(cell, direction, learn=False, via="human")
        if res.get("valid"):
            try:
                gained = sum(int(s.get("gained", 0)) for s in res.get("steps", []))
                di = {"up": 0, "down": 1, "left": 2, "right": 3}.get(direction, 0)
                self._move_log.append({"n": int(self.move_count), "cell": int(cell),
                                       "di": int(di), "r": 0.0, "gained": int(gained),
                                       "o": 0, "d": 0, "p": 0})
                if len(self._move_log) > 60:
                    self._move_log = self._move_log[-60:]
            except Exception:
                pass
        self._persist_game_state()
        res.update(self._pub())
        return res

    def _pub(self):
        recent = self.hist[-50:]
        avg = sum(recent) / len(recent) if recent else 0.0
        acts = []
        try:
            rates = self.net.rate
            top = sorted(range(len(rates)), key=lambda i: -rates[i])[:200]
            acts = [[int(i), round(float(rates[i]), 3)] for i in top if rates[i] > 0.08]
        except Exception:
            pass
        return {"dec": self._dec_public(), "dopa": round(self.dopa, 1), "active": self.active,
                "prov": self.prov, "eps": round(self.eps, 3), "updates": self.updates,
                "saved": self.saved_updates, "job": self._job_snapshot(),
                "invalid": {"count": self.invalid_count, "moves": self.move_count,
                            "rate": round(self.invalid_count / max(1, self.move_count), 3),
                            "recent": list(self._invalid_log[-8:])},
                "layers": dict(self._last_spikes),
                "trace": list(self._move_log[-40:]),
                "last": dict(self._last_move) if self._last_move else None,
                "avg50": round(avg, 3), "hist": [round(x, 3) for x in self.hist[-220:]],
                "rates": acts, "say": self.say}

    # ---------- turbo training (headless, SAME decide/learn code as visible play) ----------
    def start_turbo(self, episodes=200):
        try:
            n = max(1, min(2000, int(episodes)))
        except Exception:
            n = 200
        with self._job_lock:
            if self._job.get("running"):
                return {"ok": False, "reason": "already-running", "job": self._job_snapshot()}
            self._job = {"running": True, "done": 0, "total": n, "avg": 0.0, "curve": []}
        threading.Thread(target=self._turbo_run, args=(n,), daemon=True).start()
        return {"ok": True, "job": self._job_snapshot()}

    def _job_snapshot(self):
        try:
            with self._job_lock:
                return dict(self._job, curve=list(self._job.get("curve", [])))
        except Exception:
            return {"running": False, "done": 0, "total": 0, "avg": 0.0, "curve": []}

    def _turbo_run(self, n):
        # NO oracle anywhere: inputs are sensory+LIF+raw tiles only.
        # try_action/find_valid_move are the GAME RULES (environment), never policy inputs.
        try:
            scores = []
            for e in range(n):
                board = create_board(self.rng.randint(1 << 30) or 1)
                eye, net, pam = Eye(), create_network(self.subset), 0.0
                total = 0
                for m in range(25):
                    if not find_valid_move(board):
                        board = reshuffle(board, e * 131 + m)["board"]
                    eye.reset()
                    reset_network(net)
                    vec, _ = eye.observe(board)
                    for _ in range(4):
                        step_network(net, vec, pam)
                        pam *= 0.9
                    dec = decode_motor(net)
                    feat = extract_features(vec, dec, net.pam_hz)
                    pf = pair_features(board)
                    with self.train_lock:
                        self.eps = EPS_END + (EPS_START - EPS_END) * max(0.0, 1.0 - self.updates / EPS_DECAY_N)
                        act = policy_act(self.policy, feat, pf, self.rng, epsilon=self.eps)
                        res = try_action(board, act["cell"], act["dir"], self.rng)
                        r = shape_reward(res)
                        if res["ok"]:
                            board = res["board"]
                            total += res["score"]
                        self.baseline += 0.05 * (r - self.baseline)
                        reinforce_update(self.policy, feat, pf, act["cell"], act["di"],
                                         r - self.baseline, 0.05)
                        self.hist.append(r)
                        if len(self.hist) > 600:
                            self.hist = self.hist[-600:]
                        self.updates += 1
                    recent = self.hist[-50:]
                    maybe_autosave(self._adb, "live", self.policy, self.updates,
                                   sum(recent) / len(recent))
                scores.append(total)
                if (e + 1) % 5 == 0 or e == n - 1:
                    avg = sum(scores[-5:]) / min(5, len(scores))
                    with self._job_lock:
                        self._job["done"] = e + 1
                        self._job["avg"] = round(avg, 1)
                        self._job["curve"].append(round(avg, 1))
                        if len(self._job["curve"]) > 120:
                            self._job["curve"] = self._job["curve"][-120:]
            try:
                recent = self.hist[-50:]
                self._adb.submit(save_readout, "live", self.policy, self.updates,
                                 sum(recent) / len(recent) if recent else 0.0,
                                 {"checkpoint": "turbo-end"})
                self.saved_updates = self.updates
            except Exception:
                pass
        except Exception:
            pass
        finally:
            try:
                self._persist_game_state(force=True)  # turbo progress survives refresh
                with self._job_lock:
                    self._job["running"] = False
            except Exception:
                pass

    def snapshot(self):
        self._tick_dopa()
        return {"board": [row[:] for row in self.board], "moves_left": self.moves_left,
                "moves_total": self.moves_total, "score": self.score, "combo": self.combo,
                "chain": self.chain, "best": self.best, "over": self.over, **self._pub()}

    def save(self):
        import datetime
        import json
        import os
        from flycrush_py.data import data_dir
        doc = export_weights(self.policy, {"liveTrained": True, "updates": self.updates,
                                           "savedAt": datetime.datetime.now(datetime.timezone.utc).isoformat()})
        with open(os.path.join(data_dir(), "readout-weights.json"), "w") as fh:
            json.dump(doc, fh)
        try:
            recent = self.hist[-50:]
            self._adb.submit(save_readout, "live", self.policy, self.updates,
                             sum(recent) / len(recent) if recent else 0.0,
                             {"manualSave": True})
        except Exception:
            pass
        self._persist_game_state(force=True)
        self.prov = "live-trained(saved)"
        self.saved_updates = self.updates
        return {"ok": True, "updates": self.updates}
