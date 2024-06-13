var minMovesToSeat = function (seats, students) {
  let ans = 0;
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  for (let i = 0; i < seats.length; i++) {
    ans += Math.abs(seats[i] - students[i]);
  }
  return ans;
};

console.log(minMovesToSeat([3, 1, 5], [2, 7, 4]));
