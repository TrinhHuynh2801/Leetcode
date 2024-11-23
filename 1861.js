/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function (box) {
  const row = box.length;
  const col = box[0].length;
  const rotateBox = Array(col)
    .fill()
    .map(() => Array(row).fill("."));
  const stonesGrid = [];
  for (let i = 0; i < row; i++) {
    const stonesFall = [];
    let stones = 0;
    for (let j = col - 1; j >= 0; j--) {
      if (box[i][j] == "#") stones++;
      else if (box[i][j] == "*") {
        rotateBox[j][row - 1 - i] = "*";
        stonesFall.push(stones);
        stones = 0;
      }
      if (j == 0) stonesFall.push(stones);
    }
    stonesGrid.push(stonesFall);
  }
  for (let i = 0; i < row; i++) {
    let stonesIndex = 0;
    for (let j = col - 1; j >= 0; j--) {
      if (rotateBox[j][i] == "*") {
        stonesIndex++;
        continue;
      }
      if (stonesGrid[row - 1 - i][stonesIndex]) {
        rotateBox[j][i] = "#";
        stonesGrid[row - 1 - i][stonesIndex]--;
      }
    }
  }
  return rotateBox;
};

console.log(
  rotateTheBox([
    ["#", "#", "*", ".", "*", "."],
    ["#", "#", "#", "*", ".", "."],
    ["#", "#", "#", ".", "#", "."],
  ])
);
