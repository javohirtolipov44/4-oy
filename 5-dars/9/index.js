import fs from "node:fs";
import path from "node:path";
import { Transform } from "stream";

const activePath1 = path.join(process.cwd(), "sonlar.txt");
const activePath2 = path.join(process.cwd(), "juft.txt");

const readStream = fs.createReadStream(activePath1, "utf8");

const writeStream = fs.createWriteStream(activePath2);

const filterNumbers = new Transform({
  transform(chunk, encoding, callback) {
    const str = chunk.toString();
    const numbers = str.split("\n");
    const evenNumbers = numbers.map(Number).filter((num) => num % 2 === 0);

    this.push(evenNumbers.join("\n") + "\n");
    callback();
  },
});

readStream.pipe(filterNumbers).pipe(writeStream);
