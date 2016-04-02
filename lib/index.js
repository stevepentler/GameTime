var Game = require('./game');
var _ = require('lodash');
// var p5 = require('p5');

var p5 = require('../libraries/p5.js');
var p5Sound = require('../libraries/p5.sound.min.js');

function gameLoop() {
  Game();
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
