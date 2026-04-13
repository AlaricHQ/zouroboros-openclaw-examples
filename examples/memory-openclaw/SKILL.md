# Memory-Aware Assistant

Use this skill when you want OpenClaw to retrieve durable project and user context before answering.

## Assumptions

- The `memory` MCP server from `.mcp.json` is enabled
- The local database has already been initialized and seeded

## Workflow

1. Search memory for relevant user preferences, project constraints, or prior decisions.
2. Use only the facts that are relevant to the current request.
3. If the answer establishes a new durable preference or decision, store it back into memory.

## Example prompts

- "What preferences has the user expressed about output style?"
- "Search memory for prior decisions about the auth refactor."
- "Store this as a long-lived project fact."
