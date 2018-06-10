import _ from 'lodash';

/**
 * Returns true if all of the values in the given array that aren't null are unique numbers.
 */
function valuesAreUnique(values) {
  values = _.reject(values, _.isNil);
  return values.length === new Set(values).size;
}

/**
 * Ensures the given row number is valid for the provided board.
 * @param row The row number to check.
 * @param board The Sudoku board. This function assumes the values in the board are either null or
 * valid numbers.
 * @return Returns true if the given row is valid and false otherwise.
 */
export function checkRow(row, board) {
  return valuesAreUnique(board[row]);
}
