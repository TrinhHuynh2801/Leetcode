var countSubIslands = function (grid1, grid2) {
  const row = grid1.length;
  const col = grid1[0].length;
  const outOfBoundCell = (i, j) => {
    if (i < 0 || i >= row || j < 0 || j >= col || grid2[i][j] != 1) return 0;
    grid2[i][j] = 0;
    return (
      (grid1[i][j] == 1 ? 0 : 1) +
      outOfBoundCell(i + 1, j) +
      outOfBoundCell(i - 1, j) +
      outOfBoundCell(i, j + 1) +
      outOfBoundCell(i, j - 1)
    );
  };
  let ans = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid2[i][j] == 1) {
        if (outOfBoundCell(i, j) == 0) ans++;
      }
    }
  }
  return ans;
};

console.log(
  countSubIslands(
    [
      [1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 1, 1],
    ],
    [
      [1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1],
      [0, 1, 0, 0, 0],
      [1, 0, 1, 1, 0],
      [0, 1, 0, 1, 0],
    ]
  )
);
