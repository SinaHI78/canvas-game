const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = 640;
const height = 640;
const gridSize = 32;
const game = new Game(canvas);

// images and sound
const backgroundImage = new Image();
backgroundImage.src = '/images/level1.png';
const playerSprite = new Image();
playerSprite.src = '/images/Female 10-3.png';
const dogBark = new Audio('/sounds/mixkit-dog-barking-twice-1.wav');
const bellRing = new Audio('/sounds/mixkit-relaxing-bell-chime-3109.wav');

const clean = () => {
  context.clearRect(0, 0, width, height);
};

function updateScore() {
  const scoreTag = document.getElementById('score');
  scoreTag.innerHTML = game.score;
}

function updateTime() {
  const timeTag = document.getElementById('time');
  timeTag.innerHTML = game.time;
}

function drawBackground() {
  context.drawImage(backgroundImage, 0, 0, width, height);
}

function drawPlayer() {
  let x = gridSize * game.player.col;
  let y = gridSize * game.player.row;
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

function drawDog(dog) {
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

function drawEverything() {
  clean();
  drawBackground();
  drawPlayer();
  drawDog(game.dog1);
  drawDog(game.dog2);
  drawDog(game.dog3);
  drawDog(game.dog4);
  updateScore();
  updateTime();
}

window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.key) {
    case 'ArrowLeft':
      game.player.moveLeft();
      break;
    case 'ArrowUp':
      game.player.moveUp();
      break;
    case 'ArrowRight':
      game.player.moveRight();
      break;
    case 'ArrowDown':
      game.player.moveDown();
      break;
    case 'Enter':
      game.playerActions();
      break;
  }
});

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

function loop() {
  window.requestAnimationFrame(() => {
    game.runLogic();
    drawEverything();
    loop();
  });
}
game.start();
loop();
