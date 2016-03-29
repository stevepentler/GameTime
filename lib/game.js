var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var Fish = require('./fish');
var Boat = require('./boat');

function Game() {
  startGame();
}


var fish1 = new Fish({x: 0, y: 200});
var fish2 = new Fish({x: 100, y: 400});
var fish3 = new Fish({x: 350, y: 500});
var fish4 = new Fish({x: 550, y: 550, width: 50, height: 20, velocity: 0.5});

var fishies = [fish1, fish2, fish3, fish4];

function generateFish(fishies) {
  return fishies.forEach(function (fish) { fish.draw(context).move().reverseDirection();});
};

var boat = new Boat({x: canvas.width/2, y: 25, width: 100, height: 50, velocity: 5});

function startGame() {
  generateFish(fishies);
  boat.draw().moveBoat();

}

module.exports = Game(context);