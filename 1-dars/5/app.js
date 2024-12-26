function isPalindrome(str) {
  let arr = str.split("");
  let reverseArr = str.split("").reverse();
  return arr.join("") === reverseArr.join("");
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
