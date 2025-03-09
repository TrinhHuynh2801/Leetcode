/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors) {
  let ans = 0;
  const n = colors.length;
  for (let i = 0; i < n; i++) {
    const first = colors[i];
    const second = colors[(i + 1) % n];
    const third = colors[(i + 2) % n];
    if (first != second && second != third) ans++;
  }
  return ans;
};
