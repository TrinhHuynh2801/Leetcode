var minIncrementForUnique = function (nums) {
  const max = Math.max(...nums);
  const dp = new Array(max + 1).fill(0);
  for (let i = 0; i < nums.length; i++) dp[nums[i]]++;
  let count = 0;
  let next = 0;

  for (let cur = 0; cur <= max; cur++) {
    while (dp[cur]-- > 1) {
      if (cur > next) next = cur + 1;
      while (dp[next]) next++;
      count += next - cur;
      if (next <= max) dp[next] = 1;
      else next++;
    }
  }
  return count;
};

console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7]));
