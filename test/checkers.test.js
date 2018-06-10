import { checkRow } from '../source/checkers';

let board;

describe("checkRow", () => {

  describe("when the row only contains null values", () => {
    beforeEach(() => {
      board = [ [ null, null, null, null, null, null, null, null, null ] ];
    });

    test("returns true", () => {
      expect(checkRow(0, board)).toBe(true);
    });
  });

  describe("when the row contains a single value", () => {
    beforeEach(() => {
      board = [ [ 1, null, null, null, null, null, null, null, null ] ];
    });

    test("returns true", () => {
      expect(checkRow(0, board)).toBe(true);
    });
  });

  describe("when the row contains multiple unique values", () => {
    beforeEach(() => {
      board = [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] ];
    });

    test("returns true", () => {
      expect(checkRow(0, board)).toBe(true);
    });
  });

  describe("when the row contains duplicate values", () => {
    beforeEach(() => {
      board = [ [ 1, 2, 3, 4, 5, 6, 7, 8, 1 ] ];
    });

    test("returns false", () => {
      expect(checkRow(0, board)).toBe(false);
    });
  });
});
