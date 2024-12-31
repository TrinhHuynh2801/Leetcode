/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const dp = new Array(days[days.length - 1] + 1).fill(0);
  const travelDays = new Set(days);
  for (let day = 1; day < dp.length; day++) {
    if (travelDays.has(day)) {
      dp[day] = Math.min(
        dp[day - 1] + costs[0],
        (dp[day - 7] || 0) + costs[1],
        (dp[day - 30] || 0) + costs[2]
      );
    } else dp[day] = dp[day - 1];
  }
  return dp[dp.length - 1];
};
