/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function (nums) {
  const n = nums.length;
  const LIS = Array(n).fill(1),
    LDS = Array(n).fill(1);
  for (let i = 1; i < n - 1; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) LIS[i] = Math.max(LIS[j] + 1, LIS[i]);
    }
  }
  for (let i = n - 2; i >= 1; i--) {
    for (let j = n - 1; j > i; j--) {
      if (nums[i] > nums[j]) LDS[i] = Math.max(LDS[j] + 1, LDS[i]);
    }
  }
  let maxMountainLength = 0;

  for (let i = 1; i < n - 1; ++i) {
    if (LIS[i] > 1 && LDS[i] > 1) {
      maxMountainLength = Math.max(maxMountainLength, LIS[i] + LDS[i] - 1);
    }
  }

  return n - maxMountainLength;
};

console.log(minimumMountainRemovals([2, 1, 1, 5, 6, 2, 3, 1]));
