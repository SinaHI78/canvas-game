const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
// screens
const startScreen = document.getElementById('start-screen');
const playingScreen = document.getElementById('playing-screen');
const endScreen = document.getElementById('end-screen');

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

function startGame() {
  startScreen.style.display = 'none';
  playingScreen.style.display = '';
  endScreen.style.display = 'none';
  game.start();
}

function stopGame() {
  startScreen.style.display = 'none';
  playingScreen.style.display = 'none';
  endScreen.style.display = '';
  game.stop();
  // set game end text
  document.getElementById('final-score').innerHTML = game.score;
  document.getElementById('realm').innerHTML = getRealm(game.score);
}

function getRealm(score) {
  if (score < 0) {
    return ' a hell being!';
  }
  if (score < 50) {
    return ' a hungry ghost!';
  }
  if (score < 100) {
    return ' an animal!';
  }
  if (score < 150) {
    return ' a human!';
  }
  if (score < 200) {
    return ' a half-god!';
  }
  if (score < 250) {
    return ' a god!';
  }
  if (score < 300) {
    return ' a bodhisattva!';
  }
  return ' a buddha!';
}

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

function getQuadraticXY(t, sx, sy, cp1x, cp1y, ex, ey) {
  return {
    x: (1 - t) * (1 - t) * sx + 2 * (1 - t) * t * cp1x + t * t * ex,
    y: (1 - t) * (1 - t) * sy + 2 * (1 - t) * t * cp1y + t * t * ey
  };
}

function drawPrayerflags() {
  context.beginPath();
  context.moveTo(512, 25);
  context.quadraticCurveTo(544, 33, 572, 25);
  context.stroke();

  let flagPosition = getQuadraticXY(0, 512, 25, 544, 33, 572, 25);
  context.fillRect(flagPosition.x, flagPosition.y, 5, 8);

  flagPosition = getQuadraticXY(0.1, 512, 25, 544, 33, 572, 25);
  context.fillRect(flagPosition.x, flagPosition.y, 5, 8);
}

function drawEverything() {
  clean();
  drawBackground();
  drawPlayer();
  drawDog(game.dog1);
  drawDog(game.dog2);
  drawDog(game.dog3);
  drawDog(game.dog4);
  drawPrayerflags();
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
loop();
