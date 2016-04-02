function collision(fish, bullet) {
  if (xCollision(fish, bullet) && yCollision(fish, bullet)) {
    console.log("COLLISION");
    updateScore(fish.y);
    console.log("fish y = " + fish.y)
    return true;
  }
}

function xCollision(fish, bullet) {
  if (fish.x <= bullet.x && (bullet.x + bullet.width) <= (fish.x + fish.width)) {
    return true; 
  } else {
    return false;
  }
}

function yCollision(fish, bullet) {
  if (fish.y <= (bullet.y + bullet.height) && bullet.y <= (fish.y + fish.height)) {
    return true;
  } else {
    return false;
  }
}

var score = 0;
var updateScore = function(value) {
  console.log("beginning score = " + score);
  score += value;
  console.log("updated score = " + score);
};


module.exports = collision;