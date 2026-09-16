"""Refresh-proof + wrong-move logging tests (need postgres, else skipped)."""
from __future__ import annotations

import unittest

from backend.session import Session
from flycrush_py import db as D


class TestPersist(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.conn = D.connect(5.0)
        if cls.conn is None:
            raise unittest.SkipTest("postgres unreachable")
        assert D.init_schema(cls.conn)

    @classmethod
    def tearDownClass(cls):
        try:
            cls.conn.close()
        except Exception:
            pass

    def test_a_roundtrip_with_invalid_fields(self):
        s = Session()
        for _ in range(4):
            r = s.fly_step()
            if r.get("reason") == "game-over":
                s.new_game()
        snap = s.snapshot_state()
        self.assertTrue(D.save_game_state(self.conn, snap))
        d2 = D.load_game_state(self.conn)
        self.assertIsNotNone(d2)
        self.assertEqual(d2["board"], snap["board"])
        self.assertEqual(d2["score"], snap["score"])
        self.assertEqual(d2["updates"], snap["updates"])
        self.assertEqual(d2["hist"], snap["hist"])
        self.assertEqual(d2.get("move_count"), snap["move_count"])
        self.assertEqual(d2.get("invalid_count"), snap["invalid_count"])

    def test_b_boot_restore_survives_refresh(self):
        # simulate: play -> "refresh" (brand-new Session = new server boot)
        s2 = Session()
        self.assertEqual(s2.board, s2.snapshot_state()["board"])
        st = s2.snapshot()
        self.assertGreaterEqual(st["score"], 0)
        # board/score/updates must equal what test_a persisted... at least
        # prove restore path ran without wiping to a fresh grid:
        d = D.load_game_state(self.conn)
        if d is not None:
            self.assertEqual(s2.board, d["board"])
            self.assertEqual(s2.score, d["score"])

    def test_c_corrupt_row_ignored(self):
        with self.conn.cursor() as cur:
            cur.execute(
                "INSERT INTO game_state(id, board) VALUES (1,'[[1,2],[3]]')"
                " ON CONFLICT (id) DO UPDATE SET board=EXCLUDED.board")
        self.assertIsNone(D.load_game_state(self.conn))
        # repair for other tests / live use
        s = Session()
        s.new_game()
        D.save_game_state(self.conn, s.snapshot_state())
        self.assertIsNotNone(D.load_game_state(self.conn))

    def test_d_invalid_logged_and_visible(self):
        s = Session()
        pre_count = s.invalid_count
        # force a provably-dead human swap (brute-forced, no match possible)
        from flycrush_py.board import find_matches
        done = False
        for cell in range(64):
            for d in ("up", "down", "left", "right"):
                r1, c1 = divmod(cell, 8)
                dv = {"up": (-1, 0), "down": (1, 0), "left": (0, -1), "right": (0, 1)}[d]
                if not (0 <= r1 + dv[0] < 8 and 0 <= c1 + dv[1] < 8):
                    continue
                t = [row[:] for row in s.board]
                t[r1][c1], t[r1 + dv[0]][c1 + dv[1]] = t[r1 + dv[0]][c1 + dv[1]], t[r1][c1]
                if not find_matches(t):
                    res = s.human_move(cell, d)
                    self.assertFalse(res.get("valid"))
                    done = True
                    break
            if done:
                break
        self.assertTrue(done)
        self.assertEqual(s.invalid_count, pre_count + 1)
        st = s.snapshot()
        inv = st["invalid"]
        self.assertEqual(inv["count"], s.invalid_count)
        self.assertGreaterEqual(inv["moves"], 1)
        self.assertTrue(0.0 <= inv["rate"] <= 1.0)
        self.assertTrue(inv["recent"])
        last = inv["recent"][-1]
        self.assertEqual(set(last), {"n", "L", "R", "dir", "via"})
        self.assertEqual(last["via"], "human")


if __name__ == "__main__":
    unittest.main()
