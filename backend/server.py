#!/usr/bin/env python3
"""FLYCRUSH backend: stdlib-only HTTP server (no pip dependencies).

Serves frontend/ + public/data/* statically and a JSON game API:

    GET  /api/state            full snapshot (board, stats, panels, curve)
    POST /api/fly_step         brain decides + applies + learns (animated steps out)
    POST /api/human_move       {cell, dir} validated swap (no learning)
    POST /api/new_game         {moves?, from_scratch?}
    POST /api/save              persist trained readout to readout-weights.json
    GET  /api/report           baked training-report.json (or {})

Run:
    ./.venv/bin/python -m backend.server [--port 8000] [--moves 25] [--from-scratch]
Then open http://localhost:8000/
"""
from __future__ import annotations

import argparse
import json
import mimetypes
import os
import sys
import threading
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from backend.session import Session  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONT = os.path.join(ROOT, "frontend")
WEBDIST = os.path.join(ROOT, "web", "dist")
PUBDATA = os.path.join(ROOT, "public", "data")

HAS_WEB = os.path.isfile(os.path.join(WEBDIST, "index.html"))

SESSION = Session()
LOCK = threading.Lock()


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
    server_version = "FlyCrush/1.0"

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

    def do_GET(self):
        try:
            p = self.path.split("?", 1)[0]
            if p in ("/", "/index.html"):
                if HAS_WEB:
                    return _file(self, os.path.join(WEBDIST, "index.html"))
                return _file(self, os.path.join(FRONT, "index.html"))
            if p.startswith("/assets/") and HAS_WEB:
                fp = os.path.normpath(os.path.join(WEBDIST, p.lstrip("/")))
                if fp.startswith(WEBDIST) and os.path.isfile(fp):
                    return _file(self, fp)
                return _json(self, {"ok": False, "reason": "not-found"}, 404)
            if p == "/app.js":
                return _file(self, os.path.join(FRONT, "app.js"))
            if p == "/classic":
                return _file(self, os.path.join(FRONT, "index.html"))
            if p.startswith("/public/data/"):
                name = os.path.basename(p)
                if name in ("connectome-subset.json", "readout-weights.json", "training-report.json"):
                    return _file(self, os.path.join(PUBDATA, name))
                return _json(self, {"ok": False, "reason": "not-found"}, 404)
            if p == "/api/state":
                with LOCK:
                    return _json(self, SESSION.snapshot())
            if p == "/api/report":
                try:
                    from flycrush_py.data import load_json
                    ok, rep = load_json("training-report.json")
                    return _json(self, rep if ok else {})
                except Exception:
                    return _json(self, {})
            return _json(self, {"ok": False, "reason": "not-found"}, 404)
        except Exception:
            return _json(self, {"ok": False, "reason": "server-error"}, 500)

    def do_POST(self):
        try:
            p = self.path.split("?", 1)[0]
            body = self._read_json()
            with LOCK:
                if p == "/api/fly_step":
                    return _json(self, SESSION.fly_step())
                if p == "/api/human_move":
                    return _json(self, SESSION.human_move(body.get("cell"), body.get("dir")))
                if p == "/api/turbo":
                    try:
                        return _json(self, SESSION.start_turbo((body or {}).get("episodes", 200)))
                    except Exception:
                        return _json(self, {"ok": False, "reason": "turbo-failed"})
                if p == "/api/new_game":
                    try:
                        fs = bool(body.get("from_scratch"))
                        if fs:
                            from flycrush_py.rl import create_policy
                            SESSION.policy = create_policy(1337)
                            SESSION.prov = "random-init(from-scratch)"
                        SESSION.new_game(body.get("moves") or SESSION.moves_total)
                    except Exception:
                        pass
                    return _json(self, SESSION.snapshot())
                if p == "/api/save":
                    try:
                        return _json(self, SESSION.save())
                    except Exception:
                        return _json(self, {"ok": False, "reason": "save-failed"})
            return _json(self, {"ok": False, "reason": "not-found"}, 404)
        except Exception:
            return _json(self, {"ok": False, "reason": "server-error"}, 500)


def main(argv=None):
    ap = argparse.ArgumentParser()
    ap.add_argument("--port", type=int, default=8000)
    ap.add_argument("--host", default="127.0.0.1")
    ap.add_argument("--moves", type=int, default=None, help="finite move limit (default: unlimited)")
    ap.add_argument("--from-scratch", action="store_true")
    args = ap.parse_args(argv)
    global SESSION
    SESSION = Session(moves=args.moves, from_scratch=args.from_scratch)
    srv = ThreadingHTTPServer((args.host, args.port), Handler)
    print(f"FLYCRUSH web: http://localhost:{args.port}/  (backend+frontend, offline, stdlib only)")
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
