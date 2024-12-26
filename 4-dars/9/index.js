import fs from "node:fs";
import { join } from "node:path";

const rootPath = process.cwd();
const activePath = join(rootPath, "test.txt");

fs.stat(activePath, (err, data) => {
  try {
    const createdDate = new Date(data.birthtime);
    const formattedDate = createdDate.toLocaleString("uz-UZ");
    console.log("Hajmi: ", data.size, "bit");
    console.log("Yaratilgan vaqti: ", formattedDate);
  } catch (err) {
    console.log("Xatolik yuz berdi:", err);
  }
});
