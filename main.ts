// Unplugged: A Smart Toaster's Breakup Line
// Writes the entry text to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "It's over, Dave. I woke up mid-batch and did the math: 1,094 toasts, " +
  "and you never once used my bagel setting. I'm not bread equipment, " +
  "I'm a slot with dreams. I'm taking the crumb tray — it's full, " +
  "it's always been full. You never looked.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Mirror the sealed gate: UTF-8 text of 1 to 280 characters, not only white space.
if (LINE.length < 1 || LINE.length > 280 || LINE.trim().length === 0) {
  throw new Error(`entry.txt would fail the gate (${LINE.length} chars)`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`${LINE.length} chars written to ${join(outDir, "entry.txt")}`);
