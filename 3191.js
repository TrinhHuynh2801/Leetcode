/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let ans = 0;
  const n = nums.length;
  for (let i = 0; i < n - 2; i++) {
    if (nums[i] == 0) {
      nums[i] ^= 1;
      nums[i + 1] ^= 1;
      nums[i + 2] ^= 1;
      ans++;
    }
  }
  if (nums[n - 1] == 1 && nums[n - 2] == 1) return ans;
  return -1;
};
