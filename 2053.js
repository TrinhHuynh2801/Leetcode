var kthDistinct = function (arr, k) {
  const distinct = new Set();
  const seen = new Set();
  for (let char of arr) {
    if (!seen.has(char)) {
      distinct.add(char);
      seen.add(char);
    } else {
      distinct.delete(char);
    }
  }
  if (distinct.size < k - 1 || distinct.size == 0) return "";
  let index = 0;
  for (let value of distinct) {
    if (index == k - 1) return value;
    index++;
  }
};

console.log(kthDistinct(["a", "a", "a"], 1));
