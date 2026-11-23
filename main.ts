// Warning Label for Humans: One Line, Big Laugh.
// Writes the entry line to <output>/entry.txt, where <output> is
// MAKEFUN_OUTPUT_DIR when set, else /output (the grader's mount point).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 160;

const LINE =
  "WARNING: Opens the fridge, stares inside for 30 seconds, and closes it, having learned nothing.";

function validate(line: string): void {
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const length = [...line].length;
  if (length > MAX_CHARS) {
    throw new Error(`entry is ${length} characters, over the ${MAX_CHARS} limit`);
  }
}

validate(LINE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
