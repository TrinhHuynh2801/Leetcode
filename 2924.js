/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

var findChampion = function (n, edges) {
  const lose = new Set();
  const win = new Set();
  for (const edge of edges) {
    if (win.has(edge[1])) win.delete(edge[1]);
    lose.add(edge[1]);

    if (lose.has(edge[0])) {
      if (win.has(edge[0])) win.delete(edge[0]);
    } else win.add(edge[0]);
  }
  if (win.size + lose.size != n) return -1;
  let ans;
  for (let value of win.values()) ans = value;
  return win.size == 1 ? ans : -1;
};

console.log(
  findChampion(3, [
    [0, 2],
    [1, 0],
  ])
);
