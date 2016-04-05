var Bullet = require('./bullet');

// function ShootBullet(bullets, canvasHeight) {
//   this.bullets = bullets;
//   this.canvasHeight = canvasHeight;
// }

// ShootBullet.prototype = {
//   shoot: function() {
//     var activeBullets = filterBullets(this.bullets);
//     addBullet(activeBullets);
//   }
// };

// function addBullet(bullets) {
//   if (bullets.length === 0) {
//     var bullet = new Bullet({}, boat);
//     bullets.push(bullet);
//   }
// }

// function activeBullet(bullet) {
//   if (bullet.y > this.canvasHeight) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function filterBullets(bullets) {
//   bullets = bullets.filter(function(eachBullet){
//     return activeBullet(eachBullet);
//   });
// }

function addBullet(bullets, boat) {
  if (bullets.length === 0) {
    var bullet = new Bullet({}, boat);
    bullets.push(bullet);
  }
}

// function activeBullet(bullet, canvasHeight) {
//   if (bullet.y > canvasHeight) {
//     return false;
//   } else {
//     return true;
//   }
// }

function filterBullets(bullets, canvasHeight) {
  return bullets = bullets.filter(function(eachBullet){
    eachBullet.y < canvasHeight;
  });
}

module.exports = {
                  filterBullets: filterBullets, 
                  addBullet: addBullet
                 };