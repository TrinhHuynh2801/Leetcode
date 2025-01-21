/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
  let topRow = grid[0].reduce((a, b) => a + b, 0);
  let res = Number.MAX_SAFE_INTEGER;
  let bottomRow = 0;
  for (let i = 0; i < grid[0].length; i++) {
    topRow -= grid[0][i];
    res = Math.min(res, Math.max(topRow, bottomRow));
    bottomRow += grid[1][i];
  }
  return res;
};
