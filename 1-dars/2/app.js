function findMax(a, b) {
  if (a == b) {
    return "Sonlar teng";
  } else {
    let max = a;
    max = b > a ? (max = b) : a;
    return max;
  }
}
console.log(findMax(5, 10));
console.log(findMax(10, 10));
