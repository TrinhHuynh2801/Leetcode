/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function (nums, k) {
  nums.sort((a, b) => a - b);
  let left = 0,
    right = 0,
    ans = 0;
  while (right < nums.length) {
    if (nums[right] - nums[left] > 2 * k) left++;
    ans = Math.max(ans, right - left + 1);
    right++;
  }
  return ans;
};
