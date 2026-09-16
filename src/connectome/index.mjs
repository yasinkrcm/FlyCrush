/**
 * src/connectome/index.mjs — Barrel for VANILLA consumers.
 * (React bindings live under react/ and are imported directly, so plain
 *  <script type="module"> pages never resolve the 'react' peer dep.)
 *
 * Integration (no bundler needed):
 *   <script type="module">
 *     import { loadSubset, createController, mountCnsPanel, BrainRenderer }
 *       from './src/connectome/index.mjs';
 *     const { ok, data } = await loadSubset({ url: './public/data/connectome-subset.json' });
 *     const ctl = createController({ subset: ok ? data : null, boardFn, findValidMove, onDecision });
 *   </script>
 */
export { createEye, boardToRegions, regionContrast, buildInputVector, BOARD_N, REGION_N, INPUT_DIM } from './sensory.mjs';
export { createNetwork, stepNetwork, decodeMotor, rewardDrive, GATE_DEFAULT } from './lif.mjs';
export { loadSubset, validateSubset, createFallbackPlan, DEFAULT_URL } from './trace.mjs';
export { createController } from './controller.mjs';
export { mountCnsPanel, mountDopaPanel, mountFlyCam } from './panels.mjs';
export { BrainRenderer } from './three/BrainRenderer.mjs';
