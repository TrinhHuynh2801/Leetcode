/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  if (k == 0) return new Array(code.length).fill(0);
  const ans = [];
  if (k > 0)
    for (let i = 0; i < code.length; i++) {
      let sum = 0;
      for (let j = 1; j <= k; j++) {
        sum += code[(i + j) % code.length];
      }
      ans.push(sum);
    }
  else if (k < 0)
    for (let i = 0; i < code.length; i++) {
      let sum = 0;
      for (let j = k; j < 0; j++) {
        console.log(i + j);
        console.log(code[i + j >= 0 ? i + j : i + j + code.length]);
        sum += code[i + j >= 0 ? i + j : i + j + code.length];
      }
      ans.push(sum);
    }
  return ans;
};

console.log(decrypt([2, 4, 9, 3], -2));
