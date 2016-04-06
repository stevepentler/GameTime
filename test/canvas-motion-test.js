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
    it ('should move boat left', function() {
      var initialPosition = boat.x;
      assert.equal(boat.x, boat.x);

      canvasMotion.moveBoatLeft(boat);
      assert.equal(boat.x, initialPosition - 5);

      canvasMotion.moveBoatLeft(boat);
      assert.equal(boat.x, initialPosition - 10);
    });

    it ('should move boat right', function() {
      var initialPosition2 = boat.x;

      canvasMotion.moveBoatRight(boat, canvasWidth);
      assert.equal(boat.x, initialPosition2 + 5);

      canvasMotion.moveBoatRight(boat, canvasWidth);
      assert.equal(boat.x, initialPosition2 + 10);
    });

    it ('boat does not move left if x < 15', function() {
      var customBoat = new Boat({x: 15, y: 2, width: 3, height: 4, velocity: 5, score: 0});
      var initialPosition2 = customBoat.x;

      canvasMotion.moveBoatLeft(customBoat);
      assert.equal(customBoat.x, initialPosition2);
    });

    it ('boat does not move right if x + width > canvasWidth', function() {
      var customBoat2 = new Boat({x: 990 , y: 2, width: 10, height: 4, velocity: 5, score: 0});
      var initialPosition2 = customBoat2.x;

      canvasMotion.moveBoatRight(customBoat2, canvasWidth);
      assert.equal(customBoat2.x, initialPosition2);
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
    var fish = new Fish({x: canvasWidth, y: 0, velocity: 1});
    var fishies = [];
    fishies.push(fish);

    xit ('should reverse direction one space during round 1', function() {
      var round = 1;
      var initialVelocity = fish.velocity;

      canvasMotion.moveFish(fishies, round, p5Amplitude);
      // console.log("final" + fish.velocity);

      assert.equal(round/2 * -initialVelocity, fish.velocity);
    });

    it ('should reverse direction two spaces during round 2', function() {
      var round = 2;
      var initialVelocity = fish.velocity;

      canvasMotion.moveFish(fishies, round, p5Amplitude);

      assert.equal(round/2 * -initialVelocity, fish.velocity);
    });

    xit ('should reverse direction three spacess during round 3', function() {
      var round = 3;
      var initialVelocity = fish.velocity;

      canvasMotion.moveFish(fishies, round, p5Amplitude);

      assert.equal(round/2 * -initialVelocity, fish.velocity);
    });
  });

  context('bullet moves vertically', function() {
    var bullet  = new Bullet({}, boat);
    var bullets = [];
    bullets.push(bullet);

    it ('should move bullet downward', function() {
      var initialPosition = bullet.y;

      canvasMotion.moveBullet(bullets);
      assert.equal(bullet.y, initialPosition + 4);
      assert.notEqual(bullet.y, initialPosition + 5);

      canvasMotion.moveBullet(bullets);
      canvasMotion.moveBullet(bullets);
      assert.equal(bullet.y, initialPosition + 12);
    });
  });

});
