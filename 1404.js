var numSteps = function (s) {
  let result = (carry = 0);

  for (let index = s.length - 1; index > 0; index--) {
    const str = s[index];

    if (str === "0") {
      result += carry ? 2 : 1;
    } else {
      result += carry ? 1 : 2;
      carry = 1;
    }
  }
  return result + carry;
};

console.log(numSteps("10"));
