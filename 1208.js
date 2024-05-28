var equalSubstring = function (s, t, maxCost) {
  let maxLength = 0;
  let left = 0;
  let right = 0;
  let cost = 0;

  while (right < s.length) {
    cost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
    while (cost > maxCost) {
      cost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }
  return maxLength;
};

console.log(equalSubstring("pxezla", "loewbi", 25));
