const chai = require('chai');
const assert = chai.assert;

const Boat = require('../lib/boat');

describe('CanvasMotion', function() {
  var boat = new Boat({});
  
  context('moves horizontally', function() {
    it ('should move boat left', function() {
      var initialPosition = boat.x
      assert.equal(boat.x, boat.x);

      boat.moveBoatLeft(boat);
      assert.equal(boat.x, initialPosition - 5);

      boat.moveBoatLeft(boat);
      assert.equal(boat.x, initialPosition - 10);
    });

    it ('should move boat right', function() {
      var initialPosition2 = boat.x;
      var canvasWidth = 700;

      boat.moveBoatRight(boat, canvasWidth);
      assert.equal(boat.x, initialPosition2 + 5);

      boat.moveBoatRight(boat, canvasWidth);
      assert.equal(boat.x, initialPosition2 + 10);
    });

    it ('boat does not move left if x < 15', function() {
      var customBoat = new Boat({x: 15, y: 2, width: 3, height: 4, velocity: 5}, boat);

      var initialPosition2 = customBoat.x;
      var canvasWidth = 700;

      customBoat.moveBoatLeft(customBoat);
      assert.equal(customBoat.x, initialPosition2);
    });

    it ('boat does not move right if x + width > canvasWidth', function() {
      var customBoat = new Boat({x: 690 , y: 2, width: 10, height: 4, velocity: 5}, boat);

      var initialPosition2 = customBoat.x;
      var canvasWidth = 700;

      customBoat.moveBoatRight(customBoat, canvasWidth);
      assert.equal(customBoat.x, initialPosition2);
    });
  });

});
