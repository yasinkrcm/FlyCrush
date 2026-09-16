/**
 * react/useConnectome.mjs — React hook binding for the connectome controller.
 *
 * PEER DEPENDENCY: `react` (npm i react). This file is intentionally NOT
 * re-exported from src/connectome/index.mjs, so vanilla consumers never
 * resolve 'react'. No JSX inside — no build-step change required.
 *
 *   import { useConnectome } from '../src/connectome/react/useConnectome.mjs';
 *
 *   function Game() {
 *     const boardRef = useRef(initialBoard);
 *     const { state, reward, provenance } = useConnectome({
 *       subset,                       // loaded JSON doc (or null)
 *       boardFn: () => boardRef.current,
 *       findValidMove,
 *       onDecision: ({L, R, dir, move}) => commitFlyMove(move ?? resolveFromLR(L,R,dir)),
 *     });
 *     ...
 *   }
 */
import { useEffect, useMemo, useRef, useState } from 'react';
import { createController } from '../controller.mjs';

export function useConnectome({ subset = null, boardFn, findValidMove, onDecision, onEvent, tickHz = 10, autoStart = true } = {}) {
  const [state, setState] = useState({ L: 0, R: 0, gate: 0, dir: 'up', pamHz: 0, mode: 'fallback', live: false });
  const [provenance, setProvenance] = useState('pre-recorded-fallback');
  const cbRef = useRef({ boardFn, findValidMove, onDecision, onEvent });
  cbRef.current = { boardFn, findValidMove, onDecision, onEvent };

  const ctl = useMemo(() => {
    try {
      return createController({
        subset,
        boardFn: (...a) => { try { return cbRef.current.boardFn?.(...a); } catch { return null; } },
        findValidMove: (...a) => { try { return cbRef.current.findValidMove?.(...a); } catch { return null; } },
        onDecision: (d) => { try { cbRef.current.onDecision?.(d); } catch {} },
        onEvent: (e) => { try { cbRef.current.onEvent?.(e); } catch {} },
        tickHz,
      });
    } catch {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subset]);

  useEffect(() => {
    if (!ctl) return undefined;
    let alive = true, raf = 0;
    const poll = () => {
      if (!alive) return;
      try { setState(ctl.getState()); } catch {}
      raf = requestAnimationFrame(poll);
    };
    try {
      setProvenance(ctl.provenance());
      if (autoStart) ctl.start();
      raf = requestAnimationFrame(poll);
    } catch {}
    return () => { alive = false; try { cancelAnimationFrame(raf); } catch {} try { ctl.stop(); } catch {} };
  }, [ctl, autoStart]);

  return {
    state,
    provenance,
    reward: (removed) => { try { ctl?.notifyReward(removed); } catch {} },
    stepOnce: () => { try { ctl?.stepOnce(); } catch {} },
    start: () => { try { ctl?.start(); } catch {} },
    stop: () => { try { ctl?.stop(); } catch {} },
  };
}
