/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let index1 = 0,
    index2 = 0;
  while (index1 != s.length && index2 != t.length) {
    if (s[index1] == t[index2]) {
      index1++;
      index2++;
    } else index2++;
  }
  return index1 == s.length;
};
