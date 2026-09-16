/**
 * react/BrainView.mjs — React wrapper around BrainRenderer. No JSX.
 * PEER DEPS: `react` required, `three` optional (2D fallback otherwise).
 *
 *   import { BrainView } from '../src/connectome/react/BrainView.mjs';
 *   React.createElement(BrainView, { subset, rates, view:'frontal', style:{width:'100%'} })
 * or in JSX: <BrainView subset={s} rates={r} view="dorsal" />
 */
import React, { useEffect, useRef, useState } from 'react';
import { BrainRenderer } from '../three/BrainRenderer.mjs';

export function BrainView({ subset = null, rates = null, view = 'frontal', force2D = false, ...rest }) {
  const canvasRef = useRef(null);
  const rendererRef = useRef(null);
  const [mode, setMode] = useState('pending');
  const liveRef = useRef({ subset, rates });
  liveRef.current = { subset, rates };

  useEffect(() => {
    let alive = true, raf = 0;
    let renderer = null;
    (async () => {
      try {
        const canvas = canvasRef.current;
        if (!canvas) return;
        renderer = new BrainRenderer(canvas, { view, force2D });
        rendererRef.current = renderer;
        const m = await renderer.init();
        if (!alive) return;
        setMode(m);
        try { renderer.setAnatomy(liveRef.current.subset); } catch {}
        const loop = (t) => {
          if (!alive) return;
          try {
            renderer.setActivity(liveRef.current.rates);
            renderer.render(t);
          } catch {}
          raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
      } catch {}
    })();
    return () => {
      alive = false;
      try { cancelAnimationFrame(raf); } catch {}
      try { renderer?.dispose(); } catch {}
      rendererRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view]);

  useEffect(() => {
    try { rendererRef.current?.setAnatomy(subset); } catch {}
  }, [subset]);

  return React.createElement(
    'div',
    { ...rest, 'data-brain-mode': mode },
    React.createElement('canvas', { ref: canvasRef, width: 300, height: 260, style: { width: '100%', height: 'auto', display: 'block' } }),
  );
}
