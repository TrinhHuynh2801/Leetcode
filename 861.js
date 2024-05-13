var matrixScore = function (grid) {
  const row = grid.length;
  const col = grid[0].length;
  let res = Math.pow(2, col - 1) * row;
  // Count number of 1 and number of 0
  for (let j = 1; j < col; j++) {
    let cur = 0; // number of 1 or 0 and we can calculate the other one with row - cur
    for (let i = 0; i < row; i++) {
      cur += grid[i][0] == grid[i][j] ? 1 : 0;
    }
    let countOfMoreNum = Math.max(cur, row - cur); // Number of 1 or 0, we take number has more count
    res += countOfMoreNum * Math.pow(2, col - 1 - j);
  }
  return res;
};

console.log(
  matrixScore([
    [0, 0, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
  ])
);
