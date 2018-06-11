import _ from 'lodash';

import { boardRow, boardColumn, boardSquare } from './board';

/**
 * Returns true if all of the values in the given array that aren't null are unique numbers.
 */
function valuesAreUnique(values) {
  values = _.reject(values, _.isNil);
  return values.length === new Set(values).size;
}

/**
 * Ensures the given row is valid for the board.
 * @param row The row number to check.
 * @param board The Sudoku board. This function assumes the values in the board are either null or
 * valid numbers.
 * @return Returns true if the given row is valid and false otherwise.
 */
export function checkRow(row, board) {
  return valuesAreUnique(boardRow(row, board));
}

/**
 * Ensures the given column is valid for the board.
 * @param column The column number to check.
 * @param board The Sudoku board. This function assumes the values in the board are either null or
 * valid numbers.
 * @return Returns true if the given column is valid and false otherwise.
 */
export function checkColumn(column, board) {
  return valuesAreUnique(boardColumn(column, board));
}

/**
 * Ensures the given square is valid for the board.
 * @param square The square number to check.
 * @param board The Sudoku board. This function assumes the values in the board are either null or
 * valid numbers.
 * @return Returns true if the given square is valid and false otherwise.
 */
export function checkSquare(row, column, board) {
  return valuesAreUnique(boardSquare(row, column, board));
}
