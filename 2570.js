/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  const map = {};
  for (let num of nums1) {
    map[num[0]] = num[1];
  }
  for (let num of nums2) {
    map[num[0]] = (map[num[0]] || 0) + num[1];
  }
  const ans = [];
  for (let key in map) ans.push([Number(key), map[key]]);
  return ans;
};
