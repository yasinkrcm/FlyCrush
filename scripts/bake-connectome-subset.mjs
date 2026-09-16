#!/usr/bin/env node
/**
 * bake-connectome-subset.mjs — DEV-TIME ONLY generator.
 *
 * Produces public/data/connectome-subset.json: a small, STATIC, fully
 * deterministic stand-in for a FlyWire/neuPrint MaleCNS v1.0 export.
 * NEVER runs in the browser, NEVER touches the network. Run it when the
 * checked-in JSON needs regenerating:
 *
 *   node scripts/bake-connectome-subset.mjs [--seed 166700] [--out public/data/connectome-subset.json]
 *
 * To use REAL anatomy: export neuron soma xyz + a sparse weight list with
 * neuprint-python / CAVEclient, then reshape to this schema (see
 * validateSubset() in src/connectome/trace.mjs) and replace the file.
 * Positions here are SYNTHETIC schematic clusters, honestly labeled in
 * meta.synthetic — the file must never be presented as measured data.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

function mulberry32(seed) {
  let a = (seed >>> 0) || 1;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 && args[i + 1] ? args[i + 1] : d; };
const SEED = parseInt(opt('--seed', '166700'), 10);
const OUT = resolve(process.cwd(), opt('--out', 'public/data/connectome-subset.json'));
const rng = mulberry32(SEED);
const pick = (arr) => arr[Math.floor(rng() * arr.length)];
const gaussish = () => (rng() + rng() + rng()) / 3 - 0.5; // ~N(0, ~0.17)

// Synthetic MaleCNS-style body IDs (clearly out of any real allocation).
const ID_BASE = 720575940600000;
let nextId = ID_BASE;
const nid = () => nextId++;

const neurons = [];
const byGroup = {};
function addGroup(name, type, region, layer, n, cx, cy, cz, spread) {
  byGroup[name] = [];
  for (let i = 0; i < n; i++) {
    const id = nid();
    neurons.push({
      id, type, region, layer,
      xyz: [
        +(cx + gaussish() * spread).toFixed(4),
        +(cy + gaussish() * spread).toFixed(4),
        +(cz + gaussish() * spread).toFixed(4),
      ],
    });
    byGroup[name].push(neurons.length - 1); // index into neurons[]
  }
}

// Optic lobe input layer (T4/T5 direction-selective + LC visual projection)
addGroup('T4', 'T4', 'medulla', 'optic', 128, -0.55, 0.45, 0.55, 0.55);
addGroup('T5', 'T5', 'lobula', 'optic', 128, 0.55, 0.45, 0.55, 0.55);
addGroup('LC11', 'LC11', 'lobula', 'optic', 64, -0.2, 0.35, 0.6, 0.6);
addGroup('LC15', 'LC15', 'lobula', 'optic', 64, 0.2, 0.35, 0.6, 0.6);
addGroup('LC26', 'LC26', 'lobula', 'optic', 64, 0.0, 0.5, 0.6, 0.6);
// Descending neurons: 8 column (DNa01-like) + 8 row (DNa02-like) + 8 DNp (4 dir + 4 gate)
addGroup('DNa01', 'DNa01', 'gnathal', 'descending', 8, -0.15, -0.35, 0.1, 0.18);
addGroup('DNa02', 'DNa02', 'gnathal', 'descending', 8, 0.15, -0.35, 0.1, 0.18);
addGroup('DNp', 'DNp', 'vnc', 'descending', 8, 0.0, -0.75, 0.0, 0.3);
// Mushroom body: PAM dopaminergic + MBON readout
addGroup('PAM11', 'PAM-DAN', 'mushroom-body', 'modulatory', 12, 0.3, -0.1, 0.2, 0.2);
addGroup('MBON', 'MBON', 'mushroom-body', 'modulatory', 8, -0.3, -0.1, 0.2, 0.2);

// Sparse weights as [preIdx, postIdx, w]. Optic->LC fan-in, LC->DN fan-in,
// weak DN recurrence, PAM modulatory taps.
const weights = [];
function connect(pre, post, fanIn, wMin, wMax) {
  for (const j of post) {
    const chosen = new Set();
    while (chosen.size < Math.min(fanIn, pre.length)) chosen.add(pick(pre));
    for (const i of chosen) weights.push([i, j, +((wMin + rng() * (wMax - wMin))).toFixed(4)]);
  }
}
const T = [...byGroup.T4, ...byGroup.T5];
const LC = [...byGroup.LC11, ...byGroup.LC15, ...byGroup.LC26];
const DN = [...byGroup.DNa01, ...byGroup.DNa02, ...byGroup.DNp];
connect(T, LC, 8, 0.15, 0.6);
connect(LC, DN, 12, 0.1, 0.5);
connect(DN, DN, 3, -0.25, -0.05); // lateral inhibition
connect(byGroup.PAM11, DN, 4, 0.05, 0.3); // dopaminergic gating taps
connect(byGroup.MBON, [...byGroup.DNp], 4, -0.3, 0.3);

// Background render cloud (separate from simulated neurons; region-coded).
const REGION_CODES = { brain: 0, optic: 1, vnc: 2 };
const renderCloud = [];
for (let i = 0; i < 2500; i++) {
  const r = rng();
  let x, y, z, c;
  if (r < 0.72) { // brain ellipsoid
    const th = rng() * Math.PI * 2, ph = Math.acos(2 * rng() - 1), rr = Math.cbrt(rng());
    x = Math.cos(th) * Math.sin(ph) * rr; y = Math.cos(ph) * rr * 0.85 + 0.25; z = Math.sin(th) * Math.sin(ph) * rr * 0.7 + 0.4; c = 0;
  } else if (r < 0.86) { x = (rng() - 0.5) * 1.4; y = 0.45 + gaussish() * 0.4; z = 0.55 + gaussish() * 0.3; c = 1; }
  else { x = (rng() - 0.5) * 0.3; y = -0.4 - rng() * 0.6; z = (rng() - 0.5) * 0.25 + 0.2; c = 2; }
  renderCloud.push([+x.toFixed(3), +y.toFixed(3), +z.toFixed(3), c]);
}

// Decoder map: explicit, project-defined sensory→motor mapping
// (same honesty pattern as awesome-fly's Connectome Fighter ledger).
const idOf = (idx) => neurons[idx].id;
const decoders = {
  colIds: byGroup.DNa01.map(idOf), // L signal: 8 column channels
  rowIds: byGroup.DNa02.map(idOf), // R signal: 8 row channels
  gateIds: byGroup.DNp.slice(4, 8).map(idOf), // gate pool
  dirIds: { up: idOf(byGroup.DNp[0]), down: idOf(byGroup.DNp[1]), left: idOf(byGroup.DNp[2]), right: idOf(byGroup.DNp[3]) },
  pamIds: byGroup.PAM11.map(idOf),
};

// Demo trace: 48 scripted frames so the UI animates even before decisions.
const demoTrace = [];
{ const r2 = mulberry32(SEED + 7); let L = 0, R = 0, g = 0;
  for (let f = 0; f < 48; f++) {
    L = (L + (r2() < 0.3 ? 1 : 0)) % 8; R = (R + (r2() < 0.22 ? 1 : 0)) % 8;
    g = Math.min(1, Math.max(0, g + (r2() - 0.42) * 0.3));
    demoTrace.push({ L, R, gate: +g.toFixed(3), dir: ['up', 'down', 'left', 'right'][Math.floor(r2() * 4)] });
  } }

const doc = {
  meta: {
    dataset: 'MaleCNS v1.0 subset (schematic)',
    release: 'synthetic-standin',
    synthetic: true,
    seed: SEED,
    note: 'SYNTHETIC schematic positions/weights for offline demos. NOT measured anatomy. Replace with a neuprint-python/CAVEclient export reshaped to this schema for real data.',
    counts: { neurons: neurons.length, weights: weights.length, renderCloud: renderCloud.length },
    licenses: 'Bake script: same repo license. Real MaleCNS data remains CC BY 4.0 (FlyEM/HHMI Janelia, Cambridge, MRC LMB, Google Research).',
  },
  coordinateSpace: { unit: 'normalized', bounds: [-1, 1], axes: 'x=right, y=up(dorsal+), z=anterior+' },
  neurons, weights, renderCloud, decoders, demoTrace,
};

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JSON.stringify(doc));
console.log(`baked ${neurons.length} neurons, ${weights.length} weights, ${renderCloud.length} cloud pts -> ${OUT}`);
