var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var canvasWidth =  canvas.width;
var canvasHeight =  canvas.height;

// var bullet = new Bullet({}, boat);
var Fish = require('./fish');
var Boat = require('./boat');
var Bullet = require('./bullet');

var bullets = []

var boat = new Boat({x: canvasWidth/2, y: 25, width: 100, height: 50, velocity: 5});

canvas.addEventListener('keydown', function(key) {
  if (key.which === 37) {
    boat.moveBoatLeft(boat);
  } else if (key.which === 39) {
    boat.moveBoatRight(boat);
  }
});

canvas.addEventListener('keypress', function(key) {
  if (key.which === 32) {
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

var fish1 = new Fish({x: 0, y: 200});
var fish2 = new Fish({x: 100, y: 400});
var fish3 = new Fish({x: 350, y: 500});
var fish4 = new Fish({x: 550, y: 550, width: 50, height: 20, velocity: 0.5});

var fishies = [fish1, fish2, fish3, fish4];

function generateFish(fishies) {
  return fishies.forEach(function (fish) { fish.draw(context).move().reverseDirection(canvasWidth);});
}

function generateBullets(bullets) {
  bullets.forEach(function(bullet) {bullet.draw(context).shoot(canvasHeight)});
}


module.exports = Game;
