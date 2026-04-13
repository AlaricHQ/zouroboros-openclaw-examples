# Bench Example

Benchmark `zouroboros-memory` locally with `zouroboros-bench`.

## Install

```bash
npm install -D zouroboros-bench
npm install zouroboros-memory
```

## Prepare memory

```bash
npx zouroboros-memory init
npx zouroboros-memory store --entity project --key stack --value "node typescript sqlite" --decay long
```

## Run one benchmark

```bash
npx zouroboros-bench --benchmarks longmemeval --limit 25
```

## Generate a report

```bash
npx zouroboros-bench-report --runs ./data/runs/
```

## Environment

- `ZOUROBOROS_MEMORY_DB` to point bench runs at a specific sqlite file
- `OPENAI_API_KEY` if you enable the judge
- `OLLAMA_URL` if your memory setup uses embeddings
