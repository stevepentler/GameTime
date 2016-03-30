var Game = require('./game');

function gameLoop() {
  Game();
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
