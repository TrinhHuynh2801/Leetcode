function divisibleSumPairs(n, k, ar) {
  // Write your code here
  ar.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) ans++;
    }
  }
  return ans;
}

console.log(divisibleSumPairs(6, 3, [1, 2, 3, 4, 5, 6]));
