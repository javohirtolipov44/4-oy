import fs from "node:fs";
import { join } from "node:path";

const rootPath = process.cwd();
const activePath1 = join(rootPath, "test.txt");
const activePath2 = join(rootPath, "yangi_papka", "test.txt");

fs.rename(activePath1, activePath2, (err) => {
  if (err) {
    console.log("Faylni ko'chirishda xatolik:", err);
  } else {
    console.log("Fayl muvaffaqiyatli ko'chirildi!");
  }
});
