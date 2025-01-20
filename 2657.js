/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  const ans = [];
  let common = 0;
  const array = new Array(A.length + 1).fill(0);

  for (let i = 0; i < A.length; i++) {
    array[A[i]]++;
    array[B[i]]++;
    if (array[A[i]] == 2) common++;
    if (array[B[i]] == 2 && A[i] != B[i]) common++;
    ans.push(common);
  }
  return ans;
};

console.log(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4]));
