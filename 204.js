/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n < 2) return 0;
  const seen = new Array(n - 1).fill(0);
  let ans = 0;
  for (let i = 2; i < n; i++) {
    console.log(i);
    if (seen[i] == 1) continue;
    ans++;
    for (let k = i * i; k < n; k = k + i) {
      seen[k] = 1;
    }
  }

  return ans;
};

console.log(countPrimes(1));
