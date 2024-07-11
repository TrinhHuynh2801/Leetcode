var reverseParentheses = function (s) {
  const stack = [];
  for (let char of s) {
    if (char == ")") {
      let string = "";
      while (stack[stack.length - 1] != "(") {
        string += stack.pop().split("").reverse().join("");
      }
      stack.pop();
      stack.push(string);
    } else stack.push(char);
  }

  return stack.join("");
};
console.log(reverseParentheses("(u(love)i)"));
