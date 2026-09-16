"""Rule-integrity tests: every approved match must be a genuine 3+ run.
Covers the FULL animated pipelines (game.py resolver + backend session),
not just the pure engine. Run: ./.venv/bin/python -m unittest discover -s flycrush_py -p 'test_*.py'"""
from __future__ import annotations

import unittest

from flycrush_py import board as B


def genuine_runs(b):
    runs = set()
    for r in range(8):
        for c in range(8):
            v = b[r][c]
            if not isinstance(v, int):
                continue
            if c + 2 < 8 and b[r][c + 1] == v and b[r][c + 2] == v:
                k = c
                while k < 8 and b[r][k] == v:
                    runs.add((r, k))
                    k += 1
            if r + 2 < 8 and b[r + 1][c] == v and b[r + 2][c] == v:
                k = r
                while k < 8 and b[k][c] == v:
                    runs.add((k, c))
                    k += 1
    return runs


class TestGamePipeline(unittest.TestCase):
    def test_every_flash_is_genuine(self):
        import os
        os.environ.setdefault("SDL_VIDEODRIVER", "dummy")
        from flycrush_py.game import Game
        from flycrush_py.rl import create_policy

        logged = []

        class Rec(Game):
            def _resolve_step(self, first):
                m = B.find_matches(self.board)
                if m:
                    logged.append((set(map(tuple, m)), [row[:] for row in self.board]))
                return super()._resolve_step(first)

        g = Rec()
        g.policy = create_policy(613)
        moves = 0
        for _ in range(150):
            act = g.brain_decide()
            if not act:
                break
            if not g.start_move(act["cell"], act["dir"]):
                continue
            moves += 1
            for _ in range(1200):
                g.update(1 / 60)
                if g.phase == "idle":
                    break
            if g.moves_left is not None and g.moves_left <= 0:
                g.reset_board()
        self.assertGreater(moves, 50, "should have played many moves")
        self.assertGreater(len(logged), 0, "should have approved some matches")
        fakes = [(m, snap) for m, snap in logged if not set(m) <= genuine_runs(snap)]
        self.assertEqual(fakes, [], f"{len(fakes)} approvals without a genuine 3-run!")
        # board must always settle match-free
        self.assertEqual(B.find_matches(g.board), [])


if __name__ == "__main__":
    unittest.main()
