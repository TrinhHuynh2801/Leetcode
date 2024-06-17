var judgeSquareSum = function (c) {
  let a = 0;
  let b = Math.ceil(Math.sqrt(c));
  while (a <= b) {
    let sum = a * a + b * b;
    if (sum < c) {
      a++;
    } else if (sum > c) {
      b--;
    } else return true;
  }
  return false;
};
console.log(judgeSquareSum(4));
