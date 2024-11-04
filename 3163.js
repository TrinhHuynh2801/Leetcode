/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
  if (word.length == 1) return 1 + word[0];
  let count = 1;
  let ans = "";
  let temp = word[0];
  for (let i = 1; i < word.length; i++) {
    if (word[i] != temp || count == 9) {
      ans += count + temp;
      temp = word[i];
      count = 1;
    } else {
      count++;
    }
  }
  return ans + count + temp;
};

console.log(compressedString("aaaaaaaaaaaaaabb"));
