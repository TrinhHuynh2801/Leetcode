/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
  const Row = new Array(grid.length).fill(0);
  const Col = new Array(grid[0].length).fill(0);
  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[0].length; j++) {
      Row[i] += grid[i][j];
      Col[j] += grid[i][j];
    }
  let ans = 0;
  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1 && (Row[i] > 1 || Col[j] > 1)) ans++;
    }

  return ans;
};
