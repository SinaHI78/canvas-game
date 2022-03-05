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

// images and sprites
const backgroundImage = new Image();
backgroundImage.src = '/images/level1.png';
const playerSprite = new Image();
playerSprite.src = '/images/Female 10-3.png';
const doggieSprite = new Image();
doggieSprite.src = '/images/PC Computer - Stardew Valley - Dog Blonde.png';

// sounds
const dogBark = new Audio('/sounds/mixkit-dog-barking-twice-1.wav');
const bellRing = new Audio('/sounds/mixkit-relaxing-bell-chime-3109.wav');
const flagsInWind = new Audio(
  '/sounds/zapsplat_foley_flag_blow_windy_pole_rope_cut.mp3'
);
const omManiShort = new Audio('/sounds/OmManiShort.m4a');
const tareMantra = new Audio('/sounds/TareMantraNew.m4a');

// function cleaning the canvas
const clean = () => {
  context.clearRect(0, 0, width, height);
};

// start function
function startGame() {
  startScreen.style.display = 'none';
  playingScreen.style.display = '';
  endScreen.style.display = 'none';
  game.start();
}

// stop function
function stopGame() {
  startScreen.style.display = 'none';
  playingScreen.style.display = 'none';
  endScreen.style.display = '';
  game.stop();

  // set game end text
  document.getElementById('final-score').innerHTML = game.score;
  document.getElementById('realm').innerHTML = getRealm(game.score);
}

// setting the final result depending on the score
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

// update score and time in playing screen
function updateScore() {
  const scoreTag = document.getElementById('score');
  scoreTag.innerHTML = game.score;
}

function updateTime() {
  const timeTag = document.getElementById('time');
  timeTag.innerHTML = game.time;
}

// drawing the grid image
function drawBackground() {
  context.drawImage(backgroundImage, 0, 0, width, height);
}
// drawing player and adding different sprites for the movement
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

  if (game.player.dir === 'up') {
    context.drawImage(
      playerSprite,
      gridSize,
      gridSize * 3,
      gridSize,
      gridSize,
      x,
      y,
      gridSize,
      gridSize
    );
  }
  if (game.player.dir === 'right') {
    context.drawImage(
      playerSprite,
      gridSize,
      gridSize * 2,
      gridSize,
      gridSize,
      x,
      y,
      gridSize,
      gridSize
    );
  }
  if (game.player.dir === 'left') {
    context.drawImage(
      playerSprite,
      gridSize,
      gridSize * 1,
      gridSize,
      gridSize,
      x,
      y,
      gridSize,
      gridSize
    );
  }
}

// drawing dog and adding different sprites for the movement
function drawDog(dog) {
  let x = gridSize * dog.col;
  let y = gridSize * dog.row;
  if (dog.dir === 'down') {
    context.drawImage(
      doggieSprite,
      gridSize * 1,
      gridSize * 4,
      gridSize,
      gridSize,
      x,
      y,
      gridSize,
      gridSize
    );
  } else if (dog.dir === 'up') {
    context.drawImage(
      doggieSprite,
      gridSize * 1,
      gridSize * 2,
      gridSize,
      gridSize,
      x,
      y,
      gridSize,
      gridSize
    );
  } else if (dog.dir === 'left') {
    context.drawImage(
      doggieSprite,
      gridSize,
      gridSize * 3,
      gridSize,
      gridSize,
      x,
      y,
      gridSize,
      gridSize
    );
  } else if (dog.dir === 'right') {
    context.drawImage(
      doggieSprite,
      gridSize * 1,
      gridSize * 1,
      gridSize,
      gridSize,
      x,
      y,
      gridSize,
      gridSize
    );
  }
}

// drawing the flag line with a function to make the it hang down
function getQuadraticXY(t, sx, sy, cp1x, cp1y, ex, ey) {
  return {
    x: (1 - t) * (1 - t) * sx + 2 * (1 - t) * t * cp1x + t * t * ex,
    y: (1 - t) * (1 - t) * sy + 2 * (1 - t) * t * cp1y + t * t * ey
  };
}

// drawing the prayer flags
function drawFlag(x, y) {
  context.beginPath();
  context.moveTo(x, y);
  context.quadraticCurveTo(x + 32, y + 15, x + 60, y);
  context.stroke();
  // drawing each single flag rectangle
  let flagPosition = getQuadraticXY(0.03, x, y, x + 32, y + 15, x + 60, y);
  //context.fillStyle = '#' + Math.floor(Math.random() * 16777215).toString(16);
  context.fillStyle = '#3e77b9';
  context.fillRect(flagPosition.x, flagPosition.y, 5, 8);

  flagPosition = getQuadraticXY(0.2, x, y, x + 32, y + 15, x + 60, y);
  context.fillStyle = '#e7dd6a';
  context.fillRect(flagPosition.x, flagPosition.y, 5, 8);

  flagPosition = getQuadraticXY(0.325, x, y, x + 32, y + 15, x + 60, y);
  context.fillStyle = '#3d5520';
  context.fillRect(flagPosition.x, flagPosition.y, 5, 8);

  flagPosition = getQuadraticXY(0.465, x, y, x + 32, y + 15, x + 60, y);
  context.fillStyle = '#a72f3f';
  context.fillRect(flagPosition.x, flagPosition.y, 5, 8);

  flagPosition = getQuadraticXY(0.585, x, y, x + 32, y + 15, x + 60, y);
  context.fillStyle = '#fafafa';
  context.fillRect(flagPosition.x, flagPosition.y, 5, 8);

  flagPosition = getQuadraticXY(0.705, x, y, x + 32, y + 15, x + 60, y);
  context.fillStyle = '#3e77b9';
  context.fillRect(flagPosition.x, flagPosition.y, 5, 8);

  flagPosition = getQuadraticXY(0.825, x, y, x + 32, y + 15, x + 60, y);
  context.fillStyle = '#e7dd6a';
  context.fillRect(flagPosition.x, flagPosition.y, 5, 8);
}

// function that calls the drawFlag function with certain parameters 
// when the player actions allow it
function drawPrayerflags() {
  if (game.flag1) {
    drawFlag(512, 25);
  }
  if (game.flag2) {
    drawFlag(480, 57);
  }
  if (game.flag3) {
    drawFlag(544, 57);
  }
  if (game.flag4) {
    drawFlag(512, 89);
  }
}

function drawEverything() {
  clean();
  drawBackground();
  drawPlayer();
  drawDog(game.dog1);
  drawDog(game.dog2);
  drawDog(game.dog3);
  drawDog(game.dog4);
  drawDog(game.dog5);
  drawPrayerflags();
  updateScore();
  updateTime();
}

// make the player move on keydown event
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

function loop() {
  window.requestAnimationFrame(() => {
    drawEverything();
    loop();
  });
}
loop();
