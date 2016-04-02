function ImageRenderer() {
  this.images = {
    boatImage: new Image(),
    smallSharkImage: new Image(),
    smallSharkReverse: new Image()
  }
};

ImageRenderer.prototype.init = function() {
  this.images.boatImage.src = 'assets/Jenny.png';
  this.images.smallSharkImage.src = 'assets/small-shark.png';
  this.images.smallSharkReverse.src = 'assets/small-shark-reverse.png';
  return this.images;
};

module.exports = ImageRenderer;