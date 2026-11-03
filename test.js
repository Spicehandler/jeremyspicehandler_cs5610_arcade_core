import { move, hasMoves, canMove, spawn } from './src/index.js';


const board = [
    [2, 2, 2, 2],
    [0, 0, 0, 2],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]

console.log(move(board, 'left'));
console.log(board);
console.log(hasMoves(board));
console.log(canMove(board, 'up'));
console.log(canMove(board, 'left'));
console.log(canMove((move(board, 'left')), 'up') );
console.log(spawn(board));
console.log(spawn(board));
console.log(canMove(board, 'upp'));
console.log(move(board, 'leftt'));
console.log(board);
