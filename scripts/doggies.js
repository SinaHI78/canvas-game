class Doggies {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * 19);
    this.row = Math.floor(Math.random() * 19);
  }
}

const doggieSprite = new Image();
doggieSprite.src = '/images/PC Computer - Stardew Valley - Dog Blonde.png';

function drawPlayer() {
  let x = gridSize * player.col;
  let y = gridSize * player.row;
  context.drawImage(
    playerSprite,
    0,
    0,
    gridSize,
    gridSize,
    x,
    y,
    gridSize,
    gridSize
  );
}
dog.setRandomPosition();
