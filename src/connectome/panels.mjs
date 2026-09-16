/**
 * panels.mjs — FlyPong-style readout panels (vanilla DOM, dark + monospace).
 * No dependencies. Each mounter returns an updater; all updaters are
 * try/catch-guarded so a panel bug can never break the game loop.
 *
 *   import { mountCnsPanel, mountDopaPanel, mountFlyCam } from './panels.mjs';
 *   const cns = mountCnsPanel(document.getElementById('cns'));
 *   cns.update({ L, R, gate, phase, dirs, live });
 */
const CSS = `
.fcp{font-family:ui-monospace,Menlo,Consolas,monospace;color:#c9d1d9}
.fcp .big{font-size:20px;color:#fff}
.fcp .dim{color:#7a8598;font-size:12px}
.fcp .acc{color:#56d8ff}.fcp .grn{color:#7cff6b}.fcp .mag{color:#ff5fd2}
.fcp .chips{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;margin-top:6px}
.fcp .chips div{background:#0d1016;border:1px solid #232936;padding:4px;text-align:center;font-size:11px}
.fcp .chips div.hot{border-color:#7cff6b;color:#7cff6b}
.fcp canvas{width:100%;height:auto;display:block;background:#05070b;border:1px solid #232936}
.fcp .bar{height:56px;background:#05070b;border:1px solid #232936;position:relative;overflow:hidden}
.fcp .bar i{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(0deg,#ff5fd2,#7a2b6b);display:block}
`;

let cssInjected = false;
function css() {
  if (cssInjected) return;
  cssInjected = true;
  try {
    const s = document.createElement('style');
    s.textContent = CSS;
    document.head.appendChild(s);
  } catch {}
}

function el(html) {
  const d = document.createElement('div');
  d.className = 'fcp';
  d.innerHTML = html;
  return d;
}

export function mountCnsPanel(host) {
  css();
  const root = el(`
    <div class="big">L <span class="acc" data-k="L">—</span> ·
    R <span class="grn" data-k="R">—</span> ·
    gate <span class="mag" data-k="gate">—</span></div>
    <div class="dim" data-k="phase">phase: idle</div>
    <div class="chips" data-k="dirs">
      <div data-d="up">UP</div><div data-d="down">DOWN</div>
      <div data-d="left">LEFT</div><div data-d="right">RIGHT</div>
    </div>
    <div class="dim" data-k="prov"></div>`);
  try { host.appendChild(root); } catch { return { update() {} }; }
  const q = (k) => root.querySelector(`[data-k="${k}"]`);
  return {
    update(s = {}) {
      try {
        q('L').textContent = String(s.L ?? '—');
        q('R').textContent = String(s.R ?? '—');
        q('gate').textContent = typeof s.gate === 'number' ? s.gate.toFixed(2) : '—';
        q('phase').textContent = 'phase: ' + (s.phase ?? (s.live === false ? 'pre-recorded playback' : 'live trace'));
        const chips = q('dirs').children;
        for (const c of chips) {
          const d = c.getAttribute('data-d');
          c.textContent = d.toUpperCase() + ' ' + (+(s.dirs?.[d] ?? 0)).toFixed(2);
          c.classList.toggle('hot', s.dir === d);
        }
        q('prov').textContent = s.live === false ? 'PRE-RECORDED · deterministic playback, not a trained agent' : '';
      } catch {}
    },
  };
}

export function mountDopaPanel(host) {
  css();
  const root = el(`
    <div class="big"><span data-k="hz">0.0 Hz</span> <span class="dim">PAM11</span></div>
    <div class="bar"><i data-k="bar" style="height:4%"></i></div>
    <canvas data-k="trace" width="300" height="44"></canvas>`);
  try { host.appendChild(root); } catch { return { update() {}, pulse() {} }; }
  const hist = new Array(60).fill(0);
  const q = (k) => root.querySelector(`[data-k="${k}"]`);
  function draw(hz) {
    try {
      hist.push(hz); if (hist.length > 60) hist.shift();
      const cv = q('trace'), ctx = cv.getContext('2d');
      if (!ctx) return;
      ctx.fillStyle = '#05070b'; ctx.fillRect(0, 0, cv.width, cv.height);
      ctx.strokeStyle = '#ff5fd2'; ctx.beginPath();
      hist.forEach((v, i) => {
        const x = (i / 59) * cv.width, y = cv.height - 3 - (Math.min(120, v) / 120) * (cv.height - 6);
        i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      });
      ctx.stroke();
    } catch {}
  }
  return {
    update(hz = 0) {
      try {
        const h = Math.max(0, +hz || 0);
        q('hz').textContent = h.toFixed(1) + ' Hz';
        q('bar').style.height = Math.max(3, Math.min(100, (h / 120) * 100)) + '%';
        draw(h);
      } catch {}
    },
    pulse() { try { draw(+(q('hz').textContent) || 0); } catch {} },
  };
}

const FLY_PALETTE = ['#ff6b6b', '#ffb347', '#7cff6b', '#56d8ff', '#c792ea', '#ff5fd2'];
function hexRgb(h) {
  return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
}

/** Fly cam: renders EITHER a raw 8x8 board (downsampled internally) OR a
 *  precomputed 16-dim contrast vector from the controller. */
export function mountFlyCam(host) {
  css();
  const root = el(`<canvas data-k="cv" width="160" height="160"></canvas>
    <div class="dim">Modeled compound-eye input: 4×4 regions of color contrast.
    The fly never sees crisp sprites.</div>`);
  try { host.appendChild(root); } catch { return { update() {} }; }
  const cv = root.querySelector('[data-k="cv"]');
  return {
    update(boardOrContrast) {
      try {
        const ctx = cv.getContext('2d');
        if (!ctx) return;
        const W = cv.width, H = cv.height, cell = W / 4;
        ctx.fillStyle = '#05070b'; ctx.fillRect(0, 0, W, H);
        for (let br = 0; br < 4; br++) {
          for (let bc = 0; bc < 4; bc++) {
            let rgb;
            if (boardOrContrast && boardOrContrast.length === 16) {
              const c = Math.max(0, Math.min(1, +boardOrContrast[br * 4 + bc] || 0));
              const g = Math.round(60 + c * 160);
              rgb = [g, Math.round(g * 0.9), Math.round(g * 1.1)];
            } else {
              let r = 0, g2 = 0, b = 0, n = 0, edge = 0, prev = -1;
              for (let dr = 0; dr < 2; dr++) for (let dc = 0; dc < 2; dc++) {
                let v = 0;
                try { v = boardOrContrast?.[br * 2 + dr]?.[bc * 2 + dc] ?? 0; } catch { v = 0; }
                if (typeof v !== 'number' || v < 0 || v > 5) v = 0;
                const [cr, cg, cb] = hexRgb(FLY_PALETTE[v]);
                r += cr; g2 += cg; b += cb; n++;
                if (prev >= 0 && prev !== v) edge++;
                prev = v;
              }
              rgb = [r / n | 0, g2 / n | 0, b / n | 0];
              var alpha = 0.55 + 0.45 * Math.min(1, edge / 2);
            }
            const cx = bc * cell + cell / 2, cy = br * cell + cell / 2, rad = cell * 0.72;
            const grad = ctx.createRadialGradient(cx, cy, 1, cx, cy, rad);
            grad.addColorStop(0, `rgba(${rgb[0] | 0},${rgb[1] | 0},${rgb[2] | 0},${typeof alpha === 'number' ? alpha : 0.9})`);
            grad.addColorStop(1, 'rgba(5,7,11,0)');
            ctx.fillStyle = grad;
            ctx.beginPath(); ctx.arc(cx, cy, rad, 0, 7); ctx.fill();
          }
        }
        ctx.fillStyle = 'rgba(0,0,0,0.25)';
        for (let y = 0; y < H; y += 4) ctx.fillRect(0, y, W, 1);
      } catch {}
    },
  };
}
