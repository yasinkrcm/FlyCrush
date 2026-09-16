"""Rule-integrity tests for backend/session.py: every step in every
fly_step/human_move response must reference a genuine 3+ run."""
from __future__ import annotations

import unittest

from backend.session import Session
from flycrush_py.test_rules import genuine_runs


class TestSessionRules(unittest.TestCase):
    def test_steps_chain_genuinely(self):
        s = Session()
        checked = 0
        for _ in range(120):
            pre = [row[:] for row in s.board]
            res = s.fly_step()
            if not res.get("ok"):
                if res.get("reason") == "game-over":
                    s.new_game()
                continue
            if not res.get("valid"):
                # invalid: board must be UNCHANGED (reverted)
                self.assertEqual(s.board, pre, "invalid swap must revert exactly")
                continue
            # step 0 must verify against the POST-SWAP board (the match forms
            # through the swap, not before it)
            dec = res["decision"]
            post = [row[:] for row in pre]
            r1, c1 = divmod(dec["cell"], 8)
            dv = {"up": (-1, 0), "down": (1, 0), "left": (0, -1), "right": (0, 1)}[dec["dir"]]
            post[r1][c1], post[r1 + dv[0]][c1 + dv[1]] = post[r1 + dv[0]][c1 + dv[1]], post[r1][c1]
            prev = post
            for st in res["steps"]:
                got = set(map(tuple, st["matched"]))
                want = genuine_runs(prev)
                self.assertTrue(got and got <= want,
                                f"approved {got} but genuine runs are {want}")
                checked += 1
                prev = st.get("board_after", st.get("board"))
            self.assertEqual(s.board, res["board"], "final board must equal last step")
        self.assertGreater(checked, 0, "should have verified real cascades")

    def test_human_invalid_reverts(self):
        s = Session()
        # find a provably-dead swap: brute force one with no match
        pre = [row[:] for row in s.board]
        tried = False
        for cell in range(64):
            for d in ("up", "down", "left", "right"):
                r1, c1 = divmod(cell, 8)
                dv = {"up": (-1, 0), "down": (1, 0), "left": (0, -1), "right": (0, 1)}[d]
                if not (0 <= r1 + dv[0] < 8 and 0 <= c1 + dv[1] < 8):
                    continue
                t = [row[:] for row in pre]
                t[r1][c1], t[r1 + dv[0]][c1 + dv[1]] = t[r1 + dv[0]][c1 + dv[1]], t[r1][c1]
                from flycrush_py.board import find_matches
                if not find_matches(t):
                    res = s.human_move(cell, d)
                    self.assertFalse(res.get("valid"))
                    self.assertEqual(s.board, pre, "human invalid swap must revert")
                    tried = True
                    break
            if tried:
                break
        self.assertTrue(tried)


if __name__ == "__main__":
    unittest.main()
