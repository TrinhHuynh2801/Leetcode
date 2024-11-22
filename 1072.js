/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function (matrix) {
  const rowMap = new Map();

  for (let row of matrix) {
    const key =
      row[0] === 0 ? row.join("") : row.map((val) => 1 - val).join("");
    rowMap.set(key, (rowMap.get(key) || 0) + 1);
  }

  let maxCount = 0;
  for (let count of rowMap.values()) {
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
};
