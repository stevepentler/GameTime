var $ = require('jquery');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var ImageRenderer = require('./image-renderer');
var imageRenderer = new ImageRenderer();
var images = imageRenderer.init();

var Boat = require('./boat');
var Bullet = require('./bullet');
var bullets = [];
var Fish = require('./fish').Fish;
var fishies = require('./fish').fishies;
var collision = require('./collision');
var boat = new Boat({x: canvasWidth/2, y: 25, width: 200, height: 150, velocity: 5, score: 0});

canvas.addEventListener('keydown', function(key) {
  if (key.which === 37) {
    boat.moveBoatLeft(boat);
  } else if (key.which === 39) {
    boat.moveBoatRight(boat, canvasWidth);
  } else if (key.which === 32) {
    filterBullets();
    addBullet(bullets);
  }
});

function drawOcean() {
  context.drawImage(images.ocean, 0, 135);
};

function generateFish() {
  fishies.forEach(function (fish) {
    fish.draw(context)
    .move()
    .reverseDirection(canvasWidth);
  })
};

function generateBullets(bullets) {
  bullets.forEach(function (bullet) {
    bullet.draw(context)
    .shoot(canvasHeight);
  })
};

function addBullet(bullets) {
  if (bullets.length === 0) {
    var bullet = new Bullet({}, boat);
    bullets.push(bullet);
  }
};

function activeBullet(bullet) {
  if (bullet.y > canvasHeight) {
    return false;
  } else {
    return true;
  }
};

function filterBullets() {
  bullets = bullets.filter(function(eachBullet){
    return activeBullet(eachBullet);
  })
};

function checkForCollision() {
  fishies.forEach(function(fish) {
    bullets.forEach(function(bullet) {
      if (collision(fish, bullet)) {
        boat.score += fish.y;
        console.log(boat.score)
        $("#score").html(boat.score)
        fishies = fishies.filter(function(eachFish){
          return eachFish !== fish;
        })
      }
    })
  })
};

function Game() {
  startGame();
};

var startGame = function() {
  clearScreen();
  drawOcean();
  generateFish();
  generateBullets(bullets);
  boat.draw(context);
  checkForCollision();
};

function clearScreen() {
  context.clearRect(0, 0, canvas.width, canvas.height);
};

module.exports = Game;
