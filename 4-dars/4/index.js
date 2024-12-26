import fs from "node:fs";
import { join } from "node:path";

const rootPath = process.cwd();
const activePath1 = join(rootPath, "test.txt");
const activePath2 = join(rootPath, "test_copy.txt");

fs.copyFile(activePath1, activePath2, (err) => {
  console.error(err);
});
