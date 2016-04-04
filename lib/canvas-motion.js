function CanvasMotion(canvasWidth) {
  this.canvasWidth = canvasWidth;
}

CanvasMotion.prototype = {
  moveFish: function(fishies, round) {
    var self = this;
    fishies.forEach(function(fish) {
      moveFishX(fish, round);
      reverseFishDirection(fish);
    });
  }
  





};


function moveFishX(fish, round) {
  fish.x += (fish.velocity * round);
  return fish;
}

function reverseFishDirection(fish) {
  if (fish.x + fish.width >= self.canvasWidth || fish.x <= 0) {
    fish.velocity = -1 * fish.velocity;
    return fish;
  }
}

module.exports = CanvasMotion;