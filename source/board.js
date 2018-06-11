import _ from 'lodash';

/**
 * An empty board.
 */
export const EMPTY = _.times(9, () => _.times(9, () => null));

/**
 * Returns the size of a board.
 * @param board A Sudoku board.
 * @return The size of the board.
 */
export function boardSize(board) {
  return board.length;
}

/**
 * Returns the size of a square in the board.
 * @param board A Sudoku board.
 * @return The square size of the board.
 */
export function boardSquareSize(board) {
  return Math.sqrt(boardSize(board));
}

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
export function boardSquare(row, column, board) {
  let squareSize = boardSquareSize(board);

  let rowBase = Math.floor(row / squareSize) * squareSize;
  let columnBase = Math.floor(column / squareSize) * squareSize;

  return _.chain(board)
    .slice(rowBase, rowBase + squareSize)
    .map(values => _.slice(values, columnBase, columnBase + squareSize))
    .flatten()
    .value();
}
