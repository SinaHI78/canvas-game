const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = 640;
const height = 640;
const gridSize = 32;
let score = 0;
let time = 60;

// images
const backgroundImage = new Image();
backgroundImage.src = '/images/level1.png';
const playerSprite = new Image();
playerSprite.src = '/images/Female 10-3.png';

const clean = () => {
  context.clearRect(0, 0, width, height);
};

// function returns true when the tile is blocked (is contained in blockedGrid)
function isTileBlocked(destCol, destRow) {
  // loop to iterate over all the objects in the array
  // to check if each blocked tile coincides with
  // the current position plus/minus 1 (the future position)
  for (let i = 0; i < blockedGrid.length; i++) {
    if (
      destCol === blockedGrid[i].destCol &&
      destRow === blockedGrid[i].destRow
    ) {
      return true;
    }
  }
  return false;
}

function drawBackground() {
  context.drawImage(backgroundImage, 0, 0, width, height);
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

function doggieMove(dog) {
  let randomNum = Math.random();
  if (randomNum < 0.25) {
    dog.moveLeft();
  } else if (randomNum < 0.5) {
    dog.moveRight();
  } else if (randomNum < 0.75) {
    dog.moveUp();
  } else {
    dog.moveDown();
  }
  drawEverything();
}

function moveDog() {
  doggieMove(dog1);
  doggieMove(dog2);
  doggieMove(dog3);
  doggieMove(dog4);
}

setInterval(moveDog, 1500);

/* const drawScore = () => {
    document.getElementById('score').innerHTML = score;
    score++;
  }

  const drawTime = setInterval(function(){
    document.getElementById('time').innerHTML = time;
    time--;
  if (time === 0){
    clearInterval(interval);
    alert("You're out of time!");
  }
}, 1000);
}*/

function drawEverything() {
  clean();
  drawBackground();
  drawPlayer();
  dog1.draw();
  dog2.draw();
  dog3.draw();
  dog4.draw();
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
