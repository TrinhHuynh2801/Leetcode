/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const arr = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && stack[stack.length - 1][1] < temperatures[i]) {
      const index = stack.pop()[0];
      arr[index] = i - index;
    }
    stack.push([i, temperatures[i]]);
  }
  return arr;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
