var numberOfSubarrays = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) nums[i] = 0;
    else nums[i] = 1;
  }
  let totalCount = 0;
  let i = 0;
  let j = 0;
  let sum = 0;
  let count = 0;
  while (j < nums.length) {
    sum += nums[j];
    if (nums[j] == 1) count = 0;
    while (sum == k) {
      count++;
      if (nums[i] == 1) sum--;
      i++;
    }
    totalCount += count;
    j++;
  }
  return totalCount;
};

console.log(numberOfSubarrays([1, 1, 2, 1, 1, 1, 1], 3));
