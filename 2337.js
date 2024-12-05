/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
  let index1 = 0;
  let index2 = 0;
  const length = start.length;
  while (index1 != length || index2 != length) {
    while (index1 < length && start[index1] == "_") index1++;
    while (index2 < length && target[index2] == "_") index2++;
    if (index1 == length || index2 == length)
      return index1 == length && index2 == length;
    if (start[index1] != target[index2]) return false;
    if (start[index1] == "L" && index1 < index2) return false;
    if (start[index1] == "R" && index1 > index2) return false;
    index1++;
    index2++;
  }
  return true;
};
console.log(canChange("_L", "LL"));
