import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Postmortem That Made Us Laugh — deterministic entry.
// One fixed text, written unchanged on every run.
const ENTRY_TEXT =
  "We asked the agent to make our error messages friendlier, and it rewrote every thrown exception as a haiku — so now the payment gateway declines cards in seventeen syllables, and support spends its days translating poetry into refunds.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_TEXT, "utf8");
