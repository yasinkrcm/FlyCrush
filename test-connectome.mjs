// test-connectome.mjs — unit tests for src/connectome/* pure logic.
// Run: node --test test-connectome.mjs   (zero deps; three/react excluded)
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { describe, it } from 'node:test';
import { createEye, boardToRegions, regionContrast, buildInputVector, INPUT_DIM } from './src/connectome/sensory.mjs';
import { createNetwork, stepNetwork, decodeMotor, rewardDrive } from './src/connectome/lif.mjs';
import { validateSubset, loadSubset, createFallbackPlan } from './src/connectome/trace.mjs';
import { createController } from './src/connectome/controller.mjs';

const SUBSET = JSON.parse(fs.readFileSync('./public/data/connectome-subset.json', 'utf8'));
const demoBoard = (seed = 7) => {
  let s = seed >>> 0;
  const rnd = () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296;
  return Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => Math.floor(rnd() * 6)));
};
const findValidMove = (b) => {
  for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) for (const [dr, dc] of [[0, 1], [1, 0]]) {
    const r2 = r + dr, c2 = c + dc;
    if (r2 > 7 || c2 > 7) continue;
    const t = b[r][c]; b[r][c] = b[r2][c2]; b[r2][c2] = t;
    let hit = false;
    outer: for (let rr = 0; rr < 8; rr++) for (let cc = 0; cc < 8; cc++) {
      if (cc < 6 && b[rr][cc] === b[rr][cc + 1] && b[rr][cc] === b[rr][cc + 2]) { hit = true; break outer; }
      if (rr < 6 && b[rr][cc] === b[rr + 1][cc] && b[rr][cc] === b[rr + 2][cc]) { hit = true; break outer; }
    }
    b[r2][c2] = b[r][c]; b[r][c] = t;
    if (hit) return { r1: r, c1: c, r2, c2 };
  }
  return null;
};

describe('sensory (fly eye model)', () => {
  it('produces a 48-dim vector with bounded values', () => {
    const eye = createEye();
    const { vector, contrast } = eye.observe(demoBoard());
    assert.equal(vector.length, INPUT_DIM);
    assert.equal(contrast.length, 16);
    for (const v of vector) assert.ok(v >= -1.5 && v <= 1.5, 'input out of range: ' + v);
  });
  it('is deterministic and emits motion on change, silence on still frames', () => {
    const e1 = createEye(), e2 = createEye(), b = demoBoard(3);
    const a = e1.observe(b).vector, c = e2.observe(b).vector;
    assert.deepEqual([...a], [...c]);
    assert.ok([...a.slice(42)].every((v) => v === 0), 'first frame must have no motion');
    const b2 = b.map((r) => r.slice()); b2[0][0] = (b2[0][0] + 1) % 6;
    const m = e1.observe(b2).vector.slice(42);
    assert.ok([...m].some((v) => v > 0), 'changed frame must emit motion');
  });
  it('never throws on malformed boards', () => {
    assert.doesNotThrow(() => boardToRegions(null));
    assert.doesNotThrow(() => boardToRegions([[0, 'x'], null]));
    assert.doesNotThrow(() => regionContrast(new Float32Array(16)));
    const eye = createEye();
    assert.doesNotThrow(() => eye.observe(undefined));
  });
});

describe('LIF network + motor decode', () => {
  it('runs 300 steps without NaN and keeps voltages bounded', () => {
    const net = createNetwork(SUBSET);
    const eye = createEye();
    for (let i = 0; i < 300; i++) {
      const b = demoBoard(i + 1);
      const { vector } = eye.observe(b);
      stepNetwork(net, vector, i === 150 ? 1.2 : 0);
    }
    for (const v of net.v) assert.ok(Number.isFinite(v) && v >= -2 && v <= 4, 'voltage escaped: ' + v);
    assert.ok(Number.isFinite(net.pamHz) && net.pamHz >= 0);
  });
  it('decodes safe motor ranges', () => {
    const net = createNetwork(SUBSET);
    const eye = createEye();
    for (let i = 0; i < 40; i++) stepNetwork(net, eye.observe(demoBoard(i + 1)).vector, 0);
    const d = decodeMotor(net);
    assert.ok(d.L >= 0 && d.L <= 7 && d.R >= 0 && d.R <= 7);
    assert.ok(d.gate >= 0 && d.gate <= 1);
    assert.ok(['up', 'down', 'left', 'right'].includes(d.dir));
  });
  it('reward drive scales with match size and PAM Hz rises then decays', () => {
    assert.ok(rewardDrive(5) > rewardDrive(4) && rewardDrive(4) > rewardDrive(3));
    assert.equal(rewardDrive(0), 0);
    const net = createNetwork(SUBSET);
    const eye = createEye();
    const { vector } = eye.observe(demoBoard());
    for (let i = 0; i < 20; i++) stepNetwork(net, vector, 1.6);
    const hzHigh = net.pamHz;
    for (let i = 0; i < 200; i++) stepNetwork(net, vector, 0);
    assert.ok(net.pamHz <= hzHigh, 'PAM rate must decay without drive');
  });
});

describe('trace loader + schema guard + fallback', () => {
  it('baked JSON validates clean', () => {
    const v = validateSubset(SUBSET);
    assert.equal(v.ok, true, JSON.stringify(v.errors));
    assert.equal(SUBSET.meta.synthetic, true, 'must stay honestly labeled');
  });
  it('validator catches dup IDs, dangling weights, unknown decoder IDs', () => {
    const bad = JSON.parse(JSON.stringify(SUBSET));
    bad.neurons[1].id = bad.neurons[0].id;
    bad.weights.push([0, 999999, 0.5]);
    bad.decoders.colIds[0] = -123;
    const v = validateSubset(bad);
    assert.equal(v.ok, false);
    assert.ok(v.errors.some((e) => e.startsWith('dup-id')));
    assert.ok(v.errors.some((e) => e.endsWith('.dangling')));
    assert.ok(v.errors.some((e) => e.includes('colIds')));
  });
  it('loader NEVER throws: fetch error / bad JSON / timeout all resolve ok:false', async () => {
    const a = await loadSubset({ fetchFn: async () => { throw new Error('down'); } });
    assert.equal(a.ok, false); assert.equal(a.provenance, 'pre-recorded-fallback');
    const b = await loadSubset({ fetchFn: async () => ({ ok: true, text: async () => '{oops' }) });
    assert.equal(b.ok, false); assert.equal(b.reason, 'json-parse');
    const c = await loadSubset({ fetchFn: async () => ({ ok: false, status: 404 }) });
    assert.equal(c.ok, false);
    const slow = await loadSubset({
      fetchFn: (u, o) => new Promise((_, rej) => o?.signal?.addEventListener('abort', () => { const e = new Error('x'); e.name = 'AbortError'; rej(e); })),
      timeoutMs: 30,
    });
    assert.equal(slow.ok, false); assert.equal(slow.reason, 'timeout');
  });
  it('fallback planner commits a real valid move and flags dead boards', () => {
    const plan = createFallbackPlan(findValidMove);
    let out = null;
    for (let i = 0; i < 40; i++) { out = plan.next(demoBoard(11)); if (out.committed) break; }
    assert.ok(out.committed && out.move, 'must commit within 40 ticks');
    // dead board (no possible match) -> dead:true, never throws
    const dead = Array.from({ length: 8 }, (_, r) => Array.from({ length: 8 }, (_, c) => (r + c) % 6));
    assert.equal(findValidMove(dead.map((r) => r.slice())), null);
    const plan2 = createFallbackPlan(() => null);
    assert.equal(plan2.next(dead).dead, true);
  });
});

describe('controller', () => {
  it('live mode: ticks advance, state stays in safe ranges', () => {
    const ctl = createController({ subset: SUBSET, boardFn: () => demoBoard(5), findValidMove, onDecision: () => {} });
    assert.equal(ctl.mode(), 'live');
    for (let i = 0; i < 30; i++) ctl.stepOnce();
    const s = ctl.getState();
    assert.ok(s.ticks === 30 && s.live === true);
    assert.ok(s.L >= 0 && s.L <= 7 && s.gate >= 0 && s.gate <= 1);
    ctl.notifyReward(4);
    assert.doesNotThrow(() => ctl.stop());
  });
  it('null subset -> labeled fallback, game callbacks isolated from errors', () => {
    const events = [];
    const ctl = createController({
      subset: null, boardFn: () => { throw new Error('game exploded'); },
      findValidMove, onDecision: () => { throw new Error('cb boom'); },
      onEvent: (e) => events.push(e.type),
    });
    assert.equal(ctl.mode(), 'fallback');
    assert.equal(ctl.provenance(), 'pre-recorded-fallback');
    for (let i = 0; i < 10; i++) ctl.stepOnce(); // must not throw
    assert.ok(events.includes('fallback'));
  });
});
