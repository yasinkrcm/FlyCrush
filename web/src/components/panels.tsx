import { useEffect, useMemo, useRef } from 'react';
import { Activity, Zap } from 'lucide-react';
import type { FlyController } from '../controller';
import type { DirKey, Report, Snapshot, Subset } from '../api';
import { CANDY, drawFly } from '../draw';

function Card({ title, icon, right, children, className }: {
  title: string; icon?: React.ReactNode; right?: React.ReactNode;
  children: React.ReactNode; className?: string;
}) {
  return (
    <section className={`card ${className || ''}`}>
      <header className="card-h">
        <span className="card-t">{icon}{title}</span>
        {right ? <span className="card-r">{right}</span> : null}
      </header>
      {children}
    </section>
  );
}

export function StatBadges({ s }: { s: Snapshot | null }) {
  const items: [string, string, string][] = [
    ['MOVES', s ? (s.moves_left === null ? '∞' : String(s.moves_left)) : '—', 'c-acc'],
    ['SCORE', s ? String(s.score) : '—', 'c-white'],
    ['COMBO', s ? `×${s.combo}` : '—', 'c-grn'],
  ];
  return (
    <div className="badges">
      {items.map(([k, v, c]) => (
        <div className="badge" key={k}>
          <div className="bk">{k}</div>
          <div className={`bv ${c}`}>{v}</div>
        </div>
      ))}
    </div>
  );
}

export function FlyAvatar({ ctl }: { ctl: FlyController }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;
    let raf = 0;
    const loop = (tms: number) => {
      raf = requestAnimationFrame(loop);
      try {
        const t = tms / 1000;
        ctx.clearRect(0, 0, 120, 110);
        let lx = 0, ly = 0;
        const p = ctl.pending;
        if (p && (ctl.phase === 'aim' || ctl.phase === 'swap')) {
          const c = p.cell % 8, r = Math.floor(p.cell / 8);
          lx = Math.max(-4, Math.min(4, c - 3.5));
          ly = Math.max(-3, Math.min(3, r - 3.5));
        }
        drawFly(ctx, 60, 62, lx, ly, (t % 3.7) < 0.12);
      } catch { /* never */ }
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [ctl]);
  return (
    <div className="flyrow">
      <canvas ref={ref} width={120} height={110} className="flycv" />
      <div className="speech">
        <div className="say">{ctl.say}</div>
        <div className="prov">brain: {ctl.snap?.prov ?? '…'}</div>
      </div>
    </div>
  );
}

export function CnsPanel({ s }: { s: Snapshot | null }) {
  const d = s?.dec;
  return (
    <Card title="CNS · RECORDED ACTIVITY" icon={<Activity size={14} />}>
      <div className="mono-big">
        L <b className="c-acc">{d ? d.L : '—'}</b> · R <b className="c-grn">{d ? d.R : '—'}</b> · gate{' '}
        <b className="c-mag">{d ? d.gate.toFixed(2) : '—'}</b>
      </div>
      <div className="chips">
        {(['up', 'down', 'left', 'right'] as DirKey[]).map((k) => (
          <div key={k} className={d && d.dir === k ? 'hot' : ''}>
            {k.toUpperCase()} {(d ? d.dirs[k] ?? 0 : 0).toFixed(2)}
          </div>
        ))}
      </div>
    </Card>
  );
}

export function DopaPanel({ s }: { s: Snapshot | null }) {
  const hz = s?.dopa ?? 0;
  return (
    <Card title="DOPAMINE · PAM11">
      <div className="mono-big">{hz.toFixed(1)} <span className="dim">Hz</span></div>
      <div className="dopabar"><i style={{ height: `${Math.max(3, Math.min(100, (hz / 120) * 100))}%` }} /></div>
      <div className="dim small">reward current after a hit</div>
    </Card>
  );
}

export function FlyCam({ board }: { board: number[][] | null }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current;
    if (!cv || !board) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;
    try {
      const small = document.createElement('canvas');
      small.width = 40; small.height = 40;
      const c2 = small.getContext('2d');
      if (!c2) return;
      c2.fillStyle = '#05070b'; c2.fillRect(0, 0, 40, 40);
      for (let br = 0; br < 4; br++) {
        for (let bc = 0; bc < 4; bc++) {
          let r = 0, g = 0, b = 0;
          for (let dr = 0; dr < 2; dr++) {
            for (let dc = 0; dc < 2; dc++) {
              const v = (board[br * 2 + dr] || [])[bc * 2 + dc] || 0;
              const col = CANDY[v] ? CANDY[v].c : '#888888';
              const n = parseInt(col.slice(1), 16);
              r += n >> 16; g += (n >> 8) & 255; b += n & 255;
            }
          }
          c2.fillStyle = `rgb(${(r / 4) | 0},${(g / 4) | 0},${(b / 4) | 0})`;
          c2.beginPath(); c2.arc(bc * 10 + 5, br * 10 + 5, 5, 0, 7); c2.fill();
        }
      }
      ctx.imageSmoothingEnabled = true;
      ctx.clearRect(0, 0, 132, 132);
      ctx.drawImage(small, 0, 0, 132, 132);
      ctx.fillStyle = 'rgba(0,0,0,0.25)';
      for (let y = 0; y < 132; y += 4) ctx.fillRect(0, y, 132, 1);
    } catch { /* never */ }
  });
  return (
    <Card title="FLY CAM · what the network saw">
      <canvas ref={ref} width={132} height={132} className="camcv" />
      <div className="dim small">4×4 regions of color contrast — never crisp sprites</div>
    </Card>
  );
}

const GROUP_C: Record<string, [number, number, number]> = {
  desc: [124, 255, 107], mod: [255, 180, 80], optic: [86, 216, 255],
};
function groupOf(type: string): keyof typeof GROUP_C {
  if (type === 'DNa01' || type === 'DNa02' || type === 'DNp') return 'desc';
  if (type === 'PAM-DAN' || type === 'MBON') return 'mod';
  return 'optic';
}

export function BrainViews({ subset, rates }: { subset: Subset | null; rates: [number, number][] | undefined }) {
  const fRef = useRef<HTMLCanvasElement>(null);
  const dRef = useRef<HTMLCanvasElement>(null);
  const cloud = useMemo(() => {
    const rc = subset?.renderCloud || [];
    const stride = Math.max(1, Math.ceil(rc.length / 900));
    const out: [number, number, number][] = [];
    for (let i = 0; i < rc.length; i += stride) {
      if (Array.isArray(rc[i])) out.push([+rc[i][0], +rc[i][1], +rc[i][2]]);
    }
    return out;
  }, [subset]);
  const posOf = useMemo(() => {
    const m = new Map<number, [number, number, number]>();
    const g = new Map<number, keyof typeof GROUP_C>();
    (subset?.neurons || []).forEach((n, i) => {
      if (n && Array.isArray(n.xyz)) {
        m.set(i, n.xyz);
        g.set(i, groupOf(n.type));
      }
    });
    return { m, g };
  }, [subset]);

  useEffect(() => {
    for (const [ref, view] of [[fRef, 'frontal'], [dRef, 'dorsal']] as const) {
      const cv = ref.current;
      if (!cv) continue;
      const ctx = cv.getContext('2d');
      if (!ctx) continue;
      try {
        const Wd = cv.width, Ht = cv.height;
        ctx.fillStyle = '#05070b'; ctx.fillRect(0, 0, Wd, Ht);
        const proj = (x: number, y: number, z: number): [number, number] =>
          view === 'frontal'
            ? [((x * 0.9 + 1) / 2) * Wd, ((1 - (y * 0.75 + 0.5)) / 1.6) * Ht]
            : [((x * 0.9 + 1) / 2) * Wd, ((1 - (z * 0.8 + 0.3)) / 1.4) * Ht];
        ctx.fillStyle = 'rgb(90,110,150)';
        for (const p of cloud) {
          const [sx, sy] = proj(p[0], p[1], p[2]);
          ctx.fillRect(sx, sy, 1.4, 1.4);
        }
        for (const [idx, rate] of rates || []) {
          if (rate < 0.08) continue;
          const xyz = posOf.m.get(idx);
          if (!xyz) continue;
          const col = GROUP_C[posOf.g.get(idx) || 'optic'];
          const [sx, sy] = proj(xyz[0], xyz[1], xyz[2]);
          ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${Math.min(1, 0.4 + rate)})`;
          ctx.beginPath(); ctx.arc(sx, sy, 3, 0, 7); ctx.fill();
        }
      } catch { /* never */ }
    }
  });
  return (
    <div className="brainrow">
      <Card title="Brain · frontal"><canvas ref={fRef} width={220} height={150} className="wide" /></Card>
      <Card title="CNS · dorsal"><canvas ref={dRef} width={220} height={150} className="wide" /></Card>
    </div>
  );
}

export function CurvePanel({ s }: { s: Snapshot | null }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const jc = s?.job?.curve || [];
  const useJob = jc.length > 1;
  const data = useJob ? jc.slice(-120) : (s?.hist || []).slice(-220);
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;
    try {
      const Wd = cv.width, Ht = cv.height;
      ctx.fillStyle = '#05070b'; ctx.fillRect(0, 0, Wd, Ht);
      if (data.length < 2) return;
      const mx = Math.max(useJob ? 1 : 0.6, ...data);
      const mn = Math.min(useJob ? 0 : -0.1, ...data);
      const span = mx - mn || 1;
      ctx.strokeStyle = '#7cff6b'; ctx.lineWidth = 2; ctx.beginPath();
      data.forEach((v, i) => {
        const x = 6 + (i / (data.length - 1)) * (Wd - 12);
        const y = Ht - 6 - ((v - mn) / span) * (Ht - 12);
        if (i) ctx.lineTo(x, y);
        else ctx.moveTo(x, y);
      });
      ctx.stroke();
      ctx.fillStyle = '#7a8598'; ctx.font = '10px monospace';
      ctx.fillText(useJob ? 'turbo · score / episode' : 'reward / brain move', 8, 14);
    } catch { /* never */ }
  });
  const recent = (s?.hist || []).slice(-50);
  const avg = recent.length ? recent.reduce((a, b) => a + b, 0) / recent.length : 0;
  return (
    <Card
      title="LEARNING · live"
      icon={<Zap size={14} />}
      right={<span>{`e${s?.eps ?? 0} · u${s?.updates ?? 0} · ${avg >= 0 ? '+' : ''}${avg.toFixed(2)} · sv@${s?.saved ?? 0}`}</span>}
    >
      <canvas ref={ref} width={420} height={110} className="wide" />
      <div className="dim small">green = reward · pink baseline · turbo curve in score/episode</div>
    </Card>
  );
}

const LAYER_META: [keyof NonNullable<Snapshot['layers']>, string, string][] = [
  ['optic', 'optic lobe (T4/T5/LC)', '#56d8ff'],
  ['desc', 'descending (DN)', '#7cff6b'],
  ['pam', 'PAM11 dopamine', '#ff5fd2'],
  ['mod', 'other modulatory', '#ffb347'],
];

export function Inspector({ s, subset }: { s: Snapshot | null; subset: Subset | null }) {
  const raster = useRef<HTMLCanvasElement>(null);
  const trace = s?.trace || [];
  const layers = s?.layers || { optic: 0, desc: 0, pam: 0, mod: 0 };
  const maxSpk = Math.max(1, layers.optic, layers.desc, layers.pam, layers.mod);

  useEffect(() => {
    const cv = raster.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;
    try {
      const Wd = cv.width, Ht = cv.height;
      ctx.fillStyle = '#05070b'; ctx.fillRect(0, 0, Wd, Ht);
      const rows: [keyof typeof layers, string][] = [
        ['optic', '#56d8ff'], ['desc', '#7cff6b'], ['pam', '#ff5fd2'],
      ];
      const n = Math.max(1, trace.length);
      rows.forEach(([k, col], ri) => {
        trace.forEach((m, i) => {
          const v = Math.min(1, (m[k === 'optic' ? 'o' : k === 'desc' ? 'd' : 'p'] || 0) / 24);
          if (v <= 0.02) return;
          ctx.fillStyle = col;
          ctx.globalAlpha = 0.25 + 0.75 * v;
          const cw = Wd / 40;
          ctx.fillRect(Wd - (n - i) * cw, 8 + ri * ((Ht - 16) / 3), Math.max(1, cw - 1), (Ht - 16) / 3 - 3);
        });
      });
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#7a8598'; ctx.font = '10px monospace';
      ctx.fillText('O', 4, 20); ctx.fillText('D', 4, 44); ctx.fillText('P', 4, 68);
    } catch { /* never */ }
  });

  const last = s?.last;
  const firing = [...(s?.rates || [])].sort((a, b) => b[1] - a[1]).slice(0, 8);
  const neurons = subset?.neurons || [];
  return (
    <Card title="BRAIN INSPECTOR · every move, every layer" className="insp">
      <div className="dim small">spike raster · last 40 moves (O optic / D descending / P PAM11)</div>
      <canvas ref={raster} width={420} height={80} className="wide" />
      <div className="lbars">
        {LAYER_META.map(([k, label, col]) => (
          <div className="lbar" key={k}>
            <span>{label}</span>
            <div className="ltrack"><i style={{ width: `${Math.min(100, ((layers[k] || 0) / maxSpk) * 100)}%`, background: col }} /></div>
            <b>{layers[k] || 0}</b>
          </div>
        ))}
      </div>
      <div className="dim small">function trace · last move</div>
      <table className="ftrace">
        <tbody>
          <tr><td>observe (eye)</td><td>in-energy {last ? last.in_energy : '—'}</td></tr>
          <tr><td>lif.step ×4</td><td>spikes O {last ? last.o : '—'} · D {last ? last.d : '—'} · P {last ? last.p : '—'}</td></tr>
          <tr><td>decode (DN)</td><td>L {s?.dec.L ?? '—'} · R {s?.dec.R ?? '—'} · gate {(s?.dec.gate ?? 0).toFixed(2)}</td></tr>
          <tr><td>policyAct (ε {last ? last.eps : '—'})</td><td>cell {last ? last.cell : '—'} · dirIdx {last ? last.di : '—'}</td></tr>
          <tr><td>reinforce (upd {last ? last.updates : '—'})</td><td>r {last ? last.r : '—'} · +{last ? last.gained : '—'} pts</td></tr>
        </tbody>
      </table>
      <div className="dim small">firing now · top descending/modulatory units</div>
      <div className="firing">
        {firing.length ? firing.map(([idx, rate]) => {
          const n = neurons[idx];
          return (
            <span key={idx} className="ftag">
              {n ? `${n.type}#${String(n.id).slice(-5)}` : `#${idx}`} {rate.toFixed(2)}
            </span>
          );
        }) : <span className="dim">—</span>}
      </div>
    </Card>
  );
}

const DIR_ARROW: Record<string, string> = { up: '↑', down: '↓', left: '←', right: '→' };

export function RejectedPanel({ s }: { s: Snapshot | null }) {
  const inv = s?.invalid;
  if (!inv) return null;
  const pct = Math.round((inv.rate || 0) * 100);
  return (
    <Card
      title="REJECTED · wrong moves stay visible"
      right={<span>{inv.count} / {inv.moves} · {pct}%</span>}
    >
      <div className="rejbar">
        <i style={{ width: `${Math.min(100, pct)}%` }} />
      </div>
      <div className="rejlist">
        {inv.recent.length ? (
          [...inv.recent].reverse().map((m, i) => (
            <span key={`${m.n}-${i}`} className="rejtag" title={`move #${m.n} via ${m.via}`}>
              #{m.n} ({m.L},{m.R}) {DIR_ARROW[m.dir] || m.dir} <em>{m.via}</em>
            </span>
          ))
        ) : (
          <span className="dim">henüz yok — sinek utangaç</span>
        )}
      </div>
    </Card>
  );
}

export function MoveFeed({ s }: { s: Snapshot | null }) {
  const dirs = ['up', 'down', 'left', 'right'];
  const t = (s?.trace || []).map((m, i) => ({
    n: m.n ?? -1e9 + i, L: m.cell % 8, R: Math.floor(m.cell / 8),
    dir: dirs[m.di] || '?', ok: (m.gained || 0) > 0, pts: m.gained || 0,
  }));
  const inv = (s?.invalid?.recent || []).map((m) => ({
    n: m.n ?? -1e9, L: m.L, R: m.R, dir: m.dir, ok: false, pts: 0,
  }));
  const feed = [...t, ...inv].sort((a, b) => b.n - a.n).slice(0, 8);
  return (
    <Card title="HAMLELER · every move the fly makes" right={<span>son 8</span>}>
      <div className="rejlist">
        {feed.length ? (
          feed.map((m, i) => (
            <span key={`${m.n}-${i}`} className={m.ok ? 'movetag' : 'rejtag'}>
              #{m.n} ({m.L},{m.R}) {DIR_ARROW[m.dir] || m.dir}{' '}
              {m.ok ? `+${m.pts} ✓` : '×'}
            </span>
          ))
        ) : (
          <span className="dim">oynuyor… birazdan burada</span>
        )}
      </div>
    </Card>
  );
}

export function EvalPanel({ report }: { report: Report }) {  const ev = report.eval120;
  if (!ev) return null;
  return (
    <Card title="EVAL · 120 fresh boards">
      <table className="eval">
        <tbody>
          <tr><td>random policy</td><td>{ev.random}</td></tr>
          <tr><td><b>trained readout</b></td><td><b>{ev.trained}</b></td></tr>
          <tr><td>engineered planner (search)</td><td>{ev.firstFoundPlanner}</td></tr>
        </tbody>
      </table>
      <details>
        <summary>methods + negative control</summary>
        <div className="dim small">{report.algo} {report.negativeControl}</div>
      </details>
    </Card>
  );
}
