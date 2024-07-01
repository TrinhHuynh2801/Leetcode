var threeConsecutiveOdds = function (arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] % 2 == 0) continue;
    if (arr[i + 1] % 2 == 0) {
      i++;
      continue;
    }
    if (arr[i + 2] % 2 == 0) {
      i += 2;
      continue;
    }
    return true;
  }
  return false;
};

console.log(threeConsecutiveOdds([2, 6, 4, 1]));
