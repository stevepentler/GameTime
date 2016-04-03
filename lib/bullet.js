var ImageRenderer = require('./image-renderer');
var imageRenderer = new ImageRenderer();
var images = imageRenderer.init();

function Bullet(options, boat) {
  options = options || {};
  this.x = boat.x - 5;
  this.y = boat.y + 80;
  this.width = options.width || 6;
  this.height = options.height || 6;
  this.velocity = options.velocity || 4;
}

Bullet.prototype.draw = function(context) {
  context.drawImage(images.bullet, this.x, this.y);
  return this;
};

Bullet.prototype.shoot = function(canvasHeight) {
  while (this.y < canvasHeight) {
    this.y += this.velocity;
    return this;
  }
};

module.exports = Bullet;
