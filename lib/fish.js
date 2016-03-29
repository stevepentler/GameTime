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
  console.log('fish 1');
  return this;
};

var fish1 = new Fish({x: 200, y: 200});

fishies = [fish1];

requestAnimationFrame(gameLoop);

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  // clearScreen();
  fishies.forEach(function (fish) { fish.draw();});
  requestAnimationFrame(gameLoop);
}

