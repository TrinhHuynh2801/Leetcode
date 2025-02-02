/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let rotate = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[(i + 1) % nums.length]) rotate++;
    if (rotate > 1) return false;
  }
  return true;
};
