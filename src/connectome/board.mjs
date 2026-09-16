/**
 * board.mjs — Pure deterministic match-3 engine as dependency-free ESM.
 *
 * Same semantics as grid-engine.js (kept byte-compatible on purpose), but
 * importable from browser <script type="module"> AND Node trainers.
 * The RL loop trains against THIS file; the game validates with it too,
 * so a policy bug can never corrupt board state (invalid swaps revert).
 */
export const ROWS = 8, COLS = 8, NCOL = 6;

export function mulberry32(seed) {
  let a = (seed >>> 0) || 1;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const cloneBoard = (b) => b.map((r) => r.slice());

export function createBoard(seed) {
  const rng = mulberry32(seed), b = [];
  for (let r = 0; r < ROWS; r++) {
    b.push([]);
    for (let c = 0; c < COLS; c++) {
      let v = 0, g = 0;
      do { v = Math.floor(rng() * NCOL); g++; if (g > 60) break; }
      while ((c >= 2 && b[r][c - 1] === v && b[r][c - 2] === v) ||
             (r >= 2 && b[r - 1][c] === v && b[r - 2][c] === v));
      b[r].push(v);
    }
  }
  return b;
}

export function findMatches(board) {
  try {
    if (!Array.isArray(board) || !board.length || !Array.isArray(board[0])) return [];
    const rows = board.length, cols = board[0].length, mk = new Set();
    const K = (r, c) => r * 1000 + c;
    for (let r = 0; r < rows; r++) {
      if (!Array.isArray(board[r])) continue;
      let run = 1;
      for (let c = 1; c <= cols; c++) {
        const cur = c < cols ? board[r][c] : null, prev = board[r][c - 1];
        if (c < cols && cur === prev && typeof cur === 'number') run++;
        else { if (run >= 3 && typeof prev === 'number') for (let k = c - run; k < c; k++) mk.add(K(r, k)); run = 1; }
      }
    }
    for (let c = 0; c < cols; c++) {
      let run = 1;
      for (let r = 1; r <= rows; r++) {
        const cur = (r < rows && Array.isArray(board[r])) ? board[r][c] : null;
        const prev = Array.isArray(board[r - 1]) ? board[r - 1][c] : undefined;
        if (r < rows && cur === prev && typeof cur === 'number') run++;
        else { if (run >= 3 && typeof prev === 'number') for (let k = r - run; k < r; k++) mk.add(K(k, c)); run = 1; }
      }
    }
    return [...mk].map((k) => [Math.floor(k / 1000), k % 1000]);
  } catch { return []; }
}

function collapseAndRefill(board, cells, rng) {
  const rows = board.length, cols = board[0].length;
  const gone = new Set(cells.map(([r, c]) => r * 1000 + c));
  for (let c = 0; c < cols; c++) {
    const col = [];
    for (let r = rows - 1; r >= 0; r--) if (!gone.has(r * 1000 + c)) col.push(board[r][c]);
    while (col.length < rows) col.push(Math.floor(rng() * NCOL));
    for (let r = rows - 1, i = 0; r >= 0; r--, i++) board[r][c] = col[i];
  }
}

export function scoreForMatch(n) {
  if (n >= 5) return 200 + (n - 5) * 60;
  if (n === 4) return 120;
  return 60;
}

export function resolveCascades(board, rng) {
  const b = cloneBoard(board);
  let score = 0, casc = 0, removed = 0;
  const steps = [];
  for (let i = 0; i < 50; i++) {
    const m = findMatches(b);
    if (!m.length) break;
    casc++; removed += m.length;
    const pts = scoreForMatch(m.length) * casc;
    score += pts;
    steps.push({ cascade: casc, removed: m.length, points: pts });
    collapseAndRefill(b, m, rng);
  }
  return { board: b, score, cascades: casc, removed, steps };
}

/** Swap two cells by FLAT index 0..63 + direction. Reverts when no match. */
export function tryAction(board, cell, dir, rng) {
  const bad = (reason) => ({ ok: false, reason, board: cloneBoard(board), score: 0, removed: 0 });
  try {
    const r1 = Math.floor(cell / 8), c1 = cell % 8;
    const d = { up: [-1, 0], down: [1, 0], left: [0, -1], right: [0, 1] }[dir];
    if (!d) return bad('bad-dir');
    const r2 = r1 + d[0], c2 = c1 + d[1];
    if (r2 < 0 || r2 >= ROWS || c2 < 0 || c2 >= COLS) return bad('off-board');
    const b = cloneBoard(board);
    const t = b[r1][c1]; b[r1][c1] = b[r2][c2]; b[r2][c2] = t;
    if (!findMatches(b).length) return { ok: false, reason: 'no-match', board: cloneBoard(board), score: 0, removed: 0 };
    const res = resolveCascades(b, rng);
    return { ok: true, reason: 'match', board: res.board, score: res.score, removed: res.removed, steps: res.steps };
  } catch { return bad('exception'); }
}

export function findValidMove(board) {
  try {
    if (!Array.isArray(board) || !board.length) return null;
    for (let r = 0; r < ROWS; r++) {
      if (!Array.isArray(board[r])) continue;
      for (let c = 0; c < COLS; c++) for (const [dr, dc] of [[0, 1], [1, 0]]) {
        const r2 = r + dr, c2 = c + dc;
        if (r2 >= ROWS || c2 >= COLS || !Array.isArray(board[r2])) continue;
        const t = board[r][c]; board[r][c] = board[r2][c2]; board[r2][c2] = t;
        const hit = findMatches(board).length > 0;
        board[r2][c2] = board[r][c]; board[r][c] = t;
        if (hit) return { r1: r, c1: c, r2, c2 };
      }
    }
    return null;
  } catch { return null; }
}

export function reshuffle(board, seed) {
  try {
    const flat = board.flat();
    for (let a = 0; a < 200; a++) {
      const rng = mulberry32((seed + a * 7919) >>> 0), arr = flat.slice();
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        const t = arr[i]; arr[i] = arr[j]; arr[j] = t;
      }
      const b = [];
      for (let r = 0; r < ROWS; r++) b.push(arr.slice(r * COLS, (r + 1) * COLS));
      if (!findMatches(b).length && findValidMove(b)) return { board: b };
    }
    return { board: createBoard((seed + 999) >>> 0), fallback: true };
  } catch { return { board: createBoard(1234), fallback: true }; }
}

/** Valid direction mask for a flat cell (edge cells lose off-board dirs). */
export function validDirs(cell) {
  const r = Math.floor(cell / 8), c = cell % 8;
  return {
    up: r > 0, down: r < 7, left: c > 0, right: c < 7,
  };
}
export const DIRS = ['up', 'down', 'left', 'right'];
