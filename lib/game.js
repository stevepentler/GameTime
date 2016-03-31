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
    boat.moveBoatRight(boat, canvasWidth);
  } else if (key.which === 32) {
    var bullet = new Bullet({}, boat);
    bullets.push(bullet);
  }
});

function generateFish(fishies) {
  fishies.forEach(function (fish) { fish.draw(context).move().reverseDirection(canvasWidth);});
}

function generateBullets(bullets) {
  bullets.forEach(function (bullet) {
    bullet.draw(context).shoot(canvasHeight);
  });
}

function xCollision(fish, bullet) {
  if (fish.x <= bullet.x && (bullet.x + bullet.width) <= (fish.x + fish.width)) {
    return true; 
  } else {
    return false;
  }
}

function yCollision(fish, bullet) {
  if (fish.y <= bullet.y && bullet.y <= (fish.y + fish.height)) {
    return true;
  } else {
    return false;
  }
}

function checkForCollision() {
  fishies.forEach(function(fish) {
    bullets.forEach(function(bullet) {
      if (collision(fish, bullet)) {
        return fish;
      }
    });
  });
}

function collision(fish, bullet) {
  if (xCollision(fish, bullet) && yCollision(fish, bullet)) {
    console.log("COLLISION");
    console.log(fish);
    updateScore(fish.y);
    return true;
  }
}

function updateScore(value) {
  console.log("value = " + value);
  var updatedScore = updatedScore || 0;
  console.log(updatedScore)
  updatedScore = (updatedScore += value);
  console.log(updatedScore);
  return updatedScore;
}

function Game() {
  clearScreen();
  startGame();
}

function startGame() {
  generateFish(fishies);
  boat.draw(context);
  generateBullets(bullets);
  checkForCollision();
}

function clearScreen() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

module.exports = Game;