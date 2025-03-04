/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
  let powerOfThree = [];
  let i = 1;
  while (i <= n) {
    powerOfThree.push(i);
    i = i * 3;
  }
  for (let index = powerOfThree.length - 1; index >= 0; index--) {
    const element = powerOfThree[index];
    if (n >= element) n = n - element;
    if (n === 0) return true;
    if (n < 0) return false;
  }

  return false;
};
