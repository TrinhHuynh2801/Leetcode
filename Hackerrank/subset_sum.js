function Sumset(nums, target) {
  const length = nums.length;
  const findSum = (length, target) => {
    if (target == 0) return true;
    if (length == 0) return false;

    if (nums[length - 1] > target) return findSum(length - 1, target);
    return (
      findSum(length - 1, target) ||
      findSum(length - 1, target - nums[length - 1])
    );
  };
  return findSum(length, target);
}

console.log(Sumset([1, 2, 3, 4, 5, 6, 7, 8, 9], 18));
