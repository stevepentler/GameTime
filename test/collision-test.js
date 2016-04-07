const chai = require('chai');
const assert = chai.assert;

const Fish = require('../lib/fish').Fish;
const Bullet = require('../lib/bullet');
const Boat = require('../lib/boat');
const collision = require('../lib/collision');

describe('Collision detection', function() {

  context('between a bullet and a fish', function() {
    var boat    = new Boat({});
    var fish    = new Fish({});
    var bullet  = new Bullet({}, boat);

    it('detects a direct hit collision', function() {
      bullet.x = 500;
      fish.x = 500;
      bullet.y = 100;
      fish.y = 100;

      assert.equal(true, collision(fish, bullet));
    });

    it('detects collision: fish x + width equals bullet x', function() {
      fish.x = 500;
      fish.width = 25;
      bullet.x = 525;
      bullet.y = 100;
      fish.y = 100;

      assert.equal(true, collision(fish, bullet));
    });

    it('detects collision: fish x + width greater than bullet x', function() {
      fish.x = 500;
      fish.width = 50;
      bullet.x = 525;
      bullet.y = 100;
      fish.y = 100;

      assert.equal(true, collision(fish, bullet));
    });

    it('detects collision: very wide fish', function() {
      fish.x = 0;
      fish.width = 1000;
      bullet.x = 500;
      bullet.y = 100;
      fish.y = 100;

      assert.equal(true, collision(fish, bullet));
    });

    it('detects collision: very wide bullet', function() {
      fish.x = 500;
      bullet.x = 0;
      bullet.width = 1000;
      bullet.y = 100;
      fish.y = 100;

      assert.equal(true, collision(fish, bullet));
    });

    it('detects a slight overlap collision on y axis', function() {

      bullet.x = 500;
      bullet.y = 94;

      assert.equal(true, collision(fish, bullet));
    });

    xit('returns not true if (x coordinate + width) does not overlap', function() {
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
