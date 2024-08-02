var countPoints = function (rings) {
  const hash = {};
  let ans = 0;
  for (let i = 0; i < rings.length - 1; i++) {
    const colorOfRing = rings[i] + rings[i + 1];
    const indexRing = rings[i + 1];
    if (!hash[colorOfRing]) {
      hash[colorOfRing] = 1;
      if (
        hash["R" + indexRing] &&
        hash["G" + indexRing] &&
        hash["B" + indexRing]
      ) {
        ans++;
      }
    }
  }
  return ans;
};

console.log(countPoints("B0B6G0R6R0R6G9"));
