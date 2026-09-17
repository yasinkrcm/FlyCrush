import { useEffect, useMemo, useState } from 'react';
import { FlyController } from './controller';

// Single shared controller (module singleton: one brain connection per page).
let shared: FlyController | null = null;
export function getController(): FlyController {
  if (!shared) shared = new FlyController();
  return shared;
}

const UI_KEY = 'flycrush-ui';

function loadUi(ctl: { playing: boolean; speedMul: number; manual: boolean }) {
  try {
    const raw = localStorage.getItem(UI_KEY);
    if (!raw) return;
    const d = JSON.parse(raw);
    if (typeof d.playing === 'boolean') ctl.playing = d.playing;
    if (d.speedMul === 1 || d.speedMul === 2 || d.speedMul === 4) ctl.speedMul = d.speedMul;
    if (typeof d.manual === 'boolean') ctl.manual = d.manual;
  } catch { /* never */ }
}

/** Re-render host component whenever the controller emits panel state. */
export function useController(): FlyController {
  const ctl = useMemo(() => getController(), []);
  const [, bump] = useState(0);
  useEffect(() => {
    loadUi(ctl);
    const unsub = ctl.subscribe(() => bump((n) => n + 1));
    void ctl.boot();
    const poll = setInterval(() => {
      void ctl.poll();
      try {
        localStorage.setItem(UI_KEY, JSON.stringify({
          playing: ctl.playing, speedMul: ctl.speedMul, manual: ctl.manual,
        }));
      } catch { /* never */ }
    }, 2000);
    const onKey = (e: KeyboardEvent) => {
      try {
        // don't hijack keys when the user is on a button/input (Space activates buttons natively)
        const tag = (e.target as HTMLElement | null)?.tagName;
        if (tag === 'BUTTON' || tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || tag === 'A' || tag === 'SUMMARY') return;
        if (e.code === 'Space') { e.preventDefault(); ctl.playing = !ctl.playing; ctl.emit(); }
        else if (e.key === 'n' || e.key === 'N') { if (ctl.phase === 'idle' && ctl.snap && !ctl.snap.over) void ctl.flyStep(); }
        else if (e.key === 'm' || e.key === 'M') { ctl.manual = !ctl.manual; ctl.emit(); }
        else if (e.key === 'r' || e.key === 'R') { void ctl.newGame(false); }
        else if (e.key === 's' || e.key === 'S') { void ctl.save(); }
        else if (e.key === 'f' || e.key === 'F') { ctl.speedMul = ctl.speedMul >= 4 ? 1 : ctl.speedMul * 2; ctl.emit(); }
      } catch { /* keys never break the loop */ }
    };
    document.addEventListener('keydown', onKey);
    return () => { clearInterval(poll); document.removeEventListener('keydown', onKey); unsub(); };
  }, [ctl]);
  return ctl;
}
