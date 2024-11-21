/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function (m, n, guards, walls) {
  let ans = m * n - guards.length - walls.length;
  const grid = Array(m)
    .fill()
    .map(() => Array(n).fill(0));
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  for (const [gx, gy] of guards) {
    grid[gx][gy] = 2;
  }
  for (const [wx, wy] of walls) {
    grid[wx][wy] = 2;
  }
  for (const [gx, gy] of guards) {
    for (const [dx, dy] of dirs) {
      let x = gx;
      let y = gy;
      while (true) {
        x += dx;
        y += dy;
        if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] == 2) break;
        if (grid[x][y] == 0) {
          grid[x][y] = 1;
          ans--;
        }
      }
    }
  }
  return ans;
};
