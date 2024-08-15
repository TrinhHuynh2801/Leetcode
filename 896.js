var isMonotonic = function (nums) {
  let isIncrease = false;
  let index = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) continue;
    else if (nums[i] < nums[i + 1]) {
      index = i + 1;
      break;
    } else if (nums[i] >= nums[i + 1]) {
      index = i + 1;
      isIncrease = true;
      break;
    }
  }
  for (let i = index; i < nums.length - 1; i++) {
    if (isIncrease) {
      if (nums[i] < nums[i + 1]) return false;
    } else {
      if (nums[i] > nums[i + 1]) return false;
    }
  }
  return true;
};

console.log(isMonotonic());
