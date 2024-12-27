import fs from "node:fs";
import path from "node:path";

const activePath1 = path.join(process.cwd(), "video.mp4");
const readStream = fs.createReadStream(activePath1);
const activePath2 = path.join(process.cwd(), "video_copy.mp4");
const writeStream = fs.createWriteStream(activePath2);

readStream.pipe(writeStream);

writeStream.on("finish", () => {
  console.log("Fayl muvaffaqiyatli nusxalandi!");
});
