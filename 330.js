var minPatches = function (nums, n) {
  let ans = 0;
  let miss = 1;
  let index = 0;
  while (miss <= n) {
    if (index <= nums.length && nums[index] <= miss) {
      miss += nums[index];
      index++;
    } else {
      miss *= 2;
      ans++;
    }
  }
  return ans;
};

console.log(minPatches([1, 5, 10], 20));
