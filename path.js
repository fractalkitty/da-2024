let stone;
let padTop = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240, 255, 255);
  stone = 120;
  colorMode(HSL);
  angleMode(DEGREES);
}
let budgie;
function preload() {
  budgie = loadImage("budgieShadow.svg");
}
function draw() {
  //day1
  push();
  if (
    mouseX > width / 10 &&
    mouseX < width / 10 + stone &&
    mouseY > padTop &&
    mouseY < padTop + stone
  ) {
    fill(267, 39, 75);
  } else {
    fill(100);
  }
  strokeWeight(2);
  stroke(0, 0, 80);
  rect(width / 10, padTop, stone, stone, 20, 20, 20, 20);
  translate(width / 10 + stone / 2, 100 + stone / 2);

  for (let a = 0; a < 360; a += 2) {
    stroke(a, 100, 70);
    strokeWeight(5);
    push();
    rotate(a);
    line(stone / 4 - stone / 8, 0, stone / 4 + stone / 8, 0);
    pop();
  }
  tint(100, 0, 20);
  image(budgie, -stone / 2, -stone / 2 + stone / 8, stone, stone);
  pop();
}

function mousePressed() {
  //day1
  if (
    mouseX > width / 10 &&
    mouseX < width / 10 + stone &&
    mouseY > padTop &&
    mouseY < padTop + stone
  ) {
    window.location.href = "/day1.html";
  }
}

function keyPressed() {}
