var subsets = function (nums) {
  let ans = [[]];
  for (let num of nums) {
    let subset = [];
    for (let i = 0; i < ans.length; i++) {
      subset.push([...ans[i], num]);
    }
    ans.push(...subset);
  }
  return ans;
};

console.log(subsets([1, 2, 3]));
