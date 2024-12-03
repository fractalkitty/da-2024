let stone;
let padTop = 100;

function setup() {
  let canvas1 = createCanvas(400, windowHeight);
  canvas1.parent("sketch-container");
  stone = 120;
  colorMode(HSL);
  angleMode(DEGREES);
}
let budgie;
function preload() {
  budgie = loadImage("budgieShadow.svg");
  clockB = loadImage("minutes.png");
  pbudge = loadImage("pixelBudgie.png");
}
function draw() {
  // background(200, 205, 205);
  day1();
  day2();
  day3();
  arc1();
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
  //day2
  if (
    mouseX > width / 10 + stone * 1 &&
    mouseX < width / 10 + stone * 2 &&
    mouseY > padTop + stone &&
    mouseY < padTop + stone * 2
  ) {
    window.location.href = "/day2.html";
  }
  //day3
  if (
    mouseX > width / 10 &&
    mouseX < width / 10 + stone &&
    mouseY > padTop + 2 * stone &&
    mouseY < padTop + 3 * stone
  ) {
    window.location.href = "/day3.html";
  }
}
function windowResized() {
  resizeCanvas(400, windowHeight);
}
function day1() {
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

function day2() {
  push();
  if (
    mouseX > width / 10 + stone * 1 &&
    mouseX < width / 10 + stone * 2 &&
    mouseY > padTop + stone &&
    mouseY < padTop + stone * 2
  ) {
    fill(136, 27, 79);
  } else {
    fill(120);
  }

  strokeWeight(2);
  stroke(0, 0, 80);
  translate(width / 2 - width / 10 + stone / 2, padTop + stone);
  circle(0, stone / 2, stone);

  push();
  translate(0, stone / 2);
  rotate((second() * 360) / 60 - 135.5);

  image(clockB, 0, 0, stone / 2.5, stone / 2.5);
  pop();
  push();
  translate(0, stone / 2);
  rotate((minute() * 360) / 60 - 135.5);

  image(clockB, 0, 0, stone / 2.5, stone / 2.5);
  pop();
  pop();
}

function day3() {
  //day1
  push();
  if (
    mouseX > width / 10 &&
    mouseX < width / 10 + stone &&
    mouseY > padTop + 2 * stone &&
    mouseY < padTop + 3 * stone
  ) {
    fill(307, 39, 85);
  } else {
    fill(100);
  }
  translate(width / 10, 100 + 2 * stone);
  strokeWeight(2);
  stroke(0, 0, 80);
  rect(0, 0, stone, stone, 20, 20, 20, 20);
  image(pbudge, 0, stone / 12, stone, stone);
  pop();
}

function arc1() {
  strokeWeight(2);
  stroke(0, 0, 60);
  noFill();
  tmp1 = (width / 2 - width / 10 + stone / 2 - width / 10 - stone) * 2;
  arc(width / 10 + stone, padTop + stone, tmp1, stone, -90, 0);
  line(
    width / 2 - width / 10 + stone / 2,
    padTop + stone,
    width / 2 - width / 10 + stone / 2 - 10,
    padTop + stone - 10
  );
  line(
    width / 2 - width / 10 + stone / 2,
    padTop + stone,
    width / 2 - width / 10 + stone / 2 + 10,
    padTop + stone - 10
  );

  noFill();

  arc(width / 10 + stone, padTop + stone * 2, tmp1, stone, 0, 90);
  line(
    width / 10 + stone,
    padTop + stone * 2.5,
    width / 10 + stone + 10,
    padTop + stone * 2.5 - 10
  );
  line(
    width / 10 + stone,
    padTop + stone * 2.5,
    width / 10 + stone + 10,
    padTop + stone * 2.5 + 10
  );
}
