const chai = require('chai');
const assert = chai.assert;

const CanvasMotion = require('../lib/canvas-motion');
const Boat         = require('../lib/boat');
const Fish = require('../lib/fish').Fish;
const canvasWidth  = 750;
const canvasHeight = 500;

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

  context('fish moves horizontally', function() {
    var fish = new Fish({});
    var initialPosition = fish.x;
    var defaultVelocity = fish.velocity;

    it ('should move', function() {
      assert.equal(fish.x, fish.x);

      fish.move(fish);
      assert.equal(fish.x, initialPosition + fish.velocity);

      fish.move(fish);
      assert.equal(fish.x, initialPosition + (2 * fish.velocity));
    });

    it ('should reverse direction at right border', function() {
      var canvasWidth = 1000;
      var fish = new Fish({x: 1001});
      fish.reverseDirection(canvasWidth);

      assert.equal(fish.velocity, (-1 * defaultVelocity));

      fish.x = 500;

      assert.equal(fish.velocity, (-1 * defaultVelocity));
    });

    it ('should reverse direction at left border', function() {
      var canvasWidth = 1000;
      var fish = new Fish({x: 0, velocity: -1});
      fish.reverseDirection(canvasWidth);

      assert.equal(fish.velocity, (1 * defaultVelocity));

      fish.x = 500;

      assert.equal(fish.velocity, (1 * defaultVelocity));
    });
  });

});
