/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function (arr, mat) {
  const row = mat.length;
  const col = mat[0].length;
  const matrixPos = new Map();
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matrixPos.set(mat[i][j], [i, j]);
    }
  }
  const rowArray = new Array(row).fill(0);
  const colArray = new Array(col).fill(0);
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    const [x, y] = matrixPos.get(key);
    rowArray[x]++;
    colArray[y]++;
    if (rowArray[x] == col || colArray[y] == row) return i;
  }
};

console.log(
  firstCompleteIndex(
    [1, 4, 5, 2, 6, 3],
    [
      [4, 3, 5],
      [1, 2, 6],
    ]
  )
);
