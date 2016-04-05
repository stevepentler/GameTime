var amplitude, 
    level,
    song, 
    speed;

function preload(){
  song = loadSound('/assets/FortunateSon.mp3');
}

function setup() {
  song.play();
  peaks = song.getPeaks([width]);
  amplitude = new p5.Amplitude();
  level = amplitude.getLevel();
}

module.exports = level;