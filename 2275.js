/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function (candidates) {
  let ans = 1;
  for (let i = 0; i <= 24; i++) {
    let count = 0;
    for (let candidate of candidates) {
      if (candidate & (1 << i)) count++;
    }
    ans = Math.max(ans, count);
  }
  return ans;
};
