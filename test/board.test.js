import {
  boardSize,
  boardRow,
  boardColumn,
  boardSquare
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
