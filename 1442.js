var countTriplets = function (arr) {
  let n = arr.length;
  let prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] ^ arr[i];
  }
  console.log(prefix);
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let k = i + 1; k < n; k++) {
      if (prefix[i] === prefix[k + 1]) {
        count += k - i;
      }
    }
  }
  return count;
};

console.log(countTriplets([2, 3, 1, 6, 7]));
