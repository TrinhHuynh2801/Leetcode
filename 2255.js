/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  let ans = 0;
  for (let word of words) {
    if (s.startsWith(word)) ans++;
  }
  return ans;
};
