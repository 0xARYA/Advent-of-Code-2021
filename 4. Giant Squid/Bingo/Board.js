class BingoBoard {
  constructor(block, ID) {
    this.ID = ID;

    this.block = block;

    this.grid = block
      .split('\n')
      .map(row =>
        row
          .trim()
          .split(/\s+/)
          .map(rowValue => parseInt(rowValue, 10))
      );

    this.size = this.grid.length;

    this.cells = {};

    for (let row = 0; row < this.grid.length; row += 1) {
      for (let column = 0; column < this.grid[row].length; column += 1) 
        this.cells[this.grid[row][column]] = [row, column];
    }

    this.rows = Array(this.size).fill(0);

    this.columns = Array(this.size).fill(0);
  }

  has(number) {
    return Boolean(this.cells[number]);
  }

  add(number) {
    if (!this.has(number)) return false;

    let [row, column] = this.cells[number];

    this.rows[row] += 1;
    this.columns[column] += 1;

    return this.rows[row] === 5 || this.columns[column] === 5;
  }

  hasBingo() {
    return this.rows.some(row => row === 5) || this.columns.some(column => column === 5);
  }

  getUncalled(called) {
    return Object.keys(this.cells)
      .filter(rawNumber => !called.includes(parseInt(rawNumber, 10)))
      .map(rawNumber => parseInt(rawNumber, 10));
  }

  getScore(called) {
    const uncalled = this.getUncalled(called),
      uncalledSum = uncalled.reduce((a, b) => a + b, 0);

    return uncalledSum * called[called.length - 1];
  }
}

module.exports = BingoBoard;
