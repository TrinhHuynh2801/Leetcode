/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let coin of coins) {
    for (let cur = coin; cur <= amount; cur++) {
      dp[cur] = Math.min(dp[cur], 1 + dp[cur - coin]);
    }
  }
  return dp[amount] !== amount + 1 ? dp[amount] : -1;
};
