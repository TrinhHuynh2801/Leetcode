var subsets = function (nums) {
  let ans = [],
    subset = [],
    index = 0;
  const backtracking = (subset, index) => {
    if (index == nums.length) {
      ans.push(subset);
      return;
    }
    backtracking([...subset, nums[index]], index + 1);
    backtracking(subset, index + 1);
  };
  backtracking(subset, index);
  return ans;
};

console.log(subsets([1, 2, 3]));
