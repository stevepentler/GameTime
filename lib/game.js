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
var winsCounter = 0;
var bubbaGump = new Audio('assets/bubba-gump.mp3');

var $ = require('jquery');
var p5Amplitude;
var $round = $('#round');
var $score = $('#score');
var $gameStatus = $('#game-status');
var $winningScores = $('#winning-scores');
var $continueOptions = $('#continueOptions');

$(document).on('keydown', function(key) {
  if (key.which === 37) {
    canvasMotion.moveBoatLeft(boat);
  } else if (key.which === 39) {
    canvasMotion.moveBoatRight(boat, canvasWidth);
  } else if (key.which === 32 && gameRunning) {
    filterBullets();
    addBullet(bullets);
  } else if (key.which === 13 && !gameRunning) {
    beginScoring();
  }
});

function drawObjects() {
  canvasPainter.drawOcean();
  canvasPainter.drawFish(fishies);
  canvasPainter.drawBoat(boat);
  canvasPainter.drawBullet(bullets);
}

var moveObjects = function(p5Amplitude) {
  canvasMotion.moveFish(fishies, round, p5Amplitude);
  canvasMotion.moveBullet(bullets);
};

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
  var seconds_left = 20;
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
  if (boat.score >= 3000 && round === 1) {
    round++;
    advanceRound();
    resetRound();
  } else if (boat.score >= 6000 && round === 2) {
    round++;
    advanceRound();
    resetRound(round);
  } else if (boat.score >= 9000 && round === 3) {
    playerWins();
    return winsCounter ++;
  } else {
    playerLoses();
  }
}

function advanceRound() {
  $gameStatus.text('Nice catch!');
  $continueOptions.text('Press Enter for next round!');
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
  bubbaGump.play();
  $gameStatus.text('You win!');
  $continueOptions.text('Press Enter to play again!');
  sessionStorage.setItem(winsCounter, boat.score);
  var wins = sessionStorage;
  $winningScores.prepend().html("Last Score: " + wins[winsCounter]);
  clearScoreAndRound();
  displayRound();
  resetRound();
}

function playerLoses() {
  $gameStatus.html('Shrimpin\' Ain\'t Easy!');
  $continueOptions.text('Press Enter to play again!');
  clearScoreAndRound();
  resetRound();
}

function displayScore() {
  $score.text("Score: " + boat.score.toString());
}

function displayRound() {
  $round.text("Round: " + round.toString());
}

function removeGameStatus() {
  if (gameRunning) {
    $gameStatus.text("");
    $continueOptions.text("");
  }
}

function Game() {
  startGame(round);
}

var startGame = function() {
  p5Amplitude = $('.amplitudeLevel').text();
  clearScreen();
  drawObjects();
  moveObjects(p5Amplitude);
  checkForCollision();
};

function clearScreen() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

module.exports = Game;
