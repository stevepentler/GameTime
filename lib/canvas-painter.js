var ImageRenderer = require('./image-renderer');
var imageRenderer = new ImageRenderer();
var images = imageRenderer.init();
console.log(images)

function CanvasPainter(context) {
  this.context = context;
};

CanvasPainter.prototype = {
  drawFish: function(fish) {
    // fishies.forEach(function(fish) {
      if (fish.velocity > 0) {
        this.context.drawImage(images.smallShrimp, fish.x, fish.y);
        return fish;
      } else {
        this.context.drawImage(images.smallShrimpReverse, fish.x, fish.y);
        return fish;
      }
    // })
  }
}



// function drawObjects() {
//   fishies.forEach(function(fish) {
//     canvasPainter.drawFish(fish);
//   }
// }

// var CanvasPainter = require('./canvas-painter');
// var canvasPainter = new CanvasPainter(context);

module.exports = CanvasPainter;