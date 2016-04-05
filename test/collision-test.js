const chai = require('chai');
const assert = chai.assert;

const Fish = require('../lib/fish').Fish;
const Bullet = require('../lib/bullet');
const Boat = require('../lib/boat');
const collision = require('../lib/collision');

describe('Collision detection', function() {
  context('between a bullet and a fish', function() {
    var boat = new Boat({});

    it('detects a collision', function() {
      var fish = new Fish({x: 500, y: 100});
      var bullet = new Bullet({}, boat);
      bullet.shoot(700);
      bullet.x = 500;
      bullet.y = 100;
      console.log(fish);
      console.log(bullet);

      assert.equal(true, collision(fish, bullet));
    });

    it('returns false if x coordinates do not match', function() {
      var fish = new Fish({x: 500, y: 100});
      var bullet = new Bullet({}, boat);
      bullet.shoot(700);
      bullet.x = -10000;
      bullet.y = 100;
      console.log(fish);
      console.log(bullet);

      assert.notEqual(true, collision(fish, bullet));
    });

    it('returns false if y coordinates do not match', function() {
      var fish = new Fish({x: 500, y: 100});
      var bullet = new Bullet({}, boat);
      bullet.shoot(700);
      bullet.x = 500;
      bullet.y = -10000;
      console.log(fish);
      console.log(bullet);

      assert.notEqual(true, collision(fish, bullet));
    });

  });
});
