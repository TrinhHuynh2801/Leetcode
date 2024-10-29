/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function (grid) {
  let res = 0;
  const rows = grid.length,
    cols = grid[0].length;

  const dfs = (i, j) => {
    res = Math.max(res, j);
    if (res === cols - 1) return;

    for (let d = -1; d <= 1; d++) {
      const ni = i + d;
      if (ni >= 0 && ni < rows && grid[ni][j + 1] > grid[i][j]) {
        dfs(ni, j + 1);
      }
    }
    grid[i][j] = 0; // Mark as visited
  };

  for (let i = 0; i < rows; i++) {
    dfs(i, 0);
  }
  return res;
};
