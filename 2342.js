/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  const calculateSumDigits = (number) => {
    let result = 0;
    while (number != 0) {
      result += number % 10;
      number = Math.floor(number / 10);
    }
    return result;
  };
  let max = -1;
  const sumDigitMap = new Map();
  for (let num of nums) {
    const digitSum = calculateSumDigits(num);
    if (sumDigitMap.has(digitSum)) {
      max = Math.max(max, sumDigitMap.get(digitSum) + num);
      if (sumDigitMap.get(digitSum) < num) sumDigitMap.set(digitSum, num);
    } else sumDigitMap.set(digitSum, num);
  }
  return max;
};
