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
      direction(fish, self.context);
    });
  },

  drawBullet: function(bullets) {
    var self = this;
    bullets.forEach(function(bullet) {
      self.context.drawImage(images.bullet, bullet.x, bullet.y);
      return bullet;
    });
  }, 

  drawBoat: function(boat) {
    this.context.drawImage(images.boatImage, boat.x, boat.y);
  }, 

  drawOcean: function() {
    this.context.drawImage(images.ocean, 0, 135);
  }

};

function direction(fish, context) {
  if (fish.velocity > 0) {
    context.drawImage(images.smallShrimp, fish.x, fish.y);
    return fish;
  } else {
    context.drawImage(images.smallShrimpReverse, fish.x, fish.y);
    return fish;
  }
}

module.exports = CanvasPainter;