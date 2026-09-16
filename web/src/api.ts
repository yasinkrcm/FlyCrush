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
export interface Report { eval120?: { random: number; trained: number; firstFoundPlanner: number }; oracle30?: number; algo?: string; honestNote?: string; negativeControl?: string }

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
