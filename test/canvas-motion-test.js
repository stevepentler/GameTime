const chai = require('chai');
const assert = chai.assert;

const CanvasMotion = require('../lib/canvas-motion');
const Boat         = require('../lib/boat');
const Fish         = require('../lib/fish').Fish;
const Bullet       = require('../lib/bullet');
const canvasWidth  = 750;
const canvasHeight = 500;
const p5Amplitude = 1;


describe('CanvasMotion', function() {
  var canvasMotion = new CanvasMotion(canvasWidth, canvasHeight);
  var boat = new Boat({x: canvasWidth/2, y: 25, width: 200, height: 150, velocity: 5, score: 0});

  context('boat moves horizontally', function() {
    it ('boat moves left with velocity of 5', function() {
      var initialPosition = boat.x;
      assert.equal(boat.x, boat.x);

      canvasMotion.moveBoatLeft(boat);
      assert.equal(boat.x, initialPosition - 5);

      canvasMotion.moveBoatLeft(boat);
      assert.equal(boat.x, initialPosition - 10);
    });

    it ('boat moves right with velocity of 5', function() {
      var initialPosition2 = boat.x;

      canvasMotion.moveBoatRight(boat, canvasWidth);
      assert.equal(boat.x, initialPosition2 + 5);

      canvasMotion.moveBoatRight(boat, canvasWidth);
      assert.equal(boat.x, initialPosition2 + 10);
    });

    it ('boat does not move left if x < 15', function() {
      var boatWidth = 15;
      var customBoat = new Boat({x: boatWidth - 1, width: boatWidth});
      var initialPosition = customBoat.x;

      canvasMotion.moveBoatLeft(customBoat);
      assert.equal(customBoat.x, initialPosition);
    });

    it ('boat does not move right if x + width > canvasWidth', function() {
      var boatWidth = 15;
      var customBoat = new Boat({x: canvasWidth - boatWidth, width: boatWidth});
      var initialPosition = customBoat.x;

      canvasMotion.moveBoatRight(customBoat, canvasWidth);
      assert.equal(customBoat.x, initialPosition);
    });
  });

  context('fish moves with positive velocity', function() {
    var fish        = new Fish({x: 1, y: 0, velocity: 1});
    var fishies     = [];
    fishies.push(fish);

    it ('should move one space during round 1', function() {
      var round = 1;
      var initialPosition = fish.x;
      var motion = (fish.velocity * round/2 * p5Amplitude);

      assert.equal(fish.x, initialPosition);
      canvasMotion.moveFish(fishies, round, p5Amplitude);

      assert.equal(fish.x, initialPosition + motion);
    });

    it ('should move two spaces during round 2', function() {
      var round = 2;
      var initialPosition = fish.x;
      var motion = (fish.velocity * round/2 * p5Amplitude);

      assert.equal(fish.x, initialPosition);
      canvasMotion.moveFish(fishies, round, p5Amplitude);

      assert.equal(fish.x, initialPosition + motion);
    });

    it ('should move three spaces during round 3', function() {
      var round = 3;
      var initialPosition = fish.x;
      var motion = (fish.velocity * round/2 * p5Amplitude);

      assert.equal(fish.x, initialPosition);
      canvasMotion.moveFish(fishies, round, p5Amplitude);

      assert.equal(fish.x, initialPosition + motion);
    });
  });

  context('fish reverses direction', function() {
    var round = 1;
    var fish = new Fish({width: 0});
    var fishies = [];
    fishies.push(fish);

    it ('should reverse direction at canvasWidth', function() {
      fish.x = canvasWidth;
      var initialVelocity = fish.velocity;

      canvasMotion.moveFish(fishies, round, p5Amplitude);

      assert.equal(-initialVelocity, fish.velocity);
    });

    it ('should reverse direction if greater than canvasWidth', function() {
      fish.x = canvasWidth + 100;
      var initialVelocity = fish.velocity;

      canvasMotion.moveFish(fishies, round, p5Amplitude);

      assert.equal(-initialVelocity, fish.velocity);
    });

    it ('should reverse direction at left border', function() {
      fish.x = -1;
      var initialVelocity = fish.velocity;

      canvasMotion.moveFish(fishies, round, p5Amplitude);

      assert.equal(-initialVelocity, fish.velocity);
    });
  });

  context('bullet moves vertically at velocity of 3', function() {
    var bullet  = new Bullet({}, boat);
    var bullets = [];
    bullets.push(bullet);

    it ('should move bullet downward', function() {
      var initialPosition = bullet.y;

      canvasMotion.moveBullet(bullets);
      assert.equal(bullet.y, initialPosition + 4);

      canvasMotion.moveBullet(bullets);
      assert.equal(bullet.y, initialPosition + 8);

      canvasMotion.moveBullet(bullets);
      assert.equal(bullet.y, initialPosition + 12);
    });
  });

});
