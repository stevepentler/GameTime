var Fish = require('./fish');

var fishies = [];

var fish1 = new Fish({x: 0, y: 200});
var fish2 = new Fish({x: 100, y: 400});
var fish3 = new Fish({x: 50, y: 250, width: 6, height: 4, velocity: 2});
var fish4 = new Fish({x: 55, y: 260, width: 6, height: 4, velocity: 2});
var fish5 = new Fish({x: 65, y: 270, width: 6, height: 4, velocity: 2});
var fish6 = new Fish({x: 350, y: 500});
var fish7 = new Fish({x: 350, y: 500});
var fish8 = new Fish({x: 550, y: 550, width: 50, height: 20, velocity: 0.5});

fishies.push(fish1, fish2, fish3, fish4, fish5, fish6, fish7, fish8);

module.exports = fishies;