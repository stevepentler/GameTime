function collision(fish, bullet) {
  if (xCollision(fish, bullet) && yCollision(fish, bullet)) {
    console.log("COLLISION");
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
  if (fish.y <= bullet.y && bullet.y <= (fish.y + fish.height)) {
    return true;
  } else {
    return false;
  }
}


module.exports = collision;