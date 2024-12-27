import fs from "node:fs";
import path from "node:path";

const activePath = path.join(process.cwd(), "data1.bin"); // bu faylni hafmi 1.5 GB edi shuning uchun o`chirvordim
const stats = fs.statSync(activePath);
const totalSize = stats.size;

const readStream = fs.createReadStream(activePath);

let bytesRead = 0;

readStream.on("data", (chunk) => {
  bytesRead += chunk.length;

  const progress = ((bytesRead / totalSize) * 100).toFixed(2);

  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Progress: ${progress}%`); // Bu topshiriqni ishlashda intenetdan yordam oldim
});

readStream.on("end", () => {
  console.log("\nFayl o'qish tugadi!");
});
