function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let appleInRange = 0;
  let orangeInRange = 0;
  for (let apple of apples) {
    const range = a + apple;
    if (range >= s && range <= t) appleInRange++;
  }
  for (let orange of oranges) {
    const range = b + orange;
    if (range >= s && range <= t) orangeInRange++;
  }
  console.log(appleInRange);
  console.log(orangeInRange);
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));
