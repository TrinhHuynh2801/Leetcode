var minimumPushes = function (word) {
  let ans = 0;
  let arr = new Array(26).fill(0);
  for (let char of word) {
    arr[char.charCodeAt(0) - 97]++;
  }
  arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    ans += arr[i] * Math.floor(i / 8 + 1);
  }
  return ans;
};

console.log(minimumPushes("aabbccddeeffgghhiiiiii"));
