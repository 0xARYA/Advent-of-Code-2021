const solveB = moves => {
  let position = 0,
    depth = 0,
    aim = 0;

  for (let moveIndex = 0; moveIndex < moves.length; moveIndex += 1) {
    const move = moves[moveIndex];

    switch (move.direction) {
      case 'forward':
        position += move.units;
        depth += move.units * aim;
        break;

      case 'down':
        aim += move.units;
        break;

      case 'up':
        aim -= move.units;
        break;

      default:
        break;
    }
  }

  return position * depth;
};

module.exports = solveB;
