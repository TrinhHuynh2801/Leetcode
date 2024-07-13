var survivedRobotsHealths = function (positions, healths, directions) {
  const sortPositons = [];
  const sortDirections = [];
  const mapRobots = [];
  const stack = [];
  const ans = [];
  for (let i = 0; i < positions.length; i++) {
    sortPositons.push([i, positions[i]]);
  }
  sortPositons.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < sortPositons.length; i++) {
    mapRobots.push([sortPositons[i][0], healths[sortPositons[i][0]]]);
    sortDirections.push(directions[sortPositons[i][0]]);
  }
  for (let i = 0; i < sortDirections.length; i++) {
    if (
      sortDirections[i] == "L" &&
      stack.length > 0 &&
      stack[stack.length - 1] == "R"
    ) {
      let healthOfLeft = mapRobots[i][1];
      while (stack.length > 0 && stack[stack.length - 1] == "R") {
        if (healthOfLeft == ans[ans.length - 1][1]) {
          stack.pop();
          ans.pop();
          break;
        } else if (healthOfLeft > ans[ans.length - 1][1]) {
          console.log(stack);
          stack.pop();
          ans.pop();
          healthOfLeft--;
          if (ans.length == 0 || stack[stack.length - 1] == "L") {
            ans.push([mapRobots[i][0], healthOfLeft]);
            stack.push("L");
            break;
          }
        } else {
          ans[ans.length - 1][1]--;
          break;
        }
      }
    } else {
      stack.push(sortDirections[i]);
      ans.push(mapRobots[i]);
    }
  }
  ans.sort((a, b) => a[0] - b[0]);
  return [...ans].map((x) => x[1]);
};
console.log(
  survivedRobotsHealths(
    [33, 60, 79, 34, 26],
    [927, 428, 859, 322, 245],
    "LRLRR"
  )
);
