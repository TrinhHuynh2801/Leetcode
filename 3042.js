/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
  const isPrefixAndSuffix = function (str1, str2) {
    if (str2.startsWith(str1) && str2.endsWith(str1)) {
      return true;
    }
    return false;
  };
  let ans = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isPrefixAndSuffix(words[i], words[j])) ans++;
    }
  }
  return ans;
};