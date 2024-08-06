var minimumPushes = function (word) {
  const arr = [0];
  let push = 1;
  for (let i = 1; i <= 26; i++) {
    arr.push(arr[i - 1] + push);
    if (i == 8 * push) push++;
  }
  return arr[word.length];
};

console.log(minimumPushes("abcde"));
