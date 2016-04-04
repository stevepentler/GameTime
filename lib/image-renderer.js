function ImageRenderer() {
  this.images = {
    boatImage: new Image(),
    smallShark: new Image(),
    smallSharkReverse: new Image(),
    smallShrimp: new Image(),
    smallShrimpReverse: new Image(),
    bullet: new Image(),
    ocean: new Image()
  }
};

ImageRenderer.prototype.init = function() {
  this.images.boatImage.src = 'assets/Jenny.png';
  this.images.smallShark.src = 'assets/small-shark.png';
  this.images.smallSharkReverse.src = 'assets/small-shark-reverse.png';
  this.images.smallShrimp.src = 'assets/small-shrimp.png';
  this.images.smallShrimpReverse.src = 'assets/small-shrimp-reverse.png';
  this.images.bullet.src = 'assets/fishing_net.png';
  this.images.ocean.src = 'assets/ocean.png';
  return this.images;
};

module.exports = ImageRenderer;
