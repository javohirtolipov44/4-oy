const unli = ["a", "e", "u", "i", "o"];

function countVowels(str) {
  let count = 0;
  str.split("").reduce((a, b) => {
    const res = unli.includes(b);
    if (res) {
      count++;
    }
  });
  return count;
}

console.log(countVowels("Hello World"));
