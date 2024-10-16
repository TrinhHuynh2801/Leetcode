/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  const stack = [];
  let result = "";
  if (a > 0) stack.push(["a", a]);
  if (b > 0) stack.push(["b", b]);
  if (c > 0) stack.push(["c", c]);
  stack.sort((a, b) => b[1] - a[1]);
  while (stack.length > 0) {
    let [char1, count1] = stack.shift();
    if (
      result.length >= 2 &&
      result[result.length - 1] === char1 &&
      result[result.length - 2] === char1
    ) {
      if (stack.length == 0) break;
      let [char2, count2] = stack.shift();
      result += char2;
      if (--count2 > 0) stack.push([char2, count2]);

      stack.push([char1, count1]);
    } else {
      result += char1;
      if (--count1 > 0) stack.push([char1, count1]);
    }
    stack.sort((a, b) => b[1] - a[1]);
  }
  return result;
};

console.log(longestDiverseString(1, 5, 7));
