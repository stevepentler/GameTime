function Fish(options) {
  this.x = options.x || 0;
  this.y = options.y || 400;
  this.width = options.width || 50;
  this.height = options.height || 25;
  this.velocity = options.velocity || 0.40;
  this.round = options.round || 1;
}

var fishies = [];

var fish0 = new Fish({x: 90, y: 160, velocity: 0.35});
var fish1 = new Fish({x: 3, y: 200, velocity: 0.35});
var fish2 = new Fish({x: 200, y: 220, velocity: 0.30});
var fish3 = new Fish({x: 40, y: 250, velocity: 0.45});
var fish4 = new Fish({x: 60, y: 265, velocity: 0.45});
var fish5 = new Fish({x: 75, y: 280, velocity: 0.45});
var fish6 = new Fish({x: 100, y: 310, velocity: 0.55});
var fish7 = new Fish({x: 210, y: 350, velocity: -0.40});
var fish8 = new Fish({x: 210, y: 400, velocity: -0.35});
var fish9 = new Fish({x: 550, y: 420, velocity: 0.35});
var fish10 = new Fish({x: 300, y: 430, velocity: 0.35});
var fish11 = new Fish({x: 680, y: 460, velocity: -0.35});

fishies.push(fish0, fish1, fish2, fish3, fish4, fish5, fish6, fish7, fish8, fish9, fish10, fish11);

module.exports = {
                  Fish: Fish,
                  fishies: fishies
                  };
