var minSwaps = function (nums) {
  const totalOnes = nums.reduce((num, total) => total + num);
  if (totalOnes == 0 || totalOnes == nums.length) return 0;
  let currentOnes = nums
    .slice(0, totalOnes)
    .reduce((num, total) => total + num);
  let maxOnes = currentOnes;
  for (let i = 0; i < nums.length; i++) {
    currentOnes -= nums[i];
    currentOnes += nums[(totalOnes + i) % nums.length];
    maxOnes = Math.max(currentOnes, maxOnes);
  }
  return totalOnes - maxOnes;
};

console.log(minSwaps([0, 1, 0, 1, 1, 0, 0]));
