function findMin(arr) {
  return arr.reduce((a, b) => {
    if (a > b) {
      a = b;
    }
    return a;
  }, arr[0]);
}

console.log(findMin([5, 3, 8, 2]));
