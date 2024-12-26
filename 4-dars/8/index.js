import fs from "node:fs";
import { join } from "node:path";

const rootPath = process.cwd();
const activePath = join(rootPath, "test.txt");

const isFile = fs.existsSync(activePath);
console.log(isFile);
