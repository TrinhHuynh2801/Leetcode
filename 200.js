var numIslands = function (grid) {
  let ans = 0;
  const explore = (grid, row, col) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= grid.length ||
      col >= grid[0].length ||
      grid[row][col] === "0"
    )
      return;
    grid[row][col] = "0";
    explore(grid, row - 1, col);
    explore(grid, row + 1, col);
    explore(grid, row, col - 1);
    explore(grid, row, col + 1);
  };
  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[0].length; j++)
      if (grid[i][j] === "1") {
        ans++;
        explore(grid, i, j);
      }
  return ans;
};

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
