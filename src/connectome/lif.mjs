/**
 * lif.mjs — Deterministic Leaky Integrate-and-Fire network + motor decode.
 *
 * Layers (from public/data/connectome-subset.json):
 *   optic (T4/T5/LC11/LC15/LC26, 448) <- 48-dim sensory vector
 *   descending DNa01 x8 (column/L) · DNa02 x8 (row/R) · DNp x8 (4 dir + 4 gate)
 *   modulatory PAM11 x12 (dopamine) · MBON x8
 *
 * Weights come ONLY from the static JSON (pre/post index pairs). No random
 * numbers at runtime: the network is a deterministic function of
 * (subset, sensory history). A decoding bug cannot corrupt game state —
 * decode outputs are advisory numbers; the game re-validates every move.
 *
 * Decode mapping (project-defined, explicit ledger — same honesty pattern
 * as awesome-fly's Connectome Fighter):
 *   L    = argmax(DNa01 drive)            -> grid column 0..7
 *   R    = argmax(DNa02 drive)            -> grid row    0..7
 *   gate = mean(DNp_gate pool rate)       -> commit when >= threshold
 *   dir  = argmax(DNp_dir pool)           -> up/down/left/right
 *   PAM11 Hz = exponential spike-rate estimate of the PAM pool.
 */
export const GATE_DEFAULT = 0.55;

// Per-layer LIF time constants (ms) and thresholds — documented simplifications.
const LAYER_P = {
  optic: { tau: 12, thr: 1.0, reset: 0.0, refrac: 2 },
  descending: { tau: 20, thr: 1.0, reset: 0.0, refrac: 3 },
  modulatory: { tau: 30, thr: 1.0, reset: 0.0, refrac: 4 },
};
const DT_MS = 10; // fixed sim step

function layerOf(type) {
  if (type === 'T4' || type === 'T5' || type === 'LC11' || type === 'LC15' || type === 'LC26') return 'optic';
  if (type === 'DNa01' || type === 'DNa02' || type === 'DNp') return 'descending';
  return 'modulatory';
}

/** Build typed-array state from a validated subset doc. Never throws. */
export function createNetwork(subset) {
  const N = subset.neurons.length;
  const net = {
    n: N,
    v: new Float32Array(N),
    ref: new Float32Array(N),       // refractory countdown (steps)
    spikes: new Uint8Array(N),
    rate: new Float32Array(N),      // slow rate estimate for decode/Hz
    tau: new Float32Array(N),
    thr: new Float32Array(N),
    // index groups
    optic: [], colIds: [], rowIds: [], gateIds: [], dirIds: {}, pamIds: [],
    idxOf: new Map(),
    // sparse adjacency as flat arrays for cache-friendly stepping
    head: null, nxt: null, to: null, w: null,
    pamHz: 0, tick: 0,
  };
  try {
    subset.neurons.forEach((nr, i) => {
      if (!nr || typeof nr !== 'object') return;
      net.idxOf.set(nr.id, i);
      const L = LAYER_P[layerOf(nr.type)] ?? LAYER_P.optic;
      net.tau[i] = L.tau; net.thr[i] = L.thr;
      if (layerOf(nr.type) === 'optic') net.optic.push(i);
    });
    const g = (ids) => (Array.isArray(ids) ? ids : []).map((id) => net.idxOf.get(id)).filter((i) => i !== undefined);
    net.colIds = g(subset.decoders?.colIds).slice(0, 8);
    net.rowIds = g(subset.decoders?.rowIds).slice(0, 8);
    net.gateIds = g(subset.decoders?.gateIds);
    net.pamIds = g(subset.decoders?.pamIds);
    for (const d of ['up', 'down', 'left', 'right']) {
      const i = net.idxOf.get(subset.decoders?.dirIds?.[d]);
      if (i !== undefined) net.dirIds[d] = i;
    }
    // Build adjacency (skip dangling refs — exports are partially incomplete).
    const tmp = Array.from({ length: N }, () => []);
    for (const e of subset.weights ?? []) {
      const a = e?.[0] | 0, b = e?.[1] | 0, w = +e?.[2];
      if (a < 0 || a >= N || b < 0 || b >= N || !isFinite(w)) continue;
      tmp[a].push([b, w]);
    }
    const head = new Int32Array(N).fill(-1);
    const total = tmp.reduce((s, l) => s + l.length, 0);
    const nxt = new Int32Array(total), to = new Int32Array(total), w = new Float32Array(total);
    let p = 0;
    for (let i = 0; i < N; i++) for (const [b, wv] of tmp[i]) { to[p] = b; w[p] = wv; nxt[p] = head[i]; head[i] = p; p++; }
    net.head = head; net.nxt = nxt; net.to = to; net.w = w;
  } catch { /* keep zeroed network; controller falls back to trace */ }
  return net;
}

const SENSORY_GAIN = 2.2; // scales 48-dim input into optic currents

/**
 * One fixed LIF step. inputVec: Float32Array(48). Returns spike count.
 * Bounded, NaN-proof: any non-finite voltage is clamped to rest.
 */
export function stepNetwork(net, inputVec, pamDrive = 0) {
  let fired = 0;
  try {
    const { n, v, ref, spikes, rate, tau, thr, head, nxt, to, w } = net;
    spikes.fill(0);
    const dim = inputVec?.length ?? 0;
    // Total current: sensory (optic) + synaptic + PAM, then ONE uniform
    // integrate below. (Old code drove optic first and decayed it 83% in
    // the same step's leak pass — nothing ever spiked. Fixed in parity
    // with flycrush_py/lif.py.)
    const I = new Float32Array(n);
    for (let k = 0; k < net.optic.length; k++) {
      const i = net.optic[k];
      const s = dim ? (inputVec[k % dim] ?? 0) : 0;
      I[i] += SENSORY_GAIN * s;
    }
    if (head) {
      for (let i = 0; i < n; i++) {
        if (!net._prevSpike?.[i]) continue;
        for (let e = head[i]; e !== -1; e = nxt[e]) I[to[e]] += w[e];
      }
    }
    // 3) PAM modulatory drive (reward pulses land here)
    for (const i of net.pamIds) I[i] += pamDrive;
    // 4) uniform integrate + leak
    for (let i = 0; i < n; i++) {
      if (ref[i] > 0) { ref[i] -= 1; continue; }
      let vv = v[i] + (DT_MS / tau[i]) * (I[i] - v[i]);
      if (!isFinite(vv)) vv = 0;
      vv = Math.max(-2, Math.min(4, vv));
      if (vv >= thr[i]) {
        spikes[i] = 1; fired++;
        vv = 0; ref[i] = 2;
        rate[i] += 0.25 * (1 - rate[i]);
      } else {
        rate[i] *= 0.985;
      }
      v[i] = vv;
    }
    net._prevSpike = Uint8Array.from(spikes);
    // 5) PAM11 Hz readout (mean pool rate -> Hz at 10ms steps)
    let pr = 0;
    for (const i of net.pamIds) pr += rate[i];
    net.pamHz = net.pamIds.length ? (pr / net.pamIds.length) * 100 : 0;
    net.tick++;
  } catch { /* hold state; decode still returns safe values */ }
  return fired;
}

/** Decode descending activity -> motor command. Always returns safe ranges. */
export function decodeMotor(net, gateThr = GATE_DEFAULT) {
  const out = { L: 0, R: 0, gate: 0, dir: 'up', dirs: { up: 0, down: 0, left: 0, right: 0 }, colActs: [], rowActs: [] };
  try {
    const act = (i) => (net.rate[i] ?? 0) + Math.max(0, net.v[i] ?? 0) * 0.15;
    let bi = 0, bv = -1e9;
    net.colIds.forEach((i, k) => { const a = act(i); out.colActs.push(+a.toFixed(3)); if (a > bv) { bv = a; bi = k; } });
    out.L = Math.max(0, Math.min(7, bi));
    bi = 0; bv = -1e9;
    net.rowIds.forEach((i, k) => { const a = act(i); out.rowActs.push(+a.toFixed(3)); if (a > bv) { bv = a; bi = k; } });
    out.R = Math.max(0, Math.min(7, bi));
    let gs = 0;
    for (const i of net.gateIds) gs += act(i);
    out.gate = net.gateIds.length ? Math.min(1, gs / net.gateIds.length) : 0;
    out.committed = out.gate >= gateThr;
    let bd = 'up', bdv = -1e9;
    for (const d of ['up', 'down', 'left', 'right']) {
      const i = net.dirIds[d];
      const a = i === undefined ? 0 : act(i);
      out.dirs[d] = +Math.min(1, a).toFixed(3);
      if (a > bdv) { bdv = a; bd = d; }
    }
    out.dir = bd;
  } catch { /* safe defaults above */ }
  return out;
}

/** Reward pulse: returns instantaneous extra PAM drive for next steps. */
export function rewardDrive(removedCells) {
  const r = Number.isFinite(removedCells) ? removedCells : 0;
  if (r >= 5) return 1.6;
  if (r === 4) return 1.1;
  if (r >= 3) return 0.7;
  return 0;
}
