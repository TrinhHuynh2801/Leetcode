/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let rotate = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      rotate++;
    }
  }
  if (rotate == 0) return true;
  if (rotate == 1 && nums[0] >= nums[nums.length - 1]) return true;
  return false;
};
