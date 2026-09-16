"""Fly eye model: 8x8 board -> 48-dim optic vector (mirrors sensory.mjs)."""
from __future__ import annotations

import numpy as np

BOARD_N = 8
REGION_N = 4
INPUT_DIM = 48

_LUMA = np.array([0.32, 0.72, 0.62, 0.55, 0.38, 0.48], dtype=np.float64)
_OPP = np.array(
    [[-0.5, 0.6], [0.3, 0.5], [-0.4, -0.7], [0.8, -0.4], [-0.2, 0.1], [0.5, 0.5]],
    dtype=np.float64,
)


def _cell(board, r, c) -> int:
    try:
        v = board[r][c]
        return v if isinstance(v, int) and 0 <= v < 6 else 0
    except Exception:
        return 0


def board_to_regions(board):
    lum = np.zeros(16)
    opp_a = np.zeros(16)
    opp_b = np.zeros(16)
    for br in range(4):
        for bc in range(4):
            l = a = b = 0.0
            for dr in range(2):
                for dc in range(2):
                    col = _cell(board, br * 2 + dr, bc * 2 + dc)
                    l += _LUMA[col]
                    a += _OPP[col, 0]
                    b += _OPP[col, 1]
            k = br * 4 + bc
            lum[k], opp_a[k], opp_b[k] = l / 4.0, a / 4.0, b / 4.0
    return lum, opp_a, opp_b


def region_contrast(lum: np.ndarray) -> np.ndarray:
    out = np.zeros(16)
    for r in range(4):
        for c in range(4):
            s = n = 0.0
            if r > 0:
                s += lum[(r - 1) * 4 + c]
                n += 1
            if r < 3:
                s += lum[(r + 1) * 4 + c]
                n += 1
            if c > 0:
                s += lum[r * 4 + c - 1]
                n += 1
            if c < 3:
                s += lum[r * 4 + c + 1]
                n += 1
            out[r * 4 + c] = abs(lum[r * 4 + c] - s / n) if n else 0.0
    return out


class Eye:
    """Stateful eye: remembers previous frame for T4/T5-style motion channels."""

    def __init__(self):
        self.prev = None

    def reset(self):
        self.prev = None

    def observe(self, board):
        try:
            lum, opp_a, opp_b = board_to_regions(board)
        except Exception:
            lum, opp_a, opp_b = np.zeros(16), np.zeros(16), np.zeros(16)
        contrast = region_contrast(lum)
        v = np.zeros(INPUT_DIM)
        v[0:16] = lum
        v[16:32] = contrast
        for i in range(8):
            a, b = opp_a[i * 2], opp_b[i * 2]
            v[32 + i] = min(1.0, a * a + b * b)
        v[40] = opp_a.mean()
        v[41] = opp_b.mean()
        if self.prev is not None:
            for i in range(6):
                seg = slice(i * 2, min(16, i * 2 + 3))
                v[42 + i] = min(1.0, float(np.abs(lum[seg] - self.prev[seg]).sum()))
        self.prev = lum
        return v, contrast
