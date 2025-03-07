/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
  const isPrime = new Array(right + 1).fill(1);
  isPrime[0] = isPrime[1] = 0;
  for (let i = 2; i * i <= right; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= right; j += i) isPrime[j] = 0;
    }
  }
  const prime = [];
  for (let i = left; i <= right; i++) if (isPrime[i]) prime.push(i);
  if (prime.length < 2) return [-1, -1];
  let minRange = right - left + 1;
  const ans = [-1, -1];
  for (let i = 1; i < prime.length; i++) {
    const range = prime[i] - prime[i - 1];
    if (range < minRange) {
      minRange = range;
      ans[0] = prime[i - 1];
      ans[1] = prime[i];
    }
  }
  return ans;
};
