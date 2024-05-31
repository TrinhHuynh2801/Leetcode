var singleNumber = function (nums) {
  let sumXor = 0;
  for (let num of nums) sumXor ^= num;
  let diffBit = 1;
  while (!(sumXor & diffBit)) diffBit = diffBit << 1;
  let a = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] & diffBit) a ^= nums[i];
  }
  return [a, sumXor ^ a];
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
