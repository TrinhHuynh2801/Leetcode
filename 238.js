var productExceptSelf = function (nums) {
  let n = nums.length;
  const prefix = new Array(n).fill(1);
  const surfix = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }
  for (let i = n - 2; i >= 0; i--) {
    surfix[i] = surfix[i + 1] * nums[i + 1];
  }
  let ans = [];
  for (let i = 0; i < n; i++) {
    ans[i] = prefix[i] * surfix[i];
  }
  return ans;
};

console.log(productExceptSelf([1, 2, 3, 4]));
