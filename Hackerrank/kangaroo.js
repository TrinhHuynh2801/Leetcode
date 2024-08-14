function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  if (x2 < x1) return "NO";
  if (v1 < v2) return "NO";
  if (((x2 - x1) / (v1 - v2)) % 1 !== 0) return "NO";
  return "YES";
}

console.log(kangaroo(2, 1, 1, 2));
