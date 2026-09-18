"""Deterministic LIF network over the static subset (mirrors lif.mjs).

Vectorized with numpy. Weights come ONLY from the JSON doc.
"""
from __future__ import annotations

from dataclasses import dataclass, field

import numpy as np

GATE_DEFAULT = 0.55
DT_MS = 10.0
_SENSORY_GAIN = 2.2

_LAYER_P = {
    "optic": (12.0, 1.0),
    "descending": (20.0, 1.0),
    "modulatory": (30.0, 1.0),
}


def _layer_of(ntype: str) -> str:
    if ntype in ("T4", "T5", "LC11", "LC15", "LC26"):
        return "optic"
    if ntype in ("DNa01", "DNa02", "DNp"):
        return "descending"
    return "modulatory"


@dataclass
class Net:
    n: int = 0
    v: np.ndarray = field(default_factory=lambda: np.zeros(0))
    ref: np.ndarray = field(default_factory=lambda: np.zeros(0))
    spikes: np.ndarray = field(default_factory=lambda: np.zeros(0, dtype=np.int8))
    rate: np.ndarray = field(default_factory=lambda: np.zeros(0))
    tau: np.ndarray = field(default_factory=lambda: np.ones(0))
    thr: np.ndarray = field(default_factory=lambda: np.ones(0))
    optic: np.ndarray = field(default_factory=lambda: np.zeros(0, dtype=np.int64))
    col: list = field(default_factory=list)
    row: list = field(default_factory=list)
    gate: list = field(default_factory=list)
    dir_idx: dict = field(default_factory=dict)
    pam: list = field(default_factory=list)
    pre: np.ndarray = field(default_factory=lambda: np.zeros(0, dtype=np.int64))
    post: np.ndarray = field(default_factory=lambda: np.zeros(0, dtype=np.int64))
    w: np.ndarray = field(default_factory=lambda: np.zeros(0))
    prev_spike: np.ndarray = field(default_factory=lambda: np.zeros(0, dtype=bool))
    pam_hz: float = 0.0
    tick: int = 0


def create_network(subset: dict) -> Net:
    net = Net()
    try:
        neurons = subset.get("neurons") or []
        n = len(neurons)
        net.n = n
        net.v = np.zeros(n)
        net.ref = np.zeros(n)
        net.spikes = np.zeros(n, dtype=np.int8)
        net.rate = np.zeros(n)
        net.tau = np.ones(n)
        net.thr = np.ones(n)
        idx_of, optic = {}, []
        for i, nr in enumerate(neurons):
            if not isinstance(nr, dict):
                continue
            idx_of[nr.get("id")] = i
            layer = _layer_of(nr.get("type"))
            tau, thr = _LAYER_P[layer]
            net.tau[i], net.thr[i] = tau, thr
            if layer == "optic":
                optic.append(i)
        net.optic = np.array(optic, dtype=np.int64)

        def group(ids):
            return [idx_of[i] for i in (ids or []) if i in idx_of]

        dec = subset.get("decoders") or {}
        net.col = group(dec.get("colIds"))[:8]
        net.row = group(dec.get("rowIds"))[:8]
        net.gate = group(dec.get("gateIds"))
        net.pam = group(dec.get("pamIds"))
        for d in ("up", "down", "left", "right"):
            i = idx_of.get((dec.get("dirIds") or {}).get(d))
            if i is not None:
                net.dir_idx[d] = i
        pre, post, w = [], [], []
        for e in subset.get("weights") or []:
            try:
                a, b, wv = int(e[0]), int(e[1]), float(e[2])
            except Exception:
                continue
            if 0 <= a < n and 0 <= b < n and np.isfinite(wv):
                pre.append(a)
                post.append(b)
                w.append(wv)
        net.pre = np.array(pre, dtype=np.int64)
        net.post = np.array(post, dtype=np.int64)
        net.w = np.array(w, dtype=np.float64)
        net.prev_spike = np.zeros(n, dtype=bool)
    except Exception:
        pass
    return net


def reset_network(net: Net) -> None:
    """Clear dynamic state (membrane, refractory, rates) — wiring untouched.

    Live play calls this before every decision so perception always matches
    the training regime: fresh eye + 4 LIF steps on the current board.
    """
    try:
        if net.n:
            net.v[:] = 0.0
            net.ref[:] = 0.0
            net.spikes[:] = 0
            net.rate[:] = 0.0
            net.prev_spike[:] = False
        net.pam_hz = 0.0
        net.tick = 0
    except Exception:
        pass


def step_network(net: Net, vec: np.ndarray, pam_drive: float = 0.0) -> int:
    """One fixed LIF step. Returns spike count. NaN-proof."""
    try:
        n = net.n
        if n == 0:
            return 0
        net.spikes[:] = 0
        dim = len(vec) if vec is not None else 0
        # Total current: sensory (optic) + synaptic + PAM modulatory, then ONE
        # uniform integrate below. (Old code drove optic first and decayed it
        # 83% in the same step's leak pass — nothing ever spiked.)
        cur = np.zeros(n)
        if len(net.optic) and dim:
            idx = net.optic
            s = np.array([vec[k % dim] for k in range(len(idx))], dtype=np.float64)
            cur[idx] += _SENSORY_GAIN * s
        if len(net.pre):
            fired = net.prev_spike[net.pre]
            if fired.any():
                np.add.at(cur, net.post[fired], net.w[fired])
        if net.pam:
            cur[np.array(net.pam)] += pam_drive
        avail = net.ref <= 0
        net.ref[net.ref > 0] -= 1
        vv = net.v + (DT_MS / net.tau) * (cur - net.v)
        vv[~np.isfinite(vv)] = 0.0
        np.clip(vv, -2.0, 4.0, out=vv)
        fired_now = avail & (vv >= net.thr)
        net.spikes[fired_now] = 1
        net.rate[fired_now] += 0.25 * (1.0 - net.rate[fired_now])
        net.rate[~fired_now] *= 0.985
        vv[fired_now] = 0.0
        net.ref[fired_now] = 2
        net.v = vv
        net.prev_spike = fired_now
        net.pam_hz = float(net.rate[net.pam].mean() * 100.0) if net.pam else 0.0
        net.tick += 1
        return int(fired_now.sum())
    except Exception:
        return 0


def decode_motor(net: Net, gate_thr: float = GATE_DEFAULT) -> dict:
    out = {"L": 0, "R": 0, "gate": 0.0, "dir": "up",
           "dirs": {"up": 0.0, "down": 0.0, "left": 0.0, "right": 0.0},
           "col_acts": [], "row_acts": [], "committed": False}
    try:
        def act(i):
            return float(net.rate[i]) + max(0.0, float(net.v[i])) * 0.15

        best, bv = 0, -1e18
        for k, i in enumerate(net.col):
            a = act(i)
            out["col_acts"].append(round(a, 3))
            if a > bv:
                bv, best = a, k
        out["L"] = max(0, min(7, best))
        best, bv = 0, -1e18
        for k, i in enumerate(net.row):
            a = act(i)
            out["row_acts"].append(round(a, 3))
            if a > bv:
                bv, best = a, k
        out["R"] = max(0, min(7, best))
        gs = sum(act(i) for i in net.gate)
        out["gate"] = min(1.0, gs / len(net.gate)) if net.gate else 0.0
        out["committed"] = out["gate"] >= gate_thr
        bd, bdv = "up", -1e18
        for d in ("up", "down", "left", "right"):
            i = net.dir_idx.get(d)
            a = 0.0 if i is None else act(i)
            out["dirs"][d] = round(min(1.0, a), 3)
            if a > bdv:
                bdv, bd = a, d
        out["dir"] = bd
    except Exception:
        pass
    return out


def reward_drive(removed: int) -> float:
    try:
        r = int(removed)
    except Exception:
        return 0.0
    if r >= 5:
        return 1.6
    if r == 4:
        return 1.1
    if r >= 3:
        return 0.7
    return 0.0
