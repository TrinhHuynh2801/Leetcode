/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function (nums) {
  const sortIndex = Array(nums.length)
    .fill()
    .map((_, index) => index);
  const ignore = new Set();
  sortIndex.sort((a, b) => nums[a] - nums[b]);
  let ans = 0;
  for (const index of sortIndex) {
    if (ignore.has(index)) continue;
    ans += nums[index];
    ignore.add(index);
    if (index + 1 < nums.length) ignore.add(index + 1);
    if (index - 1 >= 0) ignore.add(index - 1);
  }
  return ans;
};
console.log(findScore([2, 1, 3, 4, 5, 2]));
