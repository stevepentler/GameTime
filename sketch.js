var amplitude, 
    level,
    song, 
    speed,
    amplitudeLevel;

function preload(){
  song = loadSound('/assets/FortunateSon.mp3');
}

function setup() {
  createCanvas(0, 0);
  song.play();
  amplitude = new p5.Amplitude();

}

function draw() {
  level = amplitude.getLevel();
  var size = map(level, 0, 1, 1, 2);
  amplitudeLevel = createElement('span hidden', size);
  console.log("size:" + size);
}
