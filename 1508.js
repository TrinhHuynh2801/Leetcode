var rangeSum = function (nums, n, left, right) {
  let MOD = 1e9 + 7;
  const sumArray = [];
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += nums[j];
      sumArray.push(sum);
    }
  }
  sumArray.sort((a, b) => a - b);
  let sum = 0;
  for (let i = left - 1; i < right; i++) {
    sum = (sum + sumArray[i]) % MOD;
  }
  return sum;
};

console.log(rangeSum([1, 2, 3, 4], 4, 1, 5));
