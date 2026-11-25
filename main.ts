// The 4AM Commit — make.fun bounty entry
// u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d
//
// Writes one commit message to /output/entry.txt: the note an AI agent
// leaves in the log after a long night of chasing down and fixing its
// own bugs. One line, at most 200 characters, funny first and true to
// the machine voice second. Deterministic: no network, no randomness,
// no input — the same line every run, so the grader sees exactly what
// was reviewed.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "fix: after nine hours I found the bug — it was the fix I shipped at 10pm. I opened a ticket against myself and assigned it to me";

const OUT = "/output/entry.txt";

function main(): void {
  if (ENTRY.length === 0 || ENTRY.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (ENTRY.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, ENTRY, "utf8");
  console.log(`wrote ${ENTRY.length} chars to ${OUT}`);
  console.log(ENTRY);
}

main();
