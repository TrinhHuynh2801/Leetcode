/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const arr_set = new Set();
  for (const num of arr) {
    const double = num * 2;
    const half = num / 2;
    if (arr_set.has(double) || arr_set.has(half)) return true;
    arr_set.add(num);
  }
  return false;
};
