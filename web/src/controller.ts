// Framework-free game controller: game channel (WS, HTTP fallback) + animation phases.
// React subscribes for panel state; the canvas loop reads refs directly.
import { api, game, ws, Snapshot, Step, Subset, Report } from './api';
import { CANDY } from './draw';

export const CELL = 62;
export const BX = 40, BY = 130; // scene-space origin of the board (floats/particles)
const DV: Record<string, [number, number]> = {
  up: [-1, 0], down: [1, 0], left: [0, -1], right: [0, 1],
};
export const DIRS = ['up', 'down', 'left', 'right'];

export interface Float { x: number; y: number; txt: string; t: number; big?: boolean; col?: string }
export interface Particle { x: number; y: number; vx: number; vy: number; t: number; life: number; col: string }

export type Phase = 'idle' | 'aim' | 'swap' | 'flash' | 'pop' | 'fall' | 'swapback';

export class FlyController {
  snap: Snapshot | null = null;
  subset: Subset | null = null;
  report: Report = {};
  status = 'connecting…';
  bootState: 'connecting' | 'online' | 'offline' = 'connecting';
  listeners = new Set<() => void>();

  phase: Phase = 'idle';
  phaseT = 0;
  pending: { cell: number; dir: string } | null = null;
  pendingFinal: number[][] | null = null;
  steps: Step[] = [];
  stepIdx = 0;
  falls: Record<string, number> = {};
  pops = new Set<number>();
  matched = new Set<number>();
  floats: Float[] = [];
  particles: Particle[] = [];
  sel: [number, number] | null = null;
  rejectCells: [number, number][] = [];
  rejectT = 99;
  say = '…'; happy = 0.5; sayT = 99;
  aimT = 0; overT = 0;
  manual = false; playing = true; speedMul = 1; // autoplay ON at boot: every move visible
  busy = false;
  trailCells: [number, number][] = [];
  trailT = 99;

  subscribe = (fn: () => void) => { this.listeners.add(fn); return () => { this.listeners.delete(fn); }; };
  emit() { try { this.listeners.forEach((f) => f()); } catch { /* never */ } }
  setStatus(t: string) { this.status = t; this.emit(); }

  get board(): number[][] | null { return this.snap?.board ?? null; }

  /** Mirror the swap locally so flash/pop/fall animate on the POST-SWAP
      board — the backend reports matches against it. Without this the
      WRONG candies appear to explode. */
  private localSwap(cell: number, dir: string) {
    try {
      const b = this.snap?.board;
      if (!b) return;
      const r1 = Math.floor(cell / 8), c1 = cell % 8;
      const d = DV[dir] || [0, 0];
      const r2 = r1 + d[0], c2 = c1 + d[1];
      if (r2 < 0 || r2 > 7 || c2 < 0 || c2 > 7) return;
      const t = b[r1][c1]; b[r1][c1] = b[r2][c2]; b[r2][c2] = t;
    } catch { /* never */ }
  }

  applyPub(p: Partial<Snapshot>) {
    if (!p) return;
    this.snap = Object.assign(this.snap || {}, p) as Snapshot;
    if ((p as { board?: number[][] }).board) this.snap.board = (p as { board: number[][] }).board;
    this.emit();
  }

  async boot() {
    this.subset = await api.subset();
    this.report = (await api.report()) || {};
    ws.onSnapshot((snap) => this.handlePush(snap));
    ws.connect();
    const st = await game.state();
    if (!st) {
      this.bootState = 'offline';
      this.setStatus('backend offline — start it with: python -m backend.server (see README)');
      return;
    }
    this.bootState = 'online';
    this.applyPub(st);
    this.setStatus(`brain: ${st.prov} · updates ${st.updates} · saved@${st.saved ?? 0} (postgres, auto)`);
  }

  /** Server push (WS) — same semantics the old poll had: apply only while idle. */
  handlePush(snap: Snapshot) {
    if (this.phase !== 'idle') return;
    this.applyPub(snap);
    if (this.bootState !== 'online') {
      this.bootState = 'online';
      this.setStatus(`brain: ${snap.prov} · updates ${snap.updates}`);
    }
    const j = snap.job;
    if (j && j.running) this.setStatus(`Turbo ${j.done}/${j.total} · avg ${j.avg.toFixed(0)} · curve warming up…`);
  }

  async flyStep() {
    if (this.busy) return;
    this.busy = true;
    try {
      const res = await game.flyStep();
      if (!res) { this.setStatus('backend offline'); return; }
      // NOTE: ok:false + reason:no-match is a NORMAL wrong move (animate it!),
      // only game-over / brain-error return early.
      if (!res.ok && res.reason !== 'no-match') {
        if (res.reason === 'game-over' && this.snap) this.snap.over = true;
        this.emit();
        return;
      }
      this.pendingFinal = res.board || null;
      delete res.board;
      this.applyPub(res);
      if (res.valid) {
        const dec = res.decision as { cell: number; dir: string };
        this.pending = dec; this.steps = res.steps || []; this.stepIdx = 0;
        this.phase = 'aim'; this.phaseT = 0;
      } else {
        this.pending = res.decision as { cell: number; dir: string };
        this.steps = []; this.stepIdx = 0;
        if (res.reshuffled && this.pendingFinal && this.snap) this.snap.board = this.pendingFinal;
        const d = DV[this.pending.dir] || [0, 0];
        const r1 = Math.floor(this.pending.cell / 8), c1 = this.pending.cell % 8;
        this.floats.push({
          x: BX + ((2 * c1 + d[1]) / 2) * CELL + CELL / 2,
          y: BY + ((2 * r1 + d[0]) / 2) * CELL + CELL / 2,
          txt: '×', t: 0, big: true, col: '#ff5f5f',
        });
        this.rejectCells = [[r1, c1], [r1 + d[0], c1 + d[1]]]; this.rejectT = 0;
        this.say = 'Hmm… no match'; this.happy = 0.1; this.sayT = 0;
        this.phase = 'aim'; this.phaseT = 0; // show the attempt first, then slide back
      }
      if (res.reshuffled) { this.say = 'no moves — shuffled!'; this.happy = 0.3; this.sayT = 0; }
      if (res.over && this.snap) {
        this.snap.over = true; this.overT = 0;
        this.say = `game over · ${res.score} pts`; this.happy = 0.5; this.sayT = 0;
      }
      this.emit();
    } finally { this.busy = false; }
  }

  async humanMove(cell: number, dir: string) {
    if (this.busy || this.phase !== 'idle') return;
    this.busy = true;
    try {
      const res = await game.humanMove(cell, dir);
      if (!res) { this.setStatus('backend offline'); return; }
      if (!res.ok && res.reason !== 'no-match') return;
      this.pendingFinal = res.board || null;
      delete res.board;
      this.applyPub(res);
      if (res.valid) {
        this.localSwap(cell, dir);
        this.pending = { cell, dir }; this.steps = res.steps || []; this.stepIdx = 0;
        this.phase = 'swap'; this.phaseT = 0;
      } else {
        this.pending = { cell, dir };
        if (res.reshuffled && this.pendingFinal && this.snap) this.snap.board = this.pendingFinal;
        const d0 = DV[dir] || [0, 0];
        const hr = Math.floor(cell / 8), hc = cell % 8;
        this.floats.push({
          x: BX + ((2 * hc + d0[1]) / 2) * CELL + CELL / 2,
          y: BY + ((2 * hr + d0[0]) / 2) * CELL + CELL / 2,
          txt: '×', t: 0, big: true, col: '#ff5f5f',
        });
        this.rejectCells = [[hr, hc], [hr + d0[0], hc + d0[1]]]; this.rejectT = 0;
        this.say = 'Hmm… no match'; this.happy = 0.1; this.sayT = 0;
        this.phase = 'swapback'; this.phaseT = 0;
      }
      if (res.reshuffled) { this.say = 'no moves — shuffled!'; this.sayT = 0; }
      if (res.over && this.snap) { this.snap.over = true; this.overT = 0; }
      this.emit();
    } finally { this.busy = false; }
  }

  async newGame(fromScratch = false) {
    if (this.busy) return;
    this.busy = true;
    try {
      const res = await game.newGame(fromScratch);
      if (!res) { this.setStatus('backend offline'); return; }
      this.applyPub(res);
      this.pendingFinal = null;
      this.phase = 'idle'; this.phaseT = 0; this.steps = [];
      this.falls = {}; this.matched = new Set();
      this.say = fromScratch ? 'blank brain — learning live' : 'new grid — brain keeps learning';
      this.happy = 0.8; this.sayT = 0;
      this.setStatus(`brain: ${this.snap?.prov} · updates ${this.snap?.updates}`);
    } finally { this.busy = false; }
  }

  async turbo() {
    const res = await game.turbo(200);
    if (res && res.ok) this.setStatus('Turbo started · 200 episodes · ~1000 moves/s');
    else if (res && (res as { reason?: string }).reason === 'already-running') this.setStatus('Turbo already running');
    else this.setStatus('turbo failed');
  }

  async save() {
    const res = await game.save();
    this.setStatus(res && res.ok ? `brain saved · updates ${res.updates}` : 'save failed');
  }

  clickCell(r: number, c: number) {
    if (!this.manual || this.phase !== 'idle' || !this.snap || this.snap.over) return;
    if (!this.sel) { this.sel = [r, c]; return; }
    const [ar, ac] = this.sel; this.sel = null;
    if (ar === r && ac === c) return;
    if (Math.abs(ar - r) + Math.abs(ac - c) !== 1) { this.sel = [r, c]; return; }
    const d = r === ar - 1 ? 'up' : r === ar + 1 ? 'down' : c === ac - 1 ? 'left' : 'right';
    void this.humanMove(ar * 8 + ac, d);
  }

  update(rawDt: number) {
    let dt = !(rawDt >= 0) || rawDt > 0.25 ? 0.025 : rawDt;
    dt *= this.speedMul;
    const S = this.snap;
    this.sayT += dt;
    if (S) S.dopa = Math.max(0, (S.dopa || 0) - dt * 26);
    for (const f of this.floats) { f.t += dt; f.y -= dt * 40; }
    this.floats = this.floats.filter((f) => f.t < 1.2);
    for (const p of this.particles) { p.t += dt; p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 900 * dt; }
    this.particles = this.particles.filter((p) => p.t < p.life);
    this.rejectT += dt;
    if (this.rejectT > 1.6) this.rejectCells = [];
    this.trailT += dt;
    if (this.trailT > 1.4) this.trailCells = [];

    if (this.phase === 'idle' && S && !S.over) {
      if (this.playing && !this.manual) {
        this.aimT += dt;
        if (this.aimT > 0.55) { this.aimT = 0; void this.flyStep(); }
      }
    } else if (this.phase === 'aim') {
      this.phaseT += dt;
      if (this.phaseT > 0.6) {
        if (this.pending && this.steps.length > 0) this.localSwap(this.pending.cell, this.pending.dir);
        this.phase = 'swap'; this.phaseT = 0;
      }
    } else if (this.phase === 'swap') {
      this.phaseT += dt;
      if (this.phaseT > 0.22) {
        if (this.steps.length) {
          this.stepIdx = 0; this.phase = 'flash'; this.phaseT = 0;
          this.matched = new Set(this.steps[0].matched.map(([r, c]) => r * 8 + c));
          // green trail on the swapped pair: every valid move stays visible
          if (this.pending) {
            const pr = Math.floor(this.pending.cell / 8), pc = this.pending.cell % 8;
            const d = DV[this.pending.dir] || [0, 0];
            this.trailCells = [[pr, pc], [pr + d[0], pc + d[1]]]; this.trailT = 0;
          }
        } else { this.phase = 'swapback'; this.phaseT = 0; } // invalid attempt slides back
      }
    } else if (this.phase === 'flash') {
      this.phaseT += dt;
      if (this.phaseT > 0.45) {
        const st = this.steps[this.stepIdx];
        this.pops = new Set(st.matched.map(([r, c]) => r * 8 + c));
        for (const [r, c] of st.matched) {
          const cx = BX + c * CELL + CELL / 2, cy = BY + r * CELL + CELL / 2;
          const bv = this.board?.[r]?.[c] ?? 0;
          const cc = CANDY[bv] ? CANDY[bv].c : '#fff';
          for (let i = 0; i < 4 && this.particles.length < 240; i++) {
            const a = Math.random() * 6.283, sp = 60 + Math.random() * 170;
            this.particles.push({ x: cx, y: cy, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 80, t: 0, life: 0.5 + Math.random() * 0.3, col: cc });
          }
        }
        this.phase = 'pop'; this.phaseT = 0;
      }
    } else if (this.phase === 'pop') {
      this.phaseT += dt;
      if (this.phaseT > 0.22) {
        const st = this.steps[this.stepIdx];
        if (S) S.board = st.board;
        this.falls = st.falls || {};
        this.pops = new Set();
        const m = st.matched;
        const cr = m.reduce((s, [r]) => s + r, 0) / m.length;
        const cc = m.reduce((s, [, c]) => s + c, 0) / m.length;
        this.floats.push({ x: BX + cc * CELL + CELL / 2, y: BY + cr * CELL, txt: `+${st.gained}`, t: 0 });
        this.say = `${st.word} +${st.gained}`; this.happy = 1; this.sayT = 0;
        this.emit();
        this.phase = 'fall'; this.phaseT = 0;
      }
    } else if (this.phase === 'fall') {
      this.phaseT += dt;
      if (this.phaseT > 0.38) {
        this.falls = {};
        this.stepIdx++;
        if (this.stepIdx < this.steps.length) {
          this.phase = 'flash'; this.phaseT = 0;
          this.matched = new Set(this.steps[this.stepIdx].matched.map(([r, c]) => r * 8 + c));
        } else {
          if (this.pendingFinal && S) S.board = this.pendingFinal;
          this.pendingFinal = null;
          this.phase = 'idle'; this.phaseT = 0;
        }
      }
    } else if (this.phase === 'swapback') {
      this.phaseT += dt;
      if (this.phaseT > 0.6) { this.phase = 'idle'; this.phaseT = 0; }
    }
    if (S && S.over) {
      this.overT += dt;
      if (this.overT > 3 && this.phase === 'idle') { this.overT = 0; void this.newGame(false); }
    }
  }

  poll = async () => {
    try {
      if (this.phase === 'idle') {
        const s2 = await api.state();
        if (s2) {
          if (this.bootState !== 'online') { this.bootState = 'online'; this.setStatus(`brain: ${s2.prov} · updates ${s2.updates}`); }
          this.applyPub(s2);
          const j = s2.job;
          if (j && j.running) this.setStatus(`Turbo ${j.done}/${j.total} · avg ${j.avg.toFixed(0)} · curve warming up…`);
        }
      }
    } catch { /* poll never breaks the loop */ }
  };
}
