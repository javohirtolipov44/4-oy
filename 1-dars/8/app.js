function findLongestWord(str) {
  const arr = str.split(" ");
  const res = arr.reduce((a, b, index) => {
    let i = 0;
    if (b.length > a) {
      a = b.length;
      i = index;
    }
    return i;
  }, 0);
  return arr[res];
}
console.log(findLongestWord("I love programming"));
