class Bingo {
  constructor(numbers, boards) {
    this.picked = -1;

    this.numbers = numbers;

    this.boards = boards;

    this.called = [];
  }

  pickNext() {
    let number = this.numbers[++this.picked];

    this.called.push(number);

    let bingos = [];

    for (let board of this.boards) {
      if (board.hasBingo()) continue;

      if (board.add(number)) bingos.push(board);
    }

    if (bingos.length > 0) return bingos;

    return false;
  }
}

module.exports = Bingo;
