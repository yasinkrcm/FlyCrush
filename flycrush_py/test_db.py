"""Tests for flycrush_py/db.py. DB tests skip gracefully when postgres is down."""
from __future__ import annotations

import time
import unittest

from flycrush_py import db as D
from flycrush_py.board import Rng
from flycrush_py.rl import create_policy


class TestDbOffline(unittest.TestCase):
    def test_helpers_never_raise_without_db(self):
        adb = D.AsyncDb(timeout=0.2)
        self.assertTrue(adb.submit(D.save_readout, "x", create_policy(1), 0, 0.0) in (True, False))
        adb.close(drain=False)
        D.maybe_autosave(None, "live", create_policy(1), 100, 0.0)  # must not raise
        prov, upd = D.load_boot_policy(create_policy(1), None, True)
        self.assertEqual((prov, upd), ("random-init(from-scratch)", 0))


class TestDbLive(unittest.TestCase):
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

    def test_roundtrip(self):
        p = create_policy(21)
        t0 = time.time()
        self.assertTrue(D.save_readout(self.conn, "ut", p, updates=7, avg50=0.42, meta_extra={"t": 1}))
        dt_save = time.time() - t0
        q = create_policy(999)
        t0 = time.time()
        ok, upd, avg, _ts = D.load_latest_into(self.conn, "ut", q)
        dt_load = time.time() - t0
        self.assertTrue(ok)
        self.assertEqual((upd, avg), (7, 0.42))
        import numpy as np
        # storage is float32 by design (2KB/readout); compute stays float64
        np.testing.assert_allclose(q.W2, p.W2, rtol=1e-6, atol=1e-7)
        np.testing.assert_allclose(q.Wprior, p.Wprior, rtol=1e-6, atol=1e-7)
        print(f"\nrountrip: save={dt_save * 1000:.1f}ms load={dt_load * 1000:.1f}ms")
        self.assertLess(dt_save + dt_load, 1.0, "persist must stay sub-second")

    def test_latest_wins(self):
        D.save_readout(self.conn, "ut2", create_policy(31), updates=1, avg50=0.0)
        D.save_readout(self.conn, "ut2", create_policy(32), updates=2, avg50=0.0)
        q = create_policy(0)
        ok, upd, _, _ts = D.load_latest_into(self.conn, "ut2", q)
        self.assertTrue(ok and upd == 2)

    def test_rejects_garbage_arch(self):
        q = create_policy(0)
        ok, _, _, _ = D.load_latest_into(self.conn, "no-such-name", q)
        self.assertFalse(ok)

    def test_log_run(self):
        self.assertTrue(D.log_run(self.conn, "ut-run", {"a": 1}, {"b": 2}, [10.0, 20.0, 30.0]))

    def test_async_writer(self):
        adb = D.AsyncDb(timeout=5.0)
        time.sleep(1.0)
        self.assertTrue(adb.live)
        done = []
        adb.submit(lambda conn: done.append(1))
        deadline = time.time() + 5
        while not done and time.time() < deadline:
            time.sleep(0.05)
        self.assertTrue(done)
        adb.close()


if __name__ == "__main__":
    unittest.main()
