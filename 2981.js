/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function (s) {
  let length = -1;
  for (let range = 1; range < s.length - 1; range++) {
    const stringMap = new Map();
    for (let i = 0; i <= s.length - range; i++) {
      const sub = s.slice(i, i + range);
      const unique = new Set(sub);
      if (unique.size == 1) stringMap.set(sub, (stringMap.get(sub) || 0) + 1);
    }
    for (const [_, value] of stringMap) {
      if (value >= 3) length = range;
    }
  }
  return length;
};

console.log(
  maximumLength("cccerrrecdcdccedecdcccddeeeddcdcddedccdceeedccecde")
);
