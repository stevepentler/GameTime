const chai = require('chai');
const assert = chai.assert;

const Fish = require('../lib/fish').Fish;
const Bullet = require('../lib/bullet');
const Boat = require('../lib/boat');
const collision = require('../lib/collision');

describe('Collision detection', function() {

  context('between a bullet and a fish', function() {
    var boat    = new Boat({});
    var fish    = new Fish({x: 500, y: 100});
    var bullet  = new Bullet({}, boat);
    var bullets = [];

    it('detects a collision', function() {
      bullet.x = 500;
      bullet.y = 100;

      assert.equal(true, collision(fish, bullet))
    });

    it('returns false if x coordinates do not match', function() {
      bullet.x = -10000;
      bullet.y = 100;

      assert.notEqual(true, collision(fish, bullet))
    });

    it('returns false if y coordinates do not match', function() {
      bullet.x = 500;
      bullet.y = -10000;

      assert.notEqual(true, collision(fish, bullet))
    });
  });

});
