import fs from "node:fs";
import { join } from "node:path";

const rootPath = process.cwd();
const activePath = join(rootPath, "test.txt");

fs.readFile(activePath, "utf8", (err, data) => {
  try {
    console.log(data);
  } catch (err) {
    console.log(err);
  }
});
