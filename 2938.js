/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function (s) {
  let ans = 0;
  let whiteBallCounter = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "0") whiteBallCounter++;
    else if (s[i] === "1") ans += whiteBallCounter;
  }
  return ans;
};
