/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
  const prefix = new Array(words.length + 1).fill(0);
  const vowel = new Set(["a", "e", "i", "o", "u"]);
  for (let i = 1; i <= words.length; i++) {
    prefix[i] = prefix[i - 1];
    if (vowel.has(words[i - 1][0]) && vowel.has(words[i - 1].at(-1))) {
      prefix[i]++;
    }
  }
  console.log(prefix);
  const ans = [];
  for (const [left, right] of queries) {
    ans.push(prefix[right + 1] - prefix[left]);
  }
  return ans;
};

console.log(
  vowelStrings(
    ["aba", "bcb", "ece", "aa", "e"],
    [
      [0, 2],
      [1, 4],
      [1, 1],
    ]
  )
);
