/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

var countCompleteComponents = function (n, edges) {
  const graph = new Map();
  function dfs(node, counts) {
    visited.add(node);
    counts[0]++;
    counts[1] += graph.get(node)?.length || 0;
    for (let neighbor of graph.get(node) || []) {
      if (!visited.has(neighbor)) {
        dfs(neighbor, counts);
      }
    }
  }
  for (const [a, b] of edges) {
    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);
    graph.get(a).push(b);
    graph.get(b).push(a);
  }
  const visited = new Set();
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      const counts = [0, 0]; // NodeCount and EdgeCount
      dfs(i, counts);
      if (counts[0] * (counts[0] - 1) === counts[1]) count++;
    }
  }
  return count;
};
