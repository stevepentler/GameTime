const chai = require('chai');
const assert = chai.assert;

const Boat = require('../lib/boat');

describe('Boat', function() {
  context('with default attributes', function() {
    var boat = new Boat({});

    it ('should assign a x default coordinate', function() {
      assert.equal(boat.x, 500);
    });

    it ('should assign a y default coordinate', function() {
      assert.equal(boat.y, 25);
    });

    it ('should assign a default width', function() {
      assert.equal(boat.width, 10);
    });

    it ('should assign a default height', function() {
      assert.equal(boat.height, 10);
    });

    it ('should assign a default velocity', function() {
      assert.equal(boat.velocity, 5);
    });

    it ('should assign custom properties', function() {
      var customBoat = new Boat({x: 1, y: 2, width: 3, height: 4, velocity: 5}, boat)

      assert.equal(customBoat.x, 1);
      assert.equal(customBoat.y, 2);
      assert.equal(customBoat.width, 3);
      assert.equal(customBoat.height, 4);
      assert.equal(customBoat.velocity, 5);
    });
  })
})
