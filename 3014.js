var minimumPushes = function (word) {
  const map = new Map();
  let ans = 0;
  let push = 1;
  for (let char of word) {
    if (!map.has(char)) {
      map.set(char, push);
    }
    ans += map.get(char);
    if (map.size == 8 * push) push++;
  }
  return ans;
};

console.log(minimumPushes("abcde"));
