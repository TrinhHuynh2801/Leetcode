/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function (lo, hi, k) {
  const getPower = (num) => {
    let step = 0;
    while (num != 1) {
      if (num % 2 == 0) num = num / 2;
      else {
        num = 3 * num + 1;
      }
      step++;
    }
    return step;
  };
  const arr = [];
  let j = 0;
  for (let i = lo; i <= hi; i++) {
    arr.push([j++, getPower(i)]);
  }
  arr.sort((a, b) => a[1] - b[1]);
  return lo + arr[k - 1][0];
};

console.log(getKth(12, 15, 2));
