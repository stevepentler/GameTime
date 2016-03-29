var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Bullet(options, boat) {
  console.log(options)
  console.log("boat=" + boat.x)
  options = options || {};
  this.x = boat.x - 10;
  this.y = boat.y - 10;
  this.width = options.width || 4;
  this.height = options.height || 9;
  this.velocity = options.velocity || 10;
}

Bullet.prototype.move = function() {
  this.y += this.velocity;
  return this;
};

Bullet.prototype.draw = function() {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};


// var bullet = new Bullet({}, boat);

module.exports = Bullet;