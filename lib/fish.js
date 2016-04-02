var ImageRenderer = require('./image-renderer');

var imageRenderer = new ImageRenderer();
var images = imageRenderer.init();


function Fish(options) {
  options = options || {};
  this.x = options.x || 0;
  this.y = options.y || 400;
  this.width = options.width || 50;
  this.height = options.height || 25;
  this.velocity = options.velocity || 1;
 }

Fish.prototype.draw = function(context) {
  if (this.velocity > 0) {
    context.drawImage(images.smallShrimp, this.x, this.y);
    return this;
  } else {
    context.drawImage(images.smallShrimpReverse, this.x, this.y);
    return this;
  }
};

Fish.prototype.move = function() {
  this.x += this.velocity;
  return this;
};

Fish.prototype.reverseDirection = function(canvasWidth) {
  if (this.x + this.width >= canvasWidth || this.x <= 0) {
    this.velocity = -1 * this.velocity;
    return this;
  }
};

module.exports = Fish;
