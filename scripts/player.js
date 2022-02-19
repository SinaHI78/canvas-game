
class Character {
   constructor(col, row) {
    this.col = col;
    this.row = row;
    this.dir = 'down';  
  }
  moveUp() {
    if (player1.row > 0) {
      this.row -= 1;
      this.dir = 'up';
    }
  }
  moveRight() {
    if (player1.col < 9) {
      this.col += 1;
      this.dir = 'right';
    }
  }
  moveDown() {
    if (player1.row < 9) {
      this.row += 1;
      this.dir = 'down';
    }
  }
  moveLeft() {
    if (player1.col > 0) {
      this.col -= 1;
      this.dir = 'left';
    }
  }
}

const player = new Character(0, 550);

const player = {
  x: 0,
  y: 550,
  width: 32,
  height: 42,
  frameX: 0,
  frameY: 0,
  speed: 9,
  moving: false
};

const playerSprite = new Image();
playerSprite.src = '/images/Female 10-3.png';


function animationLoop()