/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
  if (s.length < k) return false;
  const stringMap = new Map();
  let oddChar = 0;
  for (const char of s) {
    stringMap.set(char, (stringMap.get(char) || 0) + 1);
  }
  for (const [, value] of stringMap) {
    if (value % 2 != 0) oddChar++;
  }
  return oddChar > k ? false : true;
};
