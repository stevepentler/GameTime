var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var Boat = require('./boat');
var Bullet = require('./bullet');
var bullets = [];
var fishies = require('./fish').fishies;
var collision = require('./collision');
var boat = new Boat({x: canvasWidth/2, y: 25, width: 200, height: 150, velocity: 5, score: 0});
var gameRunning = false;
var round = 1;
var CanvasPainter = require('./canvas-painter');
var canvasPainter = new CanvasPainter(context);
var CanvasMotion = require('./canvas-motion');
var canvasMotion = new CanvasMotion(canvasWidth, canvasHeight);

canvas.addEventListener('keydown', function(key) {
  if (key.which === 37) {
    canvasMotion.moveBoatLeft(boat);
  } else if (key.which === 39) {
    canvasMotion.moveBoatRight(boat, canvasWidth);
  } else if (key.which === 32 && gameRunning) {
    filterBullets();
    addBullet(bullets);
  } else if (key.which === 13 && !gameRunning) {
    beginScoring();
  } else if (key.which === 71 && !gameRunning) {
    game();
  }
});

function drawObjects() {
  canvasPainter.drawOcean();
  canvasPainter.drawFish(fishies);
  canvasPainter.drawBoat(boat);
  canvasPainter.drawBullet(bullets);
}

function moveObjects() {
  canvasMotion.moveFish(fishies, round);
  canvasMotion.moveBullet(bullets);
}

function addBullet(bullets) {
  if (bullets.length === 0) {
    var bullet = new Bullet({}, boat);
    bullets.push(bullet);
  }
}

function filterBullets() {
  bullets = bullets.filter(function(eachBullet){
    return activeBullet(eachBullet);
  });
}

function activeBullet(bullet) {
  if (bullet.y > canvasHeight) {
    return false;
  } else {
    return true;
  }
}

function checkForCollision() {
  fishies.forEach(function(fish) {
    bullets.forEach(function(bullet) {
      if (collision(fish, bullet)) {
        boat.score += fish.y;
        displayScore();
        fishies = fishies.filter(function(eachFish){
          return eachFish !== fish;
        });
      }
    });
  });
}

function beginScoring() {
  gameRunning = true;
  displayRound();
  removeGameStatus();
  gameTimer();
}

function gameTimer() {
  var seconds_left = 8;
  var interval = setInterval(function() {
    document.getElementById('timer').innerHTML = --seconds_left + " seconds";
    if (seconds_left <= 0) {
      document.getElementById('timer').innerHTML = 'Time\'s up!';
      clearInterval(interval);
      gameRunning = false;
      bullets = [];
      nextRound();
    }
  }, 1000);
}

function nextRound() {
  if (boat.score >= 500 && round === 1) {
    round++;
    advanceRound();
    resetRound();
  } else if (boat.score >= 500 && round === 2) {
    round++;
    advanceRound();
    resetRound(round);
  } else if (boat.score >= 500 && round === 3) {
    playerWins();
  } else {
    playerLoses();
  }
}

function advanceRound() {
  document.getElementById('game-status').innerHTML = 'Nice catch! On to the next round'; 
}

function resetRound(round) {
  fishies = [];
  startGame(round);
  fishies = require('./fish').fishies;
}

function clearScoreAndRound() {
  boat.score = 0;
  round = 1;
  displayScore();
}

function playerWins() {
  clearScoreAndRound();
  document.getElementById('game-status').innerHTML = 'You win! <h3>musta been born on the bayou!</h3> <h3>Press Enter to play again!</h3>';
  displayRound();
  resetRound();
  game();
}

function playerLoses() {
  clearScoreAndRound();
  document.getElementById('game-status').innerHTML = 'Shrimpin\' Ain\'t Easy! <h3>Press Enter to play again!';
  resetRound();
  game();
}

function displayScore() {
  document.getElementById('score').innerHTML = "Current Score: " + boat.score.toString();
}

function displayRound() {
  document.getElementById('round').innerHTML = "Round: " + round.toString();
}

function removeGameStatus() {
  if (gameRunning) {
    document.getElementById('game-status').innerHTML = "";
  }
}

function Game() {
  startGame(round);
}

var startGame = function() {
  clearScreen();
  drawObjects();
  moveObjects();
  checkForCollision();
};

function clearScreen() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

module.exports = Game;
