/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function (n) {
  const result = new Array(2 * n - 1).fill(0);
  const visited = new Array(n + 1).fill(false);
  const backtrack = (index) => {
    while (index < result.length && result[index] != 0) index++;
    if (index == result.length) return true;
    for (let number = n; number >= 1; number--) {
      if (visited[number]) continue;
      visited[number] = true;
      if (number == 1) {
        result[index] = 1;
        if (backtrack(index + 1)) return true;
      } else if (
        index + number < result.length &&
        result[index + number] == 0
      ) {
        result[index] = number;
        result[index + number] = number;
        if (backtrack(index + 1)) return true;
        result[index + number] = 0;
      }
      result[index] = 0;
      visited[number] = false;
    }
  };
  backtrack(0);
  return result;
};
