function collision(fish, bullet) {
  if (xCollision(fish, bullet) && yCollision(fish, bullet)) {
    return true;
  }
}

function xCollision(fish, bullet) {
  if (fish.x <= bullet.x && bullet.x <= fish.x + fish.width ||
      bullet.x <= fish.x && fish.x <= bullet.x + bullet.width ) {
    return true;
  } else {
    return false;
  }
}

function yCollision(fish, bullet) {
  if (fish.y <= bullet.y && bullet.y <= fish.y + fish.height ||
      bullet.y <= fish.y && fish.y <= bullet.y + bullet.height ) {
    return true;
  } else {
    return false;
  }
}

module.exports = collision;
