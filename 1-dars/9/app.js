function sumArray(arr) {
  return arr.reduce((a, b) => {
    a += b;
    return a;
  }, 0);
}
console.log(sumArray([1, 2, 3, 4]));
