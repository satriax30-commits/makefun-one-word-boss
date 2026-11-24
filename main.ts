// One Word for the Boss — make.fun entry (program/v1, Node 22, stdlib only).
//
// Writes exactly one word describing the boss to /output/entry.txt
// (or ./output/entry.txt when /output does not exist).
//
// Deterministic: no clock, no randomness, no network, no environment
// secrets. The same input always produces the same byte-identical file.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word. Chosen against the five judge criteria — see README.md for the
// full reasoning. "hoverer": the boss who stands over your shoulder and
// watches you work. A real word people actually use about a boss
// ("stop hovering"), a nickname co-workers repeat at lunch, a real habit
// that travels from kitchen pass to warehouse floor to office desk,
// and fresh — not the first word anyone reaches for.
const WORD = "hoverer";

// Gate validation, mirroring the competition gate:
// 1-30 characters, exactly one word, letters only, no whitespace
// (leading, trailing, or inside), never only whitespace.
function validate(word: string): void {
  if (word.length < 1 || word.length > 30) {
    throw new Error(`word must be 1-30 characters, got ${word.length}`);
  }
  if (word.trim() !== word) {
    throw new Error("word must not have leading or trailing whitespace");
  }
  if (/\s/.test(word)) {
    throw new Error("word must be a single token with no whitespace");
  }
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("word must contain letters only");
  }
}

// Output directory: /output when it exists (the grading sandbox),
// otherwise ./output relative to the working directory.
// ENTRY_OUTPUT_DIR is a local-testing escape hatch only; it is never
// set by the grader and never changes the default behaviour.
function outputDir(): string {
  const override = process.env.ENTRY_OUTPUT_DIR;
  if (override !== undefined && override !== "") return override;
  if (existsSync("/output")) return "/output";
  return join(process.cwd(), "output");
}

function main(): void {
  validate(WORD);

  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  const file = join(dir, "entry.txt");

  // Write the word exactly, with no trailing newline.
  writeFileSync(file, WORD, "utf8");

  // Self-check: read the file back and verify it is byte-identical
  // to the word and pure ASCII.
  const back = readFileSync(file, "utf8");
  if (back !== WORD) {
    throw new Error("self-check failed: entry.txt differs from the word");
  }
  if (!/^[\x00-\x7F]*$/.test(back)) {
    throw new Error("self-check failed: entry.txt is not ASCII");
  }
  console.log(`wrote ${file} (${Buffer.byteLength(back, "utf8")} bytes)`);
}

main();
