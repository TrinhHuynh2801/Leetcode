/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  let start = 0;
  let end = nums.length;
  let max = 0;
  let sum = 0;
  const arrMap = new Map();
  while (start < k) {
    arrMap.set(nums[start], (arrMap.get(nums[start]) || 0) + 1);
    sum += nums[start++];
  }
  if (arrMap.size == k) max = sum;
  while (start < end) {
    arrMap.set(nums[start], (arrMap.get(nums[start]) || 0) + 1);
    arrMap.set(nums[start - k], arrMap.get(nums[start - k]) - 1);

    if (arrMap.get(nums[start - k]) == 0) arrMap.delete(nums[start - k]);
    sum += nums[start];
    sum -= nums[start - k];
    if (arrMap.size == k) max = Math.max(max, sum);
    start++;
  }
  return max;
};

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));
