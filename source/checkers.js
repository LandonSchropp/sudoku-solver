import _ from 'lodash';

import {
  boardSize,
  boardSquareSize,
  boardRow,
  boardColumn,
  boardSquare
} from './board';

/**
 * Returns true if all of the values in the given array that aren't null are unique numbers.
 */
function valuesAreUnique(values) {
  values = _.reject(values, _.isNil);
  return values.length === new Set(values).size;
}

/**
 * Determines if a row is valid for the board.
 * @param row The row number to check.
 * @param board The Sudoku board. This function assumes the values in the board are either null or
 * valid numbers.
 * @return Returns true if the given row is valid and false otherwise.
 */
export function checkRow(row, board) {
  return valuesAreUnique(boardRow(row, board));
}

/**
 * Determines if a column is valid for the board.
 * @param column The column number to check.
 * @param board The Sudoku board. This function assumes the values in the board are either null or
 * valid numbers.
 * @return Returns true if the given column is valid and false otherwise.
 */
export function checkColumn(column, board) {
  return valuesAreUnique(boardColumn(column, board));
}

/**
 * Determines if a square is valid for the board.
 * @param row The row number to check.
 * @param column The column number to check.
 * @param board The Sudoku board. This function assumes the values in the board are either null or
 * valid numbers.
 * @return Returns true if the given square is valid and false otherwise.
 */
export function checkSquare(row, column, board) {
  return valuesAreUnique(boardSquare(row, column, board));
}

/**
 * Determines if a board is valid.
 * @param board The Sudoku board. This function assumes the values in the board are either null or
 * valid numbers.
 * @return Returns true if the given square is valid and false otherwise.
 */
export function checkBoard(board) {
  let size = boardSize(board);
  let squareSize = boardSquareSize(board);

  for (let i = 0; i < size; i++) {
    if (!checkRow(i, board) || !checkColumn(i, board)) {
      return false;
    }
  }

  for (let i = 0; i < squareSize; i++) {
    for (let j = 0; j < squareSize; j++) {
      if (!checkSquare(i * squareSize, j * squareSize, board)) {
        return false;
      }
    }
  }

  return true;
}
