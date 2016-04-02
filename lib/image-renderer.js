function ImageRenderer() {
  this.images = {
    boatImage: new Image(),
    fishImage: new Image()
  };
};

ImageRenderer.prototype.init = function() {
  this.images.boatImage.src = 'assets/Jenny.png';

  return this.images;
};

module.exports = ImageRenderer;