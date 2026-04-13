# Bench Example

Reproducible local benchmark fixture for `zouroboros-bench` against `zouroboros-memory`.

## Install

```bash
npm install
```

## Files

- `package.json` — local install surface
- `facts.json` — deterministic seed facts
- `scripts/seed-memory.mjs` — initializes and populates `./data/bench-memory.db`

## Prepare memory

```bash
npm run seed
```

## Run one benchmark

```bash
ZOUROBOROS_MEMORY_DB=./data/bench-memory.db npx zouroboros-bench --benchmarks longmemeval --limit 25
```

## Generate a report

```bash
npx zouroboros-bench-report --runs ./data/runs/
```

## Environment

- `ZOUROBOROS_MEMORY_DB` to point bench runs at a specific sqlite file
- `OPENAI_API_KEY` if you enable the judge
- `OLLAMA_URL` if your memory setup uses embeddings
