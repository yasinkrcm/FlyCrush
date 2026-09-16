"""Board engine: pure deterministic match-3 (mirrors board.mjs semantics).

mulberry32 is bit-compatible with the JS version so seeded boards match.
"""
from __future__ import annotations

ROWS, COLS, NCOL = 8, 8, 6
DIRS = ("up", "down", "left", "right")
_DV = {"up": (-1, 0), "down": (1, 0), "left": (0, -1), "right": (0, 1)}
_MASK = 0xFFFFFFFF


def _u32(x: int) -> int:
    return x & _MASK


class Rng:
    """Bit-compatible mulberry32."""

    def __init__(self, seed: int):
        self.a = _u32(seed) or 1

    def random(self) -> float:
        self.a = _u32(self.a + 0x6D2B79F5)
        t = _u32((self.a ^ (self.a >> 15)) * ((self.a | 1) & _MASK))
        t = _u32(t + _u32((t ^ (t >> 7)) * ((t | 61) & _MASK))) ^ t
        return (_u32(t ^ (t >> 14))) / 4294967296.0

    def randint(self, n: int) -> int:
        return int(self.random() * n)


def clone_board(b):
    try:
        return [row[:] for row in b]
    except Exception:
        return []


def create_board(seed: int):
    rng = Rng(seed)
    b = []
    for r in range(ROWS):
        b.append([])
        for c in range(COLS):
            v, g = 0, 0
            while True:
                v = rng.randint(NCOL)
                g += 1
                if g > 60:
                    break
                horiz = c >= 2 and b[r][c - 1] == v and b[r][c - 2] == v
                vert = r >= 2 and b[r - 1][c] == v and b[r - 2][c] == v
                if not (horiz or vert):
                    break
            b[r].append(v)
    return b


def find_matches(board) -> list:
    try:
        if not board or not board[0]:
            return []
        rows, cols = len(board), len(board[0])
        marked = set()
        for r in range(rows):
            run = 1
            for c in range(1, cols + 1):
                cur = board[r][c] if c < cols else None
                prev = board[r][c - 1]
                if c < cols and cur == prev and isinstance(cur, int):
                    run += 1
                else:
                    if run >= 3 and isinstance(prev, int):
                        for k in range(c - run, c):
                            marked.add((r, k))
                    run = 1
        for c in range(cols):
            run = 1
            for r in range(1, rows + 1):
                cur = board[r][c] if r < rows else None
                prev = board[r - 1][c]
                if r < rows and cur == prev and isinstance(cur, int):
                    run += 1
                else:
                    if run >= 3 and isinstance(prev, int):
                        for k in range(r - run, r):
                            marked.add((k, c))
                    run = 1
        return list(marked)
    except Exception:
        return []


def _collapse(board, cells, rng: Rng):
    rows, cols = len(board), len(board[0])
    gone = set(cells)
    for c in range(cols):
        col = [board[r][c] for r in range(rows - 1, -1, -1) if (r, c) not in gone]
        while len(col) < rows:
            col.append(rng.randint(NCOL))
        for r, i in zip(range(rows - 1, -1, -1), range(len(col))):
            board[r][c] = col[i]


def score_for_match(n: int) -> int:
    if n >= 5:
        return 200 + (n - 5) * 60
    if n == 4:
        return 120
    return 60


def resolve_cascades(board, rng: Rng, max_steps: int = 50):
    b = clone_board(board)
    score = casc = removed = 0
    steps = []
    for _ in range(max_steps):
        m = find_matches(b)
        if not m:
            break
        casc += 1
        removed += len(m)
        pts = score_for_match(len(m)) * casc
        score += pts
        steps.append({"cascade": casc, "removed": len(m), "points": pts})
        _collapse(b, m, rng)
    return {"board": b, "score": score, "cascades": casc, "removed": removed, "steps": steps}


def try_action(board, cell: int, direction: str, rng: Rng):
    def bad(reason):
        return {"ok": False, "reason": reason, "board": clone_board(board), "score": 0, "removed": 0}

    try:
        r1, c1 = divmod(cell, 8)
        d = _DV.get(direction)
        if d is None:
            return bad("bad-dir")
        r2, c2 = r1 + d[0], c1 + d[1]
        if not (0 <= r2 < ROWS and 0 <= c2 < COLS):
            return bad("off-board")
        b = clone_board(board)
        b[r1][c1], b[r2][c2] = b[r2][c2], b[r1][c1]
        if not find_matches(b):
            return {"ok": False, "reason": "no-match", "board": clone_board(board), "score": 0, "removed": 0}
        res = resolve_cascades(b, rng)
        return {"ok": True, "reason": "match", **res}
    except Exception:
        return bad("exception")


def find_valid_move(board):
    try:
        if not board:
            return None
        for r in range(ROWS):
            for c in range(COLS):
                for dr, dc in ((0, 1), (1, 0)):
                    r2, c2 = r + dr, c + dc
                    if r2 >= ROWS or c2 >= COLS:
                        continue
                    board[r][c], board[r2][c2] = board[r2][c2], board[r][c]
                    hit = bool(find_matches(board))
                    board[r2][c2], board[r][c] = board[r][c], board[r2][c2]
                    if hit:
                        return {"r1": r, "c1": c, "r2": r2, "c2": c2}
        return None
    except Exception:
        return None


def reshuffle(board, seed: int):
    try:
        flat = [v for row in board for v in row]
        for a in range(200):
            rng = Rng((seed + a * 7919) & _MASK)
            arr = flat[:]
            for i in range(len(arr) - 1, 0, -1):
                j = rng.randint(i + 1)
                arr[i], arr[j] = arr[j], arr[i]
            b = [arr[r * COLS:(r + 1) * COLS] for r in range(ROWS)]
            if not find_matches(b) and find_valid_move(b):
                return {"board": b}
        return {"board": create_board((seed + 999) & _MASK), "fallback": True}
    except Exception:
        return {"board": create_board(1234), "fallback": True}


def valid_dirs(cell: int) -> dict:
    r, c = divmod(cell, 8)
    return {"up": r > 0, "down": r < 7, "left": c > 0, "right": c < 7}
