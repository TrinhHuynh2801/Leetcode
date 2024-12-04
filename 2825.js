/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function (str1, str2) {
  let index = 0;
  for (let i = 0; i < str1.length; i++) {
    if (
      str1[i] == str2[index] ||
      str1.charCodeAt(i) + 1 == str2.charCodeAt(index) ||
      (str1[i] == "z" && str2[index] == "a")
    ) {
      index++;
    }
  }
  if (index == str2.length) return true;
  else return false;
};

console.log(canMakeSubsequence("ab", "d"));
