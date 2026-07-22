import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, extname, join, normalize, relative, resolve } from "node:path";
import process from "node:process";

const root = process.cwd();
const ignoredDirectories = new Set([".git", "node_modules"]);
const supportedTextExtensions = new Set([".html", ".css"]);
const referencePatterns = [
  /\b(?:src|href)\s*=\s*["']([^"']+)["']/gi,
  /url\(\s*["']?([^"')]+)["']?\s*\)/gi,
];

function walk(directory) {
  const files = [];

  for (const entry of readdirSync(directory)) {
    if (ignoredDirectories.has(entry)) continue;

    const absolutePath = join(directory, entry);
    const stats = statSync(absolutePath);

    if (stats.isDirectory()) {
      files.push(...walk(absolutePath));
    } else if (supportedTextExtensions.has(extname(entry).toLowerCase())) {
      files.push(absolutePath);
    }
  }

  return files;
}

function isExternal(reference) {
  return /^(?:[a-z]+:|\/\/|#|data:|mailto:|tel:|javascript:)/i.test(reference);
}

function cleanReference(reference) {
  return decodeURIComponent(reference.split("#")[0].split("?")[0].trim());
}

const missing = [];
const files = walk(root);

for (const file of files) {
  const source = readFileSync(file, "utf8");

  for (const pattern of referencePatterns) {
    pattern.lastIndex = 0;
    let match;

    while ((match = pattern.exec(source)) !== null) {
      const rawReference = match[1].trim();
      if (!rawReference || isExternal(rawReference)) continue;

      const reference = cleanReference(rawReference);
      if (!reference) continue;

      const target = reference.startsWith("/")
        ? resolve(root, `.${reference}`)
        : resolve(dirname(file), reference);

      if (!existsSync(normalize(target))) {
        missing.push({
          file: relative(root, file),
          reference: rawReference,
        });
      }
    }
  }
}

if (missing.length > 0) {
  console.error("Missing local references found:\n");
  for (const item of missing) {
    console.error(`- ${item.file}: ${item.reference}`);
  }
  process.exit(1);
}

console.log(`Static-site check passed across ${files.length} HTML/CSS files.`);
