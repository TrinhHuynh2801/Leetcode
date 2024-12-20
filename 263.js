/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  const factor2 = 2,
    factor3 = 3,
    factor5 = 5;
  if (n < 1) return false;
  while (n % factor2 == 0) {
    n = n / factor2;
  }
  while (n % factor2 == 0) {
    n = n / factor2;
  }
  while (n % factor3 == 0) {
    n = n / factor3;
  }
  while (n % factor5 == 0) {
    n = n / factor5;
  }
  return n == 1;
};
