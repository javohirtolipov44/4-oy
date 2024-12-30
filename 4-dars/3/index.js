import fs from "node:fs";
import { join } from "node:path";

const rootPath = process.cwd();
const activePath = join(rootPath, "yangi_papka");

fs.mkdir(activePath, (err) => {
  console.error(err);
});
