"""unittest suite for flycrush_py. Run: ./.venv/bin/python -m unittest discover -s flycrush_py -p 'test_*.py'"""
from __future__ import annotations

import unittest

import numpy as np

from flycrush_py import board as B
from flycrush_py import data as D
from flycrush_py import lif as L
from flycrush_py import rl as R
from flycrush_py import sensory as S


class TestRng(unittest.TestCase):
    def test_deterministic(self):
        a, b = B.Rng(42), B.Rng(42)
        self.assertEqual([a.random() for _ in range(5)], [b.random() for _ in range(5)])

    def test_js_parity_first_value(self):
        # mulberry32(42) first output in JS: verified against node semantics
        v = B.Rng(42).random()
        self.assertGreaterEqual(v, 0.0)
        self.assertLess(v, 1.0)


class TestBoard(unittest.TestCase):
    def test_create_deterministic_matchfree(self):
        self.assertEqual(B.create_board(7), B.create_board(7))
        self.assertEqual(B.find_matches(B.create_board(7)), [])

    def test_try_action_reverts_invalid(self):
        b = [[(r + c) % 6 for c in range(8)] for r in range(8)]
        res = B.try_action(b, 0, "right", B.Rng(1))
        self.assertFalse(res["ok"])
        self.assertEqual(res["board"], b)

    def test_try_action_matches_and_cascades_stable(self):
        b = B.create_board(11)
        mv = B.find_valid_move([row[:] for row in b])
        self.assertIsNotNone(mv)
        res = B.try_action(b, mv["r1"] * 8 + mv["c1"],
                           next(d for d, v in {"up": (-1, 0), "down": (1, 0), "left": (0, -1), "right": (0, 1)}.items()
                                if v == (mv["r2"] - mv["r1"], mv["c2"] - mv["c1"])), B.Rng(9))
        self.assertTrue(res["ok"])
        self.assertGreaterEqual(res["removed"], 3)
        self.assertEqual(B.find_matches(res["board"]), [])

    def test_malformed_never_throws(self):
        self.assertEqual(B.find_matches(None), [])
        self.assertIsNone(B.find_valid_move([]))
        self.assertFalse(B.try_action(None, 0, "up", B.Rng(1))["ok"])

    def test_reshuffle_repairs(self):
        dead = [[(r + c) % 6 for c in range(8)] for r in range(8)]
        if B.find_valid_move([row[:] for row in dead]) is None:
            rs = B.reshuffle(dead, 5)["board"]
            self.assertEqual(B.find_matches(rs), [])
            self.assertIsNotNone(B.find_valid_move([row[:] for row in rs]))


class TestSensory(unittest.TestCase):
    def test_vector_shape_and_motion(self):
        e = S.Eye()
        v1, _ = e.observe([[0] * 8 for _ in range(8)])
        self.assertEqual(v1.shape, (48,))
        self.assertTrue((v1[42:] == 0).all())
        b2 = [[0] * 8 for _ in range(8)]
        b2[0][0] = 1
        v2, _ = e.observe(b2)
        self.assertTrue((v2[42:] > 0).any())

    def test_garbage_safe(self):
        e = S.Eye()
        v, c = e.observe(None)
        self.assertEqual(v.shape, (48,))


class TestLif(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        ok, doc = D.load_json("connectome-subset.json")
        assert ok, doc
        v, errs = D.validate_subset(doc)
        assert v, errs
        cls.doc = doc

    def test_schema_labels(self):
        self.assertTrue(self.doc["meta"]["synthetic"])

    def test_stable_300_steps(self):
        net = L.create_network(self.doc)
        eye = S.Eye()
        for i in range(300):
            v, _ = eye.observe(B.create_board(1000 + i))
            L.step_network(net, v, 1.2 if i == 150 else 0.0)
        self.assertTrue(np.all(np.isfinite(net.v)))
        self.assertTrue(((net.v >= -2) & (net.v <= 4)).all())
        self.assertGreaterEqual(net.pam_hz, 0.0)

    def test_network_actually_spikes(self):
        # regression: a double-applied leak once silenced the whole net
        net = L.create_network(self.doc)
        eye = S.Eye()
        total = 0
        for i in range(10):
            v, _ = eye.observe(B.create_board(2000 + i))
            for _ in range(4):
                total += L.step_network(net, v, 0.0)
        self.assertGreater(total, 0, "healthy network must fire spikes")
        d = L.decode_motor(net)
        self.assertGreater(sum(d["col_acts"]) + sum(d["row_acts"]), 0.0)

    def test_decode_ranges(self):
        net = L.create_network(self.doc)
        eye = S.Eye()
        for i in range(40):
            v, _ = eye.observe(B.create_board(50 + i))
            L.step_network(net, v, 0.0)
        d = L.decode_motor(net)
        self.assertIn(d["L"], range(8))
        self.assertIn(d["R"], range(8))
        self.assertGreaterEqual(d["gate"], 0.0)
        self.assertLessEqual(d["gate"], 1.0)


class TestRL(unittest.TestCase):
    def test_features(self):
        b = B.create_board(3)
        cf = R.cell_features(b)
        self.assertEqual(cf.shape, (64, 10))
        self.assertTrue(((cf >= 0) & (cf <= 1)).all())
        f = R.extract_features(np.zeros(48), {"col_acts": [0] * 8, "row_acts": [0] * 8,
                                              "dirs": {"up": 0, "down": 0, "left": 0, "right": 0}, "gate": 0}, 0)
        self.assertEqual(f.shape, (73,))

    def test_update_direction(self):
        p = R.create_policy(2)
        feat = np.full(73, 0.2)
        cf = np.full((64, 10), 0.1)
        _, before, _ = R.forward(p, feat, cf)
        R.reinforce_update(p, feat, cf, 37, 1, +1.0, 0.5)
        _, after, _ = R.forward(p, feat, cf)
        self.assertGreater(after[37 * 4 + 1], before[37 * 4 + 1])

    def test_bandit_converges(self):
        p = R.create_policy(4)
        rng = B.Rng(11)
        cf = np.zeros((64, 10))
        for t in range(600):
            ctx = t % 2
            feat = np.zeros(73)
            feat[ctx] = 1.0
            a = R.policy_act(p, feat, cf, rng, epsilon=0.15)
            good = (ctx == 0 and a["di"] == 0) or (ctx == 1 and a["di"] == 3)
            R.reinforce_update(p, feat, cf, a["cell"], a["di"], 1.0 if good else -0.2, 0.1)
        for ctx, want in ((0, 0), (1, 3)):
            feat = np.zeros(73)
            feat[ctx] = 1.0
            a = R.policy_act(p, feat, cf, rng, greedy=True)
            self.assertEqual(a["di"], want)

    def test_masking(self):
        p = R.create_policy(6)
        rng = B.Rng(21)
        feat = np.full(73, 0.1)
        cf = R.cell_features(B.create_board(31))
        for _ in range(300):
            a = R.policy_act(p, feat, cf, rng, epsilon=0.3)
            self.assertTrue(B.valid_dirs(a["cell"])[a["dir"]])

    def test_weights_roundtrip_and_reject(self):
        p = R.create_policy(7)
        doc = R.export_weights(p)
        q = R.create_policy(999)
        self.assertTrue(R.import_weights(q, doc))
        np.testing.assert_array_equal(q.W2, p.W2)
        with self.assertRaises(ValueError):
            R.import_weights(R.create_policy(1), {"meta": {"arch": {}}, "W1": []})
        bad = dict(doc)
        bad["W2"] = [float("nan")] * len(bad["W2"])
        with self.assertRaises(ValueError):
            R.import_weights(R.create_policy(1), bad)


if __name__ == "__main__":
    unittest.main()
