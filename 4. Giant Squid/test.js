const fileSystem = require('fs'),
    path = require('path');

const BingoBoard = require('./Bingo/Board');

const solveA = require('./solutions/A'),
	solveB = require('./solutions/B');

const input = fileSystem
    .readFileSync(path.join(__dirname, './input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n\n')
	.reduce(
		(accumulator, block, blockIndex) => {
			if (blockIndex === 0) accumulator.numbers = block.split(',').map((value) => parseInt(value, 10));
			else accumulator.boards.push(new BingoBoard(block, blockIndex - 1));

			return accumulator;
		},
		{ numbers: undefined, boards: [] }
	);
	
console.log(solveA(input), solveB(input))
