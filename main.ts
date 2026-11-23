// Warning Label for Humans: One Line, Big Laugh.
// Writes the entry line to <output>/entry.txt, where <output> is
// MAKEFUN_OUTPUT_DIR when set, else /output (the grader's mount point).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "WARNING: Opens the fridge, stares inside for 30 seconds, and closes it, having learned nothing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
if ([...LINE].length > 160) {
  throw new Error(
    `entry is ${[...LINE].length} characters, over the 160 limit`,
  );
}
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
