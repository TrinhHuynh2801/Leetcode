var commonChars = function (words) {
  let charMap = new Map();
  for (let char of words[0]) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }
  for (let i = 1; i < words.length; i++) {
    let compareCharMap = new Map();
    for (let char of words[i]) {
      compareCharMap.set(char, (compareCharMap.get(char) || 0) + 1);
    }
    for (let [char, freq] of charMap) {
      if (compareCharMap.has(char)) {
        charMap.set(char, Math.min(freq, compareCharMap.get(char)));
      } else charMap.delete(char);
    }
  }
  let ans = [];
  for (let [char, freq] of charMap) {
    for (let i = 0; i < freq; i++) ans.push(char);
  }
  return ans;
};

console.log(commonChars(["bella", "label", "roller"]));
