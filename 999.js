/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  const row = board.length;
  const col = board[0].length;
  const rookPos = () => {
    for (let i = 0; i < row; i++)
      for (let j = 0; j < col; j++) if (board[i][j] == "R") return [i, j];
  };
  const [rx, ry] = rookPos();
  let count = 0;
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  for (const [dx, dy] of dirs) {
    let x = rx;
    let y = ry;
    while (true) {
      x += dx;
      y += dy;
      if (x < 0 || x >= row || y < 0 || y >= col || board[x][y] == "B") break;
      if (board[x][y] == "p") {
        count++;
        break;
      }
    }
  }
  return count;
};

console.log(
  numRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    ["p", "p", ".", "R", ".", "p", "B", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "B", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ])
);
