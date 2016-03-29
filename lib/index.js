
var Game = require('./game');

requestAnimationFrame(gameLoop);

function gameLoop() {
  clearScreen();
  Game.Game();
  // boat.draw().moveBoat();
  bullet.draw().move();
  requestAnimationFrame(gameLoop);
}

function clearScreen() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}



// function Boat(options) {
//   options = options || {};
//   this.x = options.x;
//   this.y = options.y;
//   this.width = options.width || 10;
//   this.height = options.height || 10;
//   this.velocity = options.velocity || 5;
// }

// Boat.prototype.draw = function() {
//   context.fillRect(this.x, this.y, this.width, this.height);
//   return this;
// };

// Boat.prototype.moveBoat = function(boat) {
//   canvas.addEventListener('keydown', function(event, boat) {
//     if (event.which === 37) {
//       console.log('left key stroke');
//       Boat.prototype.moveBoatLeft(boat);
//     } else if (event.which === 39) {
//       Boat.prototype.moveBoatRight;
//     }
//   });
// };

// Boat.prototype.moveBoatLeft = function(boat) {
//   // console.log("boat x=" + boat.x)
//   boat.x -= boat.velocity;
//   return boat;
// };

// Boat.prototype.moveBoatRight = function() {
//   this.x + this.velocity;
//   return this;
// };

// // Boat.prototype.shoot = function(event) {
// //   canvas.addEventListener('keydown', function(event) {
// //   if (event.which === 32) {
// //     var bullet = new Bullet({}, {});
// //
// //   }
// // }

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

// var boat = new Boat({x: canvas.width/2, y: 25, width: 100, height: 50, velocity: 5});

var bullet = new Bullet({}, boat);

// function center(object) {
//   return (object.x + object.width)/2;
// };


