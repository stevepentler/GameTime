var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Boat(options) {
  options = options || {};
  this.x = options.x;
  this.y = options.y;
  this.width = options.width || 10;
  this.height = options.height || 10;
  this.velocity = options.velocity || 5;
}

Boat.prototype.draw = function() {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Boat.prototype.moveBoat = function(boat) {
  canvas.addEventListener('keydown', function(event, boat) {
    if (event.which === 37) {
      console.log('left key stroke');
      Boat.prototype.moveBoatLeft(boat);
    } else if (event.which === 39) {
      Boat.prototype.moveBoatRight;
    }
  });
};

Boat.prototype.moveBoatLeft = function(boat) {
  // console.log("boat x=" + boat.x)
  boat.x -= boat.velocity;
  return boat;
};

Boat.prototype.moveBoatRight = function() {
  this.x + this.velocity;
  return this;
};

// Boat.prototype.shoot = function(event) {
//   canvas.addEventListener('keydown', function(event) {
//   if (event.which === 32) {
//     var bullet = new Bullet({}, {});
//
//   }
// }

module.exports = Boat;