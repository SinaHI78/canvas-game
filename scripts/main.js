const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = 640;
const height = 640;
const gridSize = 32;

// images
const backgroundImage = new Image();
backgroundImage.src = '/images/level1.png';
const playerSprite = new Image();
playerSprite.src = '/images/Female 10-3.png';

// grid that cannot be walked on
const blockedGrid = [
  {
    col: 1,
    row: 2
  },
  {
    col: 2,
    row: 2
  }
];

const clean = () => {
  context.clearRect(0, 0, width, height);
};
class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.dir = 'down';
  }
  moveUp() {
    if (player.row > 0 && !isTileBlocked(player.col, player.row - 1)) {
      this.row -= 1;
      this.dir = 'up';
    }
  }
  moveRight() {
    if (player.col < 19 && !isTileBlocked(player.col + 1, player.row)) {
      this.col += 1;
      this.dir = 'right';
    }
  }
  moveDown() {
    if (player.row < 19 && !isTileBlocked(player.col, player.row + 1)) {
      this.row += 1;
      this.dir = 'down';
    }
  }
  moveLeft() {
    if (player.col > 0 && !isTileBlocked(player.col - 1, player.row)) {
      this.col -= 1;
      this.dir = 'left';
    }
  }
}

function drawBackground() {
  context.drawImage(backgroundImage, 0, 0, width, height);
}

// function returns true when the tile is blocked (is contained in blockedGrid)
function isTileBlocked(destCol, destRow) {
  return false;
}

let player = new Character(0, 19);

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

function drawEverything() {
  clean();
  drawBackground();
  drawPlayer();
}

window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.key) {
    case 'ArrowLeft':
      player.moveLeft();
      break;
    case 'ArrowUp':
      player.moveUp();
      break;
    case 'ArrowRight':
      player.moveRight();
      break;
    case 'ArrowDown':
      player.moveDown();
      break;
  }
  drawEverything();
});

// initializing a new character that starts at random position
const dog = new Character(
  Math.floor(Math.random() * 20),
  Math.floor(Math.random() * 20)
);

// declaring a new player that changes its look/image when moving
/*function drawPlayer() {
  const player = new Image();
  if (player.dir === 'down') {
    playerImage.onload = function () {
      context.drawImage(playerImage, 0, 0, 32, 32, x, y, 32, 32);
    };
    player.src = '/images/Female 10-3.png';
  } else if (player.dir === 'up') {
    player.src = '/images/Female 10-3.png';
  } else if (player.dir === 'right') {
    player.src = '/images/Female 10-3.png';
  } else if (player.dir === 'left') {
    player.src = '/images/Female 10-3.png';
  }
  // the onload function is like the addEventListener to preload the image
  // and then draw it
  playerImage.onload = function () {
    context.drawImage(playerImage, 0, 0, 32, 32, x, y, 32, 32);
  };
}*/

window.addEventListener('load', (event) => {
  drawEverything();
});
