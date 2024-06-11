var relativeSortArray = function (arr1, arr2) {
  let ans = [];
  let map = new Map();
  let rest = [];
  for (let num of arr2) {
    map.set(num, 0);
  }
  for (let num of arr1) {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else rest.push(num);
  }
  rest.sort((a, b) => a - b);
  for (let [key, value] of map) {
    for (let i = 0; i < value; i++) {
      ans.push(key);
    }
  }
  ans.push(...rest);
  return ans;
};
console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);
