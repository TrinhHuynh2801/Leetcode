var largestLocal = function (grid) {
  const ans = [];
  const mid = [];
  for (i = 0; i < grid.length; i++) {
    const temp = [];
    for (j = 0; j + 2 < grid.length; j++) {
      let max = Math.max(grid[i][j], grid[i][j + 1], grid[i][j + 2]);
      temp.push(max);
    }
    mid.push(temp);
  }
  for (i = 0; i + 2 < mid.length; i++) {
    const temp = [];
    for (j = 0; j < mid[0].length; j++) {
      let max = Math.max(mid[i][j], mid[i + 1][j], mid[i + 2][j]);

      temp.push(max);
    }
    ans.push(temp);
  }
  return ans;
};
console.log(
  largestLocal([
    [9, 9, 8, 1],
    [5, 6, 2, 6],
    [8, 2, 6, 4],
    [6, 2, 2, 2],
  ])
);
