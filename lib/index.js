var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Fish(options) {
  options = options || {};
  this.x = options.x;
  this.y = options.y;
  this.height = options.height || 10;
  this.width = options.width || 10;
 }


Fish.prototype.draw = function() {
  context.fillRect(this.x, this.y, this.height, this.width);
  return this;
};

Fish.prototype.move = function() {
  this.x++;
  return this;
}

var fish1 = new Fish({x: 200, y: 200});
var fish2 = new Fish({x: 400, y: 400});
var fish3 = new Fish({x: 550, y: 550});

var fishies = [fish1, fish2, fish3];

requestAnimationFrame(gameLoop);

function gameLoop() {
  clearScreen();
  fishies.forEach(function (fish) { fish.draw().move();});
  requestAnimationFrame(gameLoop);
}

function clearScreen() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}