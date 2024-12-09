var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  if (nums[0] > 0 || nums.length < 3) return [];
  const numsMap = new Map();
  const ans = [];
  for (let i = 0; i < nums.length; i++) numsMap.set(nums[i], i);
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      const find = (nums[i] + nums[j]) * -1;
      if (numsMap.has(find) && numsMap.get(find) > j)
        ans.push([nums[i], nums[j], find]);
      j = numsMap.get(nums[j]);
    }
    i = numsMap.get(nums[i]);
  }
  return ans;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
