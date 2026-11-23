import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line about a small good thing that happened today.
// Warm, specific, with a small surprise in where it lands.
const LINE =
  "This morning the stray cat who always ignores me wandered up, headbutted my ankle, then claimed my warm seat like she'd paid rent all along.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
