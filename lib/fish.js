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

Fish.prototype.draw = function(context) {
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

module.exports = Fish;
