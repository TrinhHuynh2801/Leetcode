var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  const total = rows * cols;
  const result = [[rStart, cStart]];
  const [rightBound, leftBound, topBound, bottomBound] = [
    cols - 1,
    0,
    0,
    rows - 1,
  ];
  let round = 1;
  while (result.length < total) {
    console.log(result);

    console.log(cStart + round <= rightBound);
    if (cStart + round <= rightBound) {
      for (let i = 0; i < (1 + round) * 2 - 2; i++) {
        if (
          rStart - round + 1 + i <= bottomBound &&
          rStart - round + 1 + i >= topBound
        )
          result.push([rStart - round + 1 + i, cStart + round]);
      }
    }

    if (rStart + round <= bottomBound) {
      for (let i = 0; i < (1 + round) * 2 - 2; i++) {
        if (
          cStart + round - 1 - i >= leftBound &&
          cStart + round - 1 - i <= rightBound
        )
          result.push([rStart + round, cStart + round - 1 - i]);
      }
    }

    if (cStart - round >= leftBound) {
      for (let i = 0; i < (1 + round) * 2 - 2; i++) {
        if (
          rStart - i + round - 1 >= topBound &&
          rStart - i + round - 1 <= bottomBound
        )
          result.push([rStart - i + round - 1, cStart - round]);
      }
    }
    if (rStart - round >= topBound) {
      for (let i = 0; i < (1 + round) * 2 - 2; i++) {
        if (
          cStart + i - round + 1 <= rightBound &&
          cStart + i - round + 1 >= leftBound
        )
          result.push([rStart - round, cStart + i - round + 1]);
      }
    }

    round++;
  }
  return result;
};

console.log(spiralMatrixIII(3, 3, 2, 0));
