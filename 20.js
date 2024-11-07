/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const openParentheses = new Set(["(", "{", "["]);
  const parentheses = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let char of s) {
    if (openParentheses.has(char)) {
      stack.push(char);
      continue;
    }

    if (parentheses[stack[stack.length - 1]] == char) stack.pop();
    else return false;
  }
  return !stack.length;
};
