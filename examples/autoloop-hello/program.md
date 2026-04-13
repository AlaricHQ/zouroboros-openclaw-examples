# Program

## Objective

Improve a small text-processing utility so that the test suite passes faster without changing output behavior.

## Target File

`./src/processor.ts`

## Metric

Lower total runtime from the command below while keeping exit code 0.

## Run Command

```bash
npm test -- --runInBand
```

## Constraints

- Preserve behavior
- Do not change public API names
- Keep edits limited to the target file unless the executor explains why a second file is required
- Revert any change that makes the metric worse
