var numTeams = function (rating) {
  let count = 0;
  for (let i = 1; i < rating.length - 1; i++) {
    let leftSmaller = 0;
    let rightSmaller = 0;
    let leftLarger = 0;
    let rightLarger = 0;
    for (let j = 0; j < i; j++) {
      if (rating[j] < rating[i]) leftSmaller++;
      if (rating[j] > rating[i]) leftLarger++;
    }
    for (let k = i + 1; k < rating.length; k++) {
      if (rating[k] < rating[i]) rightSmaller++;
      if (rating[k] > rating[i]) rightLarger++;
    }
    count += leftSmaller * rightLarger + leftLarger * rightSmaller;
  }
  return count;
};

console.log(numTeams([2, 5, 3, 4, 1]));
