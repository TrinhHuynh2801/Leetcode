/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function (piles, k) {
  const arr = new Array(100001).fill(0);
  let ans = 0;
  piles.forEach((pile) => arr[pile]++);
  for (let i = arr.length - 1; i >= 0; i--) {
    while (arr[i]-- > 0) {
      k-- > 0 ? c[Math.ceil(i / 2)]++ : (ans += i);
    }
  }
  return ans;
};
