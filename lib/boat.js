function Boat(options) {
  options = options || {};
  this.x = options.x || 500;
  this.y = options.y || 25;
  this.width = options.width || 10;
  this.height = options.height || 10;
  this.velocity = options.velocity || 5;
  this.score = 0;
} 

module.exports = Boat;
