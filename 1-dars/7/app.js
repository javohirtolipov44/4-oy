function getPositiveNumbers(arr) {
  return arr.reduce((a, b) => {
    if (b > 0) {
      a.push(b);
    }
    return a;
  }, []);
}
console.log(getPositiveNumbers([-1, 2, -3, 4, 5, -9]));
