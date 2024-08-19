var minSteps = function (n) {
  const dp = new Array(n - 1);
  dp[0] = 0;
  dp[1] = 2;

  for (let i = 2; i < n; i++) {
    dp[i] = i + 1;

    for (let j = Math.floor(i + 1 / 2); j >= 1; j--) {
      if ((i + 1) % j === 0) {
        dp[i] = dp[j - 1] + (i + 1) / j;
        break;
      }
    }
  }
  return dp[n - 1];
};

console.log(minSteps(9));
