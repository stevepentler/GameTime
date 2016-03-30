var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var Game = require('./game');
console.log(Game)


function gameLoop() {
  clearScreen();
  Game();

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

function clearScreen() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}