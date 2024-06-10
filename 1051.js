var heightChecker = function (heights) {
  let expected = [...heights].sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < heights.length; i++) {
    if (expected[i] !== heights[i]) ans++;
  }
  return ans;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
