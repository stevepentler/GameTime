const chai = require('chai');
const assert = chai.assert;

const Fish = require('../lib/fish').Fish;

describe('Fish', function() {
  var fish = new Fish({});

  context('with default attributes', function() {

    it ('should assign a x default coordinate', function() {
      assert.equal(fish.x, 0);
    });

    it ('should assign a y default coordinate', function() {
      assert.equal(fish.y, 400);
    });

    it ('should assign a default width', function() {
      assert.equal(fish.width, 10);
    });

    it ('should assign a default height', function() {
      assert.equal(fish.height, 10);
    });

    it ('should assign a default velocity', function() {
      assert.equal(fish.velocity, 1);
    });

    it ('should assign custom properties', function() {
      var customFish = new Fish({x: 1, y: 2, width: 3, height: 4, velocity: 5})

      assert.equal(customFish.x, 1);
      assert.equal(customFish.y, 2);
      assert.equal(customFish.width, 3);
      assert.equal(customFish.height, 4);
      assert.equal(customFish.velocity, 5);
    });
  })

  context('moves horizontally', function() {
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

      fish.x = 500

      assert.equal(fish.velocity, (-1 * defaultVelocity));
    });

    it ('should reverse direction at left border', function() {
      var canvasWidth = 1000;
      var fish = new Fish({x: 0, velocity: -1});
      fish.reverseDirection(canvasWidth);

      assert.equal(fish.velocity, (1 * defaultVelocity));

      fish.x = 500

      assert.equal(fish.velocity, (1 * defaultVelocity));
    });
  })
})
