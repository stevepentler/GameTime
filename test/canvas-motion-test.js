const chai = require('chai');
const assert = chai.assert;

const CanvasMotion = require('../lib/canvas-motion')
const Boat         = require('../lib/boat');
const canvasWidth  = 1000
const canvasHeight = 700

describe('CanvasMotion', function() {
  var canvasMotion = new CanvasMotion(canvasWidth, canvasHeight);
  var boat = new Boat({x: canvasWidth/2, y: 25, width: 200, height: 150, velocity: 5, score: 0});

  context('boat moves horizontally', function() {
    it ('should move boat left', function() {
      var initialPosition = boat.x
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
      var customBoat = new Boat({x: 15, y: 2, width: 3, height: 4, velocity: 5}, boat);

      var initialPosition2 = customBoat.x;

      customBoat.moveBoatLeft(customBoat);
      assert.equal(customBoat.x, initialPosition2);
    });

    it ('boat does not move right if x + width > canvasWidth', function() {
      var customBoat = new Boat({x: 690 , y: 2, width: 10, height: 4, velocity: 5}, boat);

      var initialPosition2 = customBoat.x;

      customBoat.moveBoatRight(customBoat, canvasWidth);
      assert.equal(customBoat.x, initialPosition2);
    });
  });

});
