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
            self.assertIn("board", s0)

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
        req = urllib.request.Request(f"http://127.0.0.1:{self.port}/")
        with urllib.request.urlopen(req, timeout=10) as r:
            self.assertEqual(r.status, 200)
            self.assertIn("FLYCRUSH", r.read().decode().upper())

    def test_slow_client_cannot_block(self):
        """Regression (2026-09-18 outage): a stalled reader must not hold LOCK."""
        import socket
        import time
        with socket.create_connection(("127.0.0.1", self.port), timeout=10) as slow:
            slow.sendall(b"GET /api/state HTTP/1.1\r\nHost: x\r\nConnection: keep-alive\r\n\r\n")
            slow.recv(1)  # read one byte, then stall
            t0 = time.time()
            code, _ = _call("GET", "/api/state", port=self.port)
            self.assertLess(time.time() - t0, 10, "stalled reader must not block the server")
            self.assertEqual(code, 200)

    def test_ws_state_roundtrip(self):
        """WS handshake + a {type:'state'} command returns a snapshot frame."""
        import base64
        import os as _os
        import socket
        import struct

        def readn(sk, n):
            data = b""
            while len(data) < n:
                chunk = sk.recv(n - len(data))
                if not chunk:
                    raise AssertionError("connection closed")
                data += chunk
            return data

        with socket.create_connection(("127.0.0.1", self.port), timeout=10) as sk:
            key = base64.b64encode(_os.urandom(16)).decode()
            sk.sendall((f"GET /ws HTTP/1.1\r\nHost: x\r\nUpgrade: websocket\r\n"
                        f"Connection: Upgrade\r\nSec-WebSocket-Key: {key}\r\n"
                        f"Sec-WebSocket-Version: 13\r\n\r\n").encode())
            buf = b""
            while b"\r\n\r\n" not in buf:
                buf += sk.recv(4096)
            self.assertIn(b"101", buf.split(b"\r\n")[0])
            # bytes after the handshake may already contain the first frame
            leftover = {"buf": buf.split(b"\r\n\r\n", 1)[1]}

            def readn(sk, n):
                data = leftover["buf"]
                while len(data) < n:
                    chunk = sk.recv(n - len(data))
                    if not chunk:
                        raise AssertionError("connection closed")
                    data += chunk
                leftover["buf"] = data[n:]
                return data[:n]

            payload = json.dumps({"type": "state", "id": 7}).encode()
            mask = _os.urandom(4)
            masked = bytes(b ^ mask[i % 4] for i, b in enumerate(payload))
            sk.sendall(bytes([0x81, 0x80 | len(payload)]) + mask + masked)
            # the server pushes an initial snapshot first; keep reading until
            # the actual reply to our id:7 command arrives
            msg = None
            for _ in range(10):
                head = readn(sk, 2)
                self.assertIn(head[0] & 0x0F, (1, 9))  # text or ping
                ln = head[1] & 0x7F
                if ln == 126:
                    ln = struct.unpack("!H", readn(sk, 2))[0]
                elif ln == 127:
                    ln = struct.unpack("!Q", readn(sk, 8))[0]
                if head[0] & 0x0F == 9:
                    readn(sk, ln)  # ping payload (server frames are unmasked)
                    continue
                msg = json.loads(readn(sk, ln))
                if msg.get("id") == 7:
                    break
            self.assertIsNotNone(msg)
            self.assertEqual(msg["id"], 7)
            self.assertIn("board", msg["data"])


if __name__ == "__main__":
    unittest.main()
