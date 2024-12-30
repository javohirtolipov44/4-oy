import fs from "node:fs";
import { join } from "node:path";

const rootPath = process.cwd();
const activePath = join(rootPath, "test.txt");

fs.appendFile(activePath, "\nYangi qator", (err) => {
  try {
    console.log("Ma'lumot muvaffaqiyatli qo'shildi!");
  } catch (err) {
    console.log("Xatolik yuz berdi:", err);
  }
});

fs.readFile(activePath, "utf8", (err, data) => {
  try {
    console.log(data);
  } catch (err) {
    console.log("Xatolik yuz berdi:", err);
  }
});
