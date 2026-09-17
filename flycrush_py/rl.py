"""REINFORCE readout v4 — PAIR-AWARE tiled scorer.

Joint 256-way: for each valid (cell,dir) pair, concatenate 10-dim features
of the cell AND its directed neighbor (20-dim total) -> shared H=32 MLP
-> 4 dir logits per cell. This lets the net see BOTH sides of the swap,
which is required to tell whether swapping will form a 3-run.
Plus 73->4 descending prior. Valid-pair edge-masked softmax over 256.
Hile yok: pair features are raw 2-neighbor color equalities, never search.
"""
from __future__ import annotations

from dataclasses import dataclass, field

import numpy as np

from .board import DIRS, Rng, valid_dirs

FEAT_DIM, CELL_F, PAIR_F, CELL_H, CELL_N, DIR_N, ACT_N = 73, 10, 20, 32, 64, 4, 256
DEFAULT_LR = 0.05

_PAIR_MASK = np.zeros(ACT_N, dtype=bool)
_PAIR_NEIGH = np.full(ACT_N, -1, dtype=int)
for _cell in range(64):
    _vd = valid_dirs(_cell)
    r, c = divmod(_cell, 8)
    for _i, _d in enumerate(DIRS):
        idx = _cell * 4 + _i
        _PAIR_MASK[idx] = _vd[_d]
        if _vd[_d]:
            dr, dc = ({"up": (-1, 0), "down": (1, 0), "left": (0, -1), "right": (0, 1)}[_d])
            _PAIR_NEIGH[idx] = (r + dr) * 8 + (c + dc)

def pair_cell(a: int) -> int:
    return a // 4

def pair_dir(a: int) -> int:
    return a % 4

def extract_features(vec, decode: dict, pam_hz: float = 0.0) -> np.ndarray:
    f = np.zeros(FEAT_DIM)
    try:
        v = np.asarray(vec, dtype=float).ravel()
        f[0:48] = v[0:48] if len(v) >= 48 else 0.0
        f[48:56] = (decode.get("col_acts") or [0] * 8)[:8]
        f[56:64] = (decode.get("row_acts") or [0] * 8)[:8]
        dd = decode.get("dirs") or {}
        for i, d in enumerate(DIRS):
            f[64 + i] = dd.get(d, 0.0)
        f[68] = max(0.0, min(1.0, decode.get("gate", 0.0)))
        f[69] = max(0.0, min(1.0, (pam_hz or 0.0) / 120.0))
        f[70] = 1.0
    except Exception:
        pass
    return f

def _cell_color(board, r, c) -> int:
    try:
        v = board[r][c]
        return v if isinstance(v, int) and 0 <= v < 6 else -1
    except Exception:
        return -1

def cell_features(board) -> np.ndarray:
    out = np.zeros((CELL_N, CELL_F))
    try:
        ds = ((-1, 0), (1, 0), (0, -1), (0, 1))
        for r in range(8):
            for c in range(8):
                k = r * 8 + c
                col = _cell_color(board, r, c)
                out[k, 0] = col / 5.0 if col >= 0 else 0.0
                edge = 0
                for i, (dr, dc) in enumerate(ds):
                    r1, c1, r2, c2 = r + dr, c + dc, r + 2 * dr, c + 2 * dc
                    if not (0 <= r1 < 8 and 0 <= c1 < 8):
                        edge += 1
                        continue
                    if col >= 0 and _cell_color(board, r1, c1) == col:
                        out[k, 1 + i] = 1.0
                        if 0 <= r2 < 8 and 0 <= c2 < 8 and _cell_color(board, r2, c2) == col:
                            out[k, 5 + i] = 1.0
                out[k, 9] = edge / 4.0
    except Exception:
        pass
    return out

@dataclass
class Policy:
    seed: int = 1337
    W1: np.ndarray = field(default_factory=lambda: np.zeros((PAIR_F, CELL_H)))
    b1: np.ndarray = field(default_factory=lambda: np.zeros(CELL_H))
    W2: np.ndarray = field(default_factory=lambda: np.zeros((CELL_H, DIR_N)))
    b2: np.ndarray = field(default_factory=lambda: np.zeros(DIR_N))
    Wprior: np.ndarray = field(default_factory=lambda: np.zeros((FEAT_DIM, DIR_N)))

def create_policy(seed: int = 1337, rng: Rng | None = None) -> Policy:
    rng = rng or Rng(seed)
    def small(shape, scale):
        return np.array([[rng.random() * 2 - 1 for _ in range(shape[1])] for _ in range(shape[0])]) * scale
    return Policy(
        seed=seed,
        W1=small((PAIR_F, CELL_H), (1.0 / PAIR_F) ** 0.5),
        b1=np.zeros(CELL_H),
        W2=small((CELL_H, DIR_N), (1.0 / CELL_H) ** 0.5),
        b2=np.zeros(DIR_N),
        Wprior=small((FEAT_DIM, DIR_N), (1.0 / FEAT_DIM) ** 0.5),
    )

def forward(policy: Policy, feat: np.ndarray, cf: np.ndarray):
    prior = feat @ policy.Wprior  # 4
    logits = np.full(ACT_N, -1e9)
    hid_cache = np.zeros((ACT_N, CELL_H))
    for cell in range(CELL_N):
        base = cf[cell]
        for di in range(DIR_N):
            idx = cell * 4 + di
            if not _PAIR_MASK[idx]:
                continue
            nb = int(_PAIR_NEIGH[idx])
            nf = cf[nb] if 0 <= nb < CELL_N else np.zeros(CELL_F)
            pv = np.concatenate((base, nf))  # 20
            z = pv @ policy.W1 + policy.b1
            h = np.tanh(np.clip(z, -6, 6))
            hid_cache[idx] = h
            s = float(h @ policy.W2[:, di] + policy.b2[di] + prior[di])
            logits[idx] = max(-30, min(30, s))
    m = logits[_PAIR_MASK].max()
    e = np.zeros(ACT_N)
    e[_PAIR_MASK] = np.exp(logits[_PAIR_MASK] - m)
    probs = e / e.sum()
    return np.clip(logits, -30, 30), probs, hid_cache

def _sample(probs: np.ndarray, rng: Rng) -> int:
    u, acc = rng.random(), 0.0
    for i, p in enumerate(probs):
        acc += p
        if u <= acc:
            return i
    return len(probs) - 1

def policy_act(policy: Policy, feat, cf, rng: Rng, epsilon=0.05, greedy=False) -> dict:
    _, probs, _ = forward(policy, feat, cf)
    if greedy:
        masked = np.where(_PAIR_MASK, probs, -1.0)
        pair = int(masked.argmax())
    elif rng.random() < epsilon:
        while True:
            pair = rng.randint(ACT_N)
            if _PAIR_MASK[pair]:
                break
    else:
        pair = _sample(probs, rng)
    if not _PAIR_MASK[pair]:
        pair = 0
    cell, di = pair_cell(pair), pair_dir(pair)
    best = max((probs[cell * 4 + d] for d in range(4) if _PAIR_MASK[cell * 4 + d]), default=0.0)
    return {"cell": cell, "di": di, "dir": DIRS[di], "probs": probs, "gate": round(float(best), 3)}

def reinforce_update(policy: Policy, feat, cf, cell: int, di: int, adv: float, lr: float = DEFAULT_LR):
    try:
        _, probs, hid_cache = forward(policy, feat, cf)
        sel = cell * 4 + di
        k = lr * adv
        onehot = np.zeros(ACT_N)
        onehot[sel] = 1.0
        g = (onehot - probs) * k
        g4 = g.reshape(64, 4)
        gsum_dir = np.where(_PAIR_MASK.reshape(64, 4), g4, 0.0).sum(axis=0)
        policy.Wprior += np.outer(feat, gsum_dir)
        mask4 = _PAIR_MASK.reshape(64, 4)
        d_out = np.where(mask4, g4, 0.0)
        for di2 in range(DIR_N):
            col = d_out[:, di2]
            active = col != 0
            if not np.any(active):
                continue
            for cell_idx in np.where(active)[0]:
                idx = cell_idx * 4 + di2
                h = hid_cache[idx]
                gval = col[cell_idx]
                policy.W2[:, di2] += gval * h
                dh = gval * (policy.W2[:, di2] * (1 - h * h))
                policy.b1 += dh * 0.25
                nb = int(_PAIR_NEIGH[idx])
                base_pf = cf[cell_idx]; nf = cf[nb] if 0 <= nb < CELL_N else np.zeros(CELL_F)
                pv = np.concatenate((base_pf, nf))
                policy.W1 += np.outer(pv, dh)
        policy.b2 += d_out.sum(axis=0) * 0.25
        for arr in (policy.W1, policy.W2, policy.Wprior, policy.b1, policy.b2):
            np.nan_to_num(arr, copy=False)
            np.clip(arr, -5, 5, out=arr)
    except Exception:
        pass

def supervised_update(policy: Policy, feat, cf, valid_pairs: list[int], lr: float = 0.08):
    """One CE step toward uniform over valid_pairs. No search at inference."""
    try:
        if not valid_pairs:
            return 0.0
        _, probs, hid_cache = forward(policy, feat, cf)
        target = np.zeros(ACT_N)
        for p in valid_pairs:
            if 0 <= p < ACT_N and _PAIR_MASK[p]:
                target[p] = 1.0 / len(valid_pairs)
        # gradient = probs - target (minimize CE)
        g = (probs - target) * lr
        g4 = g.reshape(64, 4)
        gsum_dir = np.where(_PAIR_MASK.reshape(64, 4), g4, 0.0).sum(axis=0)
        policy.Wprior -= np.outer(feat, gsum_dir)
        mask4 = _PAIR_MASK.reshape(64, 4)
        d_out = np.where(mask4, g4, 0.0)
        # W2/b2
        for di2 in range(DIR_N):
            col = d_out[:, di2]
            if not np.any(col != 0):
                continue
            for cell_idx in np.where(col != 0)[0]:
                idx = cell_idx * 4 + di2
                h = hid_cache[idx]
                gval = col[cell_idx]
                policy.W2[:, di2] -= gval * h
                dh = gval * (policy.W2[:, di2] * (1 - h * h))
                policy.b1 -= dh * 0.25
                nb = int(_PAIR_NEIGH[idx])
                base_pf = cf[cell_idx]; nf = cf[nb] if 0 <= nb < CELL_N else np.zeros(CELL_F)
                pv = np.concatenate((base_pf, nf))
                policy.W1 -= np.outer(pv, dh)
        policy.b2 -= d_out.sum(axis=0) * 0.25
        for arr in (policy.W1, policy.W2, policy.Wprior, policy.b1, policy.b2):
            np.nan_to_num(arr, copy=False)
            np.clip(arr, -5, 5, out=arr)
        # loss for logging
        loss = -sum(target[p] * np.log(max(1e-9, probs[p])) for p in valid_pairs)
        return float(loss)
    except Exception:
        return 0.0

def shape_reward(result) -> float:
    try:
        if (result or {}).get("ok"):
            return min(3.0, (result.get("score") or 0) / 200.0)
        return -0.05
    except Exception:
        return 0.0

def export_weights(policy: Policy, meta_extra: dict | None = None) -> dict:
    meta = {
        "algo": "REINFORCE v4 pair-aware 20->32->4 + 73->4 prior (frozen LIF)",
        "arch": {"CF": CELL_F, "PF": PAIR_F, "H": CELL_H, "C": CELL_N, "D": DIR_N, "F": FEAT_DIM},
        "seed": policy.seed,
        **(meta_extra or {}),
    }
    return {
        "meta": meta,
        "W1": policy.W1.ravel().tolist(),
        "b1": policy.b1.tolist(),
        "W2": policy.W2.ravel().tolist(),
        "b2": policy.b2.tolist(),
        "Wprior": policy.Wprior.ravel().tolist(),
    }

def import_weights(policy: Policy, doc: dict) -> bool:
    a = (doc.get("meta") or {}).get("arch") or {}
    if not (a.get("CF") == CELL_F and a.get("PF", PAIR_F) == PAIR_F and a.get("H") == CELL_H and a.get("C") == CELL_N and a.get("D") == DIR_N and a.get("F") == FEAT_DIM):
        raise ValueError("readout arch mismatch")
    for key, arr, shape in (
        ("W1", policy.W1, (PAIR_F, CELL_H)), ("b1", policy.b1, (CELL_H,)),
        ("W2", policy.W2, (CELL_H, DIR_N)), ("b2", policy.b2, (DIR_N,)),
        ("Wprior", policy.Wprior, (FEAT_DIM, DIR_N)),
    ):
        src = doc.get(key)
        if not isinstance(src, list):
            raise ValueError(f"weight shape {key}")
        v = np.array(src, dtype=float).reshape(shape)
        if not np.all(np.isfinite(v)):
            raise ValueError(f"non-finite weight {key}")
        np.copyto(arr, np.clip(v, -5, 5))
    return True
