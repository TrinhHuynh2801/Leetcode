/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  const left = new Array(26).fill(-1);
  const right = new Array(26).fill(-1);
  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - "a".charCodeAt(0);
    if (left[index] === -1) {
      left[index] = i;
    }
    right[index] = i;
  }
  let ans = 0;
  for (let i = 0; i < left.length; i++) {
    if (left[i] == -1 || right[i] - left[i] <= 1) continue;
    const unique = new Set();
    for (let j = left[i] + 1; j < right[i]; j++) {
      unique.add(s[j]);
    }
    ans += unique.size;
  }
  return ans;
};

console.log(countPalindromicSubsequence("aabca"));
