import fs from "node:fs";
import path from "node:path";

const activePath = path.join(process.cwd(), "katta_fayl.txt");
const writeStream = fs.createWriteStream(activePath, "utf8");

console.log("Matnni kiriting (yuborish uchun CTRL+C bosiladi):");

process.stdin.on("data", (input) => {
  writeStream.write(input);
});

process.stdin.on("end", () => {
  console.log("Yozish tugadi!");
  writeStream.end();
});
