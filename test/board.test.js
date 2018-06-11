import {
  boardSize,
  boardRow,
  boardColumn,
  boardSquare,
  boardAvailableValues
} from '../source/board';

let board;

beforeEach(() => {
  board = [
    [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    [ 2, 3, 4, 5, 6, 7, 8, 9, 1 ],
    [ 3, 4, 5, 6, 7, 8, 9, 1, 2 ],
    [ 4, 5, 6, 7, 8, 9, 1, 2, 3 ],
    [ 5, 6, 7, 8, 9, 1, 2, 3, 4 ],
    [ 6, 7, 8, 9, 1, 2, 3, 4, 5 ],
    [ 7, 8, 8, 1, 2, 3, 4, 5, 6 ],
    [ 8, 9, 1, 2, 3, 4, 5, 6, 7 ],
    [ 9, 1, 2, 3, 4, 5, 6, 7, 8 ]
  ];
});

describe("boardSize", () => {

  it("return the size of the board", () => {
    expect(boardSize(board)).toEqual(9);
  });
});

describe("boardRow", () => {

  describe("when the row is 0", () => {

    it("returns the values in the row", () => {
      expect(boardRow(0, board)).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
    });
  });

  describe("when the row is not 0", () => {

    it("returns the values in the row", () => {
      expect(boardRow(5, board)).toEqual([ 6, 7, 8, 9, 1, 2, 3, 4, 5 ]);
    });
  });
});

describe("boardColumn", () => {

  describe("when the column is 0", () => {

    it("returns the values in the column", () => {
      expect(boardColumn(0, board)).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
    });
  });

  describe("when the column is not 0", () => {

    it("returns the values in the column", () => {
      expect(boardColumn(5, board)).toEqual([ 6, 7, 8, 9, 1, 2, 3, 4, 5 ]);
    });
  });
});

describe("boardSquare", () => {

  describe("when the square is 0", () => {

    it("returns the values in the square", () => {
      expect(boardSquare(0, 0, board)).toEqual([ 1, 2, 3, 2, 3, 4, 3, 4, 5 ]);
    });
  });

  describe("when the square is not 0", () => {

    it("returns the values in the square", () => {
      expect(boardSquare(4, 4, board)).toEqual([ 7, 8, 9, 8, 9, 1, 9, 1, 2 ]);
    });
  });
});

describe("boardAvailableValues", () => {

  describe("when the board is empty", () => {
    beforeEach(() => {
      board = [
        [ null, null, null, null ],
        [ null, null, null, null ],
        [ null, null, null, null ],
        [ null, null, null, null ]
      ];
    });

    it("returns all of the values", () => {
      expect(boardAvailableValues(0, 0, board)).toEqual([ 1, 2, 3, 4 ]);
    });
  });

  describe("when the space already contains a value", () => {
    beforeEach(() => {
      board = [
        [ 1, null, null, null ],
        [ null, null, null, null ],
        [ null, null, null, null ],
        [ null, null, null, null ]
      ];
    });

    it("returns the value", () => {
      expect(boardAvailableValues(0, 0, board)).toEqual([ 1 ]);
    });
  });

  describe("when the row contains values", () => {
    beforeEach(() => {
      board = [
        [ null, 1, 2, null ],
        [ null, null, null, null ],
        [ null, null, null, null ],
        [ null, null, null, null ]
      ];
    });

    it("returns the values not in the row", () => {
      expect(boardAvailableValues(0, 0, board)).toEqual([ 3, 4 ]);
    });
  });

  describe("when the column contains values", () => {
    beforeEach(() => {
      board = [
        [ null, null, null, null ],
        [ 1, null, null, null ],
        [ 2, null, null, null ],
        [ null, null, null, null ]
      ];
    });

    it("returns the values not in the row", () => {
      expect(boardAvailableValues(0, 0, board)).toEqual([ 3, 4 ]);
    });
  });

  describe("when the square contains values", () => {
    beforeEach(() => {
      board = [
        [ null, null, null, null ],
        [ null, 4, null, null ],
        [ null, null, null, null ],
        [ null, null, null, null ]
      ];
    });

    it("returns the values not in the row", () => {
      expect(boardAvailableValues(0, 0, board)).toEqual([ 1, 2, 3 ]);
    });
  });
});
