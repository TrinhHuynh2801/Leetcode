/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function (n) {
  if (n == 1) return 1;
  return ((n - 1) * (2 * 4 + (n - 2) * 4)) / 2 + 1;
};
