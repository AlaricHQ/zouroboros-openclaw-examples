import { writeFileSync } from "node:fs";
import { performance } from "node:perf_hooks";

import { normalizeText } from "../src/processor.js";

const samples = Array.from({ length: 1000 }, (_, index) => `   Sample   Input   ${index}   `);

const startedAt = performance.now();

for (const sample of samples) {
  normalizeText(sample);
}

const durationMs = Number((performance.now() - startedAt).toFixed(3));

writeFileSync(
  new URL("../metrics.json", import.meta.url),
  JSON.stringify({ duration_ms: durationMs }, null, 2) + "\n"
);

console.log(durationMs);
