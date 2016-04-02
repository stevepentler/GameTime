function ImageRenderer() {
  this.images = {
    boatImage: new Image(),
    largeSharkImage: new Image()
  }
};

ImageRenderer.prototype.init = function() {
  this.images.boatImage.src = 'assets/Jenny.png';
  this.images.largeSharkImage.src = 'assets/small-shark.png';
  return this.images;
};

module.exports = ImageRenderer;