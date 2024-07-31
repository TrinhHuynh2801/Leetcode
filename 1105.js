var minHeightShelves = function (books, shelfWidth) {
  const dp = Array(books.length + 1).fill(0);
  for (let i = 0; i < books.length; i++) {
    let [currentWidth, currentHeight] = books[i];
    dp[i + 1] = dp[i] + currentHeight;
    for (let j = i - 1; j >= 0; j--) {
      const [currentBookThickness, currentBookHeight] = books[j];
      if (currentWidth + currentBookThickness > shelfWidth) break;
      currentWidth += currentBookThickness;
      currentHeight = Math.max(currentHeight, currentBookHeight);

      const currentArrangementHeight = dp[j] + currentHeight;
      dp[i + 1] = Math.min(dp[i + 1], currentArrangementHeight);
    }
  }
  return dp[books.length];
};

console.log(
  minHeightShelves(
    [
      [1, 1],
      [2, 3],
      [2, 3],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 2],
    ],
    4
  )
);
