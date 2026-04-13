import test from "node:test";
import assert from "node:assert/strict";

import { normalizeText } from "../src/processor.js";

test("normalizes whitespace and casing", () => {
  assert.equal(normalizeText("  Hello   WORLD  "), "hello world");
});

test("preserves punctuation while normalizing spaces", () => {
  assert.equal(normalizeText("  Build,   Measure,   Learn! "), "build, measure, learn!");
});
