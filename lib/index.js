var Game = require('./game');

function gameLoop() {
  new Game();
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
