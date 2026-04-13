import { mkdirSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { init, storeFact, shutdown } from "zouroboros-memory";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const dbPath = resolve(root, "data", "bench-memory.db");
const factsPath = resolve(root, "facts.json");

mkdirSync(resolve(root, "data"), { recursive: true });

const config = {
  enabled: true,
  dbPath,
  vectorEnabled: false,
  ollamaUrl: "http://localhost:11434",
  ollamaModel: "nomic-embed-text",
  autoCapture: false,
  captureIntervalMinutes: 30,
  graphBoost: true,
  hydeExpansion: false,
  decayConfig: { permanent: Infinity, long: 365, medium: 90, short: 30 }
};

init(config);

const facts = JSON.parse(readFileSync(factsPath, "utf8"));

for (const fact of facts) {
  await storeFact(fact, config);
}

shutdown();

console.log(dbPath);
