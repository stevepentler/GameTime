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
  this.round = options.round || 1;
};

Fish.prototype.draw = function(context) {
  if (this.velocity > 0) {
    context.drawImage(images.smallShrimp, this.x, this.y);
    return this;
  } else {
    context.drawImage(images.smallShrimpReverse, this.x, this.y);
    return this;
  }
};

Fish.prototype.move = function(round) {
  this.x += (this.velocity * round);
  return this;
};

Fish.prototype.reverseDirection = function(canvasWidth) {
  if (this.x + this.width >= canvasWidth || this.x <= 0) {
    this.velocity = -1 * this.velocity;
    return this;
  }
};

var fishies = [];

var fish0 = new Fish({x:45, y: 170});
var fish1 = new Fish({x: 0, y: 200});
var fish2 = new Fish({x: 50, y: 220});
var fish3 = new Fish({x: 50, y: 250, velocity: 2});
var fish4 = new Fish({x: 60, y: 265, velocity: 2});
var fish5 = new Fish({x: 75, y: 280, velocity: 2});
var fish6 = new Fish({x: 100, y: 400});
var fish7 = new Fish({x: 350, y: 500});
var fish8 = new Fish({x: 350, y: 500});
var fish9 = new Fish({x: 550, y: 550, velocity: 2.5});
var fish10 = new Fish({x: 250, y: 590, velocity: -3});
var fish11 = new Fish({x: 800, y: 610, velocity: 3.25});
var fish11 = new Fish({x: 500, y: 670, velocity: -3});

fishies.push(fish0, fish1, fish2, fish3, fish4, fish5, fish6, fish7, fish8, fish9, fish10, fish11);

module.exports = {
                  Fish: Fish,
                  fishies: fishies
                  };
