var amplitude,
    level,
    song,
    speed,
    amplitudeLevel,
    count = 0;

function preload(){
  song = loadSound('assets/FortunateSon.mp3');
}

function setup() {
  createCanvas(0, 0);
  song.play();
  amplitude = new p5.Amplitude();
}

function draw() {
  level = amplitude.getLevel();
  console.log(level)
  var size = map(level, 0, 1, 1, 30);
  count++;
  if (count === 1) {
    amplitudeLevel = createElement('span', size).addClass('amplitudeLevel');
  } else {
    amplitudeLevel.html('');
    amplitudeLevel = createElement('span', size).addClass('amplitudeLevel');
  }
}
