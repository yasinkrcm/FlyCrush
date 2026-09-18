# FLYCRUSH

**A fruit-fly connectome plays Candy Crush.**

A simulated *Drosophila* brain — frozen spiking-LIF wiring plus a tiny trainable readout —
plays an 8×8 match-3 game against a Python game engine. Every move the fly makes is a real
decision that flows **eye → LIF spiking → decode → readout**, and every outcome trains the
readout online (deterministic REINFORCE + supervised imitation pretrain). No search anywhere
in the decision path — the game engine is used only as the environment.

The web UI shows both worlds side by side: the live game board with animations, and the
brain's internals — CNS decode state, PAM11 dopamine transients, what the fly eye actually
saw, a 3D connectome viewer with per-neuron firing rates, a spike raster, and the live
learning curve.

> The connectome data in `public/data/connectome-subset.json` is a **synthetic schematic**
> (layout + wiring inspired by the FlyEM/HHMI MaleCNS concept) — not measured anatomy.

## Architecture

```
web/               React 19 + TypeScript + three.js frontend (Vite)
backend/           stdlib-only HTTP server: serves the built UI + JSON API
flycrush_py/       game engine (board rules), LIF brain (eye/net/decode), RL readout,
                   offline trainer/evaluator, optional pygame desktop edition
public/data/       baked artifacts: connectome subset, readout weights, training report
scripts/           Node bakes that generate the connectome subset / v3 weights
```

One process serves everything: `backend/server.py` hosts the JSON API, a WebSocket
push channel (`/ws` — snapshots are pushed, no polling; commands travel both ways
with automatic HTTP fallback), and, if `web/dist/` exists, the built React app on
the same origin. Socket writes happen outside the game lock and client sockets are
time-bounded, so one stalled browser can never freeze the server.

## Quickstart (local)

```bash
# 1. Python side (numpy + optional pygame-ce + psycopg for persistence)
python -m venv .venv
./.venv/bin/pip install -r flycrush_py/requirements.txt "psycopg[binary]"

# 2. Web side
cd web && npm install && npm run build && cd ..

# 3. Run (http://127.0.0.1:8000)
./.venv/bin/python -m backend.server
```

Postgres is optional — without a database the app still runs fully, it just skips
checkpoint persistence. With Docker you get the full stack:

```bash
cp .env.example .env           # placeholder dev credentials are fine for local
docker compose up -d           # postgres only (hot files dev)
# or the everything-container:
docker compose --profile full up --build -d   # -> http://localhost:8000
```

Keyboard shortcuts: `SPACE` play/pause · `N` step · `M` manual (click two candies) ·
`R` reset · `S` save brain · `F` speed · `T`/turbo button trains 200 live episodes.

## Training pipeline

The shipped brain (`public/data/readout-weights.json`) is a **v5 cross-aware readout**
(25→32→4 swap scorer + 73→4 direction prior). Its "eyes" compare the color of each moving
tile against the tiles around where it would land — raw board sensing that makes swap
validity physically observable, no game-rule oracle. It is pretrained by supervised
imitation on planner-labeled valid swaps, then finetuned with online REINFORCE
(match score = dopamine), and keeps learning live while it plays.

```bash
# supervised pretrain + REINFORCE finetune (writes readout-weights.json + patches the report)
./.venv/bin/python -m flycrush_py.supervised_train --boards 8000 --epochs 12 --rl-episodes 800

# re-evaluate the CURRENT weights and regenerate training-report.json
./.venv/bin/python -m flycrush_py.evaluate

# (legacy v3 bake, JS twin)
node scripts/train-readout.mjs
```

Everything is seeded and deterministic: same seed → same weights → same report.

## Metrics glossary

All eval numbers are deterministic, computed over 120 fresh boards, 25 moves per game,
with eps=0.05 exploration during eval rollouts.

| Metric | Meaning |
|---|---|
| `eval120.random` | avg points/game, uniform over **all** on-board swaps — no rule knowledge (naive baseline) |
| `eval120.trained` | avg points/game, the trained readout |
| `eval120.randomValid` | avg points/game, uniform over **valid** pairs — needs game-rule search (strong baseline) |
| `eval120.firstFoundPlanner` | avg points/game, always plays the first valid move found (search baseline) |
| `eval120.trainedMatchesPerGame` | avg matches the trained readout forms per game |
| `oracle30` | avg points/game, best valid pair each move (30 boards) — the search ceiling |
| `supervised.hit120` | fraction of boards where a single greedy move forms a match |
| `supervised.avgScore120` | avg points of that single greedy move |

Honest by design: the report includes a negative control. The readout outplays the
first-found-move planner, but uniform random *valid* play and the best-of-search oracle
still score higher — search power remains real. The readout earns its label because every
one of its decisions flows through the frozen eye→LIF→readout pipeline with no oracle features.

## Persistence

- `POST /api/save` (and turbo checkpoints) write the readout to Postgres (`readouts` table)
  and to `public/data/readout-weights.json`.
- Game state is snapshot-persisted every ~2 s, so a page refresh restores the live board.
- Boot priority: newest valid checkpoint (DB vs baked JSON) wins.

## Security note

The API is **unauthenticated** by design (it's a research toy): anyone who can reach the
port can reset the game, trigger turbo (CPU burn), or overwrite the saved brain. Bind to
`127.0.0.1` locally (the default). If you deploy with `--profile full`, the container binds
`0.0.0.0` — put it behind a reverse proxy with auth, or keep it on a private network.
`.env` holds **placeholder dev credentials** (`fly`/`flypw`) — set real ones before any
deployment that matters.

## Credits

- **Built with [fly-connectome-template](https://github.com/cobanov/fly-connectome-template) by [Mert Cobanov](https://github.com/cobanov)** — real MaleCNS anatomy view + template license (see [web/public/TEMPLATE-LICENSE.txt](web/public/TEMPLATE-LICENSE.txt))
- [cobanov/awesome-fly](https://github.com/cobanov/awesome-fly) — fly neuroresources list
- Connectome concept inspired by FlyEM/HHMI MaleCNS (CC BY 4.0) — the shipped *game* brain is synthetic; the atlas view uses the real MaleCNS v1.0 soma dataset (see [web/public/data/brain-atlas/NOTICE.md](web/public/data/brain-atlas/NOTICE.md))

## License

[PolyForm Noncommercial 1.0.0](LICENSE) — free for everyone to use, study, modify, and
share for **noncommercial purposes** (personal projects, research, education, hobby).
Selling the software or using it commercially requires a separate license from the
author. In short: *kullanmak serbest, satmak yasak.*
