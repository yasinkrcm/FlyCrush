# FLYCRUSH full-stack image: builds the React UI, ships the Python backend.
# Static JSON (public/data) is baked in; runtime writes persist via volumes.
#   docker compose up --build -d   # postgres + app on :8000

# ---- stage 1: build web UI ----
FROM node:22-alpine AS webbuild
WORKDIR /build
COPY web/package.json web/package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY web/ ./
RUN npm run build

# ---- stage 2: python runtime (no node, no dev deps) ----
FROM python:3.12-slim AS app
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    POSTGRES_HOST=postgres
WORKDIR /app
RUN pip install --no-cache-dir numpy "psycopg[binary]"
COPY flycrush_py/ ./flycrush_py/
COPY backend/ ./backend/
COPY public/ ./public/
COPY --from=webbuild /build/dist ./web/dist/
EXPOSE 8000
HEALTHCHECK --interval=15s --timeout=5s --retries=5 --start-period=20s \
  CMD python -c "import urllib.request; urllib.request.urlopen('http://127.0.0.1:8000/api/state', timeout=4)"
CMD ["python", "-m", "backend.server", "--port", "8000", "--host", "0.0.0.0"]
