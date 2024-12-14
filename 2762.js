/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function (nums) {
  let minQueue = [],
    maxQueue = [];
  let left = 0,
    count = 0;
  for (let right = 0; right < nums.length; right++) {
    while (
      minQueue.length &&
      nums[minQueue[minQueue.length - 1]] >= nums[right]
    ) {
      minQueue.pop();
    }
    minQueue.push(right);

    while (
      maxQueue.length &&
      nums[maxQueue[maxQueue.length - 1]] <= nums[right]
    ) {
      maxQueue.pop();
    }
    maxQueue.push(right);

    while (nums[maxQueue[0]] - nums[minQueue[0]] > 2) {
      left++;
      if (minQueue[0] < left) {
        minQueue.shift();
      }
      if (maxQueue[0] < left) {
        maxQueue.shift();
      }
    }
    count += right - left + 1;
  }
  return count;
};
