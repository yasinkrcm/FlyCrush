// Typed client for backend/server.py JSON API. Same-origin in prod,
// Vite-proxied to :8000 in dev. Every call guarded: null on failure.
export type DirKey = 'up' | 'down' | 'left' | 'right';
export interface Decode { L: number; R: number; gate: number; dir: string; dirs: Record<DirKey, number> }
export interface Step {
  matched: [number, number][]; gained: number; cascade: number; word: string;
  falls: Record<string, number>; board: number[][];
}
export interface Decision { cell: number; dir: string; L: number; R: number; gate: number }
export interface Layers { optic: number; desc: number; pam: number; mod: number }
export interface TraceEntry { n: number; cell: number; di: number; r: number; gained: number; o: number; d: number; p: number }
export interface LastMove extends TraceEntry { in_energy: number; eps: number; updates: number }
export interface Job { running: boolean; done: number; total: number; avg: number; curve: number[] }
export interface InvalidInfo {
  count: number; moves: number; rate: number;
  recent: { n: number; L: number; R: number; dir: string; via: string }[];
}
export interface Snapshot {
  board: number[][]; moves_left: number | null; score: number; combo: number;
  chain: number; best: number; over: boolean; dec: Decode; dopa: number;
  active: number; prov: string; eps: number; updates: number; saved: number;
  avg50: number; hist: number[]; rates: [number, number][]; layers: Layers;
  trace: TraceEntry[]; last: LastMove | null; job: Job; invalid: InvalidInfo; say: string;
}
export interface FlyStepRes extends Partial<Snapshot> {
  ok: boolean; reason?: string; valid?: boolean; decision?: Decision;
  steps?: Step[]; reshuffled?: boolean;
}
export interface Neuron { id: number; type: string; region: string; layer: string; xyz: [number, number, number] }
export interface Subset {
  meta: { synthetic: boolean };
  neurons: Neuron[]; renderCloud: [number, number, number, number][];
  decoders: { colIds: number[]; rowIds: number[]; gateIds: number[]; pamIds: number[] };
}
export interface Report {
  eval120?: {
    random: number; randomValid?: number; trained: number;
    trainedMatchesPerGame?: number; firstFoundPlanner: number;
  };
  oracle30?: number; algo?: string; honestNote?: string; negativeControl?: string;
  trained?: string; features?: string;
  supervised?: {
    boards?: number; epochs?: number; lr?: number;
    hit120?: number; hit120Pct?: number; avgScore120?: number;
  };
}

async function jget<T>(u: string): Promise<T | null> {
  try {
    const r = await fetch(u);
    if (!r.ok) return null;
    return (await r.json()) as T;
  } catch { return null; }
}
async function jpost<T>(u: string, body: unknown): Promise<T | null> {
  try {
    const r = await fetch(u, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body ?? {}),
    });
    if (!r.ok) return null;
    return (await r.json()) as T;
  } catch { return null; }
}

export const api = {
  state: () => jget<Snapshot>('/api/state'),
  report: () => jget<Report>('/api/report'),
  subset: () => jget<Subset>('/public/data/connectome-subset.json'),
  flyStep: () => jpost<FlyStepRes>('/api/fly_step', {}),
  humanMove: (cell: number, dir: string) => jpost<FlyStepRes>('/api/human_move', { cell, dir }),
  newGame: (fromScratch = false) => jpost<Snapshot>('/api/new_game', fromScratch ? { from_scratch: true } : {}),
  turbo: (episodes = 200) => jpost<{ ok: boolean; job: Job }>('/api/turbo', { episodes }),
  save: () => jpost<{ ok: boolean; updates: number }>('/api/save', {}),
};

// ---- WebSocket push channel (fallbacks to HTTP when the socket is down) ----

type Pending = { resolve: (v: unknown) => void; timer: number };

class WsClient {
  private ws: WebSocket | null = null;
  private seq = 0;
  private retry = 0;
  private pending = new Map<number, Pending>();
  private pushCbs = new Set<(snap: Snapshot) => void>();
  private statusCbs = new Set<(open: boolean) => void>();

  connect() {
    try {
      const url = `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}/ws`;
      const ws = new WebSocket(url);
      this.ws = ws;
      ws.onopen = () => { this.retry = 0; this.statusCbs.forEach((f) => f(true)); };
      ws.onmessage = (ev) => {
        try {
          const msg = JSON.parse(ev.data) as { id?: number; ok?: boolean; data?: unknown; type?: string };
          if (msg.type === 'snapshot' && msg.data) {
            this.pushCbs.forEach((f) => f(msg.data as Snapshot));
            return;
          }
          if (typeof msg.id === 'number') {
            const p = this.pending.get(msg.id);
            if (p) {
              window.clearTimeout(p.timer);
              this.pending.delete(msg.id);
              p.resolve(msg.ok ? msg.data : null);
            }
          }
        } catch { /* malformed frame — ignore */ }
      };
      ws.onclose = () => {
        this.statusCbs.forEach((f) => f(false));
        this.failAll();
        const delay = Math.min(5000, 600 * 2 ** this.retry++);
        window.setTimeout(() => this.connect(), delay);
      };
      ws.onerror = () => { try { ws.close(); } catch { /* never */ } };
    } catch { /* no ws support — HTTP fallback keeps the app alive */ }
  }

  get open() { return this.ws?.readyState === WebSocket.OPEN; }

  request<T>(type: string, body?: Record<string, unknown>): Promise<T | null> {
    if (!this.open) return Promise.resolve(null);
    const id = ++this.seq;
    return new Promise((resolve) => {
      const timer = window.setTimeout(() => { this.pending.delete(id); resolve(null); }, 15000);
      this.pending.set(id, { resolve: resolve as (v: unknown) => void, timer });
      this.ws!.send(JSON.stringify({ type, id, ...(body ?? {}) }));
    });
  }

  onSnapshot(cb: (snap: Snapshot) => void) { this.pushCbs.add(cb); return () => this.pushCbs.delete(cb); }
  onStatus(cb: (open: boolean) => void) { this.statusCbs.add(cb); return () => this.statusCbs.delete(cb); }

  private failAll() {
    for (const [, p] of this.pending) { window.clearTimeout(p.timer); p.resolve(null); }
    this.pending.clear();
  }
}

export const ws = new WsClient();

// game actions over WS with automatic HTTP fallback
export const game = {
  state: async () => (await ws.request<Snapshot>('state')) ?? api.state(),
  flyStep: async () => (await ws.request<FlyStepRes>('step')) ?? api.flyStep(),
  humanMove: async (cell: number, dir: string) =>
    (await ws.request<FlyStepRes>('move', { cell, dir })) ?? api.humanMove(cell, dir),
  newGame: async (fromScratch = false) =>
    (await ws.request<Snapshot>('new', fromScratch ? { from_scratch: true } : {})) ?? api.newGame(fromScratch),
  turbo: async (episodes = 200) =>
    (await ws.request<{ ok: boolean; job: Job }>('turbo', { episodes })) ?? api.turbo(episodes),
  save: async () => (await ws.request<{ ok: boolean; updates: number }>('save')) ?? api.save(),
};
