var amplitude, 
    level,
    song;

function preload(){
  song = loadSound('/assets/FortunateSon.mp3');
}

function setup() {
  song.play();
}