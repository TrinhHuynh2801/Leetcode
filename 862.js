/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
  let n = nums.length;
  let pre = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    pre[i + 1] = pre[i] + nums[i];
  }

  let dq = [];
  let res = Infinity;

  for (let i = 0; i <= n; i++) {
    while (dq.length > 0 && pre[i] - pre[dq[0]] >= k) {
      res = Math.min(res, i - dq.shift());
    }
    while (dq.length > 0 && pre[i] <= pre[dq[dq.length - 1]]) {
      dq.pop();
    }
    dq.push(i);
  }

  return res === Infinity ? -1 : res;
};
