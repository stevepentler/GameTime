var Game = require('./game');




requestAnimationFrame(gameLoop);

function gameLoop() {
  // clearScreen();
  Game.Game();

  requestAnimationFrame(gameLoop);
}

