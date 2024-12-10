/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const stringSet = new Set();
  let maxLength = 0;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    while (stringSet.has(s[i])) {
      stringSet.delete(s[left]);
      left++;
    }
    stringSet.add(s[i]);
    maxLength = Math.max(maxLength, i - left + 1);
  }
  return maxLength;
};
