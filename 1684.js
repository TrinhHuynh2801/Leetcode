var countConsistentStrings = function (allowed, words) {
  let ans = 0;
  for (let word of words) {
    const length = word.length;
    let count = 0;
    for (let char of word) {
      if (!allowed.includes(char)) break;
      else {
        count++;
      }
    }
    if (count == length) ans++;
  }
  return ans;
};

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
