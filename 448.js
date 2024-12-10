/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const ans = [];
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) nums[index] *= -1;
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) ans.push(i + 1);
  }
  return ans;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
