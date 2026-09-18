#!/usr/bin/env python3
"""FLYCRUSH backend: stdlib-only HTTP + WebSocket server (no pip dependencies).

Serves web/dist + public/data/* statically, a JSON game API, and a WebSocket
push channel at /ws (RFC 6455):

    GET  /api/state            full snapshot (board, stats, panels, curve)
    POST /api/fly_step         brain decides + applies + learns (animated steps out)
    POST /api/human_move       {cell, dir} validated swap (no learning)
    POST /api/new_game         {moves?, from_scratch?}
    POST /api/save              persist trained readout to readout-weights.json
    GET  /api/report           baked training-report.json (or {})
    GET  /ws   (upgrade)       bidirectional game channel:
                               client -> {type: state|step|move|new|turbo|save, id, ...}
                               server -> {id, ok, data} replies
                                          + {type:"snapshot", data} pushes

Concurrency contract: every socket write happens OUTSIDE LOCK, and plain HTTP
client sockets carry a 20s timeout (upgraded WS sockets are exempt — they are
kept alive by server pings). A stalled browser can therefore never freeze the
game loop for everyone else (root cause of the 2026-09-18 outage).

Run:
    ./.venv/bin/python -m backend.server [--port 8000] [--moves 25] [--from-scratch]
Then open http://localhost:8000/
"""
from __future__ import annotations

import argparse
import base64
import hashlib
import json
import mimetypes
import os
import struct
import sys
import threading
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from backend.session import Session  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WEBDIST = os.path.join(ROOT, "web", "dist")
PUBDATA = os.path.join(ROOT, "public", "data")

HAS_WEB = os.path.isfile(os.path.join(WEBDIST, "index.html"))

_NOBUILD = b"""<!doctype html><meta charset="utf-8"><title>FlyCrush</title>
<body style="font-family:ui-monospace,Menlo,Consolas,monospace;background:#160b2e;color:#efe9ff;display:grid;place-items:center;height:100vh;margin:0">
<div style="text-align:center"><h1>FLY<span style="color:#56d8ff">CRUSH</span></h1>
<p>web app not built &mdash; run:</p>
<pre style="background:#241a45;padding:12px 18px;border-radius:12px">cd web &amp;&amp; npm install &amp;&amp; npm run build</pre>
</div></body>
"""

SESSION = Session()
LOCK = threading.Lock()

# ---------------- websocket plumbing (RFC 6455, server side) ----------------

WS_GUID = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"


class WsClient:
    __slots__ = ("handler", "send_lock", "alive")

    def __init__(self, handler):
        self.handler = handler
        self.send_lock = threading.Lock()
        self.alive = True


WS_CLIENTS: set[WsClient] = set()
WS_REG_LOCK = threading.Lock()


def _ws_frame(opcode: int, payload: bytes) -> bytes:
    n = len(payload)
    if n < 126:
        head = struct.pack("!BB", 0x80 | opcode, n)
    elif n < 65536:
        head = struct.pack("!BBH", 0x80 | opcode, 126, n)
    else:
        head = struct.pack("!BBQ", 0x80 | opcode, 127, n)
    return head + payload


def _ws_send_frame(client: WsClient, frame: bytes) -> None:
    try:
        with client.send_lock:
            client.handler.wfile.write(frame)
            client.handler.wfile.flush()
    except Exception:
        client.alive = False


def _ws_send(client: WsClient, obj) -> None:
    try:
        _ws_send_frame(client, _ws_frame(1, json.dumps(obj).encode()))
    except Exception:
        client.alive = False


def _ws_broadcast(obj) -> None:
    try:
        frame = _ws_frame(1, json.dumps(obj).encode())
    except Exception:
        return
    with WS_REG_LOCK:
        clients = list(WS_CLIENTS)
    for client in clients:
        _ws_send_frame(client, frame)


# ---------------- game actions (LOCK inside, data out) ----------------

def _h_state():
    with LOCK:
        return SESSION.snapshot()


def _h_report():
    try:
        from flycrush_py.data import load_json
        ok, rep = load_json("training-report.json")
        return rep if ok else {}
    except Exception:
        return {}


def _h_fly_step():
    with LOCK:
        return SESSION.fly_step()


def _h_human_move(body):
    with LOCK:
        return SESSION.human_move(body.get("cell"), body.get("dir"))


def _h_turbo(body):
    try:
        with LOCK:
            return SESSION.start_turbo((body or {}).get("episodes", 200))
    except Exception:
        return {"ok": False, "reason": "turbo-failed"}


def _h_new_game(body):
    with LOCK:
        try:
            if body.get("from_scratch"):
                from flycrush_py.rl import create_policy
                SESSION.policy = create_policy(1337)
                SESSION.prov = "random-init(from-scratch)"
            SESSION.new_game(body.get("moves") or SESSION.moves_total)
        except Exception:
            pass
        return SESSION.snapshot()


def _h_save():
    try:
        with LOCK:
            return SESSION.save()
    except Exception:
        return {"ok": False, "reason": "save-failed"}


WS_ACTIONS = {
    "state": lambda b: (_h_state(), False),
    "step": lambda b: (_h_fly_step(), True),
    "move": lambda b: (_h_human_move(b), True),
    "new": lambda b: (_h_new_game(b), True),
    "turbo": lambda b: (_h_turbo(b), True),
    "save": lambda b: (_h_save(), True),
}


def _ws_dispatch(kind: str, req: dict):
    action = WS_ACTIONS.get(kind)
    if not action:
        return None, False
    try:
        return action(req)
    except Exception:
        return None, False


# ---------------- HTTP plumbing ----------------

def _json(handler, obj, code=200):
    try:
        body = json.dumps(obj).encode()
    except Exception:
        body = b'{"ok":false,"reason":"encode"}'
        code = 500
    handler.send_response(code)
    handler.send_header("Content-Type", "application/json")
    handler.send_header("Content-Length", str(len(body)))
    handler.end_headers()
    try:
        handler.wfile.write(body)
    except Exception:
        pass


def _file(handler, path):
    try:
        with open(path, "rb") as fh:
            body = fh.read()
    except Exception:
        handler.send_response(404)
        handler.end_headers()
        return
    mime, _ = mimetypes.guess_type(path)
    handler.send_response(200)
    handler.send_header("Content-Type", mime or "application/octet-stream")
    handler.send_header("Content-Length", str(len(body)))
    handler.end_headers()
    try:
        handler.wfile.write(body)
    except Exception:
        pass


class Handler(BaseHTTPRequestHandler):
    server_version = "FlyCrush/1.1"
    timeout = 20  # bounds stalled-client socket ops; WS upgrades lift it below

    def log_message(self, *a):
        pass

    def _read_json(self):
        try:
            n = int(self.headers.get("Content-Length") or 0)
            if n <= 0 or n > 65536:
                return {}
            return json.loads(self.rfile.read(n).decode("utf-8") or "{}")
        except Exception:
            return {}

    # ---- websocket ----

    def _ws_handshake(self) -> bool:
        key = self.headers.get("Sec-WebSocket-Key")
        if not key or (self.headers.get("Upgrade") or "").lower() != "websocket":
            return False
        accept = base64.b64encode(hashlib.sha1((key + WS_GUID).encode()).digest()).decode()
        self.send_response(101)
        self.send_header("Upgrade", "websocket")
        self.send_header("Connection", "Upgrade")
        self.send_header("Sec-WebSocket-Accept", accept)
        self.end_headers()
        return True

    def _ws_read_exact(self, n: int):
        buf = b""
        while len(buf) < n:
            try:
                chunk = self.rfile.read(n - len(buf))
            except Exception:
                return None
            if not chunk:
                return None
            buf += chunk
        return buf

    def _ws_read_message(self):
        head = self._ws_read_exact(2)
        if head is None:
            return None
        opcode, b2 = head[0] & 0x0F, head[1]
        masked = bool(b2 & 0x80)
        length = b2 & 0x7F
        if length == 126:
            ext = self._ws_read_exact(2)
            if ext is None:
                return None
            length = struct.unpack("!H", ext)[0]
        elif length == 127:
            ext = self._ws_read_exact(8)
            if ext is None:
                return None
            length = struct.unpack("!Q", ext)[0]
        if length > 65536:
            return None
        mask = b"\x00\x00\x00\x00"
        if masked:
            mask = self._ws_read_exact(4)
            if mask is None:
                return None
        payload = self._ws_read_exact(length) if length else b""
        if payload is None:
            return None
        if masked:
            payload = bytes(b ^ mask[i % 4] for i, b in enumerate(payload))
        return opcode, payload

    def _ws_loop(self):
        self.connection.settimeout(None)  # long-lived channel; pings keep it alive
        client = WsClient(self)
        with WS_REG_LOCK:
            WS_CLIENTS.add(client)
        try:
            _ws_send(client, {"type": "snapshot", "data": _h_state()})
            while client.alive:
                msg = self._ws_read_message()
                if msg is None:
                    break
                opcode, payload = msg
                if opcode == 8:  # close
                    _ws_send_frame(client, _ws_frame(8, b""))
                    break
                if opcode == 9:  # ping -> pong
                    _ws_send_frame(client, _ws_frame(10, payload))
                    continue
                if opcode != 1:
                    continue
                try:
                    req = json.loads(payload.decode("utf-8") or "{}")
                except Exception:
                    req = {}
                if not isinstance(req, dict):
                    continue
                rid = req.get("id")
                data, changed = _ws_dispatch(str(req.get("type") or ""), req)
                if rid is not None:
                    _ws_send(client, {"id": rid, "ok": data is not None, "data": data})
                if changed:
                    _ws_broadcast({"type": "snapshot", "data": _h_state()})
        finally:
            with WS_REG_LOCK:
                WS_CLIENTS.discard(client)
            self.close_connection = True

    # ---- HTTP ----

    def do_GET(self):
        try:
            p = self.path.split("?", 1)[0]
            if p == "/ws":
                if not self._ws_handshake():
                    return _json(self, {"ok": False, "reason": "ws-upgrade-required"}, 400)
                self._ws_loop()
                return
            if p in ("/", "/index.html"):
                if HAS_WEB:
                    return _file(self, os.path.join(WEBDIST, "index.html"))
                self.send_response(200)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.send_header("Content-Length", str(len(_NOBUILD)))
                self.end_headers()
                try:
                    self.wfile.write(_NOBUILD)
                except Exception:
                    pass
                return
            if p.startswith("/assets/") and HAS_WEB:
                fp = os.path.normpath(os.path.join(WEBDIST, p.lstrip("/")))
                if fp.startswith(WEBDIST) and os.path.isfile(fp):
                    return _file(self, fp)
                return _json(self, {"ok": False, "reason": "not-found"}, 404)
            if p.startswith("/data/") and HAS_WEB:
                fp = os.path.normpath(os.path.join(WEBDIST, p.lstrip("/")))
                if fp.startswith(WEBDIST) and os.path.isfile(fp):
                    return _file(self, fp)
                return _json(self, {"ok": False, "reason": "not-found"}, 404)
            if p == "/TEMPLATE-LICENSE.txt" and HAS_WEB:
                return _file(self, os.path.join(WEBDIST, "TEMPLATE-LICENSE.txt"))
            if p.startswith("/public/data/"):
                name = os.path.basename(p)
                if name in ("connectome-subset.json", "readout-weights.json", "training-report.json"):
                    return _file(self, os.path.join(PUBDATA, name))
                return _json(self, {"ok": False, "reason": "not-found"}, 404)
            if p == "/api/state":
                return _json(self, _h_state())
            if p == "/api/report":
                return _json(self, _h_report())
            return _json(self, {"ok": False, "reason": "not-found"}, 404)
        except Exception:
            return _json(self, {"ok": False, "reason": "server-error"}, 500)

    def do_POST(self):
        try:
            p = self.path.split("?", 1)[0]
            body = self._read_json()
            if p == "/api/fly_step":
                return _json(self, _h_fly_step())
            if p == "/api/human_move":
                return _json(self, _h_human_move(body))
            if p == "/api/turbo":
                return _json(self, _h_turbo(body))
            if p == "/api/new_game":
                return _json(self, _h_new_game(body))
            if p == "/api/save":
                return _json(self, _h_save())
            return _json(self, {"ok": False, "reason": "not-found"}, 404)
        except Exception:
            return _json(self, {"ok": False, "reason": "server-error"}, 500)


def _ws_ticker():
    """Push turbo progress while a job runs; ping clients to keep channels alive."""
    last_ping = 0.0
    while True:
        time.sleep(1.5)
        try:
            with WS_REG_LOCK:
                clients = list(WS_CLIENTS)
            if not clients:
                continue
            if SESSION._job_snapshot().get("running"):
                _ws_broadcast({"type": "snapshot", "data": _h_state()})
            if time.time() - last_ping > 25:
                for client in clients:
                    _ws_send_frame(client, _ws_frame(9, b"hb"))
                last_ping = time.time()
        except Exception:
            pass


def main(argv=None):
    ap = argparse.ArgumentParser()
    ap.add_argument("--port", type=int, default=8000)
    ap.add_argument("--host", default="127.0.0.1")
    ap.add_argument("--moves", type=int, default=None, help="finite move limit (default: unlimited)")
    ap.add_argument("--from-scratch", action="store_true")
    args = ap.parse_args(argv)
    global SESSION
    SESSION = Session(moves=args.moves, from_scratch=args.from_scratch)
    threading.Thread(target=_ws_ticker, daemon=True).start()
    srv = ThreadingHTTPServer((args.host, args.port), Handler)
    print(f"FLYCRUSH web: http://localhost:{args.port}/  (backend+frontend, http+ws, stdlib only)")
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
