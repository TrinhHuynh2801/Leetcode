/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function (num1, num2) {
  let countBitNum2 = 0;
  let temp2 = num2;
  let result = 0;
  while (temp2 > 0) {
    if (temp2 % 2 != 0) countBitNum2++;
    temp2 = temp2 >> 1;
  }
  for (let i = 31; i >= 0 && countBitNum2 > 0; i--) {
    if (num1 & (1 << i)) {
      countBitNum2--;
      result = result | (1 << i);
    }
  }
  for (let i = 0; i < 32 && countBitNum2 > 0; i++) {
    if (!(result & (1 << i))) {
      countBitNum2--;
      result = result | (1 << i);
    }
  }
  return result;
};
