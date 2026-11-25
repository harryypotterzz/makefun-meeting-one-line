// Make.fun bounty: "The Meeting That Should Have Been One Line"
// Writes a single sentence that could have replaced an entire pointless meeting to /output/entry.txt (Node.js standard library only).
import { mkdirSync, writeFileSync } from "node:fs";
const entry = "This meeting could have been a one-line email, but the calendar needed a hostage.";
mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", entry + "\n", "utf8");
