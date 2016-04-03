var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var canvasWidth =  canvas.width;
var canvasHeight =  canvas.height;

var ImageRenderer = require('./image-renderer');

var imageRenderer = new ImageRenderer();
var images = imageRenderer.init();

var score = 0;

function drawOcean() {
  context.drawImage(images.ocean, 0, 135);
}

var Boat = require('./boat');
var Bullet = require('./bullet');
var fishies = require('./generate-fish');
var hit = require('./collision');
// var keyEvents = require('./key-events');

var bullets = [];

var boat = new Boat({x: canvasWidth/2, y: 25, width: 200, height: 150, velocity: 5});

canvas.addEventListener('keydown', function(key) {
//   var keyNumber = event.keyCode;
//   keyEvents(keyNumber);

  if (key.which === 37) {
    boat.moveBoatLeft(boat);
  } else if (key.which === 39) {
    boat.moveBoatRight(boat, canvasWidth);
  } else if (key.which === 32) {
    filterBullets();
    addBullet(bullets);
  }
});

function addBullet(bullets) {
  if (bullets.length === 0) {
    var bullet = new Bullet({}, boat);
    bullets.push(bullet);
  }
}

function activeBullet(bullet) {
  if (bullet.y > canvasHeight) {
    return false;
  } else {
    return true;
  }
}

function filterBullets() {
  bullets = bullets.filter(function(eachBullet){
    return activeBullet(eachBullet);
  });
}

function generateFish(fishies) {
  fishies.forEach(function (fish) {
    fish.draw(context).move()
        .reverseDirection(canvasWidth);
  });
}

function generateBullets(bullets) {
  bullets.forEach(function (bullet) {
    bullet.draw(context)
          .shoot(canvasHeight);
  });
}

function checkForCollision() {
  fishies.forEach(function(fish) {
    bullets.forEach(function(bullet) {
      if (hit.collision(fish, bullet)) {
        fishies = fishies.filter(function(eachFish){
        return eachFish !== fish;
        hit.updateScore();
        });
      }
    });
  });
}

function Game() {
  clearScreen();
  startGame();
}

function startGame() {
  drawOcean();
  generateFish(fishies);
  boat.draw(context);
  generateBullets(bullets);
  checkForCollision();
}

function clearScreen() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

module.exports = Game;
