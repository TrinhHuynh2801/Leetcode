var sortColors = function (nums) {
  const obj = {
    0: 0,
    1: 0,
    2: 0,
  };
  for (let num of nums) {
    obj[num]++;
  }
  nums.length = 0;
  for (let value in obj) {
    for (let i = 0; i < obj[value]; i++) nums.push(Number(value));
  }
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
