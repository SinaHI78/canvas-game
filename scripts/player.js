// adding class Player that extends the Character class
// with properties added for movement and collision check
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
