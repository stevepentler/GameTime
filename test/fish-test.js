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
      assert.equal(fish.width, 50);
    });

    it ('should assign a default height', function() {
      assert.equal(fish.height, 25);
    });

    it ('should assign a default velocity', function() {
      assert.equal(fish.velocity, 1);
    });

    it ('should assign a default round', function() {
      assert.equal(fish.round, 1);
    });

    it ('should assign custom properties', function() {
      var customFish = new Fish({x: 1, y: 2, width: 3, height: 4, velocity: 5})

      assert.equal(customFish.x, 1);
      assert.equal(customFish.y, 2);
      assert.equal(customFish.width, 3);
      assert.equal(customFish.height, 4);
      assert.equal(customFish.velocity, 5);
    });
  });

});
