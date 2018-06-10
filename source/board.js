import _ from 'lodash';

/**
 * An empty board.
 */
export const EMPTY = _.times(9, () => _.times(9, () => null));

/**
 * Returns the elements in a row.
 * @param row The row number.
 * @param board A Sudoku board.
 * @return An array of elements in the board.
 */
export function boardRow(row, board) {
  return board[row];
}

/**
 * Returns the elements in a column.
 * @param column The column number.
 * @param board A Sudoku board.
 * @return An array of elements in the board's row column.
 */
export function boardColumn(column, board) {
  return board.map(row => row[column]);
}

/**
 * Returns the elements in a square.
 * @param square The square number.
 * @param board A Sudoku board.
 * @return An array of elements in the board's square.
 */
export function boardSquare(square, board) {
  let rowBase = Math.floor(square / 3) * 3;
  let columnBase = square % 3 * 3;

  return _.flatten(_.times(3, i => _.times(3, j => board[rowBase + i][columnBase + j])));
}
