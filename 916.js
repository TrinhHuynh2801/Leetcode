/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  const hashWords2 = new Map();
  const ans = [];
  for (const word of words2) {
    const map = new Map();
    for (const char of word) {
      map.set(char, (map.get(char) || 0) + 1);
    }
    for (const [key, value] of map) {
      if (!hashWords2.has(key) || hashWords2.get(key) < value) {
        hashWords2.set(key, value);
      }
    }
  }
  for (const word of words1) {
    const map = new Map();
    let isSubset = true;
    for (const char of word) {
      map.set(char, (map.get(char) || 0) + 1);
    }

    for (const [key, value] of hashWords2) {
      if (!map.has(key) || value > map.get(key)) {
        isSubset = false;
        break;
      }
    }
    if (isSubset) ans.push(word);
  }
  return ans;
};

console.log(
  wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["e", "o"])
);
