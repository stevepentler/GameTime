var canvas = document.getElementById('game');

function Boat(options) {
  options = options || {};
  this.x = options.x;
  this.y = options.y;
  this.width = options.width || 10;
  this.height = options.height || 10;
  this.velocity = options.velocity || 5;
}

Boat.prototype.draw = function(context) {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Boat.prototype.moveBoatLeft = function(boat) {
  boat.x -= boat.velocity;
  return boat;
};

Boat.prototype.moveBoatRight = function(boat) {
  this.x += this.velocity;
  return this;
};

module.exports = Boat;
