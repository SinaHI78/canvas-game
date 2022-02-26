class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.score = 0;
    this.time = 60;
    this.context = canvas.getContext('2d');
    this.player = new Character(this, 0, 19);
    this.dog1 = new Doggies(canvas, 16, 18);
    this.dog2 = new Doggies(canvas, 5, 0);
    this.dog3 = new Doggies(canvas, 8, 10);
    this.dog4 = new Doggies(canvas, 15, 4);
  }
  // function returns true when the tile is blocked (is contained in blockedGrid)
  isTileBlocked(destCol, destRow) {
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

  checkCollision() {
    if (
      (this.player.col === this.dog1.col &&
        this.player.row === this.dog1.row) ||
      (this.player.col === this.dog2.col &&
        this.player.row === this.dog2.row) ||
      (this.player.col === this.dog3.col &&
        this.player.row === this.dog3.row) ||
      (this.player.col === this.dog4.col && //
        this.player.row === this.dog4.row)
    ) {
      this.score -= 5;
      dogBark.play();
    }
  }

  playerActions() {
    if (this.player.col === 5 && this.player.row === 7) {
      this.score += 5;
      bellRing.play();
    }
  }

  start() {
    this.interval = setInterval( () =>{
      this.time--;
      console.log(this.time)
      if (this.time === 0) {
        clearInterval(this.interval);
        alert("You're out of time!");
      }
    }, 1000);
    setInterval(()=>{this.moveDog()}, 700);
  }

  runLogic() {
    this.checkCollision();
  }

  doggieMove(dog) {
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
  }

  moveDog() {
    this.doggieMove(this.dog1);
    this.doggieMove(this.dog2);
    this.doggieMove(this.dog3);
    this.doggieMove(this.dog4);
  }
}
