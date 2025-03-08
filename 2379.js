/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let countBlack = 0;
  for (let i = 0; i < k; i++) {
    if (blocks[i] == "B") countBlack++;
  }
  let start = 0;
  let end = k - 1;
  let maxCountBlack = countBlack;
  while (end < blocks.length) {
    if (blocks[start] == "B") countBlack--;
    start++;
    end++;
    if (blocks[end] == "B") countBlack++;
    maxCountBlack = Math.max(maxCountBlack, countBlack);
  }
  return k - maxCountBlack;
};
