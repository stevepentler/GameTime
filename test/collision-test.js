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

    it('detects a direct hit collision', function() {
      bullet.x = 500;
      bullet.y = 100;

      assert.equal(true, collision(fish, bullet));
    });

    it('detects a slight overlap collision on x axis', function() {
      bullet.x = 525;
      bullet.y = 100;

      assert.equal(true, collision(fish, bullet));
    });

    it('detects a slight overlap collision on y axis', function() {

      bullet.x = 500;
      bullet.y = 94;

      assert.equal(true, collision(fish, bullet));
    });

    it('returns not true if (x coordinate + width) does not overlap', function() {
      bullet.x = 493;
      bullet.y = 100;

      assert.notEqual(true, collision(fish, bullet));
    });

    it('returns not true if (y coordinate + height) does not overlap', function() {
      bullet.x = 500;
      bullet.y = 93;

      assert.notEqual(true, collision(fish, bullet));
    });
  });

});
