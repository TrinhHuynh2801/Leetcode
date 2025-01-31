/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
  const mp = new Map();
  mp.set(0, 0);
  const row = grid.length,
    col = grid[0].length;
  let label = 2;
  let maxArea = 0;
  const findArea = (i, j) => {
    if (
      i < 0 ||
      i >= row ||
      j < 0 ||
      j >= col ||
      grid[i][j] == 0 ||
      grid[i][j] == label
    )
      return 0;
    grid[i][j] = label;
    return (
      1 +
      findArea(i + 1, j) +
      findArea(i - 1, j) +
      findArea(i, j + 1) +
      findArea(i, j - 1)
    );
  };
  for (let i = 0; i < row; i++)
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        const area = findArea(i, j);
        mp.set(label, area);
        label++;
        maxArea = Math.max(maxArea, area);
      }
    }
  for (let i = 0; i < row; i++)
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 0) {
        const seen = new Set();
        let sumArea = 0;
        if (i > 0) seen.add(grid[i - 1][j]);
        if (i < row - 1) seen.add(grid[i + 1][j]);
        if (j > 0) seen.add(grid[i][j - 1]);
        if (j < col - 1) seen.add(grid[i][j + 1]);
        seen.forEach((val) => (sumArea += mp.get(val)));
        maxArea = Math.max(maxArea, sumArea + 1);
      }
    }
  return maxArea;
};
