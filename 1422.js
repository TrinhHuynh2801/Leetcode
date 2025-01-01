/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let left = 1 - s[0];
  let right = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] == "1") right++;
  }
  let result = left + right;

  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] == "1") {
      right--;
    } else {
      left++;
    }
    result = Math.max(result, left + right);
  }
  return result;
};
