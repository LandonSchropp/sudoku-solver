# Sudoku Solver

This is a simple little Sudoku solving library I built to use with another project.

## Usage

Board are represented as 2D arrays of numbers and `null` values. A board can be any size as long as it's a perfect square.

To solve a puzzle, pass the board to the `boardSolve` function:

```
import { boardSolve } from 'sudoku-solver/board-solve';

const BOARD = [
  [ null, 2, null, null ],
  [ 1, null, null, 3 ],
  [ 2, null, null, 4 ],
  [ null, null, 3, null ]
]

boardSolve(BOARD);
```
