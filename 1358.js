/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  const map = new Array(3).fill(0);
  const n = s.length;
  let ans = 0;
  let left = 0;
  let right = 0;
  while (right <= n) {
    if (map[0] > 0 && map[1] > 0 && map[2] > 0) {
      ans += n - right + 1;
      map[s.charCodeAt(left++) - 97]--;
    } else map[s.charCodeAt(right++) - 97]++;
  }
  return ans;
};
