// FLYCRUSH — pure deterministic match-3 engine.
// No DOM, no network, no neural layer. Safe to unit-test in isolation so a
// neural-decoding bug can never corrupt board state.
'use strict';

const ROWS = 8;
const COLS = 8;
const NCOLORS = 6;

function mulberry32(seed) {
  let a = (seed >>> 0) || 1;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function cloneBoard(b) { return b.map((row) => row.slice()); }

function randColor(rng) { return Math.floor(rng() * NCOLORS); }

// Create a board with no pre-existing matches (deterministic for seed).
function createBoard(seed, rows = ROWS, cols = COLS) {
  const rng = mulberry32(seed);
  const b = [];
  for (let r = 0; r < rows; r++) {
    b.push([]);
    for (let c = 0; c < cols; c++) {
      let v;
      let guard = 0;
      do {
        v = randColor(rng);
        guard++;
        if (guard > 50) break;
      } while (
        (c >= 2 && b[r][c - 1] === v && b[r][c - 2] === v) ||
        (r >= 2 && b[r - 1][c] === v && b[r - 2][c] === v)
      );
      b[r].push(v);
    }
  }
  return b;
}

function inBounds(r, c, rows = ROWS, cols = COLS) {
  return r >= 0 && r < rows && c >= 0 && c < cols;
}

function isAdjacent(a, b) {
  return Math.abs(a.r - b.r) + Math.abs(a.c - b.c) === 1;
}

// Returns array of [r,c] in any run of 3+ horizontally or vertically.
function findMatches(board) {
  if (!Array.isArray(board) || board.length === 0) return [];
  const rows = board.length;
  const cols = Array.isArray(board[0]) ? board[0].length : 0;
  const marked = new Set();
  const key = (r, c) => r * 1000 + c;

  for (let r = 0; r < rows; r++) {
    if (!Array.isArray(board[r])) continue;
    let run = 1;
    for (let c = 1; c <= cols; c++) {
      const cur = c < cols ? board[r][c] : null;
      const prev = board[r][c - 1];
      if (c < cols && cur === prev && typeof cur === 'number') {
        run++;
      } else {
        if (run >= 3 && typeof prev === 'number') {
          for (let k = c - run; k < c; k++) marked.add(key(r, k));
        }
        run = 1;
      }
    }
  }
  for (let c = 0; c < cols; c++) {
    let run = 1;
    for (let r = 1; r <= rows; r++) {
      const cur = r < rows && Array.isArray(board[r]) ? board[r][c] : null;
      const prev = Array.isArray(board[r - 1]) ? board[r - 1][c] : undefined;
      if (r < rows && cur === prev && typeof cur === 'number') {
        run++;
      } else {
        if (run >= 3 && typeof prev === 'number') {
          for (let k = r - run; k < r; k++) marked.add(key(k, c));
        }
        run = 1;
      }
    }
  }
  return [...marked].map((k) => [Math.floor(k / 1000), k % 1000]);
}

function collapseAndRefill(board, matchedKeys, rng) {
  const rows = board.length;
  const cols = board[0].length;
  const gone = new Set(matchedKeys.map(([r, c]) => r * 1000 + c));
  for (let c = 0; c < cols; c++) {
    const col = [];
    for (let r = rows - 1; r >= 0; r--) {
      if (!gone.has(r * 1000 + c)) col.push(board[r][c]);
    }
    while (col.length < rows) col.push(randColor(rng));
    for (let r = rows - 1, i = 0; r >= 0; r--, i++) board[r][c] = col[i];
  }
}

function scoreForMatchSize(n) {
  if (n >= 5) return 200 + (n - 5) * 60;
  if (n === 4) return 120;
  return 60;
}

// Fully resolve cascades. Pure w.r.t. caller board (works on a copy).
// Returns { board, totalScore, cascades, removedTotal, steps }.
function resolveCascades(board, rng, maxSteps = 50) {
  const b = cloneBoard(board);
  let totalScore = 0;
  let cascades = 0;
  let removedTotal = 0;
  const steps = [];
  for (let i = 0; i < maxSteps; i++) {
    const m = findMatches(b);
    if (m.length === 0) break;
    cascades++;
    removedTotal += m.length;
    const pts = scoreForMatchSize(m.length) * cascades; // combo multiplier
    totalScore += pts;
    steps.push({ cascade: cascades, removed: m.length, points: pts });
    collapseAndRefill(b, m, rng);
  }
  return { board: b, totalScore, cascades, removedTotal, steps };
}

// Attempt swap; revert when it produces no match. Never throws on bad input.
function trySwap(board, r1, c1, r2, c2, rng) {
  const rows = Array.isArray(board) ? board.length : 0;
  const cols = rows > 0 && Array.isArray(board[0]) ? board[0].length : 0;
  const fail = (reason) => ({ ok: false, reason, board: cloneBoard(board), score: 0, cascades: 0, removed: 0 });
  if (!inBounds(r1, c1, rows, cols) || !inBounds(r2, c2, rows, cols)) return fail('out-of-bounds');
  if (Math.abs(r1 - r2) + Math.abs(c1 - c2) !== 1) return fail('not-adjacent');
  const b = cloneBoard(board);
  const t = b[r1][c1]; b[r1][c1] = b[r2][c2]; b[r2][c2] = t;
  if (findMatches(b).length === 0) {
    return { ok: false, reason: 'no-match', board: cloneBoard(board), score: 0, cascades: 0, removed: 0 };
  }
  const res = resolveCascades(b, rng);
  return { ok: true, reason: 'match', board: res.board, score: res.totalScore, cascades: res.cascades, removed: res.removedTotal, steps: res.steps };
}

function hasValidMove(board) { return findValidMove(board) !== null; }

function findValidMove(board) {
  if (!Array.isArray(board) || board.length === 0) return null;
  const rows = board.length;
  const cols = Array.isArray(board[0]) ? board[0].length : 0;
  const dirs = [[0, 1], [1, 0]];
  for (let r = 0; r < rows; r++) {
    if (!Array.isArray(board[r])) continue;
    for (let c = 0; c < cols; c++) {
      for (const [dr, dc] of dirs) {
        const r2 = r + dr, c2 = c + dc;
        if (!inBounds(r2, c2, rows, cols)) continue;
        if (!Array.isArray(board[r2])) continue;
        const t = board[r][c]; board[r][c] = board[r2][c2]; board[r2][c2] = t;
        const hit = findMatches(board).length > 0;
        board[r2][c2] = board[r][c]; board[r][c] = t; // swap back (restores in place)
        if (hit) return { r1: r, c1: c, r2, c2 };
      }
    }
  }
  return null;
}

// Fisher–Yates with seeded rng; repeats until board has no instant matches
// AND has at least one valid move (or attempt cap reached).
function reshuffle(board, seed, maxAttempts = 200) {
  const rows = board.length;
  const cols = board[0].length;
  const flat = board.flat();
  let attempt = 0;
  for (; attempt < maxAttempts; attempt++) {
    const rng = mulberry32((seed + attempt * 7919) >>> 0);
    const arr = flat.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    const b = [];
    for (let r = 0; r < rows; r++) b.push(arr.slice(r * cols, (r + 1) * cols));
    if (findMatches(b).length === 0 && findValidMove(b) !== null) {
      return { board: b, attempts: attempt + 1 };
    }
  }
  // Fallback: fresh generated board (guaranteed match-free by construction).
  const fresh = createBoard((seed + 999) >>> 0, rows, cols);
  return { board: fresh, attempts: maxAttempts, fallback: true };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ROWS, COLS, NCOLORS, mulberry32, cloneBoard, createBoard,
    findMatches, collapseAndRefill, resolveCascades, trySwap,
    hasValidMove, findValidMove, reshuffle, scoreForMatchSize, isAdjacent, inBounds,
  };
}
