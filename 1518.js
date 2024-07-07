var numWaterBottles = function (numBottles, numExchange) {
  let result = (remain = numBottles);
  while (remain >= numExchange) {
    let exchange = Math.floor(remain / numExchange);
    result += exchange;
    remain = (remain % numExchange) + exchange;
  }
  return result;
};

console.log(numWaterBottles(17, 3));
