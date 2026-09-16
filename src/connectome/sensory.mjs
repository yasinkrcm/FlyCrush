/**
 * sensory.mjs — Fly eye model (ommatidia-style downsampling).
 *
 * Zero dependencies, no DOM, no network. Pure functions + one stateful
 * eye wrapper (for T4/T5-style frame-difference). Safe to unit-test.
 *
 * Pipeline: 8x8 candy board (values 0..5)
 *   -> 4x4 region luminance + chromatic-contrast maps (the fly never sees
 *      individual candies, only regions of color contrast)
 *   -> 48-dim optic input vector injected into Medulla/Lobula layer:
 *      [16 luminance | 16 contrast | 10 color-energy-ish | 6 edge/motion]
 *      (T4/T5 channels consume the frame-difference "motion" part.)
 *
 * Color model: 6 candy colors mapped to fly-relevant channels —
 * luminance (achromatic, R1-R6-like) + blue/yellow + green/magenta
 * opponency (a coarse, documented simplification of R7/R8 + Mi/Tm).
 */
export const BOARD_N = 8;
export const REGION_N = 4;
export const INPUT_DIM = 48;

// sRGB candy palette (display only) -> linear-ish luminance weights.
const LUMA = [0.32, 0.72, 0.62, 0.55, 0.38, 0.48]; // per color 0..5
// Opponent weights per color: [blue-yellow, green-magenta]
const OPP = [
  [-0.5, 0.6], [0.3, 0.5], [-0.4, -0.7],
  [0.8, -0.4], [-0.2, 0.1], [0.5, 0.5],
];

function cellColor(board, r, c) {
  try {
    const v = board?.[r]?.[c];
    return (typeof v === 'number' && v >= 0 && v < 6) ? v : 0;
  } catch { return 0; }
}

/** 4x4 region means of luminance + mean opponent responses. Pure. */
export function boardToRegions(board) {
  const lum = new Float32Array(16);
  const oppA = new Float32Array(16);
  const oppB = new Float32Array(16);
  const cell = BOARD_N / REGION_N; // 2
  for (let br = 0; br < REGION_N; br++) {
    for (let bc = 0; bc < REGION_N; bc++) {
      let l = 0, a = 0, b = 0, n = 0;
      for (let dr = 0; dr < cell; dr++) {
        for (let dc = 0; dc < cell; dc++) {
          const col = cellColor(board, br * cell + dr, bc * cell + dc);
          l += LUMA[col]; a += OPP[col][0]; b += OPP[col][1]; n++;
        }
      }
      const k = br * REGION_N + bc;
      lum[k] = n ? l / n : 0; oppA[k] = n ? a / n : 0; oppB[k] = n ? b / n : 0;
    }
  }
  return { lum, oppA, oppB };
}

/** Local contrast: |region - mean of 4-neighbours|, 0..~1. Pure. */
export function regionContrast(lum) {
  const out = new Float32Array(16);
  const at = (r, c) => lum[r * REGION_N + c];
  for (let r = 0; r < REGION_N; r++) {
    for (let c = 0; c < REGION_N; c++) {
      let s = 0, n = 0;
      if (r > 0) { s += at(r - 1, c); n++; }
      if (r < 3) { s += at(r + 1, c); n++; }
      if (c > 0) { s += at(r, c - 1); n++; }
      if (c < 3) { s += at(r, c + 1); n++; }
      out[r * REGION_N + c] = n ? Math.abs(at(r, c) - s / n) : 0;
    }
  }
  return out;
}

/**
 * Build the 48-dim optic input vector. Pure given (regions, prevRegions).
 * Layout: [0..15] luminance, [16..31] contrast,
 * [32..41] color-energy (oppA²+oppB² pooled pairs + global means),
 * [42..47] motion (frame difference pooled to 6 bands, T4/T5 feed).
 */
export function buildInputVector(reg, prev) {
  const contrast = regionContrast(reg.lum);
  const v = new Float32Array(INPUT_DIM);
  v.set(reg.lum, 0);
  v.set(contrast, 16);
  for (let i = 0; i < 8; i++) {
    const a = reg.oppA[i * 2] ?? 0, b = reg.oppB[i * 2] ?? 0;
    v[32 + i] = Math.min(1, a * a + b * b);
  }
  v[40] = reg.oppA.reduce((s, x) => s + x, 0) / 16;
  v[41] = reg.oppB.reduce((s, x) => s + x, 0) / 16;
  if (prev) {
    for (let i = 0; i < 6; i++) {
      let d = 0;
      for (let k = i * 2; k < Math.min(16, i * 2 + 3); k++) d += Math.abs(reg.lum[k] - (prev.lum[k] ?? 0));
      v[42 + i] = Math.min(1, d);
    }
  }
  return { vector: v, contrast };
}

/** Stateful eye: remembers the previous frame for motion channels. */
export function createEye() {
  let prev = null;
  return {
    observe(board) {
      const reg = boardToRegions(board);
      const out = buildInputVector(reg, prev);
      prev = reg;
      return out; // { vector: Float32Array(48), contrast: Float32Array(16) }
    },
    reset() { prev = null; },
  };
}
