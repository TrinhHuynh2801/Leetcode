var canBeEqual = function (target, arr) {
  const map = new Map();
  for (let num of target) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let num of arr) {
    if (!map.has(num)) return false;
    else {
      if (map.get(num) <= 0) {
        return false;
      } else {
        map.set(num, map.get(num) - 1);
      }
    }
  }
  return true;
};

console.log(canBeEqual([1, 2, 2, 3], [1, 1, 2, 3]));
