class Player extends Character {
  constructor(game, col, row) {
    super(game, col, row);
  }
  moveUp() {
    super.moveUp();
    this.game.checkCollision();
  }
  moveRight() {
    super.moveRight();
    this.game.checkCollision();
  }
  moveDown() {
    super.moveDown();
    this.game.checkCollision();
  }
  moveLeft() {
    super.moveLeft();
    this.game.checkCollision();
  }
}
