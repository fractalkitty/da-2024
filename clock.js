let m, h, canvas, str1;
let offset = 135.5;
function preload() {
  m = loadImage("minutes.png");
  h = loadImage("hours.png");
}

function setup() {
  canvas = createCanvas((w = min(windowWidth, 600)), w);
  canvas.parent("sketch-container");

  radius = min(width, height) / 5;
  ringWidth = min(width, height) / 8;
  textSize(16);
  textAlign(CENTER);
  angleMode(DEGREES);
  str1 = random(budgieTimes);
}

function draw() {
  translate(w / 2, w / 2);
  background(235, 245, 255);
  stroke(200);
  strokeWeight(2);
  r = width / 1.2;
  push();

  rotate((minute() * 360) / 60 - offset);

  image(m, 0, 0, r / 2.5, r / 2.5);
  pop();
  push();

  rotate((hour() * 360) / 12 - offset);
  image(h, 0, 0, r / 2.5, r / 2.5);
  pop();
  noFill();
  for (let i = 0; i <= 60; i++) {
    push();
    rotate((i * 360) / 60);
    if (i % 5 === 0) {
      line(r / 2 - 5, 0, r / 2 + 5, 0);
    } else {
      line(r / 2 - 2, 0, r / 2 + 2, 0);
    }
    pop();
  }

  fill(100);
  noStroke();

  text(str1, 0, w / 2 - 10);
  if (minute() % 12 === 0) {
  }
}

function windowResized() {
  resizeCanvas((w = min(windowWidth, 600)), w);
}

function getText() {}

const budgieTimes = [
  "time for scritches",
  "second breakfast",
  "babbling time",
  "time to bite a toe",
  "zoomies",
  "time to destroy toys",
  "time for a mirror dance",
  "time to ring the bell",
  "time for a vigorous bath",
  "time for head bobs",
  "time for seed hunting",
  "booping time",
  "time to do a floof",
  "naptime",
  "time for birdwatching",
  "time to get lost in towels",
  "time to explore a cabinet",
  "time to zip up the feathers",
];
