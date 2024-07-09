var averageWaitingTime = function (customers) {
  let result = customers[0][1];
  let start = customers[0][1] + customers[0][0];
  for (let i = 1; i < customers.length; i++) {
    if (customers[i][0] > start) {
      result += customers[i][1];
      start = customers[i][0] + customers[i][1];
    } else {
      start += customers[i][1];
      result += start - customers[i][0];
    }
    console.log(result);
  }
  return result / customers.length;
};
console.log(
  averageWaitingTime([
    [2, 3],
    [6, 3],
    [7, 5],
    [11, 3],
    [15, 2],
    [18, 1],
  ])
);
