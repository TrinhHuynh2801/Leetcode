/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  const countChar = {};
  for (let char of tiles) {
    countChar[char] = (countChar[char] || 0) + 1;
  }
  const backtrack = () => {
    let result = 0;
    for (let char in countChar) {
      if (countChar[char] > 0) {
        countChar[char]--;
        result += 1 + backtrack();
        countChar[char]++;
      }
    }
    return result;
  };
  return backtrack();
};
