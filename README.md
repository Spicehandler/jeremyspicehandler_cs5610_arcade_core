# @spicehandler/jeremyspicehandler_cs5610_arcade_core

Game logic for 2048, written as pure JavaScript functions. No dependencies, no DOM, and no framework, so it runs in Node or the browser.

## Install

```
npm install @spicehandler/arcade-core

## Usage

```js
import { move, spawn, canMove, hasMoves } from '@jeremyspicehandler_cs5610_arcade_core';

let board = [
	[2, 2, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0]
];

if (canMove(board, 'left')) {
	board = move(board, 'left');   // first row becomes [4, 0, 0, 0]
	board = spawn(board);          // adds a 2 or 4 to a random empty cell
}

if (!hasMoves(board)) {
	console.log('Game over');
}
```

## The board

A board is a 4×4 array of arrays of numbers. `0` means an empty cell.

All functions are pure: they never change the board you pass in, and always return a new board instead.

## API

### `move(board, direction)`

Slides every tile as far as it can go in `direction` (`'up'`, `'down'`, `'left'`, or `'right'`), merging equal neighbors once each. Returns the new board. If nothing can move, the returned board matches the original.

### `spawn(board, rng = Math.random)`

Places a new tile in a random empty cell: a 2 (90% of the time) or a 4 (10%). Returns the new board, or the board unchanged if there are no empty cells. `rng` is an optional function returning a number from 0 up to (but not including) 1, useful for testing or seeded games.

### `canMove(board, direction)`

Returns `true` if moving in `direction` would change the board, otherwise `false`.

### `hasMoves(board)`

Returns `true` if any direction would change the board, and `false` when the game is over.

## License

MIT