/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
  let ans = "";
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    if (spaces[index] == i) {
      index++;
      ans += " ";
    }
    ans += s[i];
  }
  return ans;
};

console.log(addSpaces("LeetcodeHelpsMeLearn", [8, 13, 15]));
