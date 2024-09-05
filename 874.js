var robotSim = function (commands, obstacles) {
  const obstaclesSet = new Set(
    obstacles.map((obstacle) => obstacle[0] + "," + obstacle[1])
  );
  let x = 0,
    y = 0;
  let currentDirection = 0;
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let maxDistance = 0;

  for (let command of commands) {
    if (command == -2) {
      currentDirection = (currentDirection + 3) % 4;
    } else if (command == -1) {
      currentDirection = (currentDirection + 1) % 4;
    } else {
      for (let i = 0; i < command; i++) {
        let newX = x + directions[currentDirection][0];
        let newY = y + directions[currentDirection][1];
        if (!obstaclesSet.has(newX + "," + newY)) {
          x = newX;
          y = newY;
          maxDistance = Math.max(maxDistance, x * x + y * y);
        } else break;
      }
    }
  }
  return maxDistance;
};

console.log(robotSim([4, -1, 4, -2, 4], [[2, 4]]));
