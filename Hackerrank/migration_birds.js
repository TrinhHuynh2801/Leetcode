function migratoryBirds(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  const arrMap = new Map();
  for (let bird of arr) {
    arrMap.set(bird, (arrMap.get(bird) || 0) + 1);
  }
  let [type, freq] = [0, 0];
  for (const [key, value] of arrMap) {
    if (freq < value) {
      type = key;
      freq = value;
    }
  }
  return type;
}

console.log(migratoryBirds([1, 1, 2, 2, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5]));
