"""Game session: brain + board + live REINFORCE, no UI.

Owns the full turn: decide (eye->LIF->readout) -> apply -> stepwise eager
resolution (flash/pop/fall data for the frontend animator) -> learn.
The SAME math as flycrush_py.game, minus pygame. Thread-safe via external lock.
"""
from __future__ import annotations

import time

from flycrush_py.board import (
    DIRS, Rng, create_board, find_matches, find_valid_move,
    reshuffle, score_for_match, valid_dirs,
)
from flycrush_py.data import load_json
from flycrush_py.lif import create_network, decode_motor, reward_drive, step_network
from flycrush_py.rl import (
    cell_features, create_policy, export_weights, extract_features,
    import_weights, policy_act, shape_reward,
)
from flycrush_py.sensory import Eye

CELL_PX = 62
EPS_START, EPS_END, EPS_DECAY_N = 0.30, 0.08, 300
WORDS = {1: "Sweet!", 2: "Tasty!", 3: "Divine!", 4: "Sugar Crush!"}
_DV = {"up": (-1, 0), "down": (1, 0), "left": (0, -1), "right": (0, 1)}


class Session:
    def __init__(self, moves=25, from_scratch=False):
        self.moves_total = moves
        self.rng = Rng(99)
        self.refill = Rng(7)
        self.eye = Eye()
        self.baseline, self.updates, self.hist = 0.0, 0, []
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
        if not from_scratch:
            try:
                okw, wdoc = load_json("readout-weights.json")
                if okw:
                    import_weights(self.policy, wdoc)
                    self.prov = "static-trained"
            except Exception:
                pass
        else:
            self.prov = "random-init(from-scratch)"
        try:
            okr, rep = load_json("training-report.json")
            self.report = rep if okr else {}
        except Exception:
            pass
        self._transition = None
        self._last_t = time.time()
        self.new_game(moves)

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

    def _tick_dopa(self):
        now = time.time()
        self.dopa = max(0.0, self.dopa - (now - self._last_t) * 26)
        self._last_t = now

    # ---------- brain ----------
    def decide(self):
        try:
            vec, _ = self.eye.observe(self.board)
            for _ in range(4):
                step_network(self.net, vec, self.pam_drive)
                self.pam_drive *= 0.9
            dec = decode_motor(self.net)
            feat = extract_features(vec, dec, self.net.pam_hz)
            cf = cell_features(self.board)
            self.eps = EPS_END + (EPS_START - EPS_END) * max(0.0, 1.0 - self.updates / EPS_DECAY_N)
            act = policy_act(self.policy, feat, cf, self.rng, epsilon=self.eps)
            self._transition = {"feat": feat, "cf": cf, "cell": act["cell"], "di": act["di"]}
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
            self.baseline += 0.05 * (r - self.baseline)
            from flycrush_py.rl import reinforce_update
            reinforce_update(self.policy, st["feat"], st["cf"], st["cell"], st["di"],
                             r - self.baseline, 0.05)
            self.hist.append(r)
            if len(self.hist) > 600:
                self.hist = self.hist[-600:]
            self.updates += 1
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

    def _apply_and_resolve(self, cell, direction, learn):
        r1, c1 = divmod(cell, 8)
        d = _DV.get(direction)
        if d is None:
            return {"ok": False, "reason": "bad-dir"}
        r2, c2 = r1 + d[0], c1 + d[1]
        if not (0 <= r2 < 8 and 0 <= c2 < 8):
            return {"ok": False, "reason": "off-board"}
        self.board[r1][c1], self.board[r2][c2] = self.board[r2][c2], self.board[r1][c1]
        self.moves_left = max(0, self.moves_left - 1)
        self.combo = 1
        score0 = self.score
        steps, cascade, valid = [], 1, False
        m = find_matches(self.board)
        if not m:
            self.board[r1][c1], self.board[r2][c2] = self.board[r2][c2], self.board[r1][c1]
            self.combo, self.chain = 1, 0
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
            if learn:
                self._learn(self.score - score0)
            out = {"ok": True, "valid": True, "steps": steps}
        reshuffled = False
        if not find_valid_move(self.board):
            self.board = reshuffle(self.board, 5)["board"]
            reshuffled = True
        if self.moves_left <= 0:
            self.over = True
        out.update({"moves_left": self.moves_left, "score": self.score, "combo": self.combo,
                    "chain": self.chain, "best": self.best, "reshuffled": reshuffled,
                    "over": self.over, "board": [row[:] for row in self.board]})
        return out

    def fly_step(self):
        if self.moves_left <= 0 or self.over:
            return {"ok": False, "reason": "game-over"}
        self._tick_dopa()
        dec = self.decide()
        if not dec:
            return {"ok": False, "reason": "brain-error"}
        res = self._apply_and_resolve(dec["cell"], dec["dir"], learn=True)
        res["decision"] = dec
        res.update(self._pub())
        return res

    def human_move(self, cell, direction):
        if self.moves_left <= 0 or self.over:
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
        res = self._apply_and_resolve(cell, direction, learn=False)
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
                "avg50": round(avg, 3), "hist": [round(x, 3) for x in self.hist[-220:]],
                "rates": acts, "say": self.say}

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
        self.prov = "live-trained(saved)"
        return {"ok": True, "updates": self.updates}
