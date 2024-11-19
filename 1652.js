/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  const n = code.length;
  const ans = new Array(code.length).fill(0);
  let start,
    end,
    sum = 0;
  if (k == 0) return ans;
  if (k > 0) {
    start = 1;
    end = k;
  } else {
    start = n + k;
    end = n - 1;
  }
  for (let i = start; i <= end; i++) sum += code[i];
  for (let i = 0; i < n; i++) {
    ans[i] = sum;
    sum = sum - code[start++ % n] + code[++end % n];
  }
  return ans;
};

console.log(decrypt([2, 4, 9, 3], -2));
