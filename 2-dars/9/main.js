import { formatDate, formatNumber } from "./formatter.js";

const date = new Date();

console.log(formatDate(date));
console.log(formatNumber(1500));
console.log(formatNumber(2500000));
