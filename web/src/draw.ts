// Shared canvas art: jelly candies + fly avatar. Mirrors game.py/app.js.
export const CANDY = [
  { c: '#ff6b6b', s: 'circle' }, { c: '#ffb347', s: 'square' },
  { c: '#7cff6b', s: 'diamond' }, { c: '#56d8ff', s: 'hex' },
  { c: '#c792ea', s: 'star' }, { c: '#ff5fd2', s: 'drop' },
] as const;

export function shade(hex: string, d: number): string {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, (n >> 16) + d));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 255) + d));
  const b = Math.max(0, Math.min(255, (n & 255) + d));
  return `rgb(${r},${g},${b})`;
}

function fillShape(ctx: CanvasRenderingContext2D, kind: string, r: number, color: string) {
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
    const pts: [number, number][] = [];
    if (kind === 'diamond') pts.push([0, -r], [r, 0], [0, r], [-r, 0]);
    else if (kind === 'hex') {
      for (let i = 0; i < 6; i++) pts.push([r * Math.cos((Math.PI / 3) * i), r * Math.sin((Math.PI / 3) * i)]);
    } else {
      for (let i = 0; i < 10; i++) {
        const rad = i % 2 ? r * 0.45 : r, a = -Math.PI / 2 + (i * Math.PI) / 5;
        pts.push([rad * Math.cos(a), rad * Math.sin(a)]);
      }
    }
    pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
    ctx.closePath();
  }
  ctx.fill();
}

export function drawCandy(
  ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number,
  kind: string, color: string, scale = 1,
) {
  r = Math.max(3, r * scale);
  ctx.save();
  ctx.translate(cx, cy);
  ctx.fillStyle = 'rgba(20,8,30,0.35)';
  ctx.beginPath(); ctx.ellipse(0, r * 0.85, r * 0.75, r * 0.26, 0, 0, 7); ctx.fill();
  fillShape(ctx, kind, r, shade(color, -70));
  ctx.save(); ctx.translate(0, -1); fillShape(ctx, kind, r * 0.86, color); ctx.restore();
  ctx.save(); ctx.translate(-r * 0.06, -r * 0.16); ctx.globalAlpha = 0.85;
  fillShape(ctx, kind, r * 0.62, shade(color, 80)); ctx.restore();
  if (kind !== 'star') {
    ctx.save(); ctx.globalAlpha = 0.45; ctx.fillStyle = shade(color, -70);
    ctx.beginPath(); ctx.ellipse(0, r * 0.45, r * 0.5, r * 0.27, 0, 0, 7); ctx.fill();
    ctx.restore();
  }
  ctx.fillStyle = 'rgba(255,255,255,0.92)';
  ctx.beginPath(); ctx.arc(-r * 0.18, -r * 0.24, Math.max(1, r * 0.15), 0, 7); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.beginPath(); ctx.arc(-r * 0.3, -r * 0.05, Math.max(1, r * 0.07), 0, 7); ctx.fill();
  ctx.restore();
}

export function drawFly(
  ctx: CanvasRenderingContext2D, x: number, y: number,
  lx: number, ly: number, blink: boolean,
) {
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
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(x + ex, y - 6, 11, 0, 7); ctx.fill();
    if (blink) {
      ctx.strokeStyle = '#46465a'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(x + ex - 9, y - 6); ctx.lineTo(x + ex + 9, y - 6); ctx.stroke();
    } else {
      ctx.fillStyle = '#1e0a28';
      ctx.beginPath(); ctx.arc(x + ex + lx, y - 6 + ly, 5, 0, 7); ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(x + ex + lx + 1, y - 7 + ly, 2, 0, 7); ctx.fill();
    }
  }
  ctx.strokeStyle = '#3a1e5a'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(x, y + 2, 10, Math.PI * 1.15, Math.PI * 1.85); ctx.stroke();
}
