var minimumDeletions = function (s) {
  let numOfb = 0;
  let count = 0;
  for (let char of s) {
    if (char == "b") numOfb++;
    else if (char == "a" && numOfb > 0) {
      numOfb--;
      count++;
    }
  }
  return count;
};

console.log(minimumDeletions("aababbab"));
