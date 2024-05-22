var partition = function (s) {
  const isPalindrome = (s) => {
    let left = 0,
      right = s.length - 1;
    while (left < right) {
      if (s[left++] !== s[right--]) {
        return false;
      }
    }
    return true;
  };

  const backtracking = (start, subString, res) => {
    if (start == s.length) {
      res.push([...subString]);
      return;
    }
    for (let end = start + 1; end <= s.length; end++) {
      const sub = s.substring(start, end);

      if (isPalindrome(sub)) {
        subString.push(sub);
        backtracking(end, subString, res);
        subString.pop();
      }
    }
  };
  let res = [];
  backtracking(0, [], res);
  return res;
};

console.log(partition("aab"));
