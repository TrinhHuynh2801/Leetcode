/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
  const n = nums.length;
  let totalPair = ((n - 1) * n) / 2;
  const diffMap = new Map();
  for (let i = 0; i < n; i++) {
    const diff = nums[i] - i;
    totalPair -= diffMap.get(diff) || 0;
    diffMap.set(diff, (diffMap.set(diff) || 0) + 1);
  }
  return totalPair;
};
