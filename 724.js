/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let left = 0,
    right = nums.reduce((prev, cur) => prev + cur, 0);
  for (let i = 0; i < nums.length; i++) {
    left += nums[i];
    right -= nums[i];
    if (left - nums[i] === right) return i;
  }
  return -1;
};
