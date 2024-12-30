import { juftSon, toqSon, ikkiXonaliSonlar } from "./filters.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const evenNumbers = juftSon(numbers);
console.log("Juft sonlar:", evenNumbers);

const oddNumbers = toqSon(numbers);
console.log("Toq sonlar:", oddNumbers);

const greaterThanTen = ikkiXonaliSonlar(numbers);
console.log("10 dan katta sonlar:", greaterThanTen);
