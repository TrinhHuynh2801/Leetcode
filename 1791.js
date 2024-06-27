var findCenter = function (edges) {
  const [[a, b], [c, d]] = edges;
  return a === c || b === c ? c : d;
};

console.log(
  findCenter([
    [1, 2],
    [5, 1],
    [1, 3],
    [1, 4],
  ])
);
