# Program: autoloop-hello

## Objective

Reduce the runtime of the text normalization utility without changing its output.

## Metric
- **name**: duration_ms
- **direction**: lower_is_better
- **extract**: `node -e "const fs=require('fs'); console.log(JSON.parse(fs.readFileSync('metrics.json','utf8')).duration_ms)"`

## Setup

```bash
npm install
```

## Target File
`./src/processor.js`

## Run Command

```bash
npm test && node ./scripts/measure.mjs
```

## Read-Only Files

- scripts/measure.mjs
- test/processor.test.js
- package.json

## Constraints
- **Time budget per run**: 2 minutes
- **Max experiments**: 25
- **Max duration**: 2 hours
- **Max cost (USD)**: 5.00

## Simplicity Criterion

Prefer smaller, clearer changes. Removing unnecessary work is better than adding complexity.

## Stagnation
- **Threshold**: 5 experiments with no improvement triggers radical exploration
- **Double threshold**: 10 experiments combines best past approaches
- **Triple threshold**: 15 experiments auto-stops with summary report

## Notes

The current implementation is intentionally inefficient. Improve only the target file and keep output identical for the tests.
