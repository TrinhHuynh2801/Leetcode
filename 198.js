/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let n = nums.length;
  let dp = new Array(n).fill(0);

  if (n === 1) {
    return nums[0];
  }
  dp[0] = nums[0];
  dp[1] = Math.max(dp[0], nums[1]);
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }
  return dp[n - 1];
};
