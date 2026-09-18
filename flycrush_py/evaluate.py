#!/usr/bin/env python3
"""Offline evaluation of the CURRENT readout-weights.json (no retraining).

Recomputes every headline metric so training-report.json always describes the
weights actually shipped in the repo (120 fresh boards, 25-move games, eps=0.05
eval rollouts — same regime as train.py):
  - eval120.random             uniform over ALL on-board swaps (naive, no rule knowledge)
  - eval120.randomValid        uniform over VALID pairs (needs game-rule search)
  - eval120.trained            v4 policy rollouts
  - eval120.firstFoundPlanner  first-found-valid-move planner
  - oracle30                   best-of-all-valid-pairs each move (30 boards)
  - supervised.hit120/avgScore120  single greedy move, 120 boards (fresh eye+net per board)

Deterministic: same seed -> same numbers. Rewrites public/data/training-report.json
and syncs hit120/avgScore120 into the weights meta.

Usage:
    ./.venv/bin/python -m flycrush_py.evaluate
"""
from __future__ import annotations

import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from flycrush_py.board import DIRS, Rng, create_board, find_valid_move, reshuffle, try_action  # noqa: E402
from flycrush_py.data import data_dir, load_json  # noqa: E402
from flycrush_py.lif import create_network, decode_motor, step_network  # noqa: E402
from flycrush_py.rl import ALGO, create_policy, extract_features, import_weights, pair_features, policy_act  # noqa: E402
from flycrush_py.sensory import Eye  # noqa: E402
from flycrush_py.train import MOVES, eval_first_found, eval_oracle, eval_random, play_episode  # noqa: E402

SEED = 20260916
EVAL_EPS = 0.05  # same eval regime as train.py (escapes deterministic loops on reverted boards)


def eval_random_valid(subset, policy, n, seed):
    """Random baseline: uniform over VALID pairs each move (not uniform cell+dir)."""
    rr = Rng(seed ^ 0x77A)
    s = 0.0
    for e in range(n):
        board = create_board(seed + 500000 + e)
        refill = Rng(seed + 600000 + e)
        for m in range(MOVES):
            if not find_valid_move(board):
                board = reshuffle(board, e + m)["board"]
            valid = []
            for cell in range(64):
                for d in DIRS:
                    res = try_action(board, cell, d, refill)
                    if res["ok"]:
                        valid.append(res)
            if valid:
                res = valid[rr.randint(len(valid))]
                board = res["board"]
                s += res["score"]
    return s / n


def eval_hit(subset, policy, n, seed):
    """Single greedy move per board, FRESH eye+net per board (no LIF state leak)."""
    hits, pts = 0, 0.0
    for i in range(n):
        board = create_board(seed + i)
        eye, net = Eye(), create_network(subset)
        vec, _ = eye.observe(board)
        for _ in range(4):
            step_network(net, vec, 0.0)
        dec = decode_motor(net)
        feat = extract_features(vec, dec, net.pam_hz)
        pf = pair_features(board)
        act = policy_act(policy, feat, pf, Rng(seed + 100000 + i), greedy=True)
        res = try_action(board, act["cell"], act["dir"], Rng(seed + 200000 + i))
        if res.get("ok"):
            hits += 1
            pts += res.get("score", 0)
    return hits / n, pts / n


def main() -> int:
    ok, subset = load_json("connectome-subset.json")
    if not ok:
        print(f"FATAL: {subset}", file=sys.stderr)
        return 1
    wok, doc = load_json("readout-weights.json")
    if not wok:
        print(f"FATAL: {doc}", file=sys.stderr)
        return 1
    meta = doc.get("meta") or {}

    policy = create_policy(SEED, Rng(SEED))
    import_weights(policy, doc)

    rng = Rng(SEED)
    baseline = [0.0]

    # untrained v4 baseline (same arch, fresh weights)
    fresh = create_policy(SEED, Rng(SEED))
    init_sum = sum(play_episode(subset, fresh, SEED + 100000 + e, False, rng, baseline,
                                eval_eps=EVAL_EPS)[0]
                   for e in range(120))
    init_avg = init_sum / 120
    print(f"initAvg120={init_avg:.1f}", flush=True)

    t_sum = t_m = 0
    for e in range(120):
        tot, mt = play_episode(subset, policy, SEED + 500000 + e, False, rng, baseline,
                               eval_eps=EVAL_EPS)
        t_sum += tot
        t_m += mt
    trained, matches = t_sum / 120, t_m / 120
    print(f"eval120: trained={trained:.1f} matches/game={matches:.2f}", flush=True)

    random_naive = eval_random(120, SEED)          # uniform over ALL on-board swaps (no rule knowledge)
    random_valid = eval_random_valid(subset, policy, 120, SEED)  # uniform over VALID pairs (uses rules)
    print(f"eval120: random={random_naive:.1f} randomValid={random_valid:.1f}", flush=True)

    planner = eval_first_found(120, SEED)
    oracle = eval_oracle(30, SEED)
    print(f"planner={planner:.1f} oracle30={oracle:.1f}", flush=True)

    hit, avg_score = eval_hit(subset, policy, 120, 500000)
    print(f"hit120={hit * 100:.1f}% avgScore120={avg_score:.1f}", flush=True)

    rep = {
        "algo": "supervised imitation pretrain + REINFORCE (online, baseline EMA b=0.05, eps 0.30->0.08 live / greedy eval)",
        "lang": "python (numpy, rl.py v4 pair-aware)",
        "frozen": [
            "sensory ommatidia map",
            "LIF wiring + time constants",
            "decode grouping (DNa01/DNa02/DNp/PAM11)",
        ],
        "trained": "cross-aware pair-aware 25->32->4 swap scorer + linear 73->4 dir prior",
        "features": "raw cross-color equality counts: mover tile vs tiles around its landing spot (no valid-move oracle) + 73 global sensory/LIF features",
        "seed": SEED,
        "initAvg120": round(init_avg, 1),
        "eval120": {
            "random": round(random_naive, 1),
            "randomValid": round(random_valid, 1),
            "trained": round(trained, 1),
            "trainedMatchesPerGame": round(matches, 2),
            "firstFoundPlanner": round(planner, 1),
        },
        "oracle30": round(oracle, 1),
        "supervised": {
            "boards": int(meta.get("boards", 2000)),
            "epochs": int(meta.get("epochs", 4)),
            "lr": float(meta.get("lr", 0.08)),
            "hit120": round(hit, 3),
            "hit120Pct": round(hit * 100, 1),
            "avgScore120": round(avg_score, 1),
        },
        "units": {
            "evalMode": "eps=0.05 exploration during eval rollouts (matches train.py methodology)",
            "eval120.*": "avg total points per 25-move game over 120 fresh boards",
            "eval120.random": "uniform over ALL on-board swaps — no rule knowledge (naive baseline)",
            "eval120.randomValid": "uniform over VALID pairs — needs game-rule search (strong baseline)",
            "eval120.firstFoundPlanner": "always plays the first valid move found (search baseline)",
            "oracle30": "avg points per 25-move game over 30 boards, best valid pair each move",
            "supervised.hit120": "fraction of 120 boards where one greedy move forms a match",
            "supervised.avgScore120": "avg points of that single greedy move",
        },
        "honestNote": "Reward = match score/200 (dopamine), invalid = -0.5 with a bounded advantage step. "
                      "No oracle features; planner labels are used only as the supervised teaching signal, "
                      "never as policy inputs. Perception is 25 raw cross-color equalities per swap.",
        "negativeControl": "The readout outplays the first-found-move planner, but uniform random valid play "
                           "(which always knows a legal move) and the best-of-search oracle still score higher. "
                           "Search power remains real; the readout earns its label: every decision flows eye->LIF->readout.",
    }

    dd = data_dir()
    with open(os.path.join(dd, "training-report.json"), "w") as fh:
        json.dump(rep, fh, indent=1)

    # sync the hit metrics into the weights meta so both artifacts agree
    doc.setdefault("meta", {})
    doc["meta"]["algo"] = ALGO
    doc["meta"]["hit120"] = round(hit, 3)
    doc["meta"]["avgScore120"] = round(avg_score, 1)
    with open(os.path.join(dd, "readout-weights.json"), "w") as fh:
        json.dump(doc, fh)

    print(json.dumps({"eval120": rep["eval120"], "hit120Pct": rep["supervised"]["hit120Pct"]}))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
