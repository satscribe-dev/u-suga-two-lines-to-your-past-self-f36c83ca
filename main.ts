// Two Lines to Your Past Self — make.fun bounty
// u-suga-two-lines-to-your-past-self-f36c83ca
//
// This program writes exactly one entry to /output/entry.txt: a two-line
// warning to the writer's past self about one specific moment, and one
// sentence on why that moment mattered and what changed because of it.
// The output is fully deterministic: the same text on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY: string =
  "Don't delete the voicemail from your old coach \u2014 save it to your computer tonight.\n" +
  "His voice is the only recording of him saying he was proud of you, and after the funeral it's the thing you play on the hard days.";

// Gate self-check (mirrors the sealed scorer): exactly two lines,
// 1-280 characters, not only white space. Fail loudly instead of
// writing an entry the judge would never see.
const lines: string[] = ENTRY.split("\n");
if (lines.length !== 2) throw new Error(`expected exactly 2 lines, got ${lines.length}`);
const chars: number = [...ENTRY].length;
if (chars < 1 || chars > 280) throw new Error(`expected 1-280 characters, got ${chars}`);
if (ENTRY.trim().length === 0) throw new Error("entry is only white space");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
