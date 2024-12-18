/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const stack = [];
  const arr = [...prices];
  for (let i = 0; i < prices.length; i++) {
    console.log(stack);
    while (stack.length && prices[i] <= prices[stack[stack.length - 1]]) {
      const index = stack.pop();
      arr[index] -= prices[i];
    }
    stack.push(i);
  }
  return arr;
};

console.log(finalPrices([8, 4, 6, 2, 3]));
