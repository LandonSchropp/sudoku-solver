import { EMPTY } from '../source/board';
import {
  checkRow,
  checkColumn,
  checkSquare
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
