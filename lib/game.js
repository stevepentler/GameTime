var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var canvasWidth =  canvas.width;
var canvasHeight =  canvas.height;

var Boat = require('./boat');
var Bullet = require('./bullet');
var fishies = require('./generate-fish');
// var keyEvents = require('./key-events');

var bullets = [];

var boat = new Boat({x: canvasWidth/2, y: 25, width: 100, height: 50, velocity: 5});

canvas.addEventListener('keydown', function(key) {
//   var keyNumber = event.keyCode;
//   keyEvents(keyNumber);
 
  if (key.which === 37) {
    boat.moveBoatLeft(boat);
  } else if (key.which === 39) {
    boat.moveBoatRight(boat);
  } else if (key.which === 32) {
    var bullet = new Bullet({}, boat);
    bullets.push(bullet);
    console.log(bullet + "x = " + bullet.x);
  }
});


function Game() {
  clearScreen();
  startGame();
}

function startGame() {
  generateFish(fishies);
  boat.draw(context);
  generateBullets(bullets);

}

function clearScreen() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function generateFish(fishies) {
  return fishies.forEach(function (fish) { fish.draw(context).move().reverseDirection(canvasWidth);});
}

function generateBullets(bullets) {
  bullets.forEach(function(bullet) {bullet.draw(context).shoot(canvasHeight)});
}


module.exports = Game;
