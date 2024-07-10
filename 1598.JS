var minOperations = function (logs) {
  let result = 0;
  for (let log of logs) {
    if (log === "../") {
      if (result > 0) result--;
    } else if (log === "./") {
      continue;
    } else {
      result++;
    }
  }
  return result;
};

console.log(minOperations(["./", "../", "./"]));
