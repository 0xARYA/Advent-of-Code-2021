const fileSystem = require('fs'),
    path = require('path');

const solveA = require('./solutions/A'),
	solveB = require('./solutions/B');

const input = fileSystem
    .readFileSync(path.join(__dirname, './input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n');

console.log(solveA(input), solveB(input))
