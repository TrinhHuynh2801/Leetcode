/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {
  const colorMap = new Map();
  const ballMap = new Map();
  const result = [1];
  ballMap.set(queries[0][0], queries[0][1]);
  colorMap.set(queries[0][1], 1);
  for (let i = 1; i < queries.length; i++) {
    if (ballMap.has(queries[i][0])) {
      const oldColor = ballMap.get(queries[i][0]);
      colorMap.set(oldColor, colorMap.get(oldColor) - 1);
      if (colorMap.get(oldColor) === 0) colorMap.delete(oldColor);
    }
    ballMap.set(queries[i][0], queries[i][1]);
    colorMap.set(queries[i][1], (colorMap.get(queries[i][1]) || 0) + 1);
    result.push(colorMap.size);
  }
  return result;
};
