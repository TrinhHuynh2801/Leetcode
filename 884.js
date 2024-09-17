var uncommonFromSentences = function (s1, s2) {
  let s = s1 + " " + s2;
  const ans = [];
  s = s.split(" ");
  const map = new Map();
  for (let word of s) {
    map.set(word, (map.get(word) || 0) + 1);
  }
  for (let [key, value] of map) if (value == 1) ans.push(key);
  return ans;
};
