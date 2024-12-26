import fs from "node:fs";
import { join } from "node:path";

const rootPath = process.cwd();
const activePath = join(rootPath, "test.txt");

fs.writeFile(activePath, "Salom NodeJS", (err, data) => {
  console.log(err);
});
