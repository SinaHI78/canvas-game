class Doggies extends Character {
  constructor(col, row) {
    super(col, row);
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * 19);
    this.row = Math.floor(Math.random() * 19);
  }
}

let dog = new Doggies(16, 18);

const doggieSprite = new Image();
doggieSprite.src = '/images/PC Computer - Stardew Valley - Dog Blonde.png';

function drawDog() {
  let x = gridSize * dog.col;
  let y = gridSize * dog.row;
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
