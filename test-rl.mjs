// test-rl.mjs — unit tests for the REINFORCE readout (src/connectome/rl.mjs).
// Run: node --test test-rl.mjs   (zero deps)
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  createPolicy, extractFeatures, cellFeatures, forward, softmax, policyAct,
  reinforceUpdate, shapeReward, exportWeights, importWeights, loadReadout,
  FEAT_DIM, CELL_F, ACT_N,
} from './src/connectome/rl.mjs';
import { validDirs, createBoard } from './src/connectome/board.mjs';

const rng01 = (seed = 5) => {
  let a = seed >>> 0 || 1;
  return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
};

describe('rl features', () => {
  it('cellFeatures: 640 dims, deterministic, bounded, no-throw on garbage', () => {
    const b = createBoard(9);
    const f1 = cellFeatures(b), f2 = cellFeatures(b);
    assert.equal(f1.length, 640);
    assert.deepEqual([...f1], [...f2]);
    for (const v of f1) assert.ok(v >= 0 && v <= 1, 'feat range ' + v);
    assert.doesNotThrow(() => cellFeatures(null));
    assert.doesNotThrow(() => cellFeatures('nope'));
  });
  it('extractFeatures: 73 dims, finite', () => {
    const f = extractFeatures(new Float32Array(48).fill(0.5), { colActs: [1, 0, 0, 0, 0, 0, 0, 0], rowActs: [0, 1, 0, 0, 0, 0, 0, 0], dirs: { up: 1, down: 0, left: 0, right: 0 }, gate: 0.8 }, 60);
    assert.equal(f.length, FEAT_DIM);
    for (const v of f) assert.ok(Number.isFinite(v));
  });
});

describe('rl policy math', () => {
  it('forward yields 256 masked logits; softmax sums to 1', () => {
    const p = createPolicy(1);
    const { logits } = forward(p, new Float32Array(FEAT_DIM).fill(0.1), new Float32Array(640).fill(0.2));
    assert.equal(logits.length, ACT_N);
    const pr = softmax(logits);
    assert.ok(Math.abs(pr.reduce((s, x) => s + x, 0) - 1) < 1e-5);
  });
  it('REINFORCE moves probability toward rewarded action, away from punished', () => {
    const p = createPolicy(2);
    const feat = new Float32Array(FEAT_DIM).fill(0.2);
    const cf = new Float32Array(640).fill(0.1);
    const before = softmax(forward(p, feat, cf).logits);
    const sel = 37 * 4 + 1, cell = 37, di = 1;
    reinforceUpdate(p, feat, cf, cell, di, +1.0, 0.5);
    const afterGood = softmax(forward(p, feat, cf).logits);
    assert.ok(afterGood[sel] > before[sel], 'rewarded pair must gain probability');
    reinforceUpdate(p, feat, cf, cell, di, -1.0, 0.5);
    const afterBad = softmax(forward(p, feat, cf).logits);
    assert.ok(afterBad[sel] < afterGood[sel], 'punished pair must lose probability');
  });
  it('finite-difference check: analytic update matches numerical gradient sign', () => {
    const p = createPolicy(3);
    const feat = new Float32Array(FEAT_DIM).fill(0.15);
    const cf = new Float32Array(640).fill(0.12);
    const lp = (pol) => {
      const pr = softmax(forward(pol, feat, cf).logits);
      return Math.log(pr[10 * 4 + 2] + 1e-12);
    };
    const num = [];
    for (let i = 0; i < 5; i++) {
      const e = 1e-4, orig = p.W1[i];
      p.W1[i] = orig + e; const hi = lp(p);
      p.W1[i] = orig - e; const lo = lp(p);
      p.W1[i] = orig; num.push((hi - lo) / (2 * e));
    }
    // analytic: one +1 update, weights must move along +grad (corr > 0)
    const w0 = [...p.W1.slice(0, 5)];
    reinforceUpdate(p, feat, cf, 10, 2, +1.0, 1.0);
    let dot = 0;
    for (let i = 0; i < 5; i++) dot += (p.W1[i] - w0[i]) * num[i];
    assert.ok(dot > 0, 'update must correlate with numerical gradient, dot=' + dot);
  });
  it('context-conditional bandit converges (proves the rule learns from reward)', () => {
    const p = createPolicy(4);
    const rng = rng01(11);
    const cf = new Float32Array(640); // neutral tiles; context lives in global feats
    for (let t = 0; t < 600; t++) {
      const ctx = t % 2;
      const feat = new Float32Array(FEAT_DIM);
      feat[ctx] = 1;
      const a = policyAct(p, feat, cf, rng, { epsilon: 0.15 });
      // reward dir 0 in ctx0, dir 3 in ctx1 (any cell)
      const good = (ctx === 0 && a.di === 0) || (ctx === 1 && a.di === 3);
      reinforceUpdate(p, feat, cf, a.cell, a.di, good ? 1 : -0.2, 0.1);
    }
    for (const [ctx, want] of [[0, 0], [1, 3]]) {
      const feat = new Float32Array(FEAT_DIM);
      feat[ctx] = 1;
      const a = policyAct(p, feat, cf, rng, { greedy: true });
      assert.equal(a.di, want, `ctx${ctx} must pick dir${want}`);
    }
  });
  it('sampled actions always respect edge masking', () => {
    const p = createPolicy(6);
    const rng = rng01(21);
    const feat = new Float32Array(FEAT_DIM).fill(0.1);
    const cf = cellFeatures(createBoard(31));
    for (let i = 0; i < 500; i++) {
      const a = policyAct(p, feat, cf, rng, { epsilon: 0.3 });
      assert.ok(validDirs(a.cell)[a.dir], `cell ${a.cell} dir ${a.dir} off-board`);
    }
  });
});

describe('rl persistence', () => {
  it('export/import roundtrips; arch mismatch and NaN rejected', () => {
    const p = createPolicy(7);
    const doc = exportWeights(p, { episodes: 1 });
    const q = createPolicy(999);
    assert.equal(importWeights(q, doc), true);
    assert.deepEqual([...q.W2], [...p.W2]);
    assert.throws(() => importWeights(createPolicy(1), { meta: { arch: { CF: 1, H: 1, C: 1, D: 1, F: 1 } }, W1: [], b1: [], W2: [], b2: [], Wprior: [] }), /arch mismatch/);
    const bad = JSON.parse(JSON.stringify(doc));
    bad.W2[0] = NaN;
    assert.throws(() => importWeights(createPolicy(1), bad), /non-finite/);
  });
  it('loadReadout never throws; failures yield labeled random-init', async () => {
    const a = await loadReadout({ fetchFn: async () => { throw new Error('down'); } });
    assert.equal(a.ok, false); assert.equal(a.provenance, 'random-init');
    const b = await loadReadout({ fetchFn: async () => ({ ok: true, text: async () => 'garbage' }) });
    assert.equal(b.ok, false);
  });
  it('shapeReward tiers: match scales, invalid negative', () => {
    assert.ok(shapeReward({ ok: true, score: 200 }) > shapeReward({ ok: true, score: 60 }));
    assert.equal(shapeReward({ ok: false }), -0.05);
    assert.equal(shapeReward(null), -0.05, 'unknown result treated as invalid (safe)');
  });
});
