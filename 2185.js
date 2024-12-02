var prefixCount = function (words, pref) {
  let ans = 0;
  for (let word of words) {
    if (word.startsWith(pref)) ans++;
  }
  return ans;
};
