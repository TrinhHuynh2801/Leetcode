var getMaximumGold = function (grid) {
  const goldPath = (grid, row, col, goldPathSum = 0) => {
    if (
      row >= grid.length ||
      col >= grid[0].length ||
      row < 0 ||
      col < 0 ||
      grid[row][col] == 0
    )
      return goldPathSum;
    if (grid[row][col] != 0) {
      goldPathSum += grid[row][col];
      let temp = grid[row][col];
      grid[row][col] = 0;
      let left = goldPath(grid, row, col - 1, goldPathSum);
      let right = goldPath(grid, row, col + 1, goldPathSum);
      let up = goldPath(grid, row - 1, col, goldPathSum);
      let down = goldPath(grid, row + 1, col, goldPathSum);
      goldPathSum = Math.max(left, right, up, down);
      grid[row][col] = temp;
      return goldPathSum;
    }
  };

  let res = 0;
  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] != 0) res = Math.max(res, goldPath(grid, i, j));
    }
  return res;
};

console.log(
  getMaximumGold([
    [0, 6, 0],
    [5, 8, 7],
    [0, 9, 0],
  ])
);
