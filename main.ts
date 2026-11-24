import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one sentence, at most 200 characters, pitching a startup that
// sounds like a joke until the payer and the reason show up in the same line.
const pitch =
  "We run tiny funerals for dead houseplants — $29, casket and eulogy included — and serial plant-killers pay gladly, because a dignified goodbye beats binning a fourth fern in shame.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), pitch, "utf8");
}

main();
