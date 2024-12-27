/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
  let right = 1,
    maxScore = 0,
    bestLeft = values[0];
  while (right < values.length) {
    maxScore = Math.max(maxScore, bestLeft + values[right] - right);
    bestLeft = Math.max(bestLeft, values[right] + right++);
  }
  return maxScore;
};
