# Swarm Gate Example

Use `zouroboros-swarm-gate` to decide whether a task should stay direct or escalate to a multi-agent workflow.

## Install

```bash
npm install -g zouroboros-swarm-gate
```

## Basic usage

```bash
swarm-gate "fix a typo on line 42"
swarm-gate --json "build a REST API with auth, tests, and deploy"
npx zouroboros-swarm-gate --json "ship a dashboard with API routes and CI"
```

## Typical interpretation

- `DIRECT` — do it inline
- `SUGGEST` — use judgment
- `SWARM` — task is broad enough to justify orchestration
- `FORCE_SWARM` — explicit override phrase like `use swarm`

## Example prompts

```text
DIRECT: "rename a function and update one test"
SUGGEST: "refactor the auth module and improve validation"
SWARM: "ship a dashboard with API routes, tests, CI, and deployment docs"
```
