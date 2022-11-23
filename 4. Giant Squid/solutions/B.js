const Bingo = require('../Bingo');

const solveB = input => {
  const game = new Bingo(input.numbers, input.boards);

  let winningBoards,
    boardsRemaining = input.boards.length;

  while (boardsRemaining > 0) {
    winningBoards = game.pickNext();

    if (winningBoards) boardsRemaining -= winningBoards.length;
  }

  if (winningBoards.length > 1) throw new Error('More than one winning board.');

  return winningBoards[0].getScore(game.called);
};

module.exports = solveB;
