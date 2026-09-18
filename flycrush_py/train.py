#!/usr/bin/env python3
"""Offline REINFORCE trainer. Bakes public/data/readout-weights.json + training-report.json.

Usage:
    ./.venv/bin/python -m flycrush_py.train [--episodes 1200] [--seed 20260916]

Frozen: sensory map + LIF wiring (only the 536-weight readout learns).
Deterministic: same seed -> same weights. No network, ever.
"""
from __future__ import annotations

import argparse
import json
import os
import sys
from datetime import datetime, timezone

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from flycrush_py.board import (  # noqa: E402
    DIRS, Rng, create_board, find_valid_move, reshuffle, try_action,
)
from flycrush_py.data import data_dir, load_json  # noqa: E402
from flycrush_py.lif import create_network, decode_motor, reset_network, reward_drive, step_network  # noqa: E402
from flycrush_py.rl import (  # noqa: E402
    DEFAULT_LR, create_policy, export_weights,
    extract_features, pair_features, policy_act, reinforce_update, shape_reward,
)
from flycrush_py.sensory import Eye  # noqa: E402

MOVES, LIF_STEPS, EPS = 25, 4, 0.12


def play_episode(subset, policy, board_seed: int, train: bool, rng: Rng, baseline: list, eval_eps=0.0):
    board = create_board(board_seed)
    eye, net = Eye(), create_network(subset)
    pam_drive, total, matches = 0.0, 0, 0
    refill = Rng(board_seed ^ 0x9E37)
    for m in range(MOVES):
        if not find_valid_move(board):
            board = reshuffle(board, board_seed + m)["board"]
        eye.reset()
        reset_network(net)
        vec, _ = eye.observe(board)
        for _ in range(LIF_STEPS):
            step_network(net, vec, pam_drive)
            pam_drive *= 0.9
        dec = decode_motor(net)
        feat = extract_features(vec, dec, net.pam_hz)
        pf = pair_features(board)
        if train:
            act = policy_act(policy, feat, pf, rng, epsilon=EPS)
        elif eval_eps > 0:
            act = policy_act(policy, feat, pf, rng, epsilon=eval_eps)
        else:
            act = policy_act(policy, feat, pf, rng, greedy=True)
        res = try_action(board, act["cell"], act["dir"], refill)
        if res["ok"]:
            board = res["board"]
            total += res["score"]
            matches += 1
            pam_drive = min(2.0, pam_drive + reward_drive(res["removed"]))
        r = shape_reward(res)
        if train:
            baseline[0] += 0.05 * (r - baseline[0])
            reinforce_update(policy, feat, pf, act["cell"], act["di"], r - baseline[0], DEFAULT_LR)
    return total, matches


def eval_random(n: int, seed: int) -> float:
    rr = Rng(seed ^ 0x51F)
    s = 0.0
    for e in range(n):
        board = create_board(seed + 500000 + e)
        refill = Rng(seed + 600000 + e)
        for m in range(MOVES):
            if not find_valid_move(board):
                board = reshuffle(board, e + m)["board"]
            res = try_action(board, rr.randint(64), DIRS[rr.randint(4)], refill)
            if res["ok"]:
                board = res["board"]
                s += res["score"]
    return s / n


def eval_oracle(n: int, seed: int) -> float:
    s = 0.0
    for e in range(n):
        board = create_board(seed + 500000 + e)
        refill = Rng(seed + 700000 + e)
        for m in range(MOVES):
            if not find_valid_move(board):
                board = reshuffle(board, e + m)["board"]
            best = None
            for cell in range(64):
                for d in DIRS:
                    res = try_action(board, cell, d, refill)
                    if res["ok"] and (best is None or res["score"] > best["score"]):
                        best = res
            if best:
                board = best["board"]
                s += best["score"]
    return s / n


def eval_first_found(n: int, seed: int) -> float:
    s = 0.0
    dvec = {"up": (-1, 0), "down": (1, 0), "left": (0, -1), "right": (0, 1)}
    for e in range(n):
        board = create_board(seed + 500000 + e)
        refill = Rng(seed + 800000 + e)
        for m in range(MOVES):
            if not find_valid_move(board):
                board = reshuffle(board, e + m)["board"]
            mv = find_valid_move(board)
            dr, dc = mv["r2"] - mv["r1"], mv["c2"] - mv["c1"]
            dn = next(d for d, v in dvec.items() if v == (dr, dc))
            res = try_action(board, mv["r1"] * 8 + mv["c1"], dn, refill)
            if res["ok"]:
                board = res["board"]
                s += res["score"]
    return s / n


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--episodes", type=int, default=1200)
    ap.add_argument("--seed", type=int, default=20260916)
    args = ap.parse_args()

    ok, subset = load_json("connectome-subset.json")
    if not ok:
        print(f"FATAL: {subset}", file=sys.stderr)
        return 1

    rng = Rng(args.seed)
    policy = create_policy(args.seed, rng)
    baseline = [0.0]

    init_sum = sum(play_episode(subset, policy, args.seed + 100000 + e, False, rng, baseline)[0] for e in range(60))
    print(f"initAvg60={init_sum / 60:.1f}", flush=True)

    curve, run = [], 0.0
    for e in range(args.episodes):
        tot, _ = play_episode(subset, policy, args.seed + e, True, rng, baseline)
        run += tot
        if (e + 1) % 20 == 0:
            curve.append(round(run / 20, 1))
            run = 0.0
        if (e + 1) % 100 == 0:
            print(f"ep {e + 1}/{args.episodes} tail={curve[-1]}", flush=True)

    t_sum = t_m = 0
    for e in range(120):
        tot, mt = play_episode(subset, policy, args.seed + 500000 + e, False, rng, baseline, eval_eps=0.05)
        t_sum += tot
        t_m += mt

    report = {
        "algo": "REINFORCE (online, baseline EMA b=0.05, eps-greedy 0.12 train / 0.05 eval, lr=0.05, myopic)",
        "lang": "python (numpy port of rl.mjs v3, weight-compatible)",
        "frozen": ["sensory ommatidia map", "LIF wiring + time constants", "decode grouping (DNa01/DNa02/DNp/PAM11)"],
        "trained": "tiled 10->16->4 cell scorer + linear 73->4 dir head = 536 weights",
        "features": "per-cell raw color-equality counts (NO valid-move oracle) + 73 global sensory/LIF features",
        "episodes": args.episodes, "movesPerEpisode": MOVES, "lifStepsPerMove": LIF_STEPS, "seed": args.seed,
        "initAvg60": round(init_sum / 60, 1),
        "curveEvery20": curve,
        "eval120": {
            "random": round(eval_random(120, args.seed), 1),
            "trained": round(t_sum / 120, 1),
            "trainedMatchesPerGame": round(t_m / 120, 2),
            "firstFoundPlanner": round(eval_first_found(120, args.seed), 1),
        },
        "oracle30": round(eval_oracle(30, args.seed), 1),
        "honestNote": "Reward = match score/200 (dopamine), invalid = -0.05. No oracle features.",
        "negativeControl": "Engineered valid-move planner beats the trained readout by search; the readout earns its label: every decision flows eye->LIF->readout.",
    }

    dd = data_dir()
    os.makedirs(dd, exist_ok=True)
    with open(os.path.join(dd, "readout-weights.json"), "w") as fh:
        json.dump(export_weights(policy, {"episodes": args.episodes,
                                          "evalTrained120": report["eval120"]["trained"],
                                          "trainedAt": datetime.now(timezone.utc).isoformat()}), fh)
    with open(os.path.join(dd, "training-report.json"), "w") as fh:
        json.dump(report, fh, indent=1)
    # postgres log (guarded: no DB => files above are the record, nothing lost)
    try:
        from flycrush_py.db import connect, init_schema, log_run, save_readout
        conn = connect(5.0)
        if conn is not None:
            try:
                if init_schema(conn):
                    save_readout(conn, "offline", policy, 0, report["eval120"]["trained"],
                                 {"episodes": args.episodes, "seed": args.seed})
                    log_run(conn, f"train-{args.seed}-{args.episodes}",
                            {"episodes": args.episodes, "moves": MOVES, "seed": args.seed},
                            report, curve)
                    print("db: run + weights logged to postgres")
                else:
                    print("db: schema init failed, skipped")
            finally:
                try:
                    conn.close()
                except Exception:
                    pass
        else:
            print("db: unreachable, skipped (JSON files are the record)")
    except Exception as exc:
        print(f"db: skipped ({exc})")
    print(json.dumps({"initAvg60": report["initAvg60"], **{k: v for k, v in report["eval120"].items() if k != "trainedMatchesPerGame"}, "oracle30": report["oracle30"]}))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
