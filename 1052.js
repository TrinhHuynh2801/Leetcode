var maxSatisfied = function (customers, grumpy, minutes) {
  // Count the customers sastify first
  let ans = 0;
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] == 0) {
      ans += customers[i];
      customers[i] = 0;
    }
  }
  //Count maximum sastify customer if owner use power
  let sastify = 0;
  let maximumSastify = 0;
  for (let i = 0; i < customers.length; i++) {
    sastify += customers[i];
    if (i >= minutes) {
      sastify -= customers[i - minutes];
    }
    maximumSastify = Math.max(maximumSastify, sastify);
  }
  return ans + maximumSastify;
};

console.log(
  maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)
);
