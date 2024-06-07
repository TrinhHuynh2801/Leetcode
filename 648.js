var replaceWords = function (dictionary, sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < dictionary.length; j++) {
      if (words[i].indexOf(dictionary[j]) === 0) words[i] = dictionary[j];
    }
  }
  return words.join(" ");
};

console.log(
  replaceWords(
    ["ca", "bat", "rat", "cat"],
    "the cattle was rattled by the battery"
  )
);
