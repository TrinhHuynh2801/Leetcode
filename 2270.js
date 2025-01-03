/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
  let remain = nums.reduce((prev, cur) => prev + cur, 0);
  let total = 0;
  let ans = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    total += nums[i];
    remain -= nums[i];
    if (total >= remain) ans++;
  }
  return ans;
};
