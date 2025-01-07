/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
  const nums = num
    .toString()
    .split("")
    .map((value) => Number(value));
  nums.sort((a, b) => a - b);
  let num1 = 0,
    num2 = 0;
  for (let i = 0; i < nums.length; i = i + 2) {
    num1 = nums[i] ? num1 * 10 + nums[i] : num1;
    num2 = nums[i + 1] ? num2 * 10 + nums[i + 1] : num2;
  }
  return num1 + num2;
};

console.log(splitNum(687));
