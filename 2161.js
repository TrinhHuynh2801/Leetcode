/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  const less = [];
  const greater = [];
  const equal = [];
  for (let num of nums) {
    if (num < pivot) less.push(num);
    else if (num > pivot) greater.push(num);
    else equal.push(pivot);
  }
  return less.concat(equal, greater);
};
