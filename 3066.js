/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let count = 0;
  let arr = [];
  let i = 0,
    j = 0;
  while (1) {
    let min1, min2;
    if (i < nums.length && !(nums[i] > arr[j])) min1 = nums[i++];
    else min1 = arr[j++];
    if (min1 >= k) return count;
    if (i < nums.length && !(nums[i] > arr[j])) min2 = nums[i++];
    else min2 = arr[j++];
    arr.push(min1 * 2 + min2);
    count++;
  }
};
