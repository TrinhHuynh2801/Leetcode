var lemonadeChange = function (bills) {
  if (bills[0] != 5) return false;
  let five_dollars = 0;
  let ten_dollars = 0;
  for (let bill of bills) {
    if (bill == 5) five_dollars++;
    else if (bill == 10) {
      if (five_dollars > 0) {
        five_dollars--;
        ten_dollars++;
      } else return false;
    } else {
      if (five_dollars > 0 && ten_dollars > 0) {
        five_dollars--;
        ten_dollars--;
      } else if (five_dollars > 2) five_dollars -= 3;
      else return false;
    }
  }
  return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 20]));
