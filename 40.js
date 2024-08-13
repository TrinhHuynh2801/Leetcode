var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];
  const interate = (index, sum, arr) => {
    if (sum > target) return;
    if (sum == target) {
      result.push(arr);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      if (i != index && candidates[i] == candidates[i - 1]) continue;
      interate(i + 1, sum + candidates[i], [...arr, candidates[i]]);
    }
  };
  interate(0, 0, []);
  return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
