#!/usr/bin/env python3
"""FLYCRUSH — a fruit-fly connectome plays Candy Crush. pygame edition.

The fly plays, you watch (or click two adjacent candies to cut in).

    ./.venv/bin/python -m flycrush_py.game [--moves 25] [--speed 1.0]
    ./.venv/bin/python -m flycrush_py.game --smoke 300   # headless crash test
    ./.venv/bin/python -m flycrush_py.game --shot /tmp/fly.png  # save 1 frame

Keys: SPACE play/pause · N one fly move · R reset · M manual/auto · Q quit.
Data: same static JSON as the web build (offline). Missing files -> labeled
fallback brain, game always runs.
"""
from __future__ import annotations

import argparse
import math
import os
import sys
import time

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

try:
    import pygame
except ImportError:
    print("pygame-ce required: ./venv/bin/pip install -r flycrush_py/requirements.txt", file=sys.stderr)
    raise SystemExit(2)

import numpy as np

from flycrush_py.board import (  # noqa: E402
    DIRS, Rng, create_board, find_matches, find_valid_move,
    reshuffle, score_for_match,
)
from flycrush_py.data import load_json  # noqa: E402
from flycrush_py.lif import create_network, decode_motor, reset_network, reward_drive, step_network  # noqa: E402
from flycrush_py.rl import (  # noqa: E402
    create_policy, export_weights, extract_features,
    import_weights, pair_features, policy_act, reinforce_update, shape_reward,
)
from flycrush_py.data import data_dir  # noqa: E402

EPS_START, EPS_END, EPS_DECAY_N = 0.15, 0.06, 300  # pretrained brain: light exploration from boot
from flycrush_py.sensory import Eye  # noqa: E402

W, H = 1120, 740
CELL = 62
BX, BY = 40, 130  # board origin
RX = 600  # right column x

CANDY = [
    ((255, 107, 107), "circle"),
    ((255, 179, 71), "square"),
    ((124, 255, 107), "diamond"),
    ((86, 216, 255), "hex"),
    ((199, 146, 234), "star"),
    ((255, 95, 210), "drop"),
]
BG_TOP, BG_BOT = (43, 27, 77), (255, 159, 243)
CREAM, INK, DIM = (255, 248, 235), (58, 30, 90), (150, 120, 170)
WORDS = {1: "Sweet!", 2: "Tasty!", 3: "Divine!", 4: "Sugar Crush!"}
_DV = {"up": (-1, 0), "down": (1, 0), "left": (0, -1), "right": (0, 1)}


def _rr(surf, rect, color, radius=14, width=0):
    try:
        pygame.draw.rect(surf, color, rect, width, border_radius=radius)
    except Exception:
        pygame.draw.rect(surf, color, rect, width)


def _poly_points(kind, x, y, r, k=1.0):
    r *= k
    if kind == "diamond":
        return [(x, y - r), (x + r, y), (x, y + r), (x - r, y)]
    if kind == "hex":
        return [(x + r * math.cos(math.pi / 3 * i), y + r * math.sin(math.pi / 3 * i)) for i in range(6)]
    if kind == "star":
        pts = []
        for i in range(10):
            rr = r if i % 2 == 0 else r * 0.45
            a = -math.pi / 2 + i * math.pi / 5
            pts.append((x + rr * math.cos(a), y + rr * math.sin(a)))
        return pts
    return None


def _draw_shape(s, kind, x, y, r, color):
    """Filled candy silhouette at radius r."""
    if kind == "circle":
        pygame.draw.circle(s, color, (int(x), int(y)), max(1, int(r)))
    elif kind == "square":
        _rr(s, (x - r, y - r, r * 2, r * 2), color, max(2, int(r) // 3))
    elif kind == "drop":
        pygame.draw.circle(s, color, (int(x), int(y + 2)), max(1, int(r - 1)))
        pygame.draw.polygon(s, color, [(x - r + 4, y), (x + r - 4, y), (x, y - r - 4)])
    else:
        pts = _poly_points(kind, x, y, r)
        if pts:
            pygame.draw.polygon(s, color, pts)


def draw_candy(surf, cx, cy, r, kind, color, scale=1.0, alpha=255):
    """Jelly candy: shadow + dark edge + glossy body + specular dot."""
    r = max(3, int(r * scale))
    W = H = r * 2 + 12
    s = pygame.Surface((W, H + 8), pygame.SRCALPHA)
    x, y = W // 2, H // 2
    dark = tuple(max(0, c - 70) for c in color)
    lite = tuple(min(255, c + 80) for c in color)
    # drop shadow (depth on the cream board)
    pygame.draw.ellipse(s, (20, 8, 30, 90), (x - r * 0.75, y + r * 0.62, r * 1.5, r * 0.5))
    # body: dark edge, base, top-light core
    _draw_shape(s, kind, x, y, r, dark)
    _draw_shape(s, kind, x, y - 1, r * 0.86, color)
    _draw_shape(s, kind, x - r * 0.06, y - r * 0.16, r * 0.62, lite)
    # bottom bounce shade (skip star: concave notch would poke out)
    if kind != "star":
        sh = pygame.Surface((W, H + 8), pygame.SRCALPHA)
        pygame.draw.ellipse(sh, (*dark, 110), (x - r * 0.5, y + r * 0.18, r, r * 0.55))
        s.blit(sh, (0, 0))
    # specular dot: tight white pop near top-left
    pygame.draw.circle(s, (255, 255, 255, 235), (int(x - r * 0.18), int(y - r * 0.24)), max(1, int(r * 0.15)))
    pygame.draw.circle(s, (255, 255, 255, 160), (int(x - r * 0.30), int(y - r * 0.05)), max(1, int(r * 0.07)))
    if alpha < 255:
        s.set_alpha(alpha)
    surf.blit(s, (cx - W // 2, cy - H // 2))


def draw_fly(surf, x, y, look=(0, 0), happy=0.0):
    """Cute fly avatar. Pupils track `look`; smile scales with `happy`."""
    wing = pygame.Surface((110, 70), pygame.SRCALPHA)
    pygame.draw.ellipse(wing, (255, 255, 255, 150), (4, 6, 46, 30))
    pygame.draw.ellipse(wing, (255, 255, 255, 150), (60, 6, 46, 30))
    surf.blit(wing, (x - 55, y - 52))
    pygame.draw.ellipse(surf, (70, 70, 90), (x - 26, y - 22, 52, 48))
    pygame.draw.ellipse(surf, (95, 95, 115), (x - 18, y - 14, 36, 32))
    for ex in (-13, 13):
        pygame.draw.circle(surf, (255, 255, 255), (x + ex, y - 6), 11)
        pygame.draw.circle(surf, (30, 10, 40), (x + ex + look[0], y - 6 + look[1]), 5)
        pygame.draw.circle(surf, (255, 255, 255), (x + ex + look[0] + 1, y - 7 + look[1]), 2)
    smile = max(0.2, happy)
    pygame.draw.arc(surf, INK, (x - 12, y + 4, 24, int(10 + 8 * smile)), math.pi * 1.15, math.pi * 1.85, 2)


class Game:
    def __init__(self, moves=None, speed=1.0, from_scratch=False):
        self.moves, self.moves_left = moves, moves  # None = unlimited, never game-over
        self.score, self.combo, self.chain, self.best = 0, 1, 0, 0
        self.board = create_board(20260916)
        self.rng = Rng(99)
        self.refill = Rng(7)
        self.eye = Eye()
        self.playing, self.over, self.manual = False, False, False
        self.speed = speed
        self.phase, self.phase_t = "idle", 0.0
        self.pending = None  # decided action awaiting animation
        self.flash = []      # cells flashing
        self.floats = []     # floating texts
        self.sel = None
        self.dec = {"L": 0, "R": 0, "gate": 0.0, "dir": "up",
                    "dirs": {"up": 0, "down": 0, "left": 0, "right": 0}}
        self.dopa, self.pam_drive, self.active = 0.0, 0.0, 0
        self.says, self.say_t = "press SPACE — the fly plays", 99.0
        self.aim_t = 0.0
        # animated resolver state (Candy Crush feel: flash -> pop -> fall -> cascade)
        self.falls, self.pops, self._matched = {}, set(), set()
        self.cascade = 1
        self.particles = []
        self.reject_cells, self.reject_t = set(), 99.0  # wrong-move ghost: stays visible
        self.trail_cells, self.trail_t = set(), 99.0  # valid-move trail: every move visible
        self._cell, self._dir = -1, "up"
        # live learning state (updates every brain move, visible on screen)
        self.score_at_start = 0
        self.baseline, self.updates = 0.0, 0
        self.eps = EPS_START
        self.saved_updates = 0  # last update count persisted (autosave, no key needed)
        self.move_count, self.invalid_count = 0, 0
        self.hist = []
        self._last_step = None
        self.prov = "random-init"
        self.report = {}
        # --- neural stack (guarded; game runs regardless) ---
        try:
            ok, doc = load_json("connectome-subset.json")
            self.net = create_network(doc) if ok else create_network({})
            self.cloud = doc.get("renderCloud", []) if ok else []
            self.dec_ids = doc.get("decoders", {}) if ok else {}
            self.idx_of = {n["id"]: i for i, n in enumerate(doc.get("neurons", []))} if ok else {}
        except Exception:
            self.net, self.cloud, self.dec_ids, self.idx_of = create_network({}), [], {}, {}
        from flycrush_py.db import AsyncDb, load_boot_policy, maybe_autosave  # noqa
        self._adb = AsyncDb()
        self.policy = create_policy(1337)
        self.prov, db_upd = load_boot_policy(self.policy, import_weights, from_scratch)
        self.updates = int(db_upd)
        if from_scratch:
            self.say("blank brain — learning live, S saves", happy=0.5)
        try:
            ok, rep = load_json("training-report.json")
            self.report = rep if ok else {}
        except Exception:
            self.report = {}
        self._static_brain = {}  # pre-rendered clouds per view

    # ---------------- brain ----------------
    def brain_decide(self):
        try:
            # fresh perception per move (matches training: reset state, 4 LIF steps)
            self.eye.reset()
            reset_network(self.net)
            vec, _ = self.eye.observe(self.board)
            for _ in range(4):
                step_network(self.net, vec, self.pam_drive)
            self.pam_drive *= 0.88
            dec = decode_motor(self.net)
            feat = extract_features(vec, dec, self.net.pam_hz)
            pf = pair_features(self.board)
            self.eps = EPS_END + (EPS_START - EPS_END) * max(0.0, 1.0 - self.updates / EPS_DECAY_N)
            act = policy_act(self.policy, feat, pf, self.rng, epsilon=self.eps)
            self._last_step = {"feat": feat, "pf": pf, "cell": act["cell"], "di": act["di"]}
            self.dec = {"L": act["cell"] % 8, "R": act["cell"] // 8, "gate": act["gate"],
                        "dir": act["dir"], "dirs": dec["dirs"]}
            self.active = 900 + int((act["gate"] or 0) * 360)
            self.dopa = max(self.dopa, self.net.pam_hz or 0.0)
            return act
        except Exception:
            return None

    def start_move(self, cell, direction):
        """Commit a swap: decrement move (if limited), apply logically, slide. Resolver takes over."""
        try:
            if (self.moves_left is not None and self.moves_left <= 0) or self.over or self.phase not in ("idle", "aim"):
                return False
            r1, c1 = divmod(cell, 8)
            d = _DV.get(direction)
            if d is None:
                return False
            r2, c2 = r1 + d[0], c1 + d[1]
            if not (0 <= r2 < 8 and 0 <= c2 < 8):
                return False
            self.board[r1][c1], self.board[r2][c2] = self.board[r2][c2], self.board[r1][c1]
            self._cell, self._dir = cell, direction
            if self.moves_left is not None:
                self.moves_left = max(0, self.moves_left - 1)
            self.move_count += 1
            self.combo, self.cascade = 1, 1
            self.score_at_start = self.score
            self.phase, self.phase_t = "swap", 0.0
            return True
        except Exception:
            return False

    def _check_end(self):
        """Shared end-of-move bookkeeping for BOTH resolve paths."""
        try:
            if not find_valid_move(self.board):
                self.board = reshuffle(self.board, 5)["board"]
                self.say("no moves — shuffled!", happy=0.3)
            if self.moves_left is not None and self.moves_left <= 0:
                self.over, self.playing = True, False
                self.say(f"game over · {self.score} pts", happy=0.5)
                try:  # game over = natural checkpoint: persist, no key needed
                    from flycrush_py.db import save_readout  # noqa
                    recent = self.hist[-50:]
                    self._adb.submit(save_readout, "live", self.policy, self.updates,
                                     sum(recent) / len(recent) if recent else 0.0,
                                     {"checkpoint": "game-over"})
                    self.saved_updates = self.updates
                except Exception:
                    pass
                return True
            return False
        except Exception:
            return False

    def _resolve_step(self, first):
        """One cascade step: match -> flash, else revert (first) or finish."""
        try:
            m = find_matches(self.board)
            if not m:
                if first:
                    r1, c1 = divmod(self._cell, 8)
                    d = _DV[self._dir]
                    self.board[r1][c1], self.board[r1 + d[0]][c1 + d[1]] = \
                        self.board[r1 + d[0]][c1 + d[1]], self.board[r1][c1]
                    self.combo, self.chain = 1, 0
                    self.invalid_count += 1
                    # explicit REJECTION mark (red × at swap midpoint) so invalid
                    # can never be mistaken for approval
                    mx = BX + (2 * c1 + d[1]) / 2 * CELL + CELL / 2
                    my = BY + (2 * r1 + d[0]) / 2 * CELL + CELL / 2
                    self.floats.append({"x": mx, "y": my, "txt": "×", "t": 0.0,
                                        "big": True, "col": (255, 95, 95)})
                    self.reject_cells = {(r1, c1), (r1 + d[0], c1 + d[1])}
                    self.reject_t = 0.0
                    self._learn_from_move()  # negative feedback: failed exploration still teaches
                    if not self._check_end():
                        self.say("Hmm… no match", happy=0.1)
                    self.phase, self.phase_t = "swapback", 0.0
                else:
                    self._finish_move()
                return
            removed = len(m)
            pts = score_for_match(removed) * self.cascade
            self.score += pts
            self.combo = self.cascade
            self.chain += 1
            self.best = max(self.best, self.chain)
            spike = 90 if removed >= 5 else 60 if removed == 4 else 38
            self.dopa = min(120.0, self.dopa + spike)
            try:
                self.pam_drive = min(2.0, self.pam_drive + reward_drive(removed))
            except Exception:
                pass
            self.say(f"{WORDS.get(min(self.cascade, 4), 'Sweet!')} +{pts}", happy=1.0) if False else self.say(f"{WORDS.get(min(self.cascade, 4), 'Sweet!')} +{pts}", happy=1.0)
            cr = sum(r for r, _ in m) / removed
            cc = sum(c for _, c in m) / removed
            self.floats.append({"x": BX + cc * CELL + CELL / 2, "y": BY + cr * CELL,
                                "txt": f"+{pts}", "t": 0.0})
            self._matched = set(m)
            try:  # green trail on the swapped pair: every valid move stays visible
                r1, c1 = divmod(self._cell, 8)
                d = _DV.get(self._dir, (0, 0))
                self.trail_cells = {(r1, c1), (r1 + d[0], c1 + d[1])}
                self.trail_t = 0.0
            except Exception:
                pass
            self.phase, self.phase_t = "flash", 0.0
        except Exception:
            self._finish_move()

    def _spawn_pop(self):
        try:
            self.pops = set(self._matched)
            for (r, c) in self._matched:
                cx, cy = BX + c * CELL + CELL / 2, BY + r * CELL + CELL / 2
                v = self.board[r][c]
                col = CANDY[v][0] if isinstance(v, int) and 0 <= v < 6 else (255, 255, 255)
                for _ in range(4):
                    if len(self.particles) > 240:
                        break
                    a = self.rng.random() * 6.283
                    sp = 60 + self.rng.random() * 170
                    self.particles.append({"x": cx, "y": cy, "vx": math.cos(a) * sp,
                                           "vy": math.sin(a) * sp - 80,
                                           "t": 0.0, "life": 0.5 + self.rng.random() * 0.3,
                                           "col": col})
        except Exception:
            pass

    def _collapse_animated(self):
        """Remove popped cells, gravity + refill, record slide offsets per candy."""
        try:
            matched = self._matched
            self.falls = {}
            for c in range(8):
                kept = [(r, self.board[r][c]) for r in range(7, -1, -1) if (r, c) not in matched]
                need = 8 - len(kept)
                newvals = [self.refill.randint(6) for _ in range(need)]
                col = kept + [(None, v) for v in newvals]
                for i, (ro, v) in enumerate(col):
                    r = 7 - i
                    self.board[r][c] = v
                    oy0 = -need * CELL if ro is None else (ro - r) * CELL
                    if oy0:
                        self.falls[(r, c)] = oy0
            self._matched = set()
        except Exception:
            pass

    def _learn_from_move(self):
        """Online REINFORCE on the just-finished brain move. Visible in the curve."""
        try:
            st = self._last_step
            self._last_step = None
            if not st or self.policy is None:
                return
            gained = self.score - self.score_at_start
            r = shape_reward({"ok": gained > 0, "score": gained})
            self.baseline += 0.05 * (r - self.baseline)
            reinforce_update(self.policy, st["feat"], st["pf"], st["cell"], st["di"],
                             r - self.baseline, 0.05)
            self.hist.append(r)
            if len(self.hist) > 600:
                self.hist = self.hist[-600:]
            self.updates += 1
            recent = self.hist[-50:]
            from flycrush_py.db import maybe_autosave  # noqa
            if maybe_autosave(self._adb, "live", self.policy, self.updates,
                              sum(recent) / len(recent)):
                self.saved_updates = self.updates
        except Exception:
            pass

    def _finish_move(self):
        self._learn_from_move()
        self._check_end()
        self.phase, self.phase_t = "idle", 0.0

    def reset_board(self):
        """New grid, SAME brain: learning continues across games."""
        try:
            import time as _t
            self.board = create_board(int(_t.time() * 1000) % 100000 or 1)
            if not find_valid_move(self.board):
                self.board = reshuffle(self.board, 5)["board"]
            self.moves_left = self.moves
            self.score, self.combo, self.chain = 0, 1, 0
            self.over, self.sel = False, None
            self.phase, self.phase_t = "idle", 0.0
            self.aim_t, self._over_t = 0.0, 0.0
            self.falls, self.pops, self._matched = {}, set(), set()
            self.reject_cells, self.reject_t = set(), 99.0
            self.trail_cells, self.trail_t = set(), 99.0
            self.particles, self.floats = [], []
            self.eye.reset()
        except Exception:
            pass

    def save_brain(self):
        try:
            import datetime
            import json
            doc = export_weights(self.policy, {"liveTrained": True, "updates": self.updates,
                                "savedAt": datetime.datetime.now(datetime.timezone.utc).isoformat()})
            with open(os.path.join(data_dir(), "readout-weights.json"), "w") as fh:
                json.dump(doc, fh)
            try:
                from flycrush_py.db import save_readout  # noqa
                recent = self.hist[-50:]
                self._adb.submit(save_readout, "live", self.policy, self.updates,
                                 sum(recent) / len(recent) if recent else 0.0,
                                 {"manualSave": True})
            except Exception:
                pass
            self.prov = "live-trained(saved)"
            self.say("brain saved — json + postgres", happy=1.0)
        except Exception:
            self.say("save failed", happy=0.1)

    def say(self, txt, happy=0.5):
        self.says, self.say_t, self.happy = txt, 0.0, happy

    # ---------------- flow ----------------
    def update(self, dt):
        dt *= self.speed
        self.say_t += dt
        self.dopa = max(0.0, self.dopa - dt * 26)
        for f in self.floats:
            f["t"] += dt
            f["y"] -= dt * 40
        self.floats = [f for f in self.floats if f["t"] < 1.2]
        if self.phase == "idle":
            if self.over:
                self._over_t = getattr(self, "_over_t", 0.0) + dt
                if self._over_t > 3.0:
                    self._over_t = 0.0
                    self.reset_board()
                    self.playing = True
                    self.say("new grid — brain keeps learning", happy=0.8)
            elif self.playing and not self.manual and (self.moves_left is None or self.moves_left > 0) and not self.over:
                self.aim_t += dt
                if self.aim_t > 0.55:
                    self.aim_t = 0.0
                    act = self.brain_decide()
                    if act:
                        self.pending = act
                        self.phase, self.phase_t = "aim", 0.0
        elif self.phase == "aim":
            self.phase_t += dt
            if self.phase_t > 0.6:
                a = self.pending
                if not self.start_move(a["cell"], a["dir"]):
                    self.phase, self.phase_t = "idle", 0.0  # recover, never stall
        elif self.phase == "swap":
            self.phase_t += dt
            if self.phase_t > 0.22:
                self._resolve_step(first=True)
        elif self.phase == "flash":
            self.phase_t += dt
            if self.phase_t > 0.45:
                self._spawn_pop()
                self.phase, self.phase_t = "pop", 0.0
        elif self.phase == "pop":
            self.phase_t += dt
            if self.phase_t > 0.22:
                self._collapse_animated()
                self.phase, self.phase_t = "fall", 0.0
        elif self.phase == "fall":
            self.phase_t += dt
            if self.phase_t > 0.38:
                self.falls = {}
                self.cascade += 1
                self._resolve_step(first=False)
        elif self.phase == "swapback":
            self.phase_t += dt
            if self.phase_t > 0.6:  # slow, visible rejection slide
                self.phase, self.phase_t = "idle", 0.0
        self.reject_t += dt
        if self.reject_t > 1.6:
            self.reject_cells = set()
        self.trail_t += dt
        if self.trail_t > 1.4:
            self.trail_cells = set()
        for p in self.particles:
            p["t"] += dt
            p["x"] += p["vx"] * dt
            p["y"] += p["vy"] * dt
            p["vy"] += 900 * dt
        self.particles = [p for p in self.particles if p["t"] < p["life"]]

    # ---------------- drawing ----------------
    def draw_board(self, s, fonts):
        f_med, f_big = fonts[1], fonts[0]
        _rr(s, (BX - 14, BY - 14, CELL * 8 + 28, CELL * 8 + 28), CREAM, 22)
        _rr(s, (BX - 14, BY - 14, CELL * 8 + 28, CELL * 8 + 28), (210, 140, 200), 22, 3)
        t = time.time()
        for r in range(8):
            for c in range(8):
                v = self.board[r][c]
                cx, cy = BX + c * CELL + CELL / 2, BY + r * CELL + CELL / 2
                ox, oy, sc = 0, 0, 1.0
                if self.phase in ("swap", "swapback"):
                    try:
                        pc, pd = self._cell, self._dir
                        pr, pcc = divmod(pc, 8)
                        d = _DV[pd]
                        # board is pre-swapped: slide settles INTO place;
                        # swapback runs on the reverted board: out and back.
                        if self.phase == "swapback":
                            k = 1.0 - min(1.0, self.phase_t / 0.6)
                        else:
                            k = 1.0 - min(1.0, self.phase_t / 0.22)
                        if (r, c) == (pr, pcc):
                            ox, oy = d[1] * CELL * k, d[0] * CELL * k
                        elif (r, c) == (pr + d[0], pcc + d[1]):
                            ox, oy = -d[1] * CELL * k, -d[0] * CELL * k
                    except Exception:
                        pass
                if self.phase == "fall" and (r, c) in self.falls:
                    k = min(1.0, self.phase_t / 0.38)
                    e = 1 - (1 - k) ** 3
                    oy += self.falls[(r, c)] * (1 - e)
                if self.phase == "flash" and (r, c) in self._matched:
                    sc = 1.0 + 0.14 * math.sin(self.phase_t * 25)
                if self.phase == "pop" and (r, c) in self.pops:
                    sc = max(0.0, 1.0 - self.phase_t / 0.22)
                if self.sel == (r, c):
                    pygame.draw.rect(s, (86, 216, 255), (cx - 30 + ox, cy - 30 + oy, 60, 60), 3, border_radius=12)
                # rejected pair glows red while sliding back AND lingers as ghost
                if self._cell >= 0 and (self.phase == "swapback" or
                                        (self.reject_cells and self.reject_t < 1.6)):
                    try:
                        pr, pcc = divmod(self._cell, 8)
                        d = _DV[self._dir]
                        pair = {(pr, pcc), (pr + d[0], pcc + d[1])} if self.phase == "swapback" else set(self.reject_cells)
                        if (r, c) in pair:
                            pulse = 3 + int(2 * math.sin(time.time() * 9))
                            pygame.draw.rect(s, (255, 95, 95), (cx - 30 + ox, cy - 30 + oy, 60, 60), pulse, border_radius=12)
                    except Exception:
                        pass
                if self.trail_cells and self.trail_t < 1.4 and (r, c) in self.trail_cells:
                    pulse = 2 + int(2 * math.sin(time.time() * 7 + 1))
                    pygame.draw.rect(s, (124, 255, 107), (cx - 28 + ox, cy - 28 + oy, 56, 56), pulse, border_radius=12)
                color, kind = CANDY[v]
                draw_candy(s, cx + ox, cy + oy, 24, kind, color, sc)
        # fly aim ring + arrow
        if self.phase == "aim" and self.pending:
            a = self.pending
            r, c = divmod(a["cell"], 8)
            cx, cy = BX + c * CELL + CELL / 2, BY + r * CELL + CELL / 2
            pulse = 3 + 2 * math.sin(t * 10)
            pygame.draw.rect(s, (124, 255, 107), (cx - 30 - pulse, cy - 30 - pulse, 60 + pulse * 2, 60 + pulse * 2), 3, border_radius=14)
            d = {"up": (0, -1), "down": (0, 1), "left": (-1, 0), "right": (1, 0)}[a["dir"]]
            ex, ey = cx + d[0] * CELL, cy + d[1] * CELL
            pygame.draw.line(s, (124, 255, 107), (cx + d[0] * 30, cy + d[1] * 30), (ex - d[0] * 12, ey - d[1] * 12), 4)
            ang = math.atan2(d[1], d[0])
            for da in (0.5, -0.5):
                pygame.draw.line(s, (124, 255, 107), (ex - d[0] * 12, ey - d[1] * 12),
                                 (ex - d[0] * 12 - 12 * math.cos(ang + da), ey - d[1] * 12 - 12 * math.sin(ang + da)), 4)
        for f in self.floats:
            fnt = f_big if f.get("big") else f_med
            img = fnt.render(f["txt"], True, f.get("col", (255, 255, 255)))
            img.set_alpha(max(0, 255 - int(f["t"] * 200)))
            s.blit(img, (f["x"] - 20, f["y"] - 20))
        for p in self.particles:
            k = p["t"] / p["life"]
            rad = max(1, int(4 * (1 - k)))
            pygame.draw.circle(s, p["col"], (int(p["x"]), int(p["y"])), rad)

    def draw_brain(self, s, x, y, w, h, view, font):
        _rr(s, (x, y, w, h), (10, 12, 22), 12)
        s.blit(font.render("frontal" if view == "frontal" else "dorsal", True, DIM), (x + 8, y + 4))
        try:
            rates = self.net.rate if self.net.n else np.zeros(0)
            n = len(self.cloud)
            step = max(1, n // 900)
            for i in range(0, n, step):
                p = self.cloud[i]
                px, py = (p[0] * 0.9 + 1) / 2 * w + x, (1 - (p[1] * 0.75 + 0.5)) / 1.6 * h + y if view == "frontal" else (p[0] * 0.9 + 1) / 2 * w + x
                if view == "dorsal":
                    py = (1 - (p[2] * 0.8 + 0.3)) / 1.4 * h + y
                s.set_at((int(px), int(py)), (90, 110, 150))
            # highlight decoder groups
            for key, col in (("colIds", (124, 255, 107)), ("rowIds", (86, 216, 255)),
                             ("gateIds", (255, 95, 210)), ("pamIds", (255, 180, 80))):
                for gid in (self.dec_ids.get(key) or [])[:12]:
                    i = self.idx_of.get(gid)
                    if i is None:
                        continue
                    act = float(rates[i]) if i < len(rates) else 0.0
                    if act < 0.05:
                        continue
                    # position lookup from subset order
                    pos = self._pos_of(i)
                    if not pos:
                        continue
                    px, py = (pos[0] * 0.9 + 1) / 2 * w + x, ((1 - (pos[1] * 0.75 + 0.5)) / 1.6 * h + y) if view == "frontal" else ((1 - (pos[2] * 0.8 + 0.3)) / 1.4 * h + y)
                    if view == "dorsal":
                        px = (pos[0] * 0.9 + 1) / 2 * w + x
                    pygame.draw.circle(s, col, (int(px), int(py)), 3)
        except Exception:
            pass

    def _pos_of(self, i):
        try:
            if not hasattr(self, "_pos"):
                ok, doc = load_json("connectome-subset.json")
                self._pos = [n.get("xyz") for n in doc.get("neurons", [])] if ok else []
            return self._pos[i] if i < len(self._pos) else None
        except Exception:
            return None

    def draw(self, s, fonts):
        f_big, f_med, f_mono = fonts
        # bg gradient
        for y in range(0, H, 4):
            k = y / H
            col = tuple(int(BG_TOP[i] + (BG_BOT[i] - BG_TOP[i]) * k) for i in range(3))
            pygame.draw.line(s, col, (0, y), (W, y), 4)
        # deco dots
        t = time.time()
        for i in range(24):
            x = (i * 173) % W
            y = (i * 97 + int(t * 20) * (i % 3 + 1)) % H
            k = y / H
            base = tuple(int(BG_TOP[j] + (BG_BOT[j] - BG_TOP[j]) * k) for j in range(3))
            dot = tuple(min(255, c + 22) for c in base)
            pygame.draw.circle(s, dot, (x, y), 3 + (i % 4))
        # title
        s.blit(f_big.render("FLYCRUSH", True, (255, 255, 255)), (BX, 18))
        s.blit(f_med.render("a fruit-fly connectome plays candy crush", True, (255, 220, 245)), (BX, 58))
        s.blit(f_med.render(f"REPLAY … chain {self.chain} · best {self.best}", True, (124, 255, 107)), (BX, 84))
        self.draw_board(s, fonts)
        # right column
        _rr(s, (RX, 18, W - RX - 20, H - 36), (20, 16, 38, 235), 18)
        x0 = RX + 18
        # badges
        for i, (k, v, col) in enumerate((("MOVES", None if self.moves_left is None else str(self.moves_left), (86, 216, 255)),
                                        ("SCORE", str(self.score), (255, 255, 255)),
                                        ("COMBO", f"×{self.combo}", (124, 255, 107)))):
            bx = x0 + i * 160
            _rr(s, (bx, 30, 148, 64), (35, 26, 60), 12)
            s.blit(f_med.render(k, True, DIM), (bx + 10, 34))
            if v is None:  # ∞ glyph: default font lacks it, draw two rings
                pygame.draw.circle(s, col, (bx + 28, 68), 11, 3)
                pygame.draw.circle(s, col, (bx + 50, 68), 11, 3)
            else:
                s.blit(f_big.render(v, True, col), (bx + 10, 52))
        # fly + speech
        look = (0, 0)
        if self.phase == "aim" and self.pending:
            r, c = divmod(self.pending["cell"], 8)
            look = (max(-4, min(4, (c - 3.5))), max(-3, min(3, (r - 3.5))))
        draw_fly(s, x0 + 60, 170, look, getattr(self, "happy", 0.5))
        _rr(s, (x0 + 110, 128, 350, 76), CREAM, 14)
        s.blit(f_med.render(self.says[:34], True, INK), (x0 + 122, 140))
        s.blit(f_med.render(f"brain: {self.prov}", True, DIM), (x0 + 122, 166))
        # CNS strip
        y = 224
        s.blit(f_med.render("CNS · RECORDED ACTIVITY", True, DIM), (x0, y))
        s.blit(f_med.render(f"L {self.dec['L']} · R {self.dec['R']} · gate {self.dec['gate']:.2f} · aim {self.dec['dir']}",
                            True, (255, 255, 255)), (x0, y + 22))
        yy = y + 50
        for i, d in enumerate(DIRS):
            hot = self.dec["dir"] == d
            _rr(s, (x0 + i * 114, yy, 108, 30), (124, 255, 107, 40) if hot else (35, 26, 60), 8)
            s.blit(f_med.render(f"{d.upper()} {self.dec['dirs'][d]:.2f}", True,
                                (124, 255, 107) if hot else DIM), (x0 + i * 114 + 8, yy + 6))
        # dopamine
        yy += 44
        s.blit(f_med.render(f"DOPAMINE · PAM11 · {self.dopa:.1f} Hz", True, (255, 95, 210)), (x0, yy))
        _rr(s, (x0, yy + 24, 460, 22), (10, 8, 20), 8)
        _rr(s, (x0, yy + 24, int(460 * max(0.02, min(1, self.dopa / 120))), 22), (255, 95, 210), 8)
        # fly cam
        yy += 56
        s.blit(f_med.render("FLY CAM · what the network saw", True, DIM), (x0, yy))
        self.draw_flycam(s, x0, yy + 24, 96)
        # brains
        self.draw_brain(s, x0 + 114, yy + 24, 150, 96, "frontal", f_med)
        self.draw_brain(s, x0 + 274, yy + 24, 150, 96, "dorsal", f_med)
        # eval + help
        yy += 130
        ev = self.report.get("eval120", {}) if isinstance(self.report, dict) else {}
        if ev:
            s.blit(f_med.render(f"trained {ev.get('trained')} /game · random {ev.get('random')} · planner {ev.get('firstFoundPlanner')}",
                                True, DIM), (x0, yy))
            yy += 22
        # live learning curve (reward per brain move + baseline)
        recent = self.hist[-50:]
        avg = sum(recent) / len(recent) if recent else 0.0
        s.blit(f_mono.render(f"LEARN e{self.eps:.2f} u{self.updates} {avg:+.2f} sv@{self.saved_updates} rej{self.invalid_count}",
                            True, DIM), (x0, yy))
        _rr(s, (x0, yy + 20, 424, 74), (10, 8, 20), 8)
        hist = self.hist[-220:]
        if len(hist) > 1:
            mx, mn = max(0.6, max(hist)), min(-0.1, min(hist))
            span = (mx - mn) or 1.0
            pts = [(x0 + 6 + i / (len(hist) - 1) * 412,
                    yy + 20 + 74 - 6 - (v - mn) / span * 62) for i, v in enumerate(hist)]
            try:
                pygame.draw.lines(s, (124, 255, 107), False, pts, 2)
            except Exception:
                pass
            by = yy + 20 + 74 - 6 - (self.baseline - mn) / span * 62
            pygame.draw.line(s, (255, 95, 210), (x0 + 6, by), (x0 + 418, by), 1)
        yy += 102
        s.blit(f_med.render("SPACE play · N step · M manual", True, DIM), (x0, yy))
        s.blit(f_med.render("R reset · S save brain · Q quit", True, DIM), (x0, yy + 20))
        if self.over:
            _rr(s, (BX + 60, BY + 180, 380, 120), (20, 12, 30, 240), 18)
            s.blit(f_big.render("OUT OF MOVES", True, (255, 255, 255)), (BX + 100, BY + 210))
            s.blit(f_med.render(f"score {self.score} · R to run it back", True, DIM), (BX + 100, BY + 250))

    def draw_flycam(self, s, x, y, size):
        try:
            small = pygame.Surface((40, 40))
            small.fill((5, 7, 11))
            for br in range(4):
                for bc in range(4):
                    r = g = b = edge = prev = 0
                    for dr in range(2):
                        for dc in range(2):
                            v = self.board[br * 2 + dr][bc * 2 + dc]
                            col = ((255, 107, 107), (255, 179, 71), (124, 255, 107), (86, 216, 255), (199, 146, 234), (255, 95, 210))[v]
                            r += col[0]
                            g += col[1]
                            b += col[2]
                            if prev >= 0 and prev != v:
                                edge += 1
                            prev = v
                    pygame.draw.circle(small, (r // 4, g // 4, b // 4), (bc * 10 + 5, br * 10 + 5), 5)
            big = pygame.transform.smoothscale(small, (size, size))
            s.blit(big, (x, y))
            for yy in range(0, size, 4):
                pygame.draw.line(s, (0, 0, 0, 70), (x, y + yy), (x + size, y + yy))
        except Exception:
            pass


def main(argv=None):
    ap = argparse.ArgumentParser()
    ap.add_argument("--moves", type=int, default=None, help="finite move limit (default: unlimited)")
    ap.add_argument("--speed", type=float, default=1.0)
    ap.add_argument("--smoke", type=int, default=0, help="headless frames then quit")
    ap.add_argument("--shot", default="", help="save one frame png then quit")
    ap.add_argument("--from-scratch", action="store_true", help="ignore baked weights: watch it learn from zero")
    args = ap.parse_args(argv)
    if args.smoke or args.shot:
        os.environ["SDL_VIDEODRIVER"] = "dummy"
    pygame.init()
    pygame.display.set_caption("FLYCRUSH — a fruit-fly connectome plays candy crush")
    screen = pygame.display.set_mode((W, H))
    fonts = (pygame.font.Font(None, 44), pygame.font.Font(None, 26), pygame.font.Font(None, 22))
    g = Game(moves=args.moves, speed=args.speed, from_scratch=args.from_scratch)
    g.playing = True
    clock = pygame.time.Clock()
    frames = 0
    running = True
    while running:
        dt = clock.tick(60) / 1000.0
        for ev in pygame.event.get():
            if ev.type == pygame.QUIT:
                running = False
            elif ev.type == pygame.KEYDOWN:
                if ev.key in (pygame.K_q, pygame.K_ESCAPE):
                    running = False
                elif ev.key == pygame.K_SPACE:
                    if g.over:
                        g.reset_board()
                    g.playing = not g.playing
                elif ev.key == pygame.K_n:
                    if g.phase == "idle" and not g.manual and not g.over:
                        act = g.brain_decide()
                        if act:
                            g.start_move(act["cell"], act["dir"])
                elif ev.key == pygame.K_s:
                    g.save_brain()
                elif ev.key == pygame.K_r:
                    g.reset_board()
                    g.playing = True
                elif ev.key == pygame.K_m:
                    g.manual = not g.manual
                    g.say("your turn — click two adjacent" if g.manual else "fly resumes", 0.5)
            elif ev.type == pygame.MOUSEBUTTONDOWN and g.manual and g.phase == "idle":
                mx, my = ev.pos
                c, r = (mx - BX) // CELL, (my - BY) // CELL
                if 0 <= r < 8 and 0 <= c < 8:
                    if g.sel is None:
                        g.sel = (r, c)
                    else:
                        a = g.sel
                        g.sel = None
                        if abs(a[0] - r) + abs(a[1] - c) == 1:
                            d = "up" if r == a[0] - 1 else "down" if r == a[0] + 1 else "left" if c == a[1] - 1 else "right"
                            g.start_move(a[0] * 8 + a[1], d)
        g.update(dt)
        g.draw(screen, fonts)
        pygame.display.flip()
        frames += 1
        if args.shot and frames == 90:
            try:
                pygame.image.save(screen, args.shot)
                print(f"saved {args.shot}")
            except Exception as exc:
                print(f"shot failed: {exc}")
            running = False
        if args.smoke and frames >= args.smoke:
            print(f"smoke OK: {frames} frames, score={g.score}, moves_left={g.moves_left}, rl_updates={g.updates}")
            running = False
    try:
        g._adb.close()
    except Exception:
        pass
    pygame.quit()


if __name__ == "__main__":
    main()
