var subarraysDivByK = function (nums, k) {
  let count = 0;
  let sum = 0;
  const map = new Map();
  map.set(0, 1);
  for (let num of nums) {
    sum = (sum + num) % k;
    if (sum < 0) sum += k;
    if (map.has(sum)) count += map.get(sum);
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  console.log(map);
  return count;
};

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5));
