/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function (nums, queries) {
  const isZeroArray = (k) => {
    const diff = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < k; i++) {
      const [left, right, val] = queries[i];
      diff[left] += val;
      diff[right + 1] -= val;
    }
    let curVal = 0;
    for (let i = 0; i < nums.length; i++) {
      curVal += diff[i];
      if (curVal < nums[i]) return false;
    }
    return true;
  };
  let left = 0,
    right = queries.length,
    ans = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (isZeroArray(mid)) {
      ans = mid;
      right = mid - 1;
    } else left = mid + 1;
  }
  return ans;
};
