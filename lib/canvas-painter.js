var ImageRenderer = require('./image-renderer');
var imageRenderer = new ImageRenderer();
var images = imageRenderer.init();

function CanvasPainter(context) {
  this.context = context;
}

CanvasPainter.prototype = {
  drawFish: function(fishies) {
    var self = this;
    fishies.forEach(function(fish) {
      if (fish.velocity > 0) {
        self.context.drawImage(images.smallShrimp, fish.x, fish.y);
        return fish;
      } else {
        self.context.drawImage(images.smallShrimpReverse, fish.x, fish.y);
        return fish;
      }
    });
  }
};

module.exports = CanvasPainter;