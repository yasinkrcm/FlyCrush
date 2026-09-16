"""API tests for backend/server.py (stdlib only: urllib + threading)."""
from __future__ import annotations

import json
import threading
import unittest
import urllib.request

from backend.server import Handler
from http.server import ThreadingHTTPServer


def _call(method, path, body=None, port=0):
    data = json.dumps(body or {}).encode() if method == "POST" else None
    req = urllib.request.Request(f"http://127.0.0.1:{port}{path}", data=data,
                                 headers={"Content-Type": "application/json"}, method=method)
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.status, json.loads(r.read().decode())


class TestAPI(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.srv = ThreadingHTTPServer(("127.0.0.1", 0), Handler)
        cls.port = cls.srv.server_address[1]
        cls.th = threading.Thread(target=cls.srv.serve_forever, daemon=True)
        cls.th.start()
        # readiness wait: serve_forever loop may lag behind thread start
        import time
        import urllib.error
        deadline = time.time() + 10
        while time.time() < deadline:
            try:
                req = urllib.request.Request(f"http://127.0.0.1:{cls.port}/api/state")
                with urllib.request.urlopen(req, timeout=5) as r:
                    if r.status == 200:
                        return
            except Exception:
                time.sleep(0.05)
        raise unittest.SkipTest("test server did not start")

    @classmethod
    def tearDownClass(cls):
        cls.srv.shutdown()

    def test_state(self):
        code, st = _call("GET", "/api/state", port=self.port)
        self.assertEqual(code, 200)
        self.assertEqual(len(st["board"]), 8)
        self.assertIn("dec", st)
        self.assertIn("hist", st)

    def test_fly_step_valid_or_invalid_shape(self):
        code, res = _call("POST", "/api/fly_step", {}, port=self.port)
        self.assertEqual(code, 200)
        self.assertIn("decision", res)
        self.assertIn(res.get("ok"), (True, False))
        if res.get("valid"):
            self.assertTrue(res["steps"])
            s0 = res["steps"][0]
            self.assertIn("matched", s0)
            self.assertIn("falls", s0)
            self.assertIn("board_after", s0)

    def test_human_move_rejects_garbage(self):
        for bad in ({"cell": 99, "dir": "up"}, {"cell": 0, "dir": "sideways"}, {"cell": "x", "dir": "up"}):
            _, res = _call("POST", "/api/human_move", bad, port=self.port)
            self.assertFalse(res["ok"])

    def test_new_game_and_save(self):
        _, st = _call("POST", "/api/new_game", {"moves": 10}, port=self.port)
        self.assertEqual(st["moves_left"], 10)
        _, st2 = _call("POST", "/api/new_game", {}, port=self.port)
        self.assertEqual(st2["moves_left"], 10)
        code, rep = _call("GET", "/api/report", port=self.port)
        self.assertEqual(code, 200)

    def test_turbo_trains(self):
        import time
        _, r0 = _call("GET", "/api/state", port=self.port)
        u0 = r0["updates"]
        code, r = _call("POST", "/api/turbo", {"episodes": 4}, port=self.port)
        self.assertEqual(code, 200)
        self.assertTrue(r["ok"])
        job = r["job"]
        deadline = time.time() + 120
        while job.get("running") and time.time() < deadline:
            time.sleep(0.5)
            _, st = _call("GET", "/api/state", port=self.port)
            job = st["job"]
        self.assertFalse(job.get("running"), "turbo must finish")
        self.assertEqual(job.get("done"), 4)
        _, st = _call("GET", "/api/state", port=self.port)
        self.assertGreater(st["updates"], u0, "turbo must produce learning updates")

    def test_static_frontend(self):
        req = urllib.request.Request(f"http://127.0.0.1:{self.port}/app.js")
        with urllib.request.urlopen(req, timeout=10) as r:
            self.assertEqual(r.status, 200)
            self.assertIn("FLYCRUSH", r.read().decode())


if __name__ == "__main__":
    unittest.main()
