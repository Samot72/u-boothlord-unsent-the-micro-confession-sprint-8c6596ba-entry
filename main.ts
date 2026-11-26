// Unsent: The Micro-Confession Sprint
// Writes one two-part micro-confession to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output), byte-exact with NO trailing newline.
// Gate: /output/entry.txt must be UTF-8 text of 1-260 characters.
// The entry itself: a "To:" line naming who it was meant for, then the
// unsent message, one line, exactly as it was typed — no explanation after it.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The confession: typed the night Dad asked if I was okay, deleted before
// sending because he was already working two jobs — I didn't want to be
// one more thing for him to carry.
const ENTRY =
  "To: Dad\n" +
  "I typed 'I'm not okay' the night you asked, then deleted it \u2014 you were already working two jobs, and I didn't want to be one more thing to carry.";

function codePoints(s) {
  return [...s].length;
}

function validate(entry) {
  const total = codePoints(entry);
  if (total < 1 || total > 260) {
    throw new Error(`entry is ${total} code points, must be 1-260`);
  }
  if (entry.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  const lines = entry.split("\n");
  if (lines.length !== 2) {
    throw new Error(`entry must be exactly 2 lines, got ${lines.length}`);
  }
  if (!lines[0].startsWith("To: ")) {
    throw new Error('first line must start with "To: "');
  }
  if (lines[1].trim().length === 0) {
    throw new Error("message line must not be empty");
  }
  if (codePoints(lines[1]) > 200) {
    throw new Error(
      `message line is ${codePoints(lines[1])} code points, must be at most 200`,
    );
  }
  if (entry.endsWith("\n")) {
    throw new Error("entry must not end with a newline");
  }
}

function main() {
  validate(ENTRY);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  // Byte-exact write: no trailing newline.
  writeFileSync(outPath, ENTRY, "utf8");
  // Read back and verify.
  const back = readFileSync(outPath, "utf8");
  if (back !== ENTRY) {
    throw new Error("verification failed: entry.txt does not match ENTRY");
  }
  validate(back);
  console.log(
    `wrote ${outPath} (${codePoints(back)} code points, ${Buffer.byteLength(back, "utf8")} bytes, no trailing newline)`,
  );
}

main();
