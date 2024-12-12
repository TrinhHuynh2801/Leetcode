/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
  while (k--) {
    gifts.sort((a, b) => a - b);
    gifts[gifts.length - 1] = Math.floor(Math.sqrt(gifts[gifts.length - 1]));
  }
  return gifts.reduce((acc, curr) => acc + curr, 0);
};
