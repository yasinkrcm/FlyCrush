import { useEffect, useMemo, useRef, useState } from 'react';
import { Brain } from 'lucide-react';
import { loadAtlas, type Atlas } from '../lib/atlas';
import type { ActivityFrame } from '../lib/replay';
import { BrainScene } from './BrainScene';
import { Brain3D } from './Brain3D';
import type { Snapshot, Subset } from '../api';

type Mode = 'live' | 'atlas';

/** Brain card: live synthetic connectome (our LIF net) or the template's
 *  real MaleCNS anatomy, with our firing rates as an ILLUSTRATIVE overlay —
 *  synthetic neuron ids cannot map to real MaleCNS body ids 1:1, so a fixed
 *  seeded assignment lights up real somata (descending first, then optic). */
export function BrainCard({ subset, rates }: { subset: Subset | null; rates: Snapshot['rates'] | undefined }) {
  const [mode, setMode] = useState<Mode>('live');
  const [atlas, setAtlas] = useState<Atlas | null>(null);
  const [failed, setFailed] = useState(false);
  const tick = useRef(0);
  const [, bump] = useState(0);

  useEffect(() => {
    if (mode !== 'atlas' || atlas || failed) return;
    const ac = new AbortController();
    loadAtlas(ac.signal).then(setAtlas).catch(() => setFailed(true));
    return () => ac.abort();
  }, [mode, atlas, failed]);

  useEffect(() => {
    if (mode !== 'atlas') return;
    const iv = window.setInterval(() => { tick.current += 1; bump((n) => n + 1); }, 600);
    return () => window.clearInterval(iv);
  }, [mode]);

  const mapping = useMemo(() => {
    if (!atlas || !subset) return null;
    const byGroup: number[][] = [[], [], []];
    atlas.ids.forEach((id, i) => { if (atlas.groups[i] < 3) byGroup[atlas.groups[i]].push(id); });
    byGroup.forEach((a) => a.sort((x, y) => x - y));
    const pool = [...byGroup[2], ...byGroup[0], ...byGroup[1]];
    if (!pool.length) return null;
    return subset.neurons.map((_, i) => pool[(i * 7919) % pool.length]);
  }, [atlas, subset]);

  const frame: ActivityFrame | null = useMemo(() => {
    if (mode !== 'atlas' || !mapping) return null;
    const values: [number, number][] = [];
    for (const [idx, rate] of rates || []) {
      const id = mapping[idx];
      if (id) values.push([id, Math.max(0, Math.min(1, rate / 3))]);
    }
    return { time: tick.current * 0.6, values };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, mapping, rates, tick.current]);

  return (
    <div className="card">
      <div className="card-h">
        <span className="card-t"><Brain size={14} /> Brain</span>
        <div className="bcard-modes">
          <button aria-pressed={mode === 'live'} onClick={() => setMode('live')}>live · synthetic</button>
          <button aria-pressed={mode === 'atlas'} onClick={() => setMode('atlas')}>MaleCNS · real anatomy</button>
        </div>
      </div>
      {mode === 'live' ? (
        <Brain3D subset={subset} rates={rates} />
      ) : atlas ? (
        <>
          <BrainScene atlas={atlas} frame={frame} />
          <div className="dim small">illustrative overlay — synthetic fly activity on real MaleCNS somata (CC BY 4.0)</div>
        </>
      ) : (
        <div className="neural-load-flat" role="status">
          {failed ? 'atlas unavailable' : 'loading anatomy…'}
        </div>
      )}
    </div>
  );
}
