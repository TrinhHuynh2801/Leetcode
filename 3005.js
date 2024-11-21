/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  const arrayMap = new Map();
  let max = 1;
  let count = 0;
  for (let num of nums) {
    arrayMap.set(num, (arrayMap.get(num) || 0) + 1);
    max = Math.max(max, arrayMap.get(num));
  }
  for (let [, value] of arrayMap) {
    if (value == max) count++;
  }
  return max * count;
};

console.log(maxFrequencyElements([1, 2, 3, 4, 5]));
