var isNStraightHand = function (hand, groupSize) {
  let length = hand.length;
  if (length % groupSize) return false;
  hand = hand.sort((a, b) => a - b);
  let freqHand = new Map();
  for (let num of hand) {
    freqHand.set(num, (freqHand.get(num) || 0) + 1);
  }
  for (let [key, value] of freqHand) {
    if (value == 0) continue;
    for (let i = key + 1; i < key + groupSize; i++) {
      if (!freqHand.has(i) || freqHand.get(i) == 0) return false;
      freqHand.set(i, freqHand.get(i) - value);
    }
  }
  return true;
};

console.log(isNStraightHand([1, 1, 1, 2, 2, 2, 3, 3, 4], 3));
