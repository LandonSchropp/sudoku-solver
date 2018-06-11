import _ from 'lodash';

import {
  boardAvailableValues,
  boardSet,
  boardSize
} from './board';

export function boardSolve(board, row = 0, column = 0) {
  let size = boardSize(board);

  // Check to see if we've reached a final board
  if (row >= size || column >= size) {
    return board;
  }

  // Check to see if we can't fill in the current space
  let availableValues = boardAvailableValues(row, column, board);

  if (_.isEmpty(availableValues)) {
    return null;
  }

  for (let value of availableValues) {
    board = boardSet(row, column, value, board);

    // Determine the next space to edit
    let nextRow = (row + 1) % size;
    let nextColumn = column + Math.floor((row + 1) / size);

    // Recurse to find the final board (or null if that board doesn't exist)
    let finalBoard = boardSolve(board, nextRow, nextColumn);

    // If the child is not null, we're done!
    if (!_.isNil(finalBoard)) {
      return finalBoard;
    }
  }
}
