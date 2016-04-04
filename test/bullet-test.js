const chai = require('chai');
const assert = chai.assert;

const Bullet = require('../lib/bullet');
const Boat   = require('../lib/boat');

describe('Bullet', function() {
  context('with default attributes', function() {
    var boat   = new Boat({});
    var bullet = new Bullet({}, boat);
    var bulletOffsetX = 5;
    var bulletOffsetY = 80;

    it ('should assign a x default coordinate', function() {
      assert.equal(bullet.x, boat.x - bulletOffsetX);
    });

    it ('should assign a y default coordinate', function() {
      assert.equal(bullet.y, boat.y + bulletOffsetY);
    });

    it ('should assign a default width', function() {
      assert.equal(bullet.width, 6);
    });

    it ('should assign a default height', function() {
      assert.equal(bullet.height, 6);
    });

    it ('should assign a default velocity', function() {
      assert.equal(bullet.velocity, 4);
    });

    it ('should assign custom properties', function() {
      var customBullet = new Bullet({x: 1, y: 2, width: 3, height: 4, velocity: 5}, boat)

      assert.equal(customBullet.x, boat.x - bulletOffsetX);
      assert.equal(customBullet.y, boat.y + bulletOffsetY);
      assert.equal(customBullet.width, 3);
      assert.equal(customBullet.height, 4);
      assert.equal(customBullet.velocity, 5);
    });
  })
})
