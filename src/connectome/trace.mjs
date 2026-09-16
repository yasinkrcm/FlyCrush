/**
 * trace.mjs — Static subset loader + schema guard + pre-recorded fallback.
 *
 * RULE #1: the ONLY network touch is ONE fetch of the same-origin static
 * file at init (with timeout). No API calls during gameplay frames, ever.
 * Every failure path resolves — never rejects, never throws — to
 * { ok:false, provenance:'pre-recorded-fallback' } so the game always runs.
 */
export const DEFAULT_URL = '/public/data/connectome-subset.json';

/** Structural guard: unique IDs, finite xyz, weights in range, decoders resolvable. */
export function validateSubset(d) {
  const errors = [];
  try {
    if (!d || typeof d !== 'object') return { ok: false, errors: ['not-an-object'] };
    const ns = d.neurons;
    if (!Array.isArray(ns) || !ns.length) errors.push('empty-neurons');
    const ids = new Set();
    (ns ?? []).forEach((nr, i) => {
      if (!nr || typeof nr.id !== 'number') { errors.push(`neuron[${i}].id`); return; }
      if (ids.has(nr.id)) errors.push(`dup-id:${nr.id}`);
      ids.add(nr.id);
      const xyz = nr.xyz;
      if (!Array.isArray(xyz) || xyz.length !== 3 || xyz.some((x) => typeof x !== 'number' || !isFinite(x))) {
        errors.push(`neuron[${i}].xyz`);
      }
    });
    (d.weights ?? []).forEach((e, i) => {
      if (!Array.isArray(e) || e.length !== 3) { errors.push(`weight[${i}].shape`); return; }
      const [a, b, w] = e;
      if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0 || a >= ns.length || b >= ns.length) {
        errors.push(`weight[${i}].dangling`); return;
      }
      if (typeof w !== 'number' || !isFinite(w)) errors.push(`weight[${i}].w`);
    });
    const dec = d.decoders ?? {};
    for (const k of ['colIds', 'rowIds', 'gateIds', 'pamIds']) {
      if (!Array.isArray(dec[k]) || !dec[k].length) errors.push(`decoders.${k}`);
      else if (dec[k].some((id) => !ids.has(id))) errors.push(`decoders.${k}.unknown-id`);
    }
    for (const dir of ['up', 'down', 'left', 'right']) {
      if (!ids.has(dec.dirIds?.[dir])) errors.push(`decoders.dirIds.${dir}`);
    }
    if (!Array.isArray(d.demoTrace) || !d.demoTrace.length) errors.push('demoTrace');
  } catch {
    errors.push('validator-exception');
  }
  return { ok: errors.length === 0, errors: errors.slice(0, 12) };
}

/**
 * Load the static subset once. Options:
 *   { url, fetchFn (DI for tests), timeoutMs }
 * Always resolves. AbortController-guarded; JSON.parse wrapped in try/catch.
 */
export async function loadSubset({ url = DEFAULT_URL, fetchFn = null, timeoutMs = 3000 } = {}) {
  const fail = (reason) => ({ ok: false, reason, data: null, provenance: 'pre-recorded-fallback' });
  let fetchImpl = fetchFn;
  if (!fetchImpl) {
    try { fetchImpl = globalThis.fetch?.bind(globalThis) ?? null; } catch { fetchImpl = null; }
    if (!fetchImpl) return fail('no-fetch');
  }
  let ctrl = null, timer = null;
  try {
    try {
      ctrl = new AbortController();
      timer = setTimeout(() => { try { ctrl.abort(); } catch {} }, timeoutMs);
    } catch { ctrl = null; }
    const res = await fetchImpl(url, ctrl ? { signal: ctrl.signal } : undefined);
    if (!res || (typeof res.ok === 'boolean' && !res.ok)) return fail(`http:${res?.status ?? '?'}`);
    const text = await res.text();
    let data;
    try { data = JSON.parse(text); } catch { return fail('json-parse'); }
    const v = validateSubset(data);
    if (!v.ok) return fail(`schema:${v.errors[0] ?? 'invalid'}`);
    return { ok: true, reason: null, data, provenance: data?.meta?.synthetic ? 'static-synthetic' : 'static-json' };
  } catch (err) {
    return fail(err?.name === 'AbortError' ? 'timeout' : 'fetch-error');
  } finally {
    try { if (timer) clearTimeout(timer); } catch {}
  }
}

/**
 * Pre-recorded fallback planner: wraps the GAME's own valid-move finder
 * (pure board logic) and emits the same {L,R,gate,dir} shape as decodeMotor,
 * animated toward the target so panels stay alive. Labeled live:false.
 */
export function createFallbackPlan(findValidMove) {
  let L = 0, R = 0, gate = 0, dir = 'up', target = null;
  const DIRS = ['up', 'down', 'left', 'right'];
  return {
    provenance: 'pre-recorded-fallback',
    live: false,
    next(board) {
      try {
        if (!target) {
          const mv = findValidMove?.(board);
          if (!mv) return { L: Math.round(L), R: Math.round(R), gate: 0, dir, dirs: { up: 0, down: 0, left: 0, right: 0 }, committed: false, dead: true };
          target = mv;
          const dr = mv.r2 - mv.r1, dc = mv.c2 - mv.c1;
          dir = dr === -1 ? 'up' : dr === 1 ? 'down' : dc === -1 ? 'left' : 'right';
        }
        L += Math.sign(target.c1 - L) * 0.6; if (Math.abs(target.c1 - L) < 0.6) L = target.c1;
        R += Math.sign(target.r1 - R) * 0.6; if (Math.abs(target.r1 - R) < 0.6) R = target.r1;
        gate = Math.min(1, gate + 0.12);
        const committed = gate >= 0.75 && L === target.c1 && R === target.r1;
        const out = {
          L: Math.round(L), R: Math.round(R), gate: +gate.toFixed(3), dir,
          dirs: { up: +(dir === 'up' ? gate : 0.1).toFixed(3), down: +(dir === 'down' ? gate : 0.1).toFixed(3), left: +(dir === 'left' ? gate : 0.1).toFixed(3), right: +(dir === 'right' ? gate : 0.1).toFixed(3) },
          committed, move: committed ? target : null, dead: false,
        };
        if (committed) { target = null; gate = 0; }
        return out;
      } catch {
        return { L: 0, R: 0, gate: 0, dir: 'up', dirs: { up: 0, down: 0, left: 0, right: 0 }, committed: false, dead: true };
      }
    },
    reset() { L = 0; R = 0; gate = 0; target = null; },
  };
}
