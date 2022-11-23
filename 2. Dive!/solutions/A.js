const solveA = moves => {
  let position = 0,
    depth = 0;

  for (let moveIndex = 0; moveIndex < moves.length; moveIndex += 1) {
    const move = moves[moveIndex];

    switch (move.direction) {
      case 'forward':
        position += move.units;
        break;

      case 'down':
        depth += move.units;
        break;

      case 'up':
        depth -= move.units;
        break;

      default:
        break;
    }
  }

  return position * depth;
};

module.exports = solveA;
