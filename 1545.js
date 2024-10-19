/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
  if (n === 1) return "0";
  const invert = (string) => {
    let invertString = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "1") invertString += "0";
      else invertString += "1";
    }
    return invertString;
  };
  const reverse = (string) => {
    let reverseString = "";
    for (let i = string.length - 1; i >= 0; i--) reverseString += string[i];
    return reverseString;
  };
  let S = "0";
  while (n > 1) {
    const invertString = invert(S);
    S = S + "1" + reverse(invertString);

    n--;
  }
  return S[k - 1];
};

console.log(findKthBit(4, 11));
