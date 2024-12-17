/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function (s, repeatLimit) {
  const arr = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - 97]++;
  }
  let i = 25,
    j = 24,
    ans = "",
    repeat = 0;
  while (i >= 0 && j >= 0) {
    if (repeat == repeatLimit) {
      if (i != j && arr[j] > 0) {
        ans += String.fromCharCode(j + 97);
        arr[j]--;
        repeat = 0;
      } else j--;
    }
    if (repeat < repeatLimit && arr[i] > 0) {
      repeat++;
      arr[i]--;
      ans += String.fromCharCode(i + 97);
    }
    if (arr[i] == 0) {
      i--;
      repeat = 0;
    }
  }
  return ans;
};
