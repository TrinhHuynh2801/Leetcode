/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  const freq = {};
  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }
  for (const key in freq) {
    if (freq[key] % 2 != 0) return false;
  }
  return true;
};
