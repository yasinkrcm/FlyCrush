import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import type { Subset } from '../api';

/**
 * Brain3D — interactive connectome viewer.
 * Viewer pattern mirrors cobanov/fly-connectome-template BrainScene:
 * orthographic camera, native projection with equal axis scale, ONE Points
 * cloud per layer with a custom activity shader (blue anatomy ->
 * cyan -> white by supplied value), model values looked up by body ID
 * (never spatial proximity), drag-rotate + auto-orbit + preset views,
 * ResizeObserver fit, loading/error states, reduced-motion respect,
 * full dispose. Original code; pattern credit in footer.
 */
type LayerKey = 'optic' | 'desc' | 'mod';

const LAYER_OF = (type: string): LayerKey =>
  type === 'DNa01' || type === 'DNa02' || type === 'DNp' ? 'desc'
  : type === 'PAM-DAN' || type === 'MBON' ? 'mod' : 'optic';

const BASE_COL: Record<LayerKey | 'cloud', [number, number, number]> = {
  cloud: [0.35, 0.42, 0.55],
  optic: [0.07, 0.21, 0.46],
  desc: [0.07, 0.35, 0.15],
  mod: [0.42, 0.25, 0.08],
};

function activityMaterial(base: [number, number, number]): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      pixelRatio: { value: Math.min(window.devicePixelRatio || 1, 2) },
      baseCol: { value: new THREE.Vector3(...base) },
    },
    vertexShader: `
      attribute float activity; varying float strength; uniform float pixelRatio;
      void main() {
        strength = activity;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = (1.1 + strength * 3.2) * pixelRatio;
      }`,
    fragmentShader: `
      varying float strength; uniform vec3 baseCol;
      void main() {
        float r = length(gl_PointCoord - vec2(.5));
        if (r > .5) discard;
        vec3 color = mix(baseCol, vec3(.2,.95,1.), strength);
        color = mix(color, vec3(1.), smoothstep(.6,1.,strength));
        gl_FragColor = vec4(color, (.30+.65*strength)*(1.-smoothstep(.18,.5,r)));
      }`,
  });
}

interface PtMeta { id: number; type: string; region: string; layer: LayerKey; rate: number }

export function Brain3D({ subset, rates }: { subset: Subset | null; rates: [number, number][] | undefined }) {
  const host = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<'loading' | 'ready' | 'error'>('loading');
  const [orbiting, setOrbiting] = useState(true);
  const [layers, setLayers] = useState<Record<LayerKey | 'cloud', boolean>>({ optic: true, desc: true, mod: true, cloud: true });
  const [hover, setHover] = useState<PtMeta | null>(null);

  const api = useMemo(() => {
    let setView: ((v: 'frontal' | 'dorsal' | 'lateral') => void) | null = null;
    let setLayer: ((l: LayerKey | 'cloud', on: boolean) => void) | null = null;
    return {
      setView(fn: (v: 'frontal' | 'dorsal' | 'lateral') => void) { setView = fn; },
      go(v: 'frontal' | 'dorsal' | 'lateral') { try { setView?.(v); } catch { /* never */ } },
      setLayerFn(fn: (l: LayerKey | 'cloud', on: boolean) => void) { setLayer = fn; },
      toggle(l: LayerKey | 'cloud', on: boolean) { try { setLayer?.(l, on); } catch { /* never */ } },
    };
  }, []);

  const ratesRef = useRef(rates);
  ratesRef.current = rates;
  const layersRef = useRef(layers);
  layersRef.current = layers;

  useEffect(() => {
    const element = host.current;
    if (!element || !subset) return;
    let disposed = false;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-3, 3, 2, -2, 0.01, 100);
    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch { setState('error'); return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    element.appendChild(renderer.domElement);
    const root = new THREE.Group();
    scene.add(root);

    // ---- build anatomy: uniform scale, centered (equal axes, like template)
    const neurons = (subset.neurons || []).filter((n) => n && Array.isArray(n.xyz));
    const bounds = new THREE.Box3();
    const tmp = new THREE.Vector3();
    neurons.forEach((n) => { tmp.set(n.xyz[0], n.xyz[1], n.xyz[2]); bounds.expandByPoint(tmp); });
    (subset.renderCloud || []).forEach((p) => {
      if (Array.isArray(p)) { tmp.set(+p[0], +p[1], +p[2]); bounds.expandByPoint(tmp); }
    });
    if (bounds.isEmpty()) { setState('error'); return; }
    const center = bounds.getCenter(new THREE.Vector3());
    const size = bounds.getSize(new THREE.Vector3());
    const scale = 5 / Math.max(size.x, size.y, size.z, 1e-6);
    const place = (x: number, y: number, z: number): [number, number, number] => [
      (x - center.x) * scale, (y - center.y) * scale, (z - center.z) * scale,
    ];

    const groups: Record<string, THREE.Points | null> = { cloud: null, optic: null, desc: null, mod: null };
    const metaByPoint: PtMeta[][] = [[], [], [], []];
    const order: (LayerKey | 'cloud')[] = ['cloud', 'optic', 'desc', 'mod'];
    const idToSlot = new Map<number, { g: number; i: number }>();
    try {
      // background cloud (LOD-strided)
      const rc = subset.renderCloud || [];
      const stride = Math.max(1, Math.ceil(rc.length / 2200));
      const cp: number[] = [];
      for (let i = 0; i < rc.length; i += stride) {
        const p = rc[i];
        if (!Array.isArray(p)) continue; // malformed-record guard
        cp.push(...place(+p[0], +p[1], +p[2]));
      }
      groups.cloud = makePoints(cp, new Array(cp.length / 3).fill(0), 'cloud');
      // neurons per layer; activity looked up by BODY ID
      const per: Record<LayerKey, number[]> = { optic: [], desc: [], mod: [] };
      const perMeta: Record<LayerKey, PtMeta[]> = { optic: [], desc: [], mod: [] };
      neurons.forEach((n) => {
        const L = LAYER_OF(n.type || '');
        const idx = per[L].length;
        per[L].push(...place(n.xyz[0], n.xyz[1], n.xyz[2]));
        perMeta[L].push({ id: n.id, type: n.type, region: n.region, layer: L, rate: 0 });
        idToSlot.set(n.id, { g: order.indexOf(L), i: idx });
      });
      (Object.keys(per) as LayerKey[]).forEach((L) => {
        groups[L] = makePoints(per[L], new Array(per[L].length / 3).fill(0), L);
        metaByPoint[order.indexOf(L)] = perMeta[L];
      });
    } catch { setState('error'); return; }

    function makePoints(pos: number[], act: number[], layer: LayerKey | 'cloud'): THREE.Points {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setAttribute('activity', new THREE.BufferAttribute(new Float32Array(act), 1));
      const pts = new THREE.Points(g, activityMaterial(BASE_COL[layer]));
      pts.frustumCulled = false;
      pts.visible = !!layersRef.current[layer];
      root.add(pts);
      return pts;
    }

    const setView = (v: 'frontal' | 'dorsal' | 'lateral') => {
      if (v === 'frontal') root.rotation.set(0, 0, 0);
      else if (v === 'dorsal') root.rotation.set(-Math.PI / 2, 0, 0);
      else root.rotation.set(0, Math.PI / 2, 0);
      fit();
    };
    api.setView(setView);
    api.setLayerFn((l, on) => {
      const g = groups[l];
      if (g) { g.visible = on; renderer?.render(scene, camera); }
    });

    const fit = () => {
      if (!renderer) return;
      const w = Math.max(1, element.clientWidth), h = Math.max(1, element.clientHeight || 320);
      renderer.setSize(w, h, false);
      const aspect = w / h;
      const half = 3.1;
      camera.top = half; camera.bottom = -half;
      camera.left = -half * aspect; camera.right = half * aspect;
      camera.position.set(0, 0, 10);
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    };
    const observer = new ResizeObserver(fit);
    observer.observe(element);

    // hover: raycast points, show body-ID metadata
    const ray = new THREE.Raycaster();
    (ray.params as { Points?: { threshold: number } }).Points = { threshold: 0.12 };
    const mouse = new THREE.Vector2();
    let hoverQueued = false;
    const pick = (e: PointerEvent) => {
      if (hoverQueued) return;
      hoverQueued = true;
      requestAnimationFrame(() => {
        hoverQueued = false;
        try {
          const rect = renderer!.domElement.getBoundingClientRect();
          mouse.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
          ray.setFromCamera(mouse, camera);
          const targets = (['optic', 'desc', 'mod'] as LayerKey[])
            .map((L) => groups[L])
            .filter((g): g is THREE.Points => !!g && g.visible);
          const hits = ray.intersectObjects(targets, false);
          if (hits.length && hits[0].index !== undefined) {
            const g = hits[0].object;
            const gi = order.indexOf((Object.keys(groups) as (LayerKey | 'cloud')[]).find((k) => groups[k] === g) as LayerKey);
            const meta = metaByPoint[gi]?.[hits[0].index];
            setHover(meta ? { ...meta } : null);
          } else setHover(null);
        } catch { setHover(null); }
      });
    };

    let held = false, lx = 0, ly = 0;
    const down = (e: PointerEvent) => {
      held = true; lx = e.clientX; ly = e.clientY;
      try { renderer!.domElement.setPointerCapture(e.pointerId); } catch { /* never */ }
    };
    const move = (e: PointerEvent) => {
      if (held) {
        root.rotation.y += (e.clientX - lx) * 0.006;
        root.rotation.x += (e.clientY - ly) * 0.006;
        lx = e.clientX; ly = e.clientY;
        fit();
      } else pick(e);
    };
    const up = () => { held = false; };
    const leave = () => { held = false; setHover(null); };
    const dom = renderer.domElement;
    dom.addEventListener('pointerdown', down);
    dom.addEventListener('pointermove', move);
    dom.addEventListener('pointerup', up);
    dom.addEventListener('pointercancel', up);
    dom.addEventListener('pointerleave', leave);

    // per-frame: push latest rates (by body ID) into activity attributes
    let raf = 0, prev = performance.now();
    const autoOrbitRef = { current: true };
    (api as { _orbit?: { current: boolean } })._orbit = autoOrbitRef;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const idToRate = new Map<number, number>();
    const animate = (now: number) => {
      if (disposed) return;
      raf = requestAnimationFrame(animate);
      try {
        const dt = Math.min(0.05, (now - prev) / 1000);
        prev = now;
        const rates = ratesRef.current || [];
        if (rates.length) {
          idToRate.clear();
          // rates arrive as [neuronIndex, rate]; resolve body IDs via subset order
          const ns = subset.neurons || [];
          for (const [idx, rate] of rates) {
            const n = ns[idx];
            if (n) idToRate.set(n.id, Math.max(0, Math.min(1, rate)));
          }
          for (const L of ['optic', 'desc', 'mod'] as LayerKey[]) {
            const g = groups[L];
            if (!g || !g.visible) continue;
            const attr = g.geometry.getAttribute('activity') as THREE.BufferAttribute;
            const arr = attr.array as Float32Array;
            const metas = metaByPoint[order.indexOf(L)];
            let dirty = false;
            for (let i = 0; i < metas.length; i++) {
              const v = idToRate.get(metas[i].id) ?? 0;
              if (arr[i] !== v) { arr[i] = v; dirty = true; }
              metas[i].rate = v;
            }
            if (dirty) attr.needsUpdate = true;
          }
        }
        if (autoOrbitRef.current && !held && !reduced.matches && !document.hidden) root.rotation.y += dt * 0.12;
        if (!document.hidden) renderer!.render(scene, camera);
      } catch { /* frame loop never throws */ }
    };
    fit();
    setState('ready');
    raf = requestAnimationFrame(animate);
    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      observer.disconnect();
      dom.removeEventListener('pointerdown', down);
      dom.removeEventListener('pointermove', move);
      dom.removeEventListener('pointerup', up);
      dom.removeEventListener('pointercancel', up);
      dom.removeEventListener('pointerleave', leave);
      Object.values(groups).forEach((g) => {
        try {
          if (g) { root.remove(g); g.geometry.dispose(); (g.material as THREE.Material).dispose(); }
        } catch { /* never */ }
      });
      try { renderer.dispose(); } catch { /* never */ }
      try { dom.remove(); } catch { /* never */ }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subset]);

  // orbit toggle plumbing (state -> loop flag via api holder)
  useEffect(() => {
    try {
      const holder = (api as unknown as { _orbit?: { current: boolean } })._orbit;
      if (holder) holder.current = orbiting;
    } catch { /* never */ }
  }, [orbiting, api, state]);

  const toggleLayer = (l: LayerKey | 'cloud') => {
    const next = { ...layers, [l]: !layers[l] };
    setLayers(next);
    api.toggle(l, next[l]);
  };

  return (
    <div className="brain3d">
      <div className="brain-view-controls">
        <button onClick={() => api.go('frontal')}>frontal</button>
        <button onClick={() => api.go('dorsal')}>dorsal</button>
        <button onClick={() => api.go('lateral')}>lateral</button>
        <button aria-pressed={orbiting} onClick={() => setOrbiting((o) => !o)}>
          orbit {orbiting ? 'on' : 'off'}
        </button>
        {(['optic', 'desc', 'mod', 'cloud'] as const).map((l) => (
          <button key={l} aria-pressed={layers[l]} className={layers[l] ? '' : 'off'} onClick={() => toggleLayer(l)}>
            {l}
          </button>
        ))}
      </div>
      <div className="brain-legend">blue: anatomy · cyan/white: live firing (by body ID) · drag to rotate</div>
      <div ref={host} className="three-viewport" aria-label="MaleCNS subset, interactive 3D">
        {state !== 'ready' && (
          <span className="neural-load" role="status">
            {state === 'error' ? 'atlas unavailable' : 'loading anatomy…'}
          </span>
        )}
        {hover && (
          <div className="hovertip">
            <b>{hover.type}#{String(hover.id).slice(-6)}</b> · {hover.region} · rate {hover.rate.toFixed(2)}
          </div>
        )}
      </div>
      <div className="dim small">schematic subset · {(subset?.neurons || []).length} neurons · viewer pattern: fly-connectome-template BrainScene</div>
    </div>
  );
}
