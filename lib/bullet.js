function Bullet(options, boat) {
  options = options || {};
  this.x = boat.x - 10;
  this.y = boat.y - 10;
  this.width = options.width || 4;
  this.height = options.height || 9;
  this.velocity = options.velocity || 4;
}

Bullet.prototype.draw = function(context) {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Bullet.prototype.shoot = function(canvasHeight) {
  while (this.y < canvasHeight) {
    this.y += this.velocity;
    return this;
  }
};

module.exports = Bullet;
