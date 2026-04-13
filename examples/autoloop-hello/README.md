# Autoloop Example

Runnable starter for `zouroboros-autoloop` with a real target file, tests, and metric extraction.

## Install

```bash
npm install
```

## Files

- `src/processor.js` — target file autoloop edits
- `test/processor.test.js` — behavior guardrails
- `scripts/measure.mjs` — writes `metrics.json` with the current runtime metric
- `program.md` — autoloop spec pointed at the actual sample files

## Run

```bash
git init
git add .
git commit -m "baseline"
autoloop --program ./program.md --executor "openclaw ask"
```

## Notes

- Run inside a git repo
- The metric is `duration_ms` written to `metrics.json`
- `npm test` remains part of the run command, so regressions fail fast
