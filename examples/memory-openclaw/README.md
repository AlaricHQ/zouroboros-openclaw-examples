# Memory Example

Minimal local setup for `zouroboros-memory` as an OpenClaw MCP server.

## Install

```bash
npm install zouroboros-memory
```

## Initialize the database

```bash
npx zouroboros-memory init
```

This creates the default database under your home directory unless you override `ZOUROBOROS_MEMORY_DB`.

## Store and search facts

```bash
npx zouroboros-memory store --entity user --key preference --value "prefers concise output" --decay permanent
npx zouroboros-memory search "concise output"
```

## OpenClaw MCP config

Copy `.mcp.json` into your project root or merge the `memory` server block into your existing MCP config.

## Optional vector search

If Ollama is running locally, set:

```bash
export OLLAMA_URL=http://localhost:11434
```

Then use hybrid search:

```bash
npx zouroboros-memory hybrid "what does the user prefer?"
```
