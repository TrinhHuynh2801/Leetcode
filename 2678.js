var countSeniors = function (details) {
  let ans = 0;
  for (let detail of details) {
    const age = detail.slice(11, 13);
    if (age > 60) ans++;
  }
  return ans;
};

console.log(
  countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"])
);
