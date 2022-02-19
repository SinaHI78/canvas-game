const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = 640;
const height = 640;
const clean = () => {
  context.clearRect(0, 0, width, height);
};

function drawBackground() {
  const backgroundImage = new Image();
  backgroundImage.src = '/images/level1.png';
  setTimeout(() => {
    context.drawImage(backgroundImage, 0, 0, width, height);
  }, 300);
}

let playerRow = 3;
let playerCol = 3;

function drawPlayer() {
  const playerSprite = new Image();
  playerSprite.src = '/images/Female 10-3.png';
  setTimeout(() => {
    let x = 32 * playerCol;
    let y = 32 * playerRow;
    context.drawImage(playerSprite, 0, 0, 32, 32, x, y, 32, 32);
  }, 300);
}

drawBackground();
drawPlayer();
