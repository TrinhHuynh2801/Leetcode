/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  const calculateDigits = (number) => {
    let result = 0;
    while (number != 0) {
      result += number % 10;
      number = Math.floor(number / 10);
    }
    return result;
  };
  const numMap = new Map();
  let max = 0;
  for (let i = lowLimit; i <= highLimit; i++) {
    const boxNumber = calculateDigits(i);
    numMap.set(boxNumber, (numMap.get(boxNumber) || 0) + 1);
    max = Math.max(max, numMap.get(boxNumber));
  }
  return max;
};
