/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {
  const prefix = Array(nums.length).fill(0);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] % 2 == nums[i - 1] % 2) {
      prefix[i] = prefix[i - 1] + 1;
    } else prefix[i] = prefix[i - 1];
  }
  console.log(prefix);
  const ans = [];
  for (const [from, to] of queries) {
    ans.push(prefix[to] - prefix[from] == 0);
  }
  return ans;
};

console.log(isArraySpecial([3, 4, 1, 2, 6], [[0, 4]]));
