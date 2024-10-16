/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
  let stack = [];
  for (let i = 0; i < nums.length; i++) {
    while (stack.length == 0 || nums[i] < nums[stack.at(-1)]) stack.push(i);
  }
  let ans = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length > 0 && nums[i] >= nums[stack.at(-1)]) {
      const idx = stack.pop();
      ans = Math.max(ans, i - idx);
    }
  }
  return ans;
};
