/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  const words = sentence.split(" ");
  const search_length = searchWord.length;
  for (let i = 0; i < words.length; i++) {
    if (words[i].slice(0, search_length) == searchWord) return i + 1;
  }
  return -1;
};

console.log(isPrefixOfWord("i love eating burger", "burg"));
