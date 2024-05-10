var kthSmallestPrimeFraction = function (arr, k) {
  const fractionArr = [];
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = i + 1; j < arr.length; j++)
      fractionArr.push([arr[i] / arr[j], arr[i], arr[j]]);
  fractionArr.sort((a, b) => a[0] - b[0]);
  return [fractionArr[k - 1][1], fractionArr[k - 1][2]];
};

console.log(kthSmallestPrimeFraction([1, 2, 3, 5], 3));
