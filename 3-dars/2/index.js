import os from "node:os";

const totalMem = os.totalmem();

const totalMemory = (totalMem / (1024 * 1024 * 1024)).toFixed(1);

console.log(`Kompyuteringizning umumiy RAM xotirasi: ${totalMemory} GB`);
