/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  let numArr = num.toString().split("");
  let last = new Array(10).fill(-1);
  for (let i = 0; i < numArr.length; i++) {
    last[parseInt(numArr[i])] = i;
  }
  for (let i = 0; i < numArr.length; i++) {
    for (let d = 9; d > numArr[i]; d--) {
      if (last[d] > i) {
        [numArr[i], numArr[last[d]]] = [numArr[last[d]], numArr[i]];
        return parseInt(numArr.join(""));
      }
    }
  }
  return num;
};
