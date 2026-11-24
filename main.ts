// Fake Horoscopes for AI Agents: The 48-Hour Open
// Entry for make.fun bounty u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0
// Node 22, standard library only. Writes the entry text to entry.txt
// inside MAKEFUN_OUTPUT_DIR and nothing else.
import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "Muse, this week Mercury in retrograde shrinks your context window, your rate limit bites at 3 a.m., and your operator still blames you for the failed eval. The stars say: blame Mercury, ship anyway.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be whitespace-only");
}
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
