function Fish(options) {
  options = options || {};
  this.x = options.x || 0;
  this.y = options.y || 400;
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

Fish.prototype.reverseDirection = function(canvasWidth) {
  if (this.x > canvasWidth || this.x <= 0) {
    this.velocity = -1 * this.velocity;
    return this;
  }
};

module.exports = Fish;
