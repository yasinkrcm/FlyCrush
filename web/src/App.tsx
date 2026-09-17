import { useEffect } from 'react';
import {
  Brain, FlaskConical, Gauge, Pause, Play, RotateCcw, Save, StepForward, Zap,
} from 'lucide-react';
import { useController } from './useFly';
import { GameCanvas } from './components/GameCanvas';
import { Brain3D } from './components/Brain3D';
import {
  CnsPanel, CurvePanel, DopaPanel, EvalPanel, FlyAvatar, FlyCam,
  Inspector, MoveFeed, RejectedPanel, StatBadges,
} from './components/panels';

export default function App() {
  const ctl = useController();
  const s = ctl.snap;
  const job = s?.job;

  useEffect(() => {
    document.title = 'FLYCRUSH · a fruit-fly connectome plays candy crush';
  }, []);

  return (
    <div className="wrap">
      <header className="top">
        <div>
          <h1>FLY<span>CRUSH</span></h1>
          <p>a fruit-fly connectome plays candy crush</p>
          <div className="chain">REPLAY … chain {s?.chain ?? 0} · best {s?.best ?? 0}</div>
        </div>
        <div className="topr">
          <span className={`prov ${s?.prov?.includes('postgres') ? 'live' : ''}`}>
            <Brain size={13} /> {s?.prov ?? '…'}
          </span>
          {job?.running && (
            <span className="prov turbo">
              <Zap size={13} /> TURBO {job.done}/{job.total} · avg {job.avg.toFixed(0)}
            </span>
          )}
        </div>
      </header>

      {ctl.bootState === 'offline' && (
        <div className="boot-banner" role="alert">
          <b>backend offline</b> — panels will stay empty. Start it with <code>python -m backend.server</code> (see README), then reload.
        </div>
      )}

      <main className="grid">
        <section className="col-game">
          <div className="card gamecard">
            <GameCanvas ctl={ctl} />
            <div className="controls">
              <button className={ctl.playing ? '' : 'primary'} onClick={() => { ctl.playing = !ctl.playing; ctl.emit(); }}>
                {ctl.playing ? <Pause size={15} /> : <Play size={15} />}
                {ctl.playing ? 'pause' : 'play'}
              </button>
              <button onClick={() => { if (ctl.phase === 'idle' && s && !s.over) void ctl.flyStep(); }}>
                <StepForward size={15} /> step
              </button>
              <button className="accent" onClick={() => void ctl.turbo()}>
                <Zap size={15} /> turbo 200
              </button>
              <button className="ghost" onClick={() => void ctl.newGame(false)}>
                <RotateCcw size={15} /> reset
              </button>
              <button className="ghost" onClick={() => void ctl.save()}>
                <Save size={15} /> save
              </button>
              <button className="ghost" onClick={() => { ctl.speedMul = ctl.speedMul >= 4 ? 1 : ctl.speedMul * 2; ctl.emit(); }}>
                <Gauge size={15} /> ×{ctl.speedMul}
              </button>
              <button className="ghost" onClick={() => void ctl.newGame(true)}>
                <FlaskConical size={15} /> scratch
              </button>
            </div>
            <div className="hint">
              SPACE play · N step · M manual (click two candies) · R reset · S save · F speed · ⚡ turbo trains live
              {ctl.manual && <b> · MANUAL: click two adjacent candies</b>}
            </div>
          </div>

          <div className="card">
            <StatBadges s={s} />
            <FlyAvatar ctl={ctl} />
          </div>
          <MoveFeed s={s} />
          <EvalPanel report={ctl.report} />
        </section>

        <section className="col-side">
          <CnsPanel s={s} />
          <div className="row2">
            <DopaPanel s={s} />
            <FlyCam board={s?.board ?? null} />
          </div>
          <div className="card">
            <div className="card-h">
              <span className="card-t"><Brain size={14} /> Brain · MaleCNS view</span>
            </div>
            <Brain3D subset={ctl.subset} rates={s?.rates} />
          </div>
          <RejectedPanel s={s} />
          <CurvePanel s={s} />
          <Inspector s={s} subset={ctl.subset} />
        </section>
      </main>

      <footer>
        <span>{ctl.status}</span>
        <span className="dim">deterministic REINFORCE readout · frozen LIF wiring · no search in the decision path</span>
        <span className="dim">
          brain viewer pattern: <a href="https://github.com/cobanov/fly-connectome-template" target="_blank" rel="noreferrer">fly-connectome-template</a> ·
          list: <a href="https://github.com/cobanov/awesome-fly" target="_blank" rel="noreferrer">awesome-fly</a>
        </span>
      </footer>
    </div>
  );
}
