import path from "node:path";

const filePath = "papka/subfolder/rasm.jpg";

const dirName = path.dirname(filePath);

console.log("Fayl papkasi:", dirName);
