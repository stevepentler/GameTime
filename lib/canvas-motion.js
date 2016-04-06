function CanvasMotion(canvasWidth, canvasHeight, p5Amplitude) {
  this.canvasWidth = canvasWidth;
  this.canvasHeight = canvasHeight;
}

CanvasMotion.prototype = {
  moveFish: function(fishies, round, p5Amplitude) {
    var self = this;
    fishies.forEach(function(fish) {
      moveFishX(fish, round, p5Amplitude);
      reverseFishDirection(fish, self.canvasWidth);
    });
  },

  moveBullet: function(bullets) {
    var self = this;
    bullets.forEach(function(bullet) {
      moveBulletY(bullet, self.canvasHeight);
    });
  },

  moveBoatLeft: function(boat) {
    moveBoatLeft(boat);
  },

  moveBoatRight: function(boat, canvasWidth) {
    moveBoatRight(boat, canvasWidth);
  }
};

function moveFishX(fish, round, p5Amplitude) {
  var roundMultiplier = (round/2);
  fish.x += (fish.velocity * roundMultiplier * p5Amplitude);
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

function moveBoatLeft(boat) {
  if (boat.x > 15) {
    boat.x -= boat.velocity;
    return boat;
  }
}

function moveBoatRight(boat, canvasWidth) {
  if (boat.x + boat.width < canvasWidth) {
    boat.x += boat.velocity;
    return boat;
  }
}

module.exports = CanvasMotion;
