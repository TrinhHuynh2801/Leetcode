var findTheWinner = function (n, k) {
  const arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  let index = 0;
  while (arr.length > 1) {
    let remove_index = (index + k - 1) % arr.length;
    arr.splice(remove_index, 1);
    index = remove_index;
  }
  return arr[0];
};
console.log(findTheWinner(5, 2));
