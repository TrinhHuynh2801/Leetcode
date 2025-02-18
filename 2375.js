/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
  const stack = [];
  const result = [];
  let cur = 1;
  for (let i = 0; i <= pattern.length; i++) {
    stack.push(cur++);
    if (i == pattern.length || pattern[i] == "I") {
      while (stack.length) result.push(stack.pop());
    }
  }
  return result.join("");
};
