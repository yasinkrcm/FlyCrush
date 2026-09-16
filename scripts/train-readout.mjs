#!/usr/bin/env node
/**
 * train-readout.mjs — OFFLINE trainer (Node only, never the browser).
 * Trains the linear readout with REINFORCE over seeded match-3 episodes,
 * then bakes public/data/readout-weights.json + training-report.json.
 *
 *   node scripts/train-readout.mjs [--episodes 600] [--seed 20260916]
 *
 * Frozen: LIF wiring + sensory (Fly Dino pattern — only the readout learns).
 * Deterministic: same seed -> same weights. No network. No plasticity in
 * the shipped game: the browser only LOADS the baked file.
 */
import { writeFileSync, readFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { createBoard, tryAction, findValidMove, reshuffle, DIRS } from '../src/connectome/board.mjs';
import { createEye } from '../src/connectome/sensory.mjs';
import { createNetwork, stepNetwork, decodeMotor, rewardDrive } from '../src/connectome/lif.mjs';
import { createPolicy, extractFeatures, cellFeatures, policyAct, reinforceUpdate, shapeReward, exportWeights, DEFAULT_LR } from '../src/connectome/rl.mjs';

const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 && args[i + 1] ? args[i + 1] : d; };
const EPISODES = parseInt(opt('--episodes', '600'), 10);
const SEED = parseInt(opt('--seed', '20260916'), 10);
const MOVES = 25, LIF_STEPS = 4, LR = DEFAULT_LR, EPS = 0.12;

function mulberry(seed) {
  let a = (seed >>> 0) || 1;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const subset = JSON.parse(readFileSync(resolve(process.cwd(), 'public/data/connectome-subset.json'), 'utf8'));
const rng = mulberry(SEED);
const policy = createPolicy(SEED, rng);
let baseline = 0;

function playEpisode(boardSeed, train, evalEps = 0) {
  let board = createBoard(boardSeed);
  const eye = createEye();
  const net = createNetwork(subset);
  let pamDrive = 0, total = 0, matches = 0;
  const refillRng = mulberry(boardSeed ^ 0x9e37);
  for (let m = 0; m < MOVES; m++) {
    if (!findValidMove(board)) {
      board = reshuffle(board, boardSeed + m).board;
      eye.reset();
    }
    const { vector } = eye.observe(board);
    for (let s = 0; s < LIF_STEPS; s++) { stepNetwork(net, vector, pamDrive); pamDrive *= 0.9; }
    const dec = decodeMotor(net);
    const feat = extractFeatures(vector, dec, net.pamHz);
    const cf = cellFeatures(board);
    const act = policyAct(policy, feat, cf, rng, train ? { epsilon: EPS } : evalEps > 0 ? { epsilon: evalEps } : { greedy: true });
    const res = tryAction(board, act.cell, act.dir, refillRng);
    if (res.ok) {
      board = res.board; total += res.score; matches++;
      pamDrive = Math.min(2, pamDrive + rewardDrive(res.removed));
    }
    const r = shapeReward(res);
    if (train) {
      baseline += 0.05 * (r - baseline);
      reinforceUpdate(policy, feat, cf, act.cell, act.di, r - baseline, LR);
    }
  }
  return { total, matches };
}

// init baseline (random-init policy, greedy) — honest "before" number
let initSum = 0;
for (let e = 0; e < 60; e++) initSum += playEpisode(SEED + 100000 + e, false).total;
const initAvg = initSum / 60;

const curve = [];
let runSum = 0;
for (let e = 0; e < EPISODES; e++) {
  const r = playEpisode(SEED + e, true);
  runSum += r.total;
  if ((e + 1) % 20 === 0) { curve.push(+((runSum / 20).toFixed(1))); runSum = 0; }
  if ((e + 1) % 100 === 0) console.log(`ep ${e + 1}/${EPISODES} curveTail=${curve[curve.length - 1]}`);
}

// final eval: trained greedy vs uniform-random on fresh boards
function evalRandom(n) {
  let s = 0;
  const rr = mulberry(SEED ^ 0x51f);
  for (let e = 0; e < n; e++) {
    let board = createBoard(SEED + 500000 + e);
    const refill = mulberry(SEED + 600000 + e);
    for (let m = 0; m < MOVES; m++) {
      if (!findValidMove(board)) board = reshuffle(board, e + m).board;
      const res = tryAction(board, Math.floor(rr() * 64), DIRS[Math.floor(rr() * 4)], refill);
      if (res.ok) { board = res.board; s += res.score; }
    }
  }
  return s / n;
}
// oracle ceiling: 1-ply best-immediate-score search (uses game logic, NOT policy features)
function evalOracle(n) {
  let s = 0;
  for (let e = 0; e < n; e++) {
    let board = createBoard(SEED + 500000 + e);
    const refill = mulberry(SEED + 700000 + e);
    for (let m = 0; m < MOVES; m++) {
      if (!findValidMove(board)) board = reshuffle(board, e + m).board;
      let best = null;
      for (let cell = 0; cell < 64; cell++) for (const d of DIRS) {
        const res = tryAction(board, cell, d, refill);
        if (res.ok && (!best || res.score > best.score)) best = { ...res, cell, dir: d };
      }
      if (best) { board = best.board; s += best.score; }
    }
  }
  return s / n;
}
let trainedSum = 0, trainedMatches = 0;
for (let e = 0; e < 120; e++) { const r = playEpisode(SEED + 500000 + e, false, 0.05); trainedSum += r.total; trainedMatches += r.matches; }

const evalRandomAvg = +evalRandom(120).toFixed(1);
const evalTrainedAvg = +(trainedSum / 120).toFixed(1);
const evalOracleAvg = +evalOracle(30).toFixed(1);

const report = {
  algo: 'REINFORCE (online, baseline EMA β=0.05, ε-greedy 0.12 train / 0.05 eval, lr=0.05, myopic γ=0)',
  frozen: ['sensory ommatidia map', 'LIF wiring + time constants', 'decode grouping (DNa01/DNa02/DNp/PAM11)'],
  trained: 'tiled 10->16->1 cell scorer (shared weights) + linear 73->4 dir head = 485 weights',
  features: 'per-cell raw color-equality counts (NO valid-move oracle) + 73 global sensory/LIF features',
  episodes: EPISODES, movesPerEpisode: MOVES, lifStepsPerMove: LIF_STEPS, seed: SEED,
  history: {
    v1_linear_readout: { initAvg60: 40.7, trained120: 45.7, random120: 418.3,
      note: 'NEGATIVE RESULT: linear 73->64 readout could not span the action space; greedy policy collapsed to one mode.' },
  },
  initAvg60: +initAvg.toFixed(1),
  curveEvery20: curve,
  eval120: { random: evalRandomAvg, trained: evalTrainedAvg, trainedMatchesPerGame: +(trainedMatches / 120).toFixed(2) },
  oracle30: evalOracleAvg,
  honestNote: 'Reward = match score/200 (dopamine), invalid = -0.05. No oracle features: policy sees only sensory+LIF rates.',
};

const outW = resolve(process.cwd(), 'public/data/readout-weights.json');
const outR = resolve(process.cwd(), 'public/data/training-report.json');
mkdirSync(dirname(outW), { recursive: true });
writeFileSync(outW, JSON.stringify(exportWeights(policy, { episodes: EPISODES, evalTrained120: evalTrainedAvg, trainedAt: new Date().toISOString() })));
writeFileSync(outR, JSON.stringify(report, null, 1));
console.log(JSON.stringify({ initAvg60: report.initAvg60, trained120: evalTrainedAvg, random120: evalRandomAvg, oracle30: evalOracleAvg }));
