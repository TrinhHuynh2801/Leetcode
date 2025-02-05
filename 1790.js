/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  let count = 0;
  let differChar1 = "";
  let differChar2 = "";
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] != s2[i]) {
      count++;
      if (count == 1) {
        differChar1 = s1[i];
        differChar2 = s2[i];
      } else if (differChar1 != s2[i] || differChar2 != s1[i]) return false;
    }
    if (count > 2) return false;
  }
  if (count == 1) return false;
  return true;
};
