/**
 * three/BrainRenderer.mjs — GPU-friendly neuron-cloud views (frontal/dorsal).
 *
 * - `three` is a LAZY peer dependency: dynamic import() inside try/catch.
 *   If the import fails, WebGL is missing, or `force2D` is set, a built-in
 *   Canvas2D point renderer takes over. The caller sees the same API.
 * - Static anatomy = ONE THREE.Points (BufferGeometry, vertex colors).
 * - Live spikes = a SECOND capped Points overlay (MAX_ACTIVE, default 512):
 *   only firing neurons are re-uploaded per frame (tiny buffer update).
 * - LOD: stride sampling of the static cloud by DPR/mobile; pixelRatio
 *   clamped; frustumCulled=false with a manual bounding sphere (cheap).
 *
 * Usage:
 *   import { BrainRenderer } from './three/BrainRenderer.mjs';
 *   const view = new BrainRenderer(canvas, { view:'frontal' });
 *   await view.init();                 // never throws; sets view.mode
 *   view.setAnatomy(subset);           // positions + region/group colors
 *   view.setActivity(rateArray, idxOf);// Float32Array rates + id->index map
 *   view.render(t);                    // call from your rAF loop
 *   view.dispose();
 */
const MAX_ACTIVE = 512;

const GROUP_COLOR = { optic: [0.35, 0.55, 0.85], descending: [0.35, 1.0, 0.45], modulatory: [1.0, 0.7, 0.3] };
const CLOUD_COLOR = [[0.45, 0.55, 0.7], [0.4, 0.6, 0.9], [0.5, 0.5, 0.6]];
const CAMS = {
  frontal: { pos: [0, 0.1, 3.1], up: [0, 1, 0] },
  dorsal: { pos: [0, 3.1, 0.35], up: [0, 0, -1] },
};

function groupOf(type) {
  if (type === 'DNa01' || type === 'DNa02' || type === 'DNp') return 'descending';
  if (type === 'PAM-DAN' || type === 'MBON') return 'modulatory';
  return 'optic';
}

export class BrainRenderer {
  constructor(canvas, { view = 'frontal', force2D = false, lodCap = 6000 } = {}) {
    this.canvas = canvas;
    this.view = CAMS[view] ? view : 'frontal';
    this.force2D = !!force2D;
    this.lodCap = lodCap;
    this.mode = 'pending'; // 'webgl' | '2d' | 'unavailable'
    this._pts = null; this._anatomy = null; this._rates = null;
    this._three = null; this._raf = null;
  }

  get lodStride() {
    try {
      const mobile = /Mobi|Android/i.test(navigator.userAgent ?? '');
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const budget = mobile ? Math.min(this.lodCap, 2500) : this.lodCap;
      return { stride: 1, budget, dpr: Math.min(dpr, 1.75) };
    } catch { return { stride: 1, budget: 4000, dpr: 1 }; }
  }

  /** Resolve + init. Never throws; falls back to 2D on ANY failure. */
  async init() {
    try {
      if (this.force2D) throw new Error('forced-2d');
      const probe = document.createElement('canvas');
      if (!(probe.getContext('webgl2') || probe.getContext('webgl'))) throw new Error('no-webgl');
      const THREE = await import('three'); // peer dep; bundler or importmap
      this._three = THREE;
      this._initGL(THREE);
      this.mode = 'webgl';
    } catch {
      try { this._init2D(); this.mode = '2d'; }
      catch { this.mode = 'unavailable'; }
    }
    return this.mode;
  }

  _initGL(THREE) {
    const { budget, dpr } = this.lodStride;
    this._budget = budget;
    const renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: false, alpha: false });
    renderer.setPixelRatio(dpr);
    const w = this.canvas.clientWidth || 300, h = this.canvas.clientHeight || 260;
    renderer.setSize(w, h, false);
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x05070b);
    const cam = new THREE.PerspectiveCamera(42, w / h, 0.1, 20);
    const c = CAMS[this.view];
    cam.position.set(...c.pos); cam.up.set(...c.up); cam.lookAt(0, -0.1, 0.2);
    // Static cloud (positions filled in setAnatomy)
    const gStatic = new THREE.BufferGeometry();
    const posA = new Float32Array(budget * 3);
    const colA = new Float32Array(budget * 3);
    gStatic.setAttribute('position', new THREE.BufferAttribute(posA, 3));
    gStatic.setAttribute('color', new THREE.BufferAttribute(colA, 3));
    gStatic.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), 4);
    const mStatic = new THREE.PointsMaterial({ size: 0.02, vertexColors: true, transparent: true, opacity: 0.55, sizeAttenuation: true, depthWrite: false });
    const pStatic = new THREE.Points(gStatic, mStatic);
    pStatic.frustumCulled = false;
    scene.add(pStatic);
    // Live overlay: capped buffer, rewritten per frame
    const gLive = new THREE.BufferGeometry();
    const lPos = new Float32Array(MAX_ACTIVE * 3);
    const lCol = new Float32Array(MAX_ACTIVE * 3);
    gLive.setAttribute('position', new THREE.BufferAttribute(lPos, 3));
    gLive.setAttribute('color', new THREE.BufferAttribute(lCol, 3));
    gLive.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), 4);
    gLive.setDrawRange(0, 0);
    const mLive = new THREE.PointsMaterial({ size: 0.045, vertexColors: true, transparent: true, opacity: 0.95, sizeAttenuation: true, depthWrite: false });
    const pLive = new THREE.Points(gLive, mLive);
    pLive.frustumCulled = false;
    scene.add(pLive);
    Object.assign(this, { _renderer: renderer, _scene: scene, _cam: cam, _gStatic: gStatic, _gLive: gLive });
  }

  _init2D() {
    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('no-2d');
    this._ctx2d = ctx;
  }

  /** Feed anatomy once: subset doc with neurons[] + renderCloud[]. Null-guarded. */
  setAnatomy(subset) {
    try {
      const neurons = Array.isArray(subset?.neurons) ? subset.neurons : [];
      const cloud = Array.isArray(subset?.renderCloud) ? subset.renderCloud : [];
      this._anatomy = { neurons, cloud };
      if (this.mode !== 'webgl' || !this._three) return;
      const posA = this._gStatic.getAttribute('position');
      const colA = this._gStatic.getAttribute('color');
      let n = 0;
      const push = (x, y, z, rgb) => {
        if (n >= this._budget || !isFinite(x + y + z)) return;
        posA.setXYZ(n, x, y, z); colA.setXYZ(n, rgb[0], rgb[1], rgb[2]); n++;
      };
      const stride = Math.max(1, Math.ceil(cloud.length / Math.max(1, this._budget - neurons.length)));
      for (let i = 0; i < cloud.length; i += stride) {
        const p = cloud[i]; if (!Array.isArray(p)) continue;
        const c = CLOUD_COLOR[p[3]] ?? CLOUD_COLOR[0];
        push(+p[0], +p[1], +p[2], [c[0] * 0.5, c[1] * 0.5, c[2] * 0.5]);
      }
      for (const nr of neurons) {
        if (!nr || !Array.isArray(nr.xyz)) continue;
        push(+nr.xyz[0], +nr.xyz[1], +nr.xyz[2], GROUP_COLOR[groupOf(nr.type)] ?? GROUP_COLOR.optic);
      }
      this._gStatic.setDrawRange(0, n);
      posA.needsUpdate = true; colA.needsUpdate = true;
    } catch { /* keep previous anatomy */ }
  }

  /**
   * Per-frame activity: rates = Float32Array indexed like subset.neurons.
   * Only the top-MAX_ACTIVE rates are uploaded (partial buffer update).
   */
  setActivity(rates) {
    try {
      if (!rates || !this._anatomy) return;
      if (this.mode === 'webgl' && this._gLive) {
        const posA = this._gLive.getAttribute('position');
        const colA = this._gLive.getAttribute('color');
        const neurons = this._anatomy.neurons;
        // Partial selection: single pass, keep brightest (reservoir of size MAX_ACTIVE by threshold).
        let count = 0, thr = 0.25;
        for (let pass = 0; pass < 2 && count === 0; pass++) {
          count = 0;
          for (let i = 0; i < neurons.length && count < MAX_ACTIVE; i++) {
            const r = rates[i] ?? 0;
            if (r < thr) continue;
            const nr = neurons[i];
            if (!nr || !Array.isArray(nr.xyz)) continue;
            posA.setXYZ(count, +nr.xyz[0], +nr.xyz[1], +nr.xyz[2]);
            const base = GROUP_COLOR[groupOf(nr.type)] ?? [1, 1, 1];
            const b = 0.6 + 0.4 * Math.min(1, r);
            colA.setXYZ(count, Math.min(1, base[0] * b + 0.3), Math.min(1, base[1] * b + 0.3), Math.min(1, base[2] * b + 0.3));
            count++;
          }
          thr = 0.08; // second pass: looser threshold so dim states still show something
        }
        this._gLive.setDrawRange(0, count);
        posA.needsUpdate = true; colA.needsUpdate = true;
      } else {
        this._rates = rates; // 2D path reads on render()
      }
    } catch { /* skip frame */ }
  }

  render(t = 0) {
    try {
      if (this.mode === 'webgl' && this._renderer) {
        this._scene.rotation.y = Math.sin(t / 9000) * 0.08; // gentle idle sway
        this._renderer.render(this._scene, this._cam);
      } else if (this.mode === '2d' && this._ctx2d) {
        this._render2D(t);
      }
    } catch { /* render loop must never throw */ }
  }

  _render2D(t) {
    const ctx = this._ctx2d, cv = this.canvas;
    const W = cv.width, H = cv.height;
    ctx.fillStyle = '#05070b'; ctx.fillRect(0, 0, W, H);
    const A = this._anatomy; if (!A) return;
    const proj = (x, y, z) => this.view === 'frontal'
      ? [(x * 0.9 + 1) / 2 * W, (1 - (y * 0.75 + 0.5)) / 1.6 * H]
      : [(x * 0.9 + 1) / 2 * W, (1 - (z * 0.8 + 0.3)) / 1.4 * H];
    const stride = Math.max(1, Math.ceil(A.cloud.length / 2200));
    ctx.fillStyle = 'rgba(120,140,170,0.35)';
    for (let i = 0; i < A.cloud.length; i += stride) {
      const p = A.cloud[i]; if (!Array.isArray(p)) continue;
      const [px, py] = proj(+p[0], +p[1], +p[2]);
      ctx.fillRect(px, py, 1.2, 1.2);
    }
    if (this._rates) {
      const flick = 0.5 + 0.5 * Math.sin(t / 300);
      for (let i = 0; i < A.neurons.length; i++) {
        const r = this._rates[i] ?? 0; if (r < 0.08) continue;
        const nr = A.neurons[i]; if (!nr || !Array.isArray(nr.xyz)) continue;
        const [px, py] = proj(+nr.xyz[0], +nr.xyz[1], +nr.xyz[2]);
        const g = groupOf(nr.type);
        ctx.fillStyle = g === 'descending' ? `rgba(124,255,107,${0.4 + 0.6 * flick * Math.min(1, r)})`
          : g === 'modulatory' ? 'rgba(255,180,80,0.85)' : 'rgba(86,216,255,0.8)';
        ctx.fillRect(px, py, 2.4, 2.4);
      }
    }
  }

  dispose() {
    try {
      this._scene?.traverse?.((o) => { try { o.geometry?.dispose?.(); o.material?.dispose?.(); } catch {} });
      this._renderer?.dispose?.();
    } catch {}
    this.mode = 'unavailable';
  }
}
