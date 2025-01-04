/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  const left = new Map();
  const right = new Map();
  const n = s.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (!left.has(s[i])) left.set(s[i], i);
    if (!right.has(s[n - i - 1])) right.set(s[n - i - 1], n - i - 1);
  }
  for (let [char, index] of left) {
    if (right.has(char) && right.get(char) - index > 1) {
      const unique = new Set();
      for (let i = index + 1; i < right.get(char); i++) {
        unique.add(s[i]);
      }
      ans += unique.size;
    }
  }
  return ans;
};

console.log(countPalindromicSubsequence("aabca"));
