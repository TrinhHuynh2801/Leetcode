var maximumHappinessSum = function (happiness, k) {
  happiness.sort((a, b) => b - a);
  let ans = 0;
  let i = 0;
  while (k > 0 && i < happiness.length) {
    const val = happiness[i] - i;
    if (val <= 0) break;
    ans += val;
    i++;
    k--;
  }
  return ans;
};

console.log(maximumHappinessSum([3, 1, 2], 2));
