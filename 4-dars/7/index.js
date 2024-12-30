import fs from "node:fs";
import { join } from "node:path";

const rootPath = process.cwd();
const activePath = join(rootPath, "yangi_papka");

fs.readdir(activePath, (err, data) => {
  try {
    console.log(data);
  } catch (err) {
    console.log("Xatolik yuz berdi:", err);
  }
});
