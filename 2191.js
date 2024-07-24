var sortJumbled = function (mapping, nums) {
  const mapArray = [];
  const mapNumber = (num) => {
    let digits = num.toString().split("");
    for (let i = 0; i < digits.length; i++) {
      digits[i] = mapping[digits[i]];
    }
    return parseInt(digits.join(""));
  };
  for (let i = 0; i < nums.length; i++) {
    mapArray.push({ index: i, value: mapNumber(nums[i]) });
  }
  return mapArray.sort((a, b) => a.value - b.value).map((x) => nums[x.index]);
};

console.log(sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [991, 338, 38]));
