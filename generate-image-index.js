import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, "src/assets/images");
const indexFile = path.join(imagesDir, "index.ts");

const exts = [".jpg", ".jpeg", ".png", ".svg", ".webp", ".gif"];

const files = fs
  .readdirSync(imagesDir)
  .filter((f) => exts.includes(path.extname(f)) && f !== "index.ts");

const imports = files
  .map((f) => {
    const varName = path
      .basename(f, path.extname(f))
      .replace(/[^a-zA-Z0-9_]/g, "_");
    return `import ${varName} from './${f}'`;
  })
  .join("\n");

const exports = `export {\n  ${files
  .map((f) => path.basename(f, path.extname(f)).replace(/[^a-zA-Z0-9_]/g, "_"))
  .join(",\n  ")}\n};\n`;

fs.writeFileSync(indexFile, `${imports}\n\n${exports}`);

console.log("Updated images index.ts");
fs.writeFileSync(indexFile, `${imports}\n\n${exports}`);

console.log("Updated images index.ts");
