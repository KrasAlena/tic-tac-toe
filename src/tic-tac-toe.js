class TicTacToe {
  constructor() {
    this.gameField = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.currentPlayer = "x";
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.gameField[rowIndex][columnIndex] != null) {
      return;
    }
    this.gameField[rowIndex][columnIndex] = this.currentPlayer;
    this.currentPlayer = this.currentPlayer == "x" ? "o" : "x";
  }

  isFinished() {
    return !!this.getWinner() || this.noMoreTurns();
  }

  getWinner() {
    const a = this.gameField;
    if (a[0][0] === a[1][0] && a[0][0] === a[2][0] && a[1][0] === a[2][0] && +a[0][0] !== 0)
      return a[0][0];
    if (a[0][1] === a[1][1] && a[0][1] === a[2][1] && a[1][1] === a[2][1] && +a[0][1] !== 0)
      return a[0][1];
    if (a[0][2] === a[1][2] && a[0][2] === a[2][2] && a[1][2] === a[2][2] && +a[0][2] !== 0)
      return a[0][2];
    if (a[0][0] === a[0][1] && a[0][0] === a[0][2] && a[0][1] === a[0][2] && +a[0][0] !== 0)
      return a[0][0];
    if (a[1][0] === a[1][1] && a[1][0] === a[1][2] && a[1][1] === a[1][2] && +a[1][0] !== 0)
      return a[1][0];
    if (a[2][0] === a[2][1] && a[2][0] === a[2][2] && a[2][1] === a[2][2] && +a[2][0] !== 0)
      return a[2][0];
    if (a[0][0] === a[1][1] && a[0][0] === a[2][2] && a[1][1] === a[2][2] && +a[0][0] !== 0)
      return a[0][0];
    if (a[2][0] === a[1][1] && a[2][0] === a[0][2] && a[1][1]=== a[0][2] && +a[2][0] !== 0)
      return a[2][0];
    return null;
  }

  noMoreTurns() {
    return this.gameField.every((row) => row.every((col) => col));
  }

  isDraw() {
    return this.noMoreTurns() && !this.getWinner();
  }

  getFieldValue(rowIndex, columnIndex) {
    return this.gameField[rowIndex][columnIndex];
  }
}

module.exports = TicTacToe;
