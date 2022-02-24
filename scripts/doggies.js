class Doggies extends Character {
  constructor(col, row) {
    super(col, row);
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * 19);
    this.row = Math.floor(Math.random() * 19);
  }
  draw() {
    let x = gridSize * this.col;
    let y = gridSize * this.row;
    context.drawImage(
      doggieSprite,
      0,
      256,
      gridSize,
      gridSize,
      x,
      y,
      gridSize,
      gridSize
    );
  }
}

let dog1 = new Doggies(16, 18);
let dog2 = new Doggies(5, 0);
let dog3 = new Doggies(8, 10);
let dog4 = new Doggies(15, 4);

const doggieSprite = new Image();
doggieSprite.src = '/images/PC Computer - Stardew Valley - Dog Blonde.png';
