/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let max = 0;
  while (left < right) {
    let water = (right - left) * Math.min(height[right], height[left]);
    max = Math.max(water, max);
    if (height[left] < height[right]) {
      left++;
    } else right--;
  }
  return max;
};

console.log(maxArea([1, 2, 4, 3]));
