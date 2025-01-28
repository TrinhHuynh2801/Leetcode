/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function (grid) {
  const row = grid.length;
  const col = grid[0].length;
  let ans = 0;
  let fish = 0;
  const dfs = (i, j) => {
    if (i < 0 || i > row - 1 || j < 0 || j > col - 1 || grid[i][j] == 0) return;
    fish += grid[i][j];
    grid[i][j] = 0;
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] > 0) {
        fish = 0;
        dfs(i, j);
        ans = Math.max(ans, fish);
      }
    }
  }
  return ans;
};
