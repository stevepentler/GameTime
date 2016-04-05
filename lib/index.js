var Game = require('./game');
var _ = require('lodash');
// var p5 = require('p5');

function gameLoop() {
  Game();
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
