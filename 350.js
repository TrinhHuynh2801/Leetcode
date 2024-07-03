var intersect = function (nums1, nums2) {
  const ans = [];
  const arrMap = new Map();
  for (let num of nums1) {
    arrMap.set(num, (arrMap.get(num) || 0) + 1);
  }
  for (let num of nums2) {
    if (arrMap.get(num)) {
      ans.push(num);
      arrMap.set(num, arrMap.get(num) - 1);
    }
  }
  return ans;
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
