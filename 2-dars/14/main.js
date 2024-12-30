import { toUpperCase, toLowerCase, formatDate, max, min } from "./utils.js";

const text = "hello, world!";
console.log("Katta harflar:", toUpperCase(text));
console.log("Kichik harflar:", toLowerCase(text));

const currentDate = new Date();
console.log("Bugungi sana:", formatDate(currentDate));

const numbers = [5, 3, 8, 1, 2, 9];
console.log("Eng katta son:", max(numbers));
console.log("Eng kichik son:", min(numbers));
