/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  const map = new Map();
  let ans = 0;
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (const [key, value] of map) {
    while (value >= 3) value -= 2;
    ans += value;
  }
  return ans;
};
