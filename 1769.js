/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const right = new Array(boxes.length).fill(0);
  const left = new Array(boxes.length).fill(0);

  let increase = 0;
  for (let i = boxes.length - 2; i >= 0; i--) {
    right[i] += right[i + 1] + increase;
    if (boxes[i + 1] == 1) {
      right[i]++;
      increase++;
    }
  }
  increase = 0;
  for (let i = 1; i < boxes.length; i++) {
    left[i] += left[i - 1] + increase;
    if (boxes[i - 1] == 1) {
      left[i]++;
      increase++;
    }
  }
  return right.map((_, index) => right[index] + left[index]);
};

console.log(minOperations("001011"));
