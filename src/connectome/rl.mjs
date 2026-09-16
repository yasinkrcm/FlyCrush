/**
 * rl.mjs — REAL reinforcement learning: REINFORCE-trained readout network.
 *
 * v3 architecture (joint 256-way policy):
 *   Board -> tiled per-cell features (10/cell, NO oracle: raw color
 *            equalities only) -> shared MLP 10->16->4 -> per-cell dir scores
 *         + global context: sensory(48)+LIF descending rates -> 73 features
 *            -> linear 73->4 direction prior (descending-neuron modulation)
 *   logit(cell,dir) = tiled[cell,dir] + prior[dir]; edge-masked softmax
 *   over 256 (cell,dir) pairs -> sample -> game validates via tryAction.
 *   Reward = match score/200 (dopamine), invalid = -0.05.
 *   REINFORCE: θ += α·(r − b)·∇log π, b = running baseline.
 *
 * Frozen: sensory map, LIF wiring/constants, decode groups (Fly Dino/FLYT3
 * pattern — only the artificial readout learns). 536 weights ship as STATIC
 * JSON; the browser only loads the baked file (rule #1 intact).
 */
import { DIRS, validDirs } from './board.mjs';

export const FEAT_DIM = 73;
export const CELL_F = 10;
export const CELL_H = 16;
export const CELL_N = 64;
export const DIR_N = 4;
export const ACT_N = 256;
export const DEFAULT_LR = 0.05;

// edge mask is board-independent: precompute once
const PAIR_MASK = (() => {
  const m = new Uint8Array(ACT_N);
  for (let cell = 0; cell < 64; cell++) {
    const vd = validDirs(cell);
    DIRS.forEach((d, i) => { m[cell * 4 + i] = vd[d] ? 1 : 0; });
  }
  return m;
})();
export const pairCell = (a) => Math.floor(a / 4);
export const pairDir = (a) => a % 4;

function mulberryLike(seed) {
  let a = (seed >>> 0) || 1;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function extractFeatures(sensoryVec, decode, pamHz = 0) {
  const f = new Float32Array(FEAT_DIM);
  try {
    for (let i = 0; i < 48; i++) f[i] = sensoryVec?.[i] ?? 0;
    for (let i = 0; i < 8; i++) f[48 + i] = decode?.colActs?.[i] ?? 0;
    for (let i = 0; i < 8; i++) f[56 + i] = decode?.rowActs?.[i] ?? 0;
    DIRS.forEach((d, i) => { f[64 + i] = decode?.dirs?.[d] ?? 0; });
    f[68] = Math.max(0, Math.min(1, decode?.gate ?? 0));
    f[69] = Math.max(0, Math.min(1, (pamHz || 0) / 120));
    f[70] = 1;
  } catch {}
  return f;
}

function cellColor(board, r, c) {
  try {
    const v = board?.[r]?.[c];
    return (typeof v === 'number' && v >= 0 && v < 6) ? v : -1;
  } catch { return -1; }
}

/** Tiled per-cell features (10). Raw equalities only — never valid-move info. */
export function cellFeatures(board) {
  const out = new Float32Array(CELL_N * CELL_F);
  try {
    const D = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const k = (r * 8 + c) * CELL_F;
        const col = cellColor(board, r, c);
        out[k] = col < 0 ? 0 : col / 5;
        let edge = 0;
        D.forEach(([dr, dc], i) => {
          const r1 = r + dr, c1 = c + dc, r2 = r + 2 * dr, c2 = c + 2 * dc;
          if (r1 < 0 || r1 >= 8 || c1 < 0 || c1 >= 8) { edge++; return; }
          if (col >= 0 && cellColor(board, r1, c1) === col) {
            out[k + 1 + i] = 1;
            if (r2 >= 0 && r2 < 8 && c2 >= 0 && c2 < 8 && cellColor(board, r2, c2) === col) out[k + 5 + i] = 1;
          }
        });
        out[k + 9] = edge / 4;
      }
    }
  } catch {}
  return out;
}

function small(n, rng, s) {
  const a = new Float32Array(n);
  for (let i = 0; i < n; i++) a[i] = (rng() * 2 - 1) * s;
  return a;
}

export function createPolicy(seed = 1337, rngFn = null) {
  const rng = rngFn ?? mulberryLike(seed);
  return {
    seed, F: FEAT_DIM, CF: CELL_F, H: CELL_H, C: CELL_N, D: DIR_N,
    W1: small(CELL_F * CELL_H, rng, Math.sqrt(1 / CELL_F)),
    b1: new Float32Array(CELL_H),
    W2: small(CELL_H * DIR_N, rng, Math.sqrt(1 / CELL_H)),
    b2: new Float32Array(DIR_N),
    Wprior: small(FEAT_DIM * DIR_N, rng, Math.sqrt(1 / FEAT_DIM)),
  };
}

const tanh = (x) => Math.tanh(Math.max(-6, Math.min(6, x)));

/** Full forward: 256 masked logits + hidden cache for backprop. */
export function forward(policy, feat, cf) {
  const { W1, b1, W2, b2, Wprior } = policy;
  const prior = new Float32Array(DIR_N);
  for (let d = 0; d < DIR_N; d++) {
    let s = 0;
    const base = d * policy.F;
    for (let j = 0; j < policy.F; j++) s += Wprior[base + j] * feat[j];
    prior[d] = s;
  }
  const logits = new Float32Array(ACT_N);
  const hid = new Float32Array(CELL_N * CELL_H);
  for (let a = 0; a < CELL_N; a++) {
    const fb = a * CELL_F, hb = a * CELL_H;
    for (let d = 0; d < DIR_N; d++) {
      const pair = a * 4 + d;
      if (!PAIR_MASK[pair]) { logits[pair] = -1e9; continue; }
      let s = b2[d] + prior[d];
      for (let h = 0; h < CELL_H; h++) {
        let z = b1[h];
        const wb = h * CELL_F;
        for (let j = 0; j < CELL_F; j++) z += W1[wb + j] * cf[fb + j];
        const t = tanh(z);
        if (d === 0) hid[hb + h] = t;
        s += W2[h * DIR_N + d] * t;
      }
      logits[pair] = Math.max(-30, Math.min(30, s));
    }
  }
  return { logits, hid, prior };
}

export function softmax(log) {
  let m = -1e9;
  for (const v of log) if (v > m) m = v;
  const e = new Float32Array(log.length);
  let s = 0;
  for (let i = 0; i < log.length; i++) { e[i] = Math.exp(log[i] - m); s += e[i]; }
  for (let i = 0; i < e.length; i++) e[i] /= s || 1;
  return e;
}

function sampleFrom(probs, rng) {
  let u = rng(), acc = 0;
  for (let i = 0; i < probs.length; i++) { acc += probs[i]; if (u <= acc) return i; }
  return probs.length - 1;
}

export function policyAct(policy, feat, cf, rng, { epsilon = 0.05, greedy = false } = {}) {
  const { logits } = forward(policy, feat, cf);
  const probs = softmax(logits);
  let pair;
  if (greedy) { pair = 0; for (let i = 1; i < ACT_N; i++) if (PAIR_MASK[i] && probs[i] > probs[pair]) pair = i; }
  else if (rng() < epsilon) {
    do { pair = Math.floor(rng() * ACT_N); } while (!PAIR_MASK[pair]);
  } else pair = sampleFrom(probs, rng);
  if (!PAIR_MASK[pair]) pair = 0;
  const cell = pairCell(pair), di = pairDir(pair);
  // per-cell marginal (best dir) for L/R/gate display
  let best = 0;
  for (let d = 0; d < DIR_N; d++) { const p = pairCell(cell) * 4 + d; if (PAIR_MASK[p] && probs[p] > best) best = probs[p]; }
  return { cell, di, dir: DIRS[di], cellP: null, probs, gate: +best.toFixed(3) };
}

/** REINFORCE over the joint 256-way distribution, backprop both paths. */
export function reinforceUpdate(policy, feat, cf, cell, di, adv, lr = DEFAULT_LR) {
  try {
    const { hid } = forward(policy, feat, cf);
    // recompute probs
    const { logits } = forward(policy, feat, cf);
    const probs = softmax(logits);
    const sel = cell * 4 + di;
    const k = lr * adv;
    // prior head grad
    for (let d = 0; d < DIR_N; d++) {
      let gsum = 0;
      for (let a = 0; a < CELL_N; a++) {
        const p = a * 4 + d;
        if (!PAIR_MASK[p]) continue;
        gsum += (p === sel ? 1 : 0) - probs[p];
      }
      const base = d * policy.F, kk = k * gsum;
      for (let j = 0; j < policy.F; j++) policy.Wprior[base + j] += kk * feat[j];
    }
    // tiled head grad
    for (let a = 0; a < CELL_N; a++) {
      let gsum = 0;
      for (let d = 0; d < DIR_N; d++) {
        const p = a * 4 + d;
        if (!PAIR_MASK[p]) continue;
        gsum += (p === sel ? 1 : 0) - probs[p];
      }
      const delta = gsum * k;
      if (delta === 0) continue;
      const hb = a * CELL_H, fb = a * CELL_F;
      for (let h = 0; h < CELL_H; h++) {
        const t = hid[hb + h];
        const back = 1 - t * t;
        for (let d = 0; d < DIR_N; d++) {
          const p = a * 4 + d;
          if (!PAIR_MASK[p]) continue;
          const dd = ((p === sel ? 1 : 0) - probs[p]) * k;
          policy.W2[h * DIR_N + d] += dd * t;
          const dh = dd * policy.W2[h * DIR_N + d] * back;
          policy.b1[h] += dh * 0.25;
          const wb = h * CELL_F;
          for (let j = 0; j < CELL_F; j++) policy.W1[wb + j] += dh * cf[fb + j];
        }
      }
      for (let d = 0; d < DIR_N; d++) {
        const p = a * 4 + d;
        if (!PAIR_MASK[p]) continue;
        policy.b2[d] += ((p === sel ? 1 : 0) - probs[p]) * k * 0.25;
      }
    }
    for (const W of [policy.W1, policy.W2, policy.Wprior, policy.b1, policy.b2]) {
      for (let i = 0; i < W.length; i++) {
        if (!Number.isFinite(W[i])) W[i] = 0;
        else if (W[i] > 5) W[i] = 5; else if (W[i] < -5) W[i] = -5;
      }
    }
  } catch {}
}

export function shapeReward(result) {
  try {
    if (result?.ok) return Math.min(3, (result.score || 0) / 200);
    return -0.05;
  } catch { return 0; }
}

export function exportWeights(policy, extraMeta = {}) {
  return {
    meta: {
      algo: 'REINFORCE joint 256-way: tiled 10->16->4 scorer + 73->4 descending prior (frozen LIF)',
      arch: { CF: policy.CF, H: policy.H, C: policy.C, D: policy.D, F: policy.F },
      seed: policy.seed, ...extraMeta,
    },
    W1: [...policy.W1], b1: [...policy.b1], W2: [...policy.W2], b2: [...policy.b2], Wprior: [...policy.Wprior],
  };
}

export function importWeights(policy, doc) {
  const a = doc?.meta?.arch;
  if (!a || a.CF !== policy.CF || a.H !== policy.H || a.C !== policy.C || a.D !== policy.D || a.F !== policy.F) {
    throw new Error('readout arch mismatch');
  }
  const parts = [[doc.W1, policy.W1], [doc.b1, policy.b1], [doc.W2, policy.W2], [doc.b2, policy.b2], [doc.Wprior, policy.Wprior]];
  for (const [src, dst] of parts) {
    if (!Array.isArray(src) || src.length !== dst.length) throw new Error('weight shape');
    for (let i = 0; i < dst.length; i++) {
      const v = +src[i];
      if (!Number.isFinite(v)) throw new Error('non-finite weight');
      dst[i] = Math.max(-5, Math.min(5, v));
    }
  }
  return true;
}

export async function loadReadout({ url = '/public/data/readout-weights.json', fetchFn = null, timeoutMs = 3000, seed = 1337 } = {}) {
  const policy = createPolicy(seed);
  const fresh = (reason) => ({ ok: false, reason, policy, provenance: 'random-init' });
  let impl = fetchFn;
  if (!impl) {
    try { impl = globalThis.fetch?.bind(globalThis) ?? null; } catch { impl = null; }
    if (!impl) return fresh('no-fetch');
  }
  let timer = null;
  try {
    const ctrl = new AbortController();
    timer = setTimeout(() => { try { ctrl.abort(); } catch {} }, timeoutMs);
    const res = await impl(url, { signal: ctrl.signal });
    if (!res || (typeof res.ok === 'boolean' && !res.ok)) return fresh(`http:${res?.status ?? '?'}`);
    const doc = JSON.parse(await res.text());
    importWeights(policy, doc);
    return { ok: true, reason: null, policy, provenance: 'static-trained', meta: doc.meta ?? null };
  } catch (err) {
    return fresh(err?.name === 'AbortError' ? 'timeout' : 'load-error');
  } finally {
    try { if (timer) clearTimeout(timer); } catch {}
  }
}
