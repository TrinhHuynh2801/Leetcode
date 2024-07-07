var passThePillow = function (n, time) {
  const round = Math.floor(time / (n - 1));
  const pass = time % (n - 1);
  if (round == 0) return time + 1;
  if (round % 2 == 0) return pass + 1;
  else return n - pass;
};

console.log(passThePillow(18, 38));
