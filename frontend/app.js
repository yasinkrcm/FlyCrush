'use strict';
/* FLYCRUSH frontend — 1:1 mirror of flycrush_py/game.py. Canvas 1120x740.
   Backend owns logic+brain+learning; this file owns animation+render.
   Offline: same-origin /api/* only. Every fetch guarded: backend down =>
   status line, never a blank crash. */
const W = 1120, H = 740, CELL = 62, BX = 40, BY = 130, RX = 600, X0 = 618;
const CANDY = [
  { c: '#ff6b6b', s: 'circle' }, { c: '#ffb347', s: 'square' },
  { c: '#7cff6b', s: 'diamond' }, { c: '#56d8ff', s: 'hex' },
  { c: '#c792ea', s: 'star' }, { c: '#ff5fd2', s: 'drop' },
];
const DV = { up: [-1, 0], down: [1, 0], left: [0, -1], right: [0, 1] };
const DIRS = ['up', 'down', 'left', 'right'];
const cv = document.getElementById('game');
const ctx = cv.getContext('2d');
const statusEl = document.getElementById('status');

let S = null;             // last snapshot / response pub fields
let board = null;
let subset = null, cloudPts = [], idxPos = [], idxGroup = {};
let report = {};
let phase = 'idle', phaseT = 0, pending = null, pendingFinal = null, steps = [], stepIdx = 0;
let busy = false; // in-flight request lock: overlapping async calls desync the animation
let falls = {}, pops = new Set(), matched = new Set();
let floats = [], particles = [], sel = null;
let rejectCells = [], rejectT = 99; // wrong-move ghost: stays visible ~1.6s
let playing = false, manual = false, aimT = 0, overT = 0;
let say = 'connecting…', happy = 0.5, sayT = 99;
let lastT = 0, speedMul = 1;

async function jget(u) {
  try {
    const r = await fetch(u);
    if (!r.ok) return null;
    return await r.json();
  } catch { return null; }
}
async function jpost(u, body) {
  try {
    const r = await fetch(u, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body || {}) });
    if (!r.ok) return null;
    return await r.json();
  } catch { return null; }
}
function mulberry(seed) {
  let a = (seed >>> 0) || 1;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shade(hex, d) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, (n >> 16) + d));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 255) + d));
  const b = Math.max(0, Math.min(255, (n & 255) + d));
  return `rgb(${r},${g},${b})`;
}
function rr(x, y, w, h, r, fill, stroke, lw) {
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(x, y, w, h, r);
  else ctx.rect(x, y, w, h);
  if (fill) { ctx.fillStyle = fill; ctx.fill(); }
  if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lw || 2; ctx.stroke(); }
}
function text(str, x, y, size, color) {
  ctx.fillStyle = color;
  ctx.font = `${size}px ui-monospace,Menlo,Consolas,monospace`;
  ctx.fillText(str, x, y);
}

/* ---------- candies & fly (mirror of pygame shapes) ---------- */
function fillShape(kind, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  if (kind === 'circle') ctx.arc(0, 0, r, 0, 7);
  else if (kind === 'square') {
    if (ctx.roundRect) ctx.roundRect(-r, -r, r * 2, r * 2, r / 3);
    else ctx.rect(-r, -r, r * 2, r * 2);
  } else if (kind === 'drop') {
    ctx.arc(0, 2, Math.max(1, r - 1), 0, 7);
    ctx.moveTo(-r + 4, 0); ctx.lineTo(r - 4, 0); ctx.lineTo(0, -r - 4); ctx.closePath();
  } else {
    const pts = [];
    if (kind === 'diamond') pts.push([0, -r], [r, 0], [0, r], [-r, 0]);
    else if (kind === 'hex') {
      for (let i = 0; i < 6; i++) pts.push([r * Math.cos(Math.PI / 3 * i), r * Math.sin(Math.PI / 3 * i)]);
    } else { // star
      for (let i = 0; i < 10; i++) {
        const rad = i % 2 ? r * 0.45 : r, a = -Math.PI / 2 + i * Math.PI / 5;
        pts.push([rad * Math.cos(a), rad * Math.sin(a)]);
      }
    }
    pts.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]));
    ctx.closePath();
  }
  ctx.fill();
}
function candy(cx, cy, r, kind, color, scale) {
  r = Math.max(3, r * (scale || 1));
  ctx.save();
  ctx.translate(cx, cy);
  // drop shadow
  ctx.fillStyle = 'rgba(20,8,30,0.35)';
  ctx.beginPath(); ctx.ellipse(0, r * 0.85, r * 0.75, r * 0.26, 0, 0, 7); ctx.fill();
  // jelly body: dark edge -> base -> top-light core
  fillShape(kind, r, shade(color, -70));
  ctx.save(); ctx.translate(0, -1); fillShape(kind, r * 0.86, color); ctx.restore();
  ctx.save(); ctx.translate(-r * 0.06, -r * 0.16); ctx.globalAlpha = 0.85; fillShape(kind, r * 0.62, shade(color, 80)); ctx.restore();
  // bottom bounce shade (skip star: concave notch)
  if (kind !== 'star') {
    ctx.save(); ctx.globalAlpha = 0.45;
    ctx.fillStyle = shade(color, -70);
    ctx.beginPath(); ctx.ellipse(0, r * 0.45, r * 0.5, r * 0.27, 0, 0, 7); ctx.fill();
    ctx.restore();
  }
  // specular dots
  ctx.fillStyle = 'rgba(255,255,255,0.92)';
  ctx.beginPath(); ctx.arc(-r * 0.18, -r * 0.24, Math.max(1, r * 0.15), 0, 7); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.beginPath(); ctx.arc(-r * 0.30, -r * 0.05, Math.max(1, r * 0.07), 0, 7); ctx.fill();
  ctx.restore();
}
function fly(x, y, lx, ly, happy) {
  ctx.save();
  ctx.globalAlpha = 0.6; ctx.fillStyle = '#fff';
  ctx.beginPath(); ctx.ellipse(x - 32, y - 34, 23, 14, -0.3, 0, 7); ctx.fill();
  ctx.beginPath(); ctx.ellipse(x + 32, y - 34, 23, 14, 0.3, 0, 7); ctx.fill();
  ctx.restore();
  ctx.fillStyle = '#46465a';
  ctx.beginPath(); ctx.ellipse(x, y, 26, 24, 0, 0, 7); ctx.fill();
  ctx.fillStyle = '#5f5f75';
  ctx.beginPath(); ctx.ellipse(x, y + 4, 18, 16, 0, 0, 7); ctx.fill();
  for (const ex of [-13, 13]) {
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(x + ex, y - 6, 11, 0, 7); ctx.fill();
    ctx.fillStyle = '#1e0a28'; ctx.beginPath(); ctx.arc(x + ex + lx, y - 6 + ly, 5, 0, 7); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(x + ex + lx + 1, y - 7 + ly, 2, 0, 7); ctx.fill();
  }
  ctx.strokeStyle = '#3a1e5a'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(x, y + 2, 10, Math.PI * 1.15, Math.PI * 1.85); ctx.stroke();
  void happy;
}

/* ---------- brain clouds ---------- */
function buildClouds() {
  cloudPts = [];
  idxPos = [];
  idxGroup = {};
  try {
    const neurons = (subset && subset.neurons) || [];
    const ids = (v) => new Set(v || []);
    const colS = ids(subset.decoders.colIds), rowS = ids(subset.decoders.rowIds);
    const gateS = ids(subset.decoders.gateIds), pamS = ids(subset.decoders.pamIds);
    neurons.forEach((n, i) => {
      if (!n || !Array.isArray(n.xyz)) return;
      idxPos[i] = n.xyz;
      if (colS.has(n.id) || rowS.has(n.id)) idxGroup[i] = [124, 255, 107];
      else if (gateS.has(n.id)) idxGroup[i] = [255, 95, 210];
      else if (pamS.has(n.id)) idxGroup[i] = [255, 180, 80];
    });
    const rc = (subset && subset.renderCloud) || [];
    const stride = Math.max(1, Math.ceil(rc.length / 900));
    for (let i = 0; i < rc.length; i += stride) {
      if (Array.isArray(rc[i])) cloudPts.push(rc[i]);
    }
  } catch { /* keep empty */ }
  if (!cloudPts.length) { // synthetic fallback so the panel never blanks
    const rng = mulberry(166700);
    for (let i = 0; i < 900; i++) cloudPts.push([(rng() - 0.5) * 1.6, (rng() - 0.5) * 1.4, (rng() - 0.5)]);
  }
}
function drawBrain(x, y, w, h, view, rates) {
  rr(x, y, w, h, 12, '#0a0c16');
  text(view, x + 8, y + 18, 15, '#968aaa');
  const proj = (px, py, pz) => view === 'frontal'
    ? [(px * 0.9 + 1) / 2 * w + x, (1 - (py * 0.75 + 0.5)) / 1.6 * h + y]
    : [(px * 0.9 + 1) / 2 * w + x, (1 - (pz * 0.8 + 0.3)) / 1.4 * h + y];
  ctx.fillStyle = 'rgb(90,110,150)';
  for (const p of cloudPts) {
    const [sx, sy] = proj(+p[0], +p[1], +p[2]);
    ctx.fillRect(sx, sy, 1.4, 1.4);
  }
  if (rates) {
    for (const [idx, rate] of rates) {
      if (rate < 0.08 || !idxPos[idx]) continue;
      const col = idxGroup[idx] || [86, 216, 255];
      const [sx, sy] = proj(+idxPos[idx][0], +idxPos[idx][1], +idxPos[idx][2]);
      ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${Math.min(1, 0.4 + rate)})`;
      ctx.beginPath(); ctx.arc(sx, sy, 3, 0, 7); ctx.fill();
    }
  }
}

/* ---------- fly cam ---------- */
const camSmall = document.createElement('canvas');
camSmall.width = 40; camSmall.height = 40;
function drawFlycam(x, y, size) {
  try {
    const c2 = camSmall.getContext('2d');
    c2.fillStyle = '#05070b'; c2.fillRect(0, 0, 40, 40);
    for (let br = 0; br < 4; br++) for (let bc = 0; bc < 4; bc++) {
      let r = 0, g = 0, b = 0;
      for (let dr = 0; dr < 2; dr++) for (let dc = 0; dc < 2; dc++) {
        const v = (board[br * 2 + dr] || [])[bc * 2 + dc] || 0;
        const col = CANDY[v] ? CANDY[v].c : '#888888';
        const n = parseInt(col.slice(1), 16);
        r += n >> 16; g += (n >> 8) & 255; b += n & 255;
      }
      c2.fillStyle = `rgb(${r / 4 | 0},${g / 4 | 0},${b / 4 | 0})`;
      c2.beginPath(); c2.arc(bc * 10 + 5, br * 10 + 5, 5, 0, 7); c2.fill();
    }
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(camSmall, x, y, size, size);
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    for (let yy = 0; yy < size; yy += 4) ctx.fillRect(x, y + yy, size, 1);
  } catch { /* never break the frame */ }
}

/* ---------- flow ---------- */
function applyPub(p) {
  if (!p) return;
  S = Object.assign(S || {}, p);
  if (p.board) board = p.board;
}
async function flyStep() {
  if (busy) return;
  busy = true;
  try {
  const res = await jpost('/api/fly_step', {});
  if (!res) { status('backend offline'); return; }
  // NOTE: ok:false + reason:no-match is a NORMAL wrong move (animate it!),
  // only game-over / brain-error return early.
  if (!res.ok && res.reason !== 'no-match') {
    if (res.reason === 'game-over') { S.over = true; }
    return;
  }
  pendingFinal = res.board || null;
  delete res.board;
  applyPub(res);
  if (res.valid) {
    pending = res.decision; steps = res.steps || []; stepIdx = 0;
    phase = 'aim'; phaseT = 0;
  } else {
    pending = res.decision; steps = []; stepIdx = 0;
    if (res.reshuffled && pendingFinal) board = pendingFinal;
    const r1 = Math.floor(pending.cell / 8), c1 = pending.cell % 8;
    const d = DV[pending.dir] || [0, 0];
    floats.push({ // explicit REJECTION mark: invalid can never look approved
      x: BX + (2 * c1 + d[1]) / 2 * CELL + CELL / 2,
      y: BY + (2 * r1 + d[0]) / 2 * CELL + CELL / 2,
      txt: '×', t: 0, big: true, col: '#ff5f5f',
    });
    rejectCells = [[r1, c1], [r1 + d[0], c1 + d[1]]]; rejectT = 0;
    say = 'Hmm… no match'; happy = 0.1; sayT = 0;
    phase = 'aim'; phaseT = 0; // show the attempt first, then slide back
  }
  if (res.reshuffled) { say = 'no moves — shuffled!'; happy = 0.3; sayT = 0; }
  if (res.over) { S.over = true; overT = 0; say = `game over · ${res.score} pts`; happy = 0.5; sayT = 0; }
  } finally { busy = false; }
}
async function humanMove(cell, dir) {
  if (busy || phase !== 'idle') return;
  busy = true;
  try {
  const res = await jpost('/api/human_move', { cell, dir });
  if (!res) { status('backend offline'); return; }
  if (!res.ok && res.reason !== 'no-match') return;
  pendingFinal = res.board || null;
  delete res.board;
  applyPub(res);
  if (res.valid) {
    localSwap(cell, dir);
    pending = { cell, dir }; steps = res.steps || []; stepIdx = 0;
    phase = 'swap'; phaseT = 0;
  } else {
    pending = { cell, dir };
    if (res.reshuffled && pendingFinal) board = pendingFinal;
    const d0 = DV[dir] || [0, 0];
    const hr = Math.floor(cell / 8), hc = cell % 8;
    floats.push({
      x: BX + (2 * hc + d0[1]) / 2 * CELL + CELL / 2,
      y: BY + (2 * hr + d0[0]) / 2 * CELL + CELL / 2,
      txt: '×', t: 0, big: true, col: '#ff5f5f',
    });
    rejectCells = [[hr, hc], [hr + d0[0], hc + d0[1]]]; rejectT = 0;
    say = 'Hmm… no match'; happy = 0.1; sayT = 0;
    phase = 'swapback'; phaseT = 0;
  }
  if (res.reshuffled) { say = 'no moves — shuffled!'; sayT = 0; }
  if (res.over) { S.over = true; overT = 0; }
  } finally { busy = false; }
}
function status(t) { try { statusEl.textContent = t; } catch {} }

/** Mirror the swap locally so flash/pop/fall animate on the POST-SWAP
    board — the backend reports matches against it. */
function localSwap(cell, dir) {
  try {
    if (!board) return;
    const r1 = Math.floor(cell / 8), c1 = cell % 8;
    const d = DV[dir] || [0, 0];
    const r2 = r1 + d[0], c2 = c1 + d[1];
    if (r2 < 0 || r2 > 7 || c2 < 0 || c2 > 7) return;
    const t = board[r1][c1]; board[r1][c1] = board[r2][c2]; board[r2][c2] = t;
  } catch { /* never */ }
}

/* ---------- per-frame ---------- */
function frame(t) {
  requestAnimationFrame(frame);
  try {
    if (!lastT) lastT = t;
    let dt = (t - lastT) / 1000; lastT = t;
    if (!(dt >= 0) || dt > 0.25) dt = 0.025;
    dt *= speedMul; // F key: 1x/2x/4x watch speed (animations only, brain unaffected)
    sayT += dt;
    if (S) S.dopa = Math.max(0, (S.dopa || 0) - dt * 26);
    for (const f of floats) { f.t += dt; f.y -= dt * 40; }
    floats = floats.filter((f) => f.t < 1.2);
    for (const p of particles) { p.t += dt; p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 900 * dt; }
    particles = particles.filter((p) => p.t < p.life);

    if (phase === 'idle' && S && !S.over) {
      if (playing && !manual) {
        aimT += dt;
        if (aimT > 0.55) { aimT = 0; flyStep(); }
      }
    } else if (phase === 'aim') {
      phaseT += dt;
      if (phaseT > 0.6) {
        if (pending && steps.length > 0) localSwap(pending.cell, pending.dir);
        phase = 'swap'; phaseT = 0;
      }
    } else if (phase === 'swap') {
      phaseT += dt;
      if (phaseT > 0.22) {
        if (steps.length) { stepIdx = 0; phase = 'flash'; phaseT = 0; matched = new Set(steps[0].matched.map(([r, c]) => r * 8 + c)); }
        else { phase = 'swapback'; phaseT = 0; } // invalid attempt slides back
      }
    } else if (phase === 'flash') {
      phaseT += dt;
      if (phaseT > 0.45) {
        const st = steps[stepIdx];
        pops = new Set(st.matched.map(([r, c]) => r * 8 + c));
        for (const [r, c] of st.matched) {
          const cx = BX + c * CELL + CELL / 2, cy = BY + r * CELL + CELL / 2;
          const col = (board[r] || [])[c];
          const cc = CANDY[col] ? CANDY[col].c : '#fff';
          for (let i = 0; i < 4 && particles.length < 240; i++) {
            const a = Math.random() * 6.283, sp = 60 + Math.random() * 170;
            particles.push({ x: cx, y: cy, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 80, t: 0, life: 0.5 + Math.random() * 0.3, col: cc });
          }
        }
        phase = 'pop'; phaseT = 0;
      }
    } else if (phase === 'pop') {
      phaseT += dt;
      if (phaseT > 0.22) {
        const st = steps[stepIdx];
        board = st.board_after || st.board;
        falls = st.falls || {};
        pops = new Set();
        // score juice per cascade step (backend already tallied; floats show it)
        const m = st.matched;
        const cr = m.reduce((s, [r]) => s + r, 0) / m.length, cc = m.reduce((s, [, c]) => s + c, 0) / m.length;
        floats.push({ x: BX + cc * CELL + CELL / 2, y: BY + cr * CELL, txt: `+${st.gained}`, t: 0 });
        say = `${st.word} +${st.gained}`; happy = 1; sayT = 0;
        phase = 'fall'; phaseT = 0;
      }
    } else if (phase === 'fall') {
      phaseT += dt;
      if (phaseT > 0.38) {
        falls = {};
        stepIdx++;
        if (stepIdx < steps.length) {
          phase = 'flash'; phaseT = 0;
          matched = new Set(steps[stepIdx].matched.map(([r, c]) => r * 8 + c));
        } else { board = pendingFinal || board; pendingFinal = null; phase = 'idle'; phaseT = 0; }
      }
    } else if (phase === 'swapback') {
      phaseT += dt;
      if (phaseT > 0.6) { phase = 'idle'; phaseT = 0; } // slow, visible rejection slide
    }
    rejectT += dt;
    if (rejectT > 1.6) rejectCells = [];
    if (S && S.over) {
      overT += dt;
      if (overT > 3 && phase === 'idle') { overT = 0; newGame(false); }
    }
    render(t / 1000);
  } catch { /* frame loop never throws */ }
}

async function newGame(fromScratch) {
  if (busy) return;
  busy = true;
  try {
  const res = await jpost('/api/new_game', fromScratch ? { from_scratch: true } : {});
  if (!res) { status('backend offline'); return; }
  applyPub(res);
  pendingFinal = null;
  phase = 'idle'; phaseT = 0; steps = []; falls = {}; matched = new Set();
  say = fromScratch ? 'blank brain — learning live' : 'new grid — brain keeps learning';
  happy = 0.8; sayT = 0;
  status(`brain: ${S.prov} · updates ${S.updates} · saved@${S.saved || 0} (postgres, auto)`);
  } finally { busy = false; }
}
// buttons must not keep focus: SPACE would retrigger them + scroll the page
try {
  document.querySelectorAll('button').forEach((b) =>
    b.addEventListener('click', (e) => { try { e.currentTarget.blur(); } catch {} }));
} catch {}

/* ---------- render (mirrors game.py draw order) ---------- */
function render(t) {
  // bg gradient
  const gr = ctx.createLinearGradient(0, 0, 0, H);
  gr.addColorStop(0, '#2b1b4d'); gr.addColorStop(1, '#ff9ff3');
  ctx.fillStyle = gr; ctx.fillRect(0, 0, W, H);
  for (let i = 0; i < 24; i++) {
    const x = (i * 173) % W, y = (i * 97 + Math.floor(t * 20) * (i % 3 + 1)) % H;
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    ctx.beginPath(); ctx.arc(x, y, 3 + (i % 4), 0, 7); ctx.fill();
  }
  text('FLYCRUSH', BX, 52, 40, '#fff');
  text('a fruit-fly connectome plays candy crush', BX, 78, 17, '#ffd9f5');
  text(`REPLAY … chain ${S ? S.chain : 0} · best ${S ? S.best : 0}`, BX, 102, 17, '#7cff6b');
  drawBoard(t);
  drawRight(t);
  if (S && S.over) {
    rr(BX + 60, BY + 180, 380, 120, 18, 'rgba(20,12,30,0.94)');
    text('OUT OF MOVES', BX + 100, BY + 222, 30, '#fff');
    text(`score ${S.score} · new grid soon…`, BX + 100, BY + 252, 17, '#968aaa');
  }
}
function drawBoard(t) {
  rr(BX - 14, BY - 14, CELL * 8 + 28, CELL * 8 + 28, 22, '#fff8eb');
  ctx.strokeStyle = '#d28cc8'; ctx.lineWidth = 3;
  if (ctx.roundRect) { ctx.beginPath(); ctx.roundRect(BX - 14, BY - 14, CELL * 8 + 28, CELL * 8 + 28, 22); ctx.stroke(); }
  if (!board) return;
  for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) {
    const v = (board[r] || [])[c] || 0;
    let ox = 0, oy = 0, sc = 1;
    if ((phase === 'swap' || phase === 'swapback') && pending) {
      const pr = Math.floor(pending.cell / 8), pc = pending.cell % 8;
      const d = DV[pending.dir] || [0, 0];
      // board pre-swapped for valid: settle into place; invalid animates on live board
      let k;
      if (phase === 'swapback') k = 1 - Math.min(1, phaseT / 0.6);
      else if (steps.length > 0) k = 1 - Math.min(1, phaseT / 0.22);
      else k = Math.min(1, phaseT / 0.22);
      if (r === pr && c === pc) { ox = d[1] * CELL * k; oy = d[0] * CELL * k; }
      else if (r === pr + d[0] && c === pc + d[1]) { ox = -d[1] * CELL * k; oy = -d[0] * CELL * k; }
    }
    const fk = `${r},${c}`;
    if (phase === 'fall' && falls[fk]) {
      const k = Math.min(1, phaseT / 0.38), e = 1 - Math.pow(1 - k, 3);
      oy += falls[fk] * (1 - e);
    }
    if (phase === 'flash' && matched.has(r * 8 + c)) sc = 1 + 0.14 * Math.sin(phaseT * 25);
    if (phase === 'pop' && pops.has(r * 8 + c)) sc = Math.max(0, 1 - phaseT / 0.22);
    if (sel && sel[0] === r && sel[1] === c) {
      ctx.strokeStyle = '#56d8ff'; ctx.lineWidth = 3;
      ctx.strokeRect(BX + c * CELL + 2, BY + r * CELL + 2, CELL - 4, CELL - 4);
    }
    if (phase === 'swapback' && pending) {
      const pr = Math.floor(pending.cell / 8), pc = pending.cell % 8;
      const d = DV[pending.dir] || [0, 0];
      if ((r === pr && c === pc) || (r === pr + d[0] && c === pc + d[1])) {
        ctx.strokeStyle = '#ff5f5f'; ctx.lineWidth = 3;
        ctx.strokeRect(BX + c * CELL + 2, BY + r * CELL + 2, CELL - 4, CELL - 4);
      }
    }
    const cx = BX + c * CELL + CELL / 2 + ox, cy = BY + r * CELL + CELL / 2 + oy;
    const cd = CANDY[v] || CANDY[0];
    candy(cx, cy, 24, cd.s, cd.c, sc);
  }
  if (phase === 'aim' && pending) {
    const r = Math.floor(pending.cell / 8), c = pending.cell % 8;
    const cx = BX + c * CELL + CELL / 2, cy = BY + r * CELL + CELL / 2;
    const pulse = 3 + 2 * Math.sin(t * 10);
    ctx.strokeStyle = '#7cff6b'; ctx.lineWidth = 3;
    ctx.strokeRect(cx - 30 - pulse, cy - 30 - pulse, 60 + pulse * 2, 60 + pulse * 2);
    const d = DV[pending.dir] || [0, 0];
    const ex = cx + d[1] * CELL, ey = cy + d[0] * CELL;
    ctx.beginPath();
    ctx.moveTo(cx + d[1] * 30, cy + d[0] * 30);
    ctx.lineTo(ex - d[1] * 12, ey - d[0] * 12);
    ctx.stroke();
    const ang = Math.atan2(d[0], d[1]);
    for (const da of [0.5, -0.5]) {
      ctx.beginPath();
      ctx.moveTo(ex - d[1] * 12, ey - d[0] * 12);
      ctx.lineTo(ex - d[1] * 12 - 12 * Math.cos(ang + da), ey - d[0] * 12 - 12 * Math.sin(ang + da));
      ctx.stroke();
    }
  }
  for (const f of floats) {
    ctx.fillStyle = f.col || '#fff';
    ctx.font = '20px ui-monospace,monospace';
    ctx.globalAlpha = Math.max(0, 1 - f.t / 1.2);
    ctx.fillText(f.txt, f.x - 20, f.y - 20);
  }
  ctx.globalAlpha = 1;
  for (const p of particles) {
    ctx.fillStyle = p.col;
    ctx.beginPath(); ctx.arc(p.x, p.y, Math.max(1, 4 * (1 - p.t / p.life)), 0, 7); ctx.fill();
  }
}
function drawRight(t) {
  const x0 = X0;
  rr(RX, 18, W - RX - 20, H - 36, 18, 'rgba(20,16,38,0.92)');
  const badges = [['MOVES', S ? String(S.moves_left) : '—', '#56d8ff'],
    ['SCORE', S ? String(S.score) : '—', '#fff'],
    ['COMBO', S ? `×${S.combo}` : '—', '#7cff6b']];
  badges.forEach(([k, v, col], i) => {
    const bx = x0 + i * 148;
    rr(bx, 30, 140, 64, 12, '#231a3c');
    text(k, bx + 10, 50, 15, '#968aaa');
    text(v, bx + 10, 82, 30, col);
  });
  let lx = 0, ly = 0;
  if (phase === 'aim' && pending) {
    const c = pending.cell % 8, r = Math.floor(pending.cell / 8);
    lx = Math.max(-4, Math.min(4, c - 3.5)); ly = Math.max(-3, Math.min(3, r - 3.5));
  }
  fly(x0 + 60, 170, lx, ly, happy);
  rr(x0 + 110, 128, 336, 76, 14, '#fff8eb');
  text((say || '').slice(0, 32), x0 + 122, 158, 17, '#3a1e5a');
  text(`brain: ${S ? S.prov : '…'}`, x0 + 122, 184, 15, '#968aaa');
  text('CNS · RECORDED ACTIVITY', x0, 240, 15, '#968aaa');
  text(`L ${S ? S.dec.L : '—'} · R ${S ? S.dec.R : '—'} · gate ${(S && S.dec.gate || 0).toFixed(2)} · aim ${S ? S.dec.dir : '—'}`,
    x0, 264, 19, '#fff');
  DIRS.forEach((d, i) => {
    const hot = S && S.dec.dir === d;
    rr(x0 + i * 111, 274, 105, 30, 8, hot ? 'rgba(124,255,107,0.25)' : '#231a3c');
    text(`${d.toUpperCase()} ${(S && S.dec.dirs[d] || 0).toFixed(2)}`, x0 + i * 111 + 8, 295, 14, hot ? '#7cff6b' : '#968aaa');
  });
  text(`DOPAMINE · PAM11 · ${(S && S.dopa || 0).toFixed(1)} Hz`, x0, 334, 15, '#ff5fd2');
  rr(x0, 342, 424, 22, 8, '#0a0814');
  rr(x0, 342, Math.max(8, 424 * Math.min(1, (S && S.dopa || 0) / 120)), 22, 8, '#ff5fd2');
  text('FLY CAM · what the network saw', x0, 390, 15, '#968aaa');
  if (board) drawFlycam(x0, 398, 96);
  drawBrain(x0 + 114, 398, 150, 96, 'frontal', S && S.rates);
  drawBrain(x0 + 274, 398, 150, 96, 'dorsal', S && S.rates);
  const ev = (report && report.eval120) || null;
  let yy = 504;
  if (ev) {
    text(`trained ${ev.trained} /game · random ${ev.random} · planner ${ev.firstFoundPlanner}`, x0, yy + 16, 14, '#968aaa');
    yy += 22;
  }
  const recent = (S && S.hist || []).slice(-50);
  const avg = recent.length ? recent.reduce((a, b) => a + b, 0) / recent.length : 0;
  text(`LEARN e${S ? S.eps : 0} u${S ? S.updates : 0} ${avg >= 0 ? '+' : ''}${avg.toFixed(2)} sv@${(S && S.saved) || 0}`, x0, yy + 16, 14, '#968aaa');
  yy += 22;
  rr(x0, yy, 424, 74, 8, '#0a0814');
  const jc = (S && S.job && S.job.curve) || [];
  const useJob = jc.length > 1; // turbo score/episode curve when available, else per-move reward
  const hist = useJob ? jc.slice(-120) : ((S && S.hist || []).slice(-220));
  if (useJob) text('turbo · score / episode', x0 + 300, yy + 16, 12, '#7cff6b');
  if (hist.length > 1) {
    const mx = Math.max(useJob ? 1 : 0.6, ...hist), mn = Math.min(useJob ? 0 : -0.1, ...hist), span = (mx - mn) || 1;
    ctx.strokeStyle = '#7cff6b'; ctx.lineWidth = 2; ctx.beginPath();
    hist.forEach((v, i) => {
      const x = x0 + 6 + i / (hist.length - 1) * 412;
      const y = yy + 74 - 6 - (v - mn) / span * 62;
      i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
    });
    ctx.stroke();
    if (!useJob) {
      const by = yy + 74 - 6 - ((S.baseline || 0) - mn) / span * 62;
      ctx.strokeStyle = '#ff5fd2'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x0 + 6, by); ctx.lineTo(x0 + 418, by); ctx.stroke();
    }
  }
  yy += 82;
  text('SPACE play · N step · M manual', x0, yy + 16, 14, '#968aaa');
  text(`R reset · S save · F speed ×${speedMul} · Q quit`, x0, yy + 36, 14, '#968aaa');
}

/* ---------- input ---------- */
function canvasCell(e) {
  const r = cv.getBoundingClientRect();
  const mx = (e.clientX - r.left) * (W / r.width), my = (e.clientY - r.top) * (H / r.height);
  const c = Math.floor((mx - BX) / CELL), rr2 = Math.floor((my - BY) / CELL);
  return (rr2 >= 0 && rr2 < 8 && c >= 0 && c < 8) ? [rr2, c] : null;
}
cv.addEventListener('click', async (e) => {
  try {
    if (!manual || phase !== 'idle' || !S || S.over) return;
    const hit = canvasCell(e);
    if (!hit) return;
    const [r, c] = hit;
    if (!sel) { sel = [r, c]; return; }
    const [ar, ac] = sel; sel = null;
    if (ar === r && ac === c) return;
    if (Math.abs(ar - r) + Math.abs(ac - c) !== 1) { sel = [r, c]; return; }
    const d = r === ar - 1 ? 'up' : r === ar + 1 ? 'down' : c === ac - 1 ? 'left' : 'right';
    await humanMove(ar * 8 + ac, d);
  } catch { /* click must never break the loop */ }
});
document.addEventListener('keydown', async (e) => {
  try {
    if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
    else if (e.key === 'n' || e.key === 'N') { if (phase === 'idle' && !S.over) await flyStep(); }
    else if (e.key === 'f' || e.key === 'F') { speedMul = speedMul >= 4 ? 1 : speedMul * 2; status(`izleme hızı ×${speedMul}`); }
    else if (e.key === 'm' || e.key === 'M') { manual = !manual; status(manual ? 'manual: click two adjacent candies' : 'fly resumes'); }
    else if (e.key === 'r' || e.key === 'R') { await newGame(false); }
    else if (e.key === 's' || e.key === 'S') {
      const res = await jpost('/api/save', {});
      status(res && res.ok ? `brain saved · updates ${res.updates}` : 'save failed');
    }
  } catch { /* keys never break the loop */ }
});
function togglePlay() {
  playing = !playing;
  try { document.getElementById('bPlay').textContent = playing ? '⏸ pause' : '▶ play'; } catch {}
}
document.getElementById('bPlay').onclick = togglePlay;
document.getElementById('bTurbo').onclick = async () => {
  const res = await jpost('/api/turbo', { episodes: 200 });
  if (res && res.ok) status('TURBO başladı · 200 episode · ~1000 hamle/sn · eğri aşağıda canlanıyor');
  else if (res && res.reason === 'already-running') status('TURBO zaten koşuyor');
  else status('turbo failed');
};
document.getElementById('bStep').onclick = async () => { if (phase === 'idle' && S && !S.over) await flyStep(); };
document.getElementById('bReset').onclick = async () => { await newGame(false); };
document.getElementById('bSave').onclick = async () => {
  const res = await jpost('/api/save', {});
  status(res && res.ok ? `brain saved · updates ${res.updates}` : 'save failed');
};
document.getElementById('bScratch').onclick = async () => { playing = true; togglePlayButton(); await newGame(true); };
function togglePlayButton() {
  try { document.getElementById('bPlay').textContent = playing ? '⏸ pause' : '▶ play'; } catch {}
}

/* ---------- boot ---------- */
async function boot() {
  subset = await jget('/public/data/connectome-subset.json');
  buildClouds();
  report = (await jget('/api/report')) || {};
  const st = await jget('/api/state');
  if (!st) { status('backend offline — run: ./.venv/bin/python -m backend.server'); return; }
  applyPub(st);
  board = st.board;
  status(`brain: ${S.prov} · updates ${S.updates} · saved@${S.saved || 0} (postgres, auto) — press play`);
  requestAnimationFrame((t) => { lastT = t; frame(t); });
  setInterval(async () => { // gentle resync when idle (never mid-animation)
    try {
      if (phase === 'idle') {
        const s2 = await jget('/api/state');
        if (s2) {
          applyPub(s2);
          const j = s2.job;
          if (j && j.running) status(`TURBO ${j.done}/${j.total} · avg ${j.avg} · eğri canlanıyor…`);
          else if (s2.invalid && s2.invalid.count > 0) {
            status(`brain: ${S.prov} · updates ${S.updates} · saved@${S.saved || 0} · rej${s2.invalid.count} (${Math.round((s2.invalid.rate || 0) * 100)}%)`);
          }
        }
      }
    } catch {}
  }, 2000);
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
