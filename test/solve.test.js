import { boardSolve } from '../source/solve';
import { isBoardSolved } from '../source/checkers';

let board;

describe("boardSolve", () => {

  describe("when the board is 1 × 1", () => {

    describe("when the board is empty", () => {

      it("returns the solved board", () => {
        expect(boardSolve([ [ null ] ])).toEqual([ [ 1 ] ]);
      });
    });

    describe("when the board is already solved", () => {

      it("returns the solved board", () => {
        expect(boardSolve([ [ 1 ] ])).toEqual([ [ 1 ] ]);
      });
    });
  });

  describe("when the board is 4 × 4", () => {

    describe("when the board is empty", () => {
      beforeEach(() => {
        board = [
          [ null, null, null, null ],
          [ null, null, null, null ],
          [ null, null, null, null ],
          [ null, null, null, null ]
        ];
      });

      it("returns a solved board", () => {
        let solvedBoard = boardSolve(board);
        expect(isBoardSolved(solvedBoard)).toBe(true);
      });
    });

    describe("when the board is partially solved", () => {
      beforeEach(() => {
        board = [
          [ null, 2, null, null ],
          [ 1, null, null, 3 ],
          [ 2, null, null, 4 ],
          [ null, null, 3, null ]
        ];
      });

      it("returns the solved board", () => {
        expect(boardSolve(board)).toEqual([
          [ 3, 2, 4, 1 ],
          [ 1, 4, 2, 3 ],
          [ 2, 3, 1, 4 ],
          [ 4, 1, 3, 2 ]
        ]);
      });
    });

    describe("when the board is already solved", () => {
      beforeEach(() => {
        board = [
          [ 3, 2, 4, 1 ],
          [ 1, 4, 2, 3 ],
          [ 2, 3, 1, 4 ],
          [ 4, 1, 3, 2 ]
        ];
      });

      it("returns the solved board", () => {
        expect(boardSolve(board)).toEqual([
          [ 3, 2, 4, 1 ],
          [ 1, 4, 2, 3 ],
          [ 2, 3, 1, 4 ],
          [ 4, 1, 3, 2 ]
        ]);
      });
    });
  });

  describe("when the board is 9 × 9", () => {

    describe("when the board is easy", () => {
      beforeEach(() => {
        board = [
          [ null, null, null, 2, 6, null, 7, null, 1 ],
          [ 6, 8, null, null, 7, null, null, 9, null ],
          [ 1, 9, null, null, null, 4, 5, null, null ],
          [ 8, 2, null, 1, null, null, null, 4, null ],
          [ null, null, 4, 6, null, 2, 9, null, null ],
          [ null, 5, null, null, null, 3, null, 2, 8 ],
          [ null, null, 9, 3, null, null, null, 7, 4 ],
          [ null, 4, null, null, 5, null, null, 3, 6 ],
          [ 7, null, 3, null, 1, 8, null, null, null ]
        ];
      });

      it("returns the solved board", () => {
        expect(boardSolve(board)).toEqual([
          [ 4, 3, 5, 2, 6, 9, 7, 8, 1 ],
          [ 6, 8, 2, 5, 7, 1, 4, 9, 3 ],
          [ 1, 9, 7, 8, 3, 4, 5, 6, 2 ],
          [ 8, 2, 6, 1, 9, 5, 3, 4, 7 ],
          [ 3, 7, 4, 6, 8, 2, 9, 1, 5 ],
          [ 9, 5, 1, 7, 4, 3, 6, 2, 8 ],
          [ 5, 1, 9, 3, 2, 6, 8, 7, 4 ],
          [ 2, 4, 8, 9, 5, 7, 1, 3, 6 ],
          [ 7, 6, 3, 4, 1, 8, 2, 5, 9 ]
        ]);
      });
    });
  });
});
