/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
  let result = 0;
  const backtrack = (number, target, index) => {
    if (target == 0 && index == number.length) return true;
    let digitSum = 0;
    for (let i = index; i < number.length; i++) {
      digitSum = digitSum * 10 + parseInt(number[i]);
      if (digitSum > target) break;
      if (backtrack(number, target - digitSum, i + 1)) return true;
    }
    return false;
  };
  for (let i = 1; i <= n; i++) {
    if (backtrack((i * i).toString(), i, 0)) result += i * i;
  }
  return result;
};
