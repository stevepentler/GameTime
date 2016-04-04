var ImageRenderer = require('./image-renderer');
var imageRenderer = new ImageRenderer();
var images = imageRenderer.init();

function Boat(options) {
  options = options || {};
  this.x = options.x || 500;
  this.y = options.y || 25;
  this.width = options.width || 10;
  this.height = options.height || 10;
  this.velocity = options.velocity || 5;
  this.score = 0;
};

Boat.prototype.moveBoatLeft = function(boat) {
  if (boat.x > 15) {
    boat.x -= boat.velocity;
    return boat;
  }
};

Boat.prototype.moveBoatRight = function(boat, canvasWidth) {
  if (boat.x + boat.width < canvasWidth) {
    this.x += this.velocity;
    return this;
  }
};

module.exports = Boat;
