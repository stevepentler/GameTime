function Bullet(options, boat) {
  options = options || {};
  this.x = boat.x - 5;
  this.y = boat.y + 80;
  this.width = options.width || 6;
  this.height = options.height || 6;
  this.velocity = options.velocity || 4;
}

module.exports = Bullet;
