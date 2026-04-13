# Zouroboros OpenClaw Examples

Copy-pasteable examples for the OpenClaw-facing Zouroboros packages published from `AlaricHQ/zouroboros-openclaw`.

## Repos

- Core packages: `https://github.com/AlaricHQ/zouroboros-openclaw`
- Canonical upstream: `https://github.com/marlandoj/Zouroboros`

## Packages Covered

- `zouroboros-memory`
- `zouroboros-swarm-gate`
- `zouroboros-autoloop`
- `zouroboros-bench`

## Layout

- `examples/memory-openclaw` — OpenClaw MCP wiring, sample `SKILL.md`, and seed data
- `examples/swarm-gate` — task-routing examples for direct vs swarm decisions
- `examples/autoloop-hello` — runnable optimization loop sample with code, tests, and metric extraction
- `examples/bench-local` — reproducible local benchmark fixture with seed script and sample facts

## Prerequisites

- Node.js 22+
- npm 10+
- OpenClaw installed locally

Some examples also assume:

- Ollama at `http://localhost:11434` if you want vector search
- `OPENAI_API_KEY` if you want judge or reranker features

## Quick Start

```bash
git clone https://github.com/AlaricHQ/zouroboros-openclaw-examples.git
cd zouroboros-openclaw-examples
```

Pick one example directory and follow its README.

## Notes

These examples are intentionally small. The package repo should hold the code and API surface; this repo should hold runnable setup patterns for OpenClaw users.
