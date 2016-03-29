var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Fish(options) {
  options = options || {};
  this.x = options.x;
  this.y = options.y;
  this.width = options.width || 10;
  this.height = options.height || 10;
  this.velocity = options.velocity || 1;
 }

Fish.prototype.draw = function() {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Fish.prototype.move = function() {
  this.x += this.velocity;
  return this;
};

Fish.prototype.reverseDirection = function() {
  if (this.x > canvas.width || this.x <= 0) {
    this.velocity = -1 * this.velocity;
    return this;
  }
};

function boat() {
  context.fillRect(canvas.width/2, 25, 100, 50);
}


var fish1 = new Fish({x: 0, y: 200});
var fish2 = new Fish({x: 100, y: 400});
var fish3 = new Fish({x: 350, y: 500});
var fish4 = new Fish({x: 550, y: 550, width: 50, height: 20, velocity: 0.5});

var fishies = [fish1, fish2, fish3, fish4];

requestAnimationFrame(gameLoop);

function gameLoop() {
  clearScreen();
  fishies.forEach(function (fish) { fish.draw().move().reverseDirection();});
  boat()
  console.log(boat)
  requestAnimationFrame(gameLoop);
}

function clearScreen() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}