/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  const n = s.length;
  const prefix = new Array(n + 1).fill(0);
  for (const [start, end, direction] of shifts) {
    if (direction) {
      prefix[start]++;
      prefix[end + 1]--;
    } else {
      prefix[start]--;
      prefix[end + 1]++;
    }
  }
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    prefix[i + 1] += prefix[i];
    let charNum = s.charCodeAt(i) + (prefix[i] % 26);
    if (charNum > 122) charNum -= 26;
    else if (charNum < 97) charNum += 26;
    ans += String.fromCharCode(charNum);
  }
  return ans;
};

console.log(
  shiftingLetters("dztz", [
    [0, 0, 0],
    [1, 1, 1],
  ])
);
