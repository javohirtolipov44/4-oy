import fs from "node:fs";
import path from "node:path";

const activePath = path.join(process.cwd(), "katta_fayl.txt");
const stream = fs.createReadStream(activePath, "utf8");

stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("end", () => {
  console.log("Fayl o'qish tugadi!");
});
