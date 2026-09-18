#!/usr/bin/env python3
"""Supervised imitation pretrain + REINFORCE finetune.

Learns valid swaps from planner labels using ONLY board perception
(cross-aware 25-dim pair features + global 73) — planner is NEVER
consulted at inference. Valid-pair labels are the teaching signal,
exactly like Fly Dino's CEM pretrain before REINFORCE.

Usage:
    ./.venv/bin/python -m flycrush_py.supervised_train --boards 8000 --epochs 12
Writes public/data/readout-weights.json + updates training-report.json.
"""
from __future__ import annotations

import argparse
import json
import os
import sys
import time

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from flycrush_py.board import Rng, create_board, try_action, DIRS
from flycrush_py.data import data_dir, load_json
from flycrush_py.lif import create_network, decode_motor, step_network
from flycrush_py.rl import CELL_N, DIR_N, create_policy, export_weights, extract_features, pair_features, supervised_update, _PAIR_MASK
from flycrush_py.sensory import Eye

def all_valid_pairs(board, rng):
    out = []
    for cell in range(CELL_N):
        for di, d in enumerate(DIRS):
            # edge mask already in _PAIR_MASK
            idx = cell * 4 + di
            if not _PAIR_MASK[idx]:
                continue
            res = try_action(board, cell, d, rng)
            if res.get("ok"):
                out.append(idx)
    return out

def make_feat(board, eye, net, vec=None):
    if vec is None:
        vec, _ = eye.observe(board)
        for _ in range(4):
            step_network(net, vec, 0.0)
    dec = decode_motor(net)
    feat = extract_features(vec, dec, net.pam_hz)
    pf = pair_features(board)
    return feat, pf, vec

def evaluate(policy, n=120, seed=500000):
    # delegates to the leak-free evaluator (fresh eye+net per board)
    from flycrush_py.evaluate import eval_hit
    return eval_hit(subset_cache["subset"], policy, n, seed)


subset_cache = {"subset": None}

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--boards", type=int, default=8000)
    ap.add_argument("--epochs", type=int, default=12)
    ap.add_argument("--lr", type=float, default=0.08)
    ap.add_argument("--rl-episodes", type=int, default=600,
                    help="online REINFORCE finetune episodes after the CE pretrain")
    ap.add_argument("--seed", type=int, default=20260916)
    args = ap.parse_args()

    ok, subset = load_json("connectome-subset.json")
    subset_cache["subset"] = subset if ok else {}
    rng = Rng(args.seed)
    policy = create_policy(args.seed, rng)

    # pre-generate boards for determinism
    boards = [create_board(args.seed + i) for i in range(args.boards)]

    t0 = time.time()
    for ep in range(args.epochs):
        loss_sum = 0
        valid_total = 0
        for b in boards:
            # per-board fresh eye/net so feat is realistic but cheap (4 steps)
            eye = Eye()
            net = create_network(subset if ok else {})
            # use a throwaway rng for valid-label generation (never policy input)
            label_rng = Rng(0x9E37)
            valid = all_valid_pairs(b, label_rng)
            if not valid:
                continue
            feat, cf, _ = make_feat(b, eye, net)
            loss_sum += supervised_update(policy, feat, cf, valid, lr=args.lr)
            valid_total += 1
        hit, avg_score = evaluate(policy, n=80, seed=args.seed + 900000 + ep * 1000)
        print(f"epoch {ep+1}/{args.epochs} loss={loss_sum/max(1,valid_total):.3f} hit={hit*100:.1f}% avg_score={avg_score:.0f} time={time.time()-t0:.0f}s", flush=True)

    hit, avg_score = evaluate(policy, n=120, seed=500000)
    print(f"final CE hit {hit*100:.1f}% avg_score {avg_score:.0f}", flush=True)

    # online REINFORCE finetune: bias the policy toward profitable swaps
    # (reward = match score/200), same live training loop as the app
    if args.rl_episodes > 0:
        from flycrush_py.train import play_episode
        baseline = [0.0]
        run = 0.0
        for e in range(args.rl_episodes):
            tot, _ = play_episode(subset, policy, args.seed + e, True, rng, baseline)
            run += tot
            if (e + 1) % 100 == 0:
                print(f"rl {e + 1}/{args.rl_episodes} avg_score/ep={run / 100:.1f} time={time.time() - t0:.0f}s", flush=True)
                run = 0.0

    hit, avg_score = evaluate(policy, n=120, seed=500000)
    print(f"final hit {hit*100:.1f}% avg_score {avg_score:.0f}", flush=True)

    # bake
    dd = data_dir()
    os.makedirs(dd, exist_ok=True)
    with open(os.path.join(dd, "readout-weights.json"), "w") as fh:
        json.dump(export_weights(policy, {"supervised": True, "boards": args.boards, "epochs": args.epochs,
                                          "rlEpisodes": args.rl_episodes,
                                          "hit120": round(hit,3), "avgScore120": round(avg_score,1)}), fh)
    # patch report
    try:
        with open(os.path.join(dd, "training-report.json"), "r") as fh:
            rep = json.load(fh)
    except Exception:
        rep = {}
    rep["supervised"] = {"boards": args.boards, "epochs": args.epochs, "lr": args.lr,
                         "rlEpisodes": args.rl_episodes, "hit120": round(hit,3), "avgScore120": round(avg_score,1)}
    with open(os.path.join(dd, "training-report.json"), "w") as fh:
        json.dump(rep, fh, indent=1)
    print(json.dumps({"hit120": round(hit,3), "avgScore120": round(avg_score,1)}))

if __name__ == "__main__":
    raise SystemExit(main())
