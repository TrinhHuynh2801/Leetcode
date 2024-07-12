var maximumGain = function (s, x, y) {
  let result = 0;
  let removeFirst = "";
  let removeLast = "";
  let scoreFirst = 0;
  let scoreLast = 0;
  if (x > y) {
    removeFirst = "ab";
    scoreFirst = x;
    removeLast = "ba";
    scoreLast = y;
  } else {
    removeFirst = "ba";
    scoreFirst = y;
    removeLast = "ab";
    scoreLast = x;
  }
  let stack = [];
  for (let char of s) {
    if (
      char == removeFirst[1] &&
      stack.length > 0 &&
      stack[stack.length - 1] == removeFirst[0]
    ) {
      stack.pop();
      result += scoreFirst;
    } else stack.push(char);
  }
  let new_stack = [];
  for (let char of stack) {
    if (
      char == removeLast[1] &&
      new_stack.length > 0 &&
      new_stack[new_stack.length - 1] == removeLast[0]
    ) {
      new_stack.pop();
      result += scoreLast;
    } else new_stack.push(char);
  }
  return result;
};

console.log(
  maximumGain(
    "aabbabkbbbfvybssbtaobaaaabataaadabbbmakgabbaoapbbbbobaabvqhbbzbbkapabaavbbeghacabamdpaaqbqabbjbababmbakbaabajabasaabbwabrbbaabbafubayaazbbbaababbaaha",
    1926,
    4320
  )
);
