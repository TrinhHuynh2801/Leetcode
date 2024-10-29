/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let ans = -1;
  const numSet = new Set(nums);
  numSet.forEach((value) => {
    let streak = 1;
    let power = value;
    numSet.delete(value);
    while (numSet.has(power * power)) {
      power = power * power;
      streak++;
      numSet.delete(power);
    }
    ans = Math.max(ans, streak > 1 ? streak : -1);
  });
  return ans;
};

console.log(longestSquareStreak([4, 3, 6, 16, 8, 2]));
