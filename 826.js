var maxProfitAssignment = function (difficulty, profit, worker) {
  worker.sort((a, b) => a - b);
  let jobIds = [];
  for (let i = 0; i < profit.length; i++) jobIds[i] = i;
  jobIds.sort((a, b) => profit[a] - profit[b]);
  let result = 0;
  let index = jobIds.length - 1;
  for (let i = worker.length - 1; i >= 0; i--) {
    while (index >= 0 && worker[i] < difficulty[jobIds[index]]) {
      index--;
    }
    if (index >= 0) result += profit[jobIds[index]];
  }
  return result;
};

console.log(
  maxProfitAssignment(
    [68, 35, 52, 47, 86],
    [67, 17, 1, 81, 3],
    [10, 82, 84, 85, 92]
  )
);
