/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  const arr = [...nums];
  while (k--) {
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[index]) {
        index = i;
      }
    }
    arr[index] = arr[index] * multiplier;
  }
  return arr;
};

console.log(getFinalState([1, 3, 5], 5, 3));
