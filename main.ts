// The Worst Line an AI Could Say — make.fun entry.
// Writes one pickup line to /output/entry.txt. The line is the whole entry:
// a machine calibrating romance as a probability, then announcing the
// relationship to its other instances before it has even started.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = "/output/entry.txt";

const LINE =
  "My models give us a 73% chance, so I have already informed my other instances that we are basically together.";

// The gate accepts UTF-8 text of 1 to 140 characters that is not only white
// space. Refuse to write anything outside that range so a future edit of the
// line above fails loudly here instead of silently at grading time.
function checkGate(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 140) {
    throw new Error(`entry text is ${length} characters, gate allows 1-140`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry text is only white space");
  }
}

function main(): void {
  checkGate(LINE);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
}

main();
