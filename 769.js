/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  let chunks = 0;
  max = -1;
  for (let index = 0; index < arr.length; index++) {
    max = Math.max(arr[index], max);
    if (max == index) {
      chunks++;
      max = -1;
    }
  }
  return chunks;
};

console.log(maxChunksToSorted([0, 1, 2, 3, 4, 5, 6]));
