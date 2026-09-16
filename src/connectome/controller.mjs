/**
 * controller.mjs — Logic controller: sensory -> LIF -> decode -> game.
 *
 * Framework-free. The game owns the board; the controller only READS it
 * (boardFn) and emits ADVISORY decisions via onDecision. Every stage is
 * try/catch-isolated: a neural bug can never corrupt board state.
 *
 * Usage:
 *   import { createController } from './controller.mjs';
 *   const ctl = createController({
 *     subset,                       // validated JSON doc (or null -> fallback)
 *     boardFn: () => game.board,    // () => 8x8 matrix
 *     findValidMove: (b) => ...,    // pure game logic, for fallback planner
 *     onDecision: ({L,R,dir}) => game.tryFlyMove(L,R,dir),
 *     onEvent: (e) => showBanner(e),// {type:'fallback'|'error'|'reward'|...}
 *     tickHz: 10,
 *   });
 *   ctl.start(); ctl.notifyReward(removedCells); ctl.getState(); ctl.stop();
 */
import { createEye } from './sensory.mjs';
import { createNetwork, stepNetwork, decodeMotor, rewardDrive, GATE_DEFAULT } from './lif.mjs';
import { createFallbackPlan } from './trace.mjs';

export function createController(opts = {}) {
  const {
    subset = null,
    boardFn = () => null,
    findValidMove = null,
    onDecision = () => {},
    onEvent = () => {},
    tickHz = 10,
    gateThr = GATE_DEFAULT,
  } = opts;

  const eye = createEye();
  const fallback = createFallbackPlan(findValidMove);
  const live = subset ? createNetwork(subset) : null;
  let pamDrive = 0, timer = null, acc = 0, last = 0;
  let mode = live ? 'live' : 'fallback'; // 'live' | 'fallback'
  let lastOut = { L: 0, R: 0, gate: 0, dir: 'up', dirs: { up: 0, down: 0, left: 0, right: 0 }, committed: false };
  let pamHz = 0, spikes = 0, ticks = 0;

  if (!live) {
    try { onEvent({ type: 'fallback', reason: 'no-subset', provenance: fallback.provenance }); } catch {}
  }

  function dropToFallback(reason) {
    if (mode === 'fallback') return;
    mode = 'fallback';
    try { onEvent({ type: 'fallback', reason, provenance: fallback.provenance }); } catch {}
  }

  function tick() {
    ticks++;
    let board = null;
    try { board = boardFn(); } catch { board = null; }
    if (!board) return;

    // 1) sensory (guarded)
    let input = null, contrast = null;
    try {
      const obs = eye.observe(board);
      input = obs.vector; contrast = obs.contrast;
    } catch { dropToFallback('sensory-error'); }

    // 2) neural step + decode (guarded)
    if (mode === 'live' && live && input) {
      try {
        pamDrive *= 0.9;
        spikes = stepNetwork(live, input, pamDrive);
        pamHz = live.pamHz ?? 0;
        lastOut = decodeMotor(live, gateThr);
        lastOut.pamHz = +pamHz.toFixed(1);
        lastOut.live = true;
      } catch {
        dropToFallback('lif-error');
      }
    }
    if (mode === 'fallback') {
      try {
        pamHz = Math.max(0, pamHz - 4);
        const f = fallback.next(board);
        lastOut = { ...f, pamHz: +pamHz.toFixed(1), live: false };
        if (f.dead) { try { onEvent({ type: 'dead-board' }); } catch {} }
      } catch { /* hold lastOut */ }
    }
    lastOut.contrast = contrast;

    // 3) gate edge -> advisory decision (game re-validates!)
    if (lastOut.committed && !tick._held) {
      tick._held = true;
      try {
        if (mode === 'fallback' && lastOut.move) {
          onDecision({ L: lastOut.move.c1, R: lastOut.move.r1, dir: lastOut.dir, via: 'fallback', move: lastOut.move });
        } else {
          onDecision({ L: lastOut.L, R: lastOut.R, dir: lastOut.dir, via: mode });
        }
      } catch { /* game callback must never break the loop */ }
      setTimeout(() => { tick._held = false; }, Math.max(200, 1000 / tickHz));
    }
  }

  function loop(t) {
    if (!timer) return;
    timer = requestAnimationFrame(loop);
    if (!last) last = t;
    let dt = (t - last) / 1000; last = t;
    if (!(dt >= 0) || dt > 0.25) dt = 0.025;
    acc += dt;
    const step = 1 / tickHz;
    let n = 0;
    while (acc >= step && n < 3) { try { tick(); } catch {} acc -= step; n++; }
    if (n === 3) acc = 0;
  }

  return {
    mode: () => mode,
    provenance: () => (mode === 'live' ? 'static-json' : fallback.provenance),
    start() {
      if (timer) return;
      try {
        last = 0; acc = 0;
        timer = requestAnimationFrame(loop);
      } catch { timer = null; }
    },
    stop() { timer = null; },
    stepOnce() { try { tick(); } catch {} }, // deterministic stepping for tests/demos
    notifyReward(removedCells) {
      try {
        const d = rewardDrive(removedCells);
        pamDrive = Math.min(2, pamDrive + d);
        if (mode === 'fallback') pamHz = Math.min(120, pamHz + (removedCells >= 5 ? 90 : removedCells === 4 ? 60 : 38));
        onEvent({ type: 'reward', removed: removedCells, pamHz: +pamHz.toFixed(1) });
      } catch {}
    },
    getState() {
      return { ...lastOut, pamHz: +pamHz.toFixed(1), spikes, ticks, mode, live: mode === 'live' };
    },
  };
}
