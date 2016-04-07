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

    it('detects X collision: bullet x = fish x + width', function() {
      fish.x = 500;
      fish.width = 25;
      bullet.x = 525;
      bullet.y = 100;
      fish.y = 100;

      assert.equal(true, collision(fish, bullet));
    });

    it('detects X collision: bullet x between fish x + width', function() {
      fish.x = 500;
      fish.width = 50;
      bullet.x = 525;
      bullet.y = 100;
      fish.y = 100;

      assert.equal(true, collision(fish, bullet));
    });

    it('detects X collision: very wide fish', function() {
      fish.x = 0;
      fish.width = 1000;
      bullet.x = 500;
      bullet.y = 100;
      fish.y = 100;

      assert.equal(true, collision(fish, bullet));
    });

    it('detects X collision: very wide bullet', function() {
      fish.x = 500;
      bullet.x = 0;
      bullet.width = 1000;
      bullet.y = 100;
      fish.y = 100;

      assert.equal(true, collision(fish, bullet));
    });

    it('detects y collision: bullet y = fish y + height', function() {
      fish.y = 500;
      fish.height = 25;
      bullet.y = 525;
      bullet.x = 100;
      fish.x = 100;

      assert.equal(true, collision(fish, bullet));
    });

    it('detects y collision: bullet y between fish y + height', function() {
      fish.y = 500;
      fish.height = 50;
      bullet.y = 525;
      bullet.x = 100;
      fish.x = 100;

      assert.equal(true, collision(fish, bullet));
    });

    it('detects y collision: very tall fish', function() {
      fish.y = 0;
      fish.height = 1000;
      bullet.y = 500;
      bullet.x = 100;
      fish.x = 100;

      assert.equal(true, collision(fish, bullet));
    });

    it('returns false if x coordinates do not overlap, y overlaps', function() {
      fish.x = 0
      bullet.x = 1000;
      fish.width = 25; 
      bullet.width = 25;
      fish.y = 1000;
      bullet.y = 1000;

      assert.notEqual(true, collision(fish, bullet));
    });

    it('returns false if y coordinates do not overlap, x overlaps', function() {
      fish.x = 100;
      bullet.x = 100;
      fish.height = 25; 
      bullet.height = 25;
      fish.y = 0;
      bullet.y = 1000;

      assert.notEqual(true, collision(fish, bullet));
    });
  });

});
