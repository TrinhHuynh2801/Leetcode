var sortPeople = function (names, heights) {
  const sortIndex = new Array(heights.length).fill(0).map((_, i) => i);
  sortIndex.sort((a, b) => heights[b] - heights[a]);
  const res = [];
  for (let index of sortIndex) {
    res.push(names[index]);
  }
  return res;
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
