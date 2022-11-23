const Bingo = require('../Bingo');

const solveA = input => {
  const game = new Bingo(input.numbers, input.boards);

  let winningBoards = [];

  while (winningBoards.length === 0) winningBoards = game.pickNext();

  if (winningBoards.length > 1) throw new Error('More than one winning board.');

  return winningBoards[0].getScore(game.called);
};

module.exports = solveA;
