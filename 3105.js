/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
  let longest = 1;
  let increase = 1;
  let decrease = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      increase++;
      decrease = 1;
    } else if (nums[i] < nums[i + 1]) {
      decrease++;
      increase = 1;
    } else {
      increase = 1;
      decrease = 1;
    }
    longest = Math.max(longest, increase, decrease);
  }
  return longest;
};
