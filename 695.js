var maxAreaOfIsland = function (grid) {
  const row = grid.length;
  const col = grid[0].length;
  const areaOfIsland = (i, j) => {
    if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] == 0) return 0;
    grid[i][j] = 0;
    return (
      1 +
      areaOfIsland(i + 1, j) +
      areaOfIsland(i - 1, j) +
      areaOfIsland(i, j + 1) +
      areaOfIsland(i, j - 1)
    );
  };
  let ans = 0;
  for (let i = 0; i < row; i++)
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 1) {
        ans = Math.max(ans, areaOfIsland(i, j));
      }
    }
  return ans;
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
