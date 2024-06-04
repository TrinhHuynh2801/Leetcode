var longestPalindrome = function (s) {
  const mapString = new Map();
  let ans = 0;
  let hasOdd = false;
  for (let char of s) {
    mapString.set(char, (mapString.get(char) || 0) + 1);
  }
  for (let [key, value] of mapString) {
    if (value % 2 == 0) ans += value;
    else {
      ans += value - 1;
      hasOdd = true;
    }
  }
  return hasOdd ? ans + 1 : ans;
};

console.log(longestPalindrome("aa"));
