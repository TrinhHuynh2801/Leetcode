var frequencySort = function (nums) {
  let map = new Map();

  for (let n of nums) {
    map.set(n, map.get(n) + 1 || 1);
  }

  return nums.sort((a, b) => map.get(a) - map.get(b) || b - a);
};

console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]));
