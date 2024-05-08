var findRelativeRanks = function (score) {
  const arrMap = new Map();
  const ans = [];
  for (let key of score) arrMap.set(key, 0);
  const sortedScore = score.sort((a, b) => b - a);
  for (let i = 0; i < score.length; i++) {
    if (i == 0) arrMap.set(sortedScore[i], "Gold Medal");
    else if (i == 1) arrMap.set(sortedScore[i], "Silver Medal");
    else if (i == 2) arrMap.set(sortedScore[i], "Bronze Medal");
    else arrMap.set(sortedScore[i], `${i + 1}`);
  }
  for (let [_, value] of arrMap) ans.push(value);
  return ans;
};

console.log(findRelativeRanks([10, 3, 8, 9, 4]));
