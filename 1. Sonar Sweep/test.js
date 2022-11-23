const fileSystem = require('fs'),
  path = require('path');

const solveA = require('./solution/A'),
  solveB = require('./solutions/B');

const input = fileSystem
  .readFileSync(path.join(__dirname, './input.txt'), 'utf8')
  .toString()
  .split('\r\n')
  .map(value => parseInt(value, 10));

console.log(solveA(input), solveB(input));
