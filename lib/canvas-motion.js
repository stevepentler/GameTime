function CanvasMotion(canvasWidth, canvasHeight, p5Amplitude) {
  this.canvasWidth = canvasWidth;
  this.canvasHeight = canvasHeight;
}

CanvasMotion.prototype = {
  moveFish: function(fishies, round, p5Amplitude) {
    var self = this;
    fishies.forEach(function(fish) {
      // console.log("moveFish " + p5Amplitude);
      moveFishX(fish, round, p5Amplitude);
      moveFishY(fish, p5Amplitude);
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
  // console.log("moveFishX " + p5Amplitude);
  fish.x += (fish.velocity * round/2 * p5Amplitude);
  return fish;
}

function moveFishY(fish, p5Amplitude) {
  fish.y = fish.y + p5Amplitude/150;
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
