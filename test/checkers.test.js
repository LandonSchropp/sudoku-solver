import { EMPTY } from '../source/board';
import {
  checkRow,
  checkColumn,
  checkSquare,
  checkBoard,
  isBoardSolved
} from '../source/checkers';

let board;

describe("checkRow", () => {

  describe("when the row only contains null values", () => {
    it("returns true", () => {
      expect(checkRow(0, EMPTY)).toBe(true);
    });
  });

  describe("when the row contains a single value", () => {
    beforeEach(() => {
      board = [ [ 1, null, null, null ] ];
    });

    it("returns true", () => {
      expect(checkRow(0, board)).toBe(true);
    });
  });

  describe("when the row contains multiple unique values", () => {
    beforeEach(() => {
      board = [ [ 1, 2, 3, 4 ] ];
    });

    it("returns true", () => {
      expect(checkRow(0, board)).toBe(true);
    });
  });

  describe("when the row contains duplicate values", () => {
    beforeEach(() => {
      board = [ [ 1, 2, 3, 1 ] ];
    });

    it("returns false", () => {
      expect(checkRow(0, board)).toBe(false);
    });
  });
});

describe("checkColumn", () => {

  describe("when the column only contains null values", () => {
    it("returns true", () => {
      expect(checkColumn(0, EMPTY)).toBe(true);
    });
  });

  describe("when the column contains a single value", () => {
    beforeEach(() => {
      board = [
        [ 1 ],
        [ null ],
        [ null ],
        [ null ]
      ];
    });

    it("returns true", () => {
      expect(checkColumn(0, board)).toBe(true);
    });
  });

  describe("when the column contains multiple unique values", () => {
    beforeEach(() => {
      board = [
        [ 1 ],
        [ 2 ],
        [ 3 ],
        [ 4 ]
      ];
    });

    it("returns true", () => {
      expect(checkColumn(0, board)).toBe(true);
    });
  });

  describe("when the column contains duplicate values", () => {
    beforeEach(() => {
      board = [
        [ 1 ],
        [ 2 ],
        [ 3 ],
        [ 1 ]
      ];
    });

    it("returns false", () => {
      expect(checkColumn(0, board)).toBe(false);
    });
  });
});

describe("checkSquare", () => {

  describe("when the square only contains null values", () => {
    it("returns true", () => {
      expect(checkSquare(0, 0, EMPTY)).toBe(true);
    });
  });

  describe("when the square contains a single value", () => {
    beforeEach(() => {
      board = [
        [ 1, null, null, null ],
        [ null, null, null, null ],
        [ null, null, null, null ],
        [ null, null, null, null ]
      ];
    });

    it("returns true", () => {
      expect(checkSquare(0, 0, board)).toBe(true);
    });
  });

  describe("when the square contains multiple unique values", () => {
    beforeEach(() => {
      board = [
        [ 1, 2, null, null ],
        [ 3, 4, null, null ],
        [ null, null, null, null ],
        [ null, null, null, null ]
      ];
    });

    it("returns true", () => {
      expect(checkSquare(0, 0, board)).toBe(true);
    });
  });

  describe("when the square contains duplicate values", () => {
    beforeEach(() => {
      board = [
        [ 1, 2, null, null ],
        [ 3, 1, null, null ],
        [ null, null, null, null ],
        [ null, null, null, null ]
      ];
    });

    it("returns false", () => {
      expect(checkSquare(0, 0, board)).toBe(false);
    });
  });
});

describe("checkBoard", () => {

  describe("when the board is empty", () => {

    it("returns true", () => {
      expect(checkBoard(EMPTY)).toBe(true);
    });
  });

  describe("when a row is invalid", () => {
    beforeEach(() => {
      board = [
        [ 1, 2, 3, 1 ],
        [ null, null, null, null ],
        [ null, null, null, null ],
        [ null, null, null, null ]
      ];
    });

    it("returns false", () => {
      expect(checkBoard(board)).toBe(false);
    });
  });

  describe("when a column is invalid", () => {
    beforeEach(() => {
      board = [
        [ 1, null, null, null ],
        [ 2, null, null, null ],
        [ 3, null, null, null ],
        [ 1, null, null, null ]
      ];
    });

    it("returns false", () => {
      expect(checkBoard(board)).toBe(false);
    });
  });

  describe("when a square is invalid", () => {
    beforeEach(() => {
      board = [
        [ 1, 2, null, null ],
        [ 3, 1, null, null ],
        [ null, null, null, null ],
        [ null, null, null, null ]
      ];
    });

    it("returns false", () => {
      expect(checkBoard(board)).toBe(false);
    });
  });

  describe("when the board is filled and valid", () => {
    beforeEach(() => {
      board = [
        [ 4, 1, 2, 3 ],
        [ 2, 3, 4, 1 ],
        [ 3, 2, 1, 4 ],
        [ 1, 4, 3, 2 ]
      ];
    });

    it("returns true", () => {
      expect(checkBoard(board)).toBe(true);
    });
  });
});

describe("isBoardSolved", () => {

  describe("when the board contains unfilled values", () => {
    beforeEach(() => {
      board = [
        [ 4, null, 2, null ],
        [ null, 3, null, 1 ],
        [ 3, null, 1, null ],
        [ null, 4, null, 2 ]
      ];
    });

    it("returns true", () => {
      expect(isBoardSolved(board)).toBe(false);
    });
  });

  describe("when the board is filled and valid", () => {
    beforeEach(() => {
      board = [
        [ 4, 1, 2, 3 ],
        [ 2, 3, 4, 1 ],
        [ 3, 2, 1, 4 ],
        [ 1, 4, 3, 2 ]
      ];
    });

    it("returns true", () => {
      expect(isBoardSolved(board)).toBe(true);
    });
  });
});
