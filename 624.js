var maxDistance = function (arrays) {
  let minValue = arrays[0][0];
  let maxValue = arrays[0][arrays[0].length - 1];
  let maxDistance = 0;
  for (let i = 1; i < arrays.length; i++) {
    let curMin = arrays[i][0];
    let curMax = arrays[i][arrays[i].length - 1];
    maxDistance = Math.max(maxDistance, curMax - minValue, maxValue - curMin);

    minValue = Math.min(minValue, curMin);
    maxValue = Math.max(maxValue, curMax);
  }
  return maxDistance;
};

console.log(
  maxDistance([
    [1, 2, 3],
    [4, 5],
    [1, 2, 3],
  ])
);
