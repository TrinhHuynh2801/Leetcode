/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const set = new Set();
  const n = grid.length;
  let sum = (n * n * (1 + n * n)) / 2;
  const ans = [];
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) {
      if (set.has(grid[i][j])) ans.push(grid[i][j]);
      else {
        set.add(grid[i][j]);
        sum -= grid[i][j];
      }
    }
  ans.push(sum);
  return ans;
};
