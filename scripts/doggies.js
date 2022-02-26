class Doggies extends Character {
  constructor(canvas, col, row) {
    super(canvas, col, row);
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * 19);
    this.row = Math.floor(Math.random() * 19);
  }
}

const doggieSprite = new Image();
doggieSprite.src = '/images/PC Computer - Stardew Valley - Dog Blonde.png';
