var maxPoints = function (points) {
  let dp = [...points[0]];
  for (let i = 1; i < points.length; i++) {
    const left = [...dp];
    const right = [...dp];
    for (let j = 1; j < points[0].length; j++) {
      left[j] = Math.max(left[j - 1] - 1, dp[j]);
    }
    for (let j = points[0].length - 2; j >= 0; j--) {
      right[j] = Math.max(right[j + 1] - 1, dp[j]);
    }
    dp = dp.map(
      (_, index) => Math.max(left[index], right[index]) + points[i][index]
    );
  }
  return Math.max(...dp);
};

console.log(
  maxPoints([
    [1, 2, 3],
    [1, 5, 1],
    [3, 1, 1],
  ])
);
