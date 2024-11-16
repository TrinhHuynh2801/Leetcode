/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
  const ans = [];
  const findPower = (i) => {
    let temp = nums[i];
    for (let j = i + 1; j < i + k; j++) {
      if (temp >= nums[j] || nums[j] - temp != 1) {
        return -1;
      } else temp = nums[j];
    }
    return temp;
  };
  for (let i = 0; i < nums.length - k + 1; i++) {
    ans.push(findPower(i));
  }
  return ans;
};
