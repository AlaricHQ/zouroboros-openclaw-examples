# Memory Example

Minimal but complete local setup for `zouroboros-memory` as an OpenClaw MCP server, including a starter `SKILL.md` and seed data.

## Install

```bash
npm install
```

## Files

- `.mcp.json` — OpenClaw MCP server definition
- `SKILL.md` — sample skill that assumes the memory MCP server is available
- `seed-facts.json` — starter facts for a local database
- `package.json` — local install surface for the example

## Initialize and seed the database

```bash
npx zouroboros-memory init --db-path ./data/memory.db
npx zouroboros-memory batch-store ./seed-facts.json --db-path ./data/memory.db
npx zouroboros-memory search "concise output"
```

## OpenClaw MCP config

Copy `.mcp.json` into your project root or merge the `memory` server block into your existing MCP config.

The included config uses a project-local database at `./data/memory.db`.

## Skill wiring

The included `SKILL.md` is a concrete example of how an OpenClaw skill can rely on the memory MCP server for recall before it answers.

## Optional vector search

If Ollama is running locally, set:

```bash
export OLLAMA_URL=http://localhost:11434
```

Then use hybrid search:

```bash
npx zouroboros-memory hybrid "what does the user prefer?" --db-path ./data/memory.db
```
