var specialArray = function (nums) {
  let length = nums.length;
  let start = 0;
  const countNumGreaterThanX = (start, x) => {
    let count = 0;
    if (x > nums[start]) start++;
    for (let i = start; i < length; i++) {
      if (nums[i] >= x) count++;
    }
    return x === count;
  };
  if (length == 1 && nums[0] != 0) return 1;
  for (let i = 2; i <= length; i++) {
    if (countNumGreaterThanX(start, i)) return i;
  }
  return -1;
};

console.log(specialArray([0, 0]));
