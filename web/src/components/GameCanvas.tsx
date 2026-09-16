import { useEffect, useRef } from 'react';
import { FlyController, CELL, BX, BY } from '../controller';
import { CANDY, drawCandy } from '../draw';

const DV: Record<string, [number, number]> = {
  up: [-1, 0], down: [1, 0], left: [0, -1], right: [0, 1],
};
const PW = CELL * 8 + 28; // 524
const PH = CELL * 8 + 40; // 536

/** The 8×8 board + all animation phases. Reads controller refs every frame. */
export function GameCanvas({ ctl }: { ctl: FlyController }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;
    let raf = 0;
    let last = 0;
    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      try {
        if (!last) last = t;
        let dt = (t - last) / 1000;
        last = t;
        ctl.update(dt);
        draw(ctx, ctl, t / 1000);
      } catch { /* frame loop never throws */ }
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [ctl]);

  const onClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    try {
      const r = (e.currentTarget as HTMLCanvasElement).getBoundingClientRect();
      const mx = (e.clientX - r.left) * (PW / r.width);
      const my = (e.clientY - r.top) * (PH / r.height);
      const c = Math.floor((mx - 14) / CELL), rr = Math.floor((my - 14) / CELL);
      if (rr >= 0 && rr < 8 && c >= 0 && c < 8) ctl.clickCell(rr, c);
    } catch { /* clicks never break the loop */ }
  };

  return <canvas ref={ref} width={PW} height={PH} className="board-canvas" onClick={onClick} />;
}

function draw(ctx: CanvasRenderingContext2D, ctl: FlyController, t: number) {
  const board = ctl.board;
  ctx.fillStyle = '#fff8eb';
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(0, 0, PW, CELL * 8 + 28, 22);
  else ctx.rect(0, 0, PW, CELL * 8 + 28);
  ctx.fill();
  ctx.strokeStyle = '#d28cc8'; ctx.lineWidth = 3;
  ctx.stroke();
  if (!board) return;
  const ox0 = 14, oy0 = 14;
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const v = (board[r] || [])[c] || 0;
      let ox = 0, oy = 0, sc = 1;
      if ((ctl.phase === 'swap' || ctl.phase === 'swapback') && ctl.pending) {
        const pr = Math.floor(ctl.pending.cell / 8), pc = ctl.pending.cell % 8;
        const d = DV[ctl.pending.dir] || [0, 0];
        // board is pre-swapped for valid moves: settle INTO place;
        // invalid attempts animate on the live board: slide out and back.
        let k: number;
        if (ctl.phase === 'swapback') k = 1 - Math.min(1, ctl.phaseT / 0.6);
        else if (ctl.steps.length > 0) k = 1 - Math.min(1, ctl.phaseT / 0.22);
        else k = Math.min(1, ctl.phaseT / 0.22);
        if (r === pr && c === pc) { ox = d[1] * CELL * k; oy = d[0] * CELL * k; }
        else if (r === pr + d[0] && c === pc + d[1]) { ox = -d[1] * CELL * k; oy = -d[0] * CELL * k; }
      }
      const fk = `${r},${c}`;
      if (ctl.phase === 'fall' && ctl.falls[fk]) {
        const k = Math.min(1, ctl.phaseT / 0.38), e = 1 - Math.pow(1 - k, 3);
        oy += ctl.falls[fk] * (1 - e);
      }
      if (ctl.phase === 'flash' && ctl.matched.has(r * 8 + c)) sc = 1 + 0.14 * Math.sin(ctl.phaseT * 25);
      if (ctl.phase === 'pop' && ctl.pops.has(r * 8 + c)) sc = Math.max(0, 1 - ctl.phaseT / 0.22);
      if (ctl.sel && ctl.sel[0] === r && ctl.sel[1] === c) {
        ctx.strokeStyle = '#56d8ff'; ctx.lineWidth = 3;
        ctx.strokeRect(ox0 + c * CELL + 2, oy0 + r * CELL + 2, CELL - 4, CELL - 4);
      }
      if (ctl.rejectT < 1.6 && ctl.rejectCells.some(([rr, cc]) => rr === r && cc === c)) {
        ctx.strokeStyle = '#ff5f5f'; ctx.lineWidth = 3 + Math.round(2 * Math.sin(t * 9));
        ctx.strokeRect(ox0 + c * CELL + 2, oy0 + r * CELL + 2, CELL - 4, CELL - 4);
      }
      if (ctl.trailT < 1.4 && ctl.trailCells.some(([rr, cc]) => rr === r && cc === c)) {
        ctx.strokeStyle = '#7cff6b'; ctx.lineWidth = 2 + Math.round(2 * Math.sin(t * 7 + 1));
        ctx.strokeRect(ox0 + c * CELL + 4, oy0 + r * CELL + 4, CELL - 8, CELL - 8);
      }
      const cd = CANDY[v] || CANDY[0];
      drawCandy(ctx, ox0 + c * CELL + CELL / 2 + ox, oy0 + r * CELL + CELL / 2 + oy, 24, cd.s, cd.c, sc);
    }
  }
  if (ctl.phase === 'aim' && ctl.pending) {
    const r = Math.floor(ctl.pending.cell / 8), c = ctl.pending.cell % 8;
    const cx = ox0 + c * CELL + CELL / 2, cy = oy0 + r * CELL + CELL / 2;
    const pulse = 3 + 2 * Math.sin(t * 10);
    ctx.strokeStyle = '#7cff6b'; ctx.lineWidth = 4;
    ctx.strokeRect(cx - 30 - pulse, cy - 30 - pulse, 60 + pulse * 2, 60 + pulse * 2);
    ctx.fillStyle = '#7cff6b';
    ctx.font = 'bold 15px ui-monospace,monospace';
    ctx.fillText(`(${c},${r}) → ${ctl.pending.dir}`, cx - 34, cy - 44);
    const d = DV[ctl.pending.dir] || [0, 0];
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
  ctx.textBaseline = 'alphabetic';
  const LX = ox0 - BX, LY = oy0 - BY; // scene coords -> board-local
  for (const f of ctl.floats) {
    ctx.globalAlpha = Math.max(0, 1 - f.t / 1.2);
    ctx.fillStyle = f.col || '#7a2b6b';
    ctx.font = f.big ? 'bold 34px ui-monospace,monospace' : '20px ui-monospace,monospace';
    ctx.fillText(f.txt, f.x + LX - 20, f.y + LY - 20);
  }
  ctx.globalAlpha = 1;
  ctx.font = '20px ui-monospace,monospace';
  for (const p of ctl.particles) {
    ctx.fillStyle = p.col;
    ctx.beginPath();
    ctx.arc(p.x + LX, p.y + LY, Math.max(1, 4 * (1 - p.t / p.life)), 0, 7);
    ctx.fill();
  }
}
