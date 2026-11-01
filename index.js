function slideRowLeft(row) {
	const tiles = row.filter((n) => n !== 0); // remove the zeros: [2, 0, 2, 4] → [2, 2, 4]
	const result = [];
    for(let i = 0; i < tiles.length; i++) {
        if (tiles[i] === tiles[i + 1]) {
            result.push(tiles[i] * 2)
            i++
        } else {
            result.push(tiles[i])
        }
    }
    while (result.length < row.length) {
        result.push(0)
    }
    return result
}

function slideRowRight(row) {
    const result = slideRowLeft(row.toReversed())
    return result.toReversed()

}

function transpose(board) {
    const result = [[],[],[],[]];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++){
            result[j].push(board[i][j]);


        }
    }
    return result;
}

function slideBoardUp(board) {
    const result = transpose(board);
    for (let i = 0; i < result.length; i++) {
        result[i] = slideRowLeft(result[i]);
    }
    return transpose(result);
}

function slideBoardDown(board) {
    const result = transpose(board);
    for (let i = 0; i < result.length; i++) {
        result[i] = slideRowRight(result[i]);
    }
    return transpose(result);
}

function slideBoardLeft(board) {
    const result = board.map(slideRowLeft)
    return result;
}

function slideBoardRight(board) {
    const result = board.map(slideRowRight)
    return result
}

function move(board, direction) {
    switch (direction) {
        case 'left':
            return slideBoardLeft(board)
        case 'right':
            return slideBoardRight(board)
        case 'up':
            return slideBoardUp(board)
        case 'down':
            return slideBoardDown(board)

        default:
          return board;

      }

}

function canMove(board, direction) {
    const result = move(board, direction);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++){
            if (board[i][j] !== result[i][j]) {
                return true;
            }

        }
    }
    return false;

}

function hasMoves(board) {
    return (canMove(board, 'left') || canMove(board, 'right') ||
     canMove(board, 'up') || canMove(board, 'down'))
}

function findEmptyTiles(board) {
    const result = []
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 0) {
                result.push([i, j])
            }
        }
    }
    return result;
}

function spawn(board) {
    const zeroCoordinates = findEmptyTiles(board);
    if (zeroCoordinates.length === 0) {
        return board;
    }
    const spawnLocationIndex = Math.floor(Math.random() * zeroCoordinates.length)
    const [row, col] = zeroCoordinates[spawnLocationIndex]
    const newTile = Math.random() < 0.9 ? 2 : 4;



}