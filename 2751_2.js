var survivedRobotsHealths = function (positions, healths, directions) {
  const sortIndex = new Array(positions.length).fill(0).map((_, i) => i);
  sortIndex.sort((a, b) => positions[a] - positions[b]);
  const stack = [];
  for (let i of sortIndex) {
    if (directions[i] == "R") {
      stack.push(i);
      continue;
    }
    while (stack.length > 0 && healths[i] > 0) {
      const top = stack[stack.length - 1];
      if (healths[top] < healths[i]) {
        healths[top] = 0;
        healths[i]--;
        stack.pop();
      } else if (healths[top] > healths[i]) {
        healths[top]--;
        healths[i] = 0;
      } else {
        healths[top] = 0;
        stack.pop();
        healths[i] = 0;
      }
    }
  }
  return healths.filter((x) => x > 0);
};
console.log(
  survivedRobotsHealths(
    [33, 60, 79, 34, 26],
    [927, 428, 859, 322, 245],
    "LRLRR"
  )
);
