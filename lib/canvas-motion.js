function CanvasMotion(canvasWidth, canvasHeight) {
  this.canvasWidth = canvasWidth;
  this.canvasHeight = canvasHeight;
}

CanvasMotion.prototype = {
  moveFish: function(fishies, round) {
    var self = this;
    fishies.forEach(function(fish) {
      moveFishX(fish, round);
      reverseFishDirection(fish, self.canvasWidth);
    });
  },

  moveBullet: function(bullets) {
    var self = this;
    console.log(self)
    bullets.forEach(function(bullet) {
      moveBulletY(bullet, self.canvasHeight);
    });
  }

};


function moveFishX(fish, round) {
  fish.x += (fish.velocity * round);
  return fish;
}

function reverseFishDirection(fish, canvasWidth) {
  if (fish.x + fish.width >= canvasWidth || fish.x <= 0) {
    fish.velocity = -1 * fish.velocity;
    return fish;
  }
}

function moveBulletY(bullet, canvasHeight) {
  if (bullet.y < canvasHeight) {
    bullet.y += bullet.velocity;
    return bullet;
  }
}


module.exports = CanvasMotion;