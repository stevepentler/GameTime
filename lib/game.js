var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var ImageRenderer = require('./image-renderer');
var imageRenderer = new ImageRenderer();
var images = imageRenderer.init();

var gameRunning = false;
var round = 1;
var Boat = require('./boat');
var Bullet = require('./bullet');
var bullets = [];
var Fish = require('./fish').Fish;
var fishies = require('./fish').fishies;
var collision = require('./collision');
var boat = new Boat({x: canvasWidth/2, y: 25, width: 200, height: 150, velocity: 5, score: 0});
var CanvasPainter = require('./canvas-painter');
var canvasPainter = new CanvasPainter(context);

canvas.addEventListener('keydown', function(key) {
  if (key.which === 37) {
    boat.moveBoatLeft(boat);
  } else if (key.which === 39) {
    boat.moveBoatRight(boat, canvasWidth);
  } else if (key.which === 32 && gameRunning) {
    filterBullets();
    addBullet(bullets);
  } else if (key.which === 13 && gameRunning === false) {
    beginScoring();
  }
});

function drawOcean() {
  context.drawImage(images.ocean, 0, 135);
};



function drawObjects() {
  canvasPainter.drawFish(fishies);
}

function generateFish() {
  drawObjects();
  fishies.forEach(function (fish) {
    fish.moveX(round)
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
        document.getElementById('score').innerHTML = boat.score;
        fishies = fishies.filter(function(eachFish){
          return eachFish !== fish;
        })
      }
    })
  })
};

function beginScoring() {
  gameRunning = true
  displayRound();
  var seconds_left = 20;
  var interval = setInterval(function() {
      document.getElementById('timer').innerHTML = --seconds_left;
      if (seconds_left <= 0) {
        document.getElementById('timer').innerHTML = 'Time\'s up!';
        clearInterval(interval);
        gameRunning = false;
        nextRound();
      }
  }, 1000)
};

function nextRound() {
  if (boat.score >= 1500 && round === 1) {
    round++;
    resetRound();
  } else if (boat.score >= 2500 && round ===2) {
    round++;
    resetRound(round)
  } else if (boat.score >= 3500) {
    displayWin();
  } else {
    displayLose();
  }
};

function resetRound(round) {
  console.log(boat.score)
  console.log(round)
  fishies = [];
  startGame(round);
  fishies = require('./fish').fishies
  generateFish();
}

function displayRound() {
  document.getElementById('round').innerHTML = round;
};

function Game() {
  startGame(round);
};

var startGame = function(round) {
  console.log(round)
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
