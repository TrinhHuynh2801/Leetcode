/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
  if (s.length % 2 != 0) return false;
  const opens = [];
  const unlocked = [];
  for (let i = 0; i < s.length; i++) {
    if (locked[i] == 0) unlocked.push(i);
    else if (s[i] == "(") opens.push(i);
    else if (s[i] == ")") {
      if (opens.length > 0) opens.pop();
      else if (unlocked.length > 0) unlocked.pop();
      else return false;
    }
  }
  while (unlocked.length > 0 && opens.length > 0) {
    if (unlocked.at(-1) < opens.at(-1)) return false;
    unlocked.pop();
    opens.pop();
  }
  return opens.length === 0 && unlocked.length % 2 == 0;
};
