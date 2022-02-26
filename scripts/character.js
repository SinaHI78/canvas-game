class Character {
  constructor(game, col, row) {
    this.col = col;
    this.row = row;
    this.dir = 'down';
    this.game = game;
  }
  moveUp() {
    if (this.row > 0 && !game.isTileBlocked(this.col, this.row - 1)) {
      this.row -= 1;
      this.dir = 'up';
    }
  }
  moveRight() {
    if (this.col < 19 && !game.isTileBlocked(this.col + 1, this.row)) {
      this.col += 1;
      this.dir = 'right';
    }
  }
  moveDown() {
    if (this.row < 19 && !game.isTileBlocked(this.col, this.row + 1)) {
      this.row += 1;
      this.dir = 'down';
    }
  }
  moveLeft() {
    if (this.col > 0 && !game.isTileBlocked(this.col - 1, this.row)) {
      this.col -= 1;
      this.dir = 'left';
    }
  }
}
