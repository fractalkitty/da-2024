let stone;
let padTop = 100;

function setup() {
  let canvas1 = createCanvas(400, 800);
  canvas1.parent("sketch-container");
  stone = 120;
  colorMode(HSL);
  angleMode(DEGREES);
  noCursor();
  describe("a p5js path to click on different sketches");
  // frameRate(10);
}
let budgie, clockB, pbudge, budgieCursor, d4, card6;
function preload() {
  budgie = loadImage("assets/budgieShadow.svg");
  clockB = loadImage("assets/minutes.png");
  pbudge = loadImage("assets/pixelBudgie.png");
  budgieCursor = loadImage("assets/flapping.gif");
  d4 = loadImage("assets/day4card.jpg");
  card6 = loadImage("assets/card6.png");
  d9 = loadImage("assets/vibebudgie.png");
}
function draw() {
  if (!keyIsPressed) {
    background(200, 50, 20);
  }

  day1();
  day2();
  day3();
  day5();
  day6();
  day9();
  arc1();
  fill(0);
  circle(mouseX, mouseY, 32);
  image(budgieCursor, mouseX - 16, mouseY - 16);
}

function mousePressed() {
  //day1
  if (
    mouseX > width / 10 - 16 &&
    mouseX < width / 10 + stone + 16 &&
    mouseY > padTop - 16 &&
    mouseY < padTop + stone + 16
  ) {
    window.location.href = "./day1.html";
  }
  //day2
  if (
    mouseX > width / 10 + stone * 1 - 16 &&
    mouseX < width / 10 + stone * 2 + 16 &&
    mouseY > padTop + stone - 16 &&
    mouseY < padTop + stone * 2 + 16
  ) {
    window.location.href = "./day2.html";
  }
  //day3
  if (
    mouseX > width / 10 - 16 &&
    mouseX < width / 10 + stone + 16 &&
    mouseY > padTop + 2 * stone - 16 &&
    mouseY < padTop + 3 * stone + 16
  ) {
    window.location.href = "./day3.html";
  }
  //day 5
  if (
    mouseX > width - width / 2 - width / 40 - 16 &&
    mouseX < width - width / 40 + stone - width / 2 + 16 &&
    mouseY > padTop + 3 * stone - 16 &&
    mouseY < padTop + 4 * stone + 16
  ) {
    window.location.href = "./day5.html";
  }
  //day 6
  if (
    mouseX > width / 20 - 16 &&
    mouseX < width / 20 + stone + 16 &&
    mouseY > padTop + 3.5 * stone - 16 &&
    mouseY < padTop + 4.5 * stone + 16
  ) {
    window.location.href = "./day6.html";
  }
  //day 9
  if (
    mouseX > width - stone * 1.5 - 16 &&
    mouseX < width - stone * 1.5 + stone + 16 &&
    mouseY > padTop + 4.5 * stone - 16 &&
    mouseY < padTop + 5.5 * stone + 16
  ) {
    window.location.href = "./day9.html";
  }
}
function windowResized() {
  resizeCanvas(400, windowHeight);
}
function day1() {
  //day1
  push();
  if (
    mouseX > width / 10 - 16 &&
    mouseX < width / 10 + stone + 16 &&
    mouseY > padTop - 16 &&
    mouseY < padTop + stone + 16
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
    mouseX > width / 10 + stone * 1 - 16 &&
    mouseX < width / 10 + stone * 2 + 16 &&
    mouseY > padTop + stone - 16 &&
    mouseY < padTop + stone * 2 + 16
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
    mouseX > width / 10 - 16 &&
    mouseX < width / 10 + stone + 16 &&
    mouseY > padTop + 2 * stone - 16 &&
    mouseY < padTop + 3 * stone + 16
  ) {
    fill(307, 39, 85);
  } else {
    fill(100);
  }
  translate(width / 10, padTop + 2 * stone);
  strokeWeight(2);
  stroke(0, 0, 80);
  rect(0, 0, stone, stone, 20, 20, 20, 20);
  image(pbudge, 0, stone / 12, stone, stone);
  pop();
}

function day5() {
  //day1
  push();
  if (
    mouseX > width - width / 2 - width / 40 - 16 &&
    mouseX < width - width / 40 + stone - width / 2 + 16 &&
    mouseY > padTop + 3 * stone - 16 &&
    mouseY < padTop + 4 * stone + 16
  ) {
    fill(55, 55, 55);
  } else {
    fill(0);
  }
  translate(width / 2 - width / 40, padTop + 3 * stone);
  strokeWeight(2);
  stroke(0, 0, 80);
  rect(0, 0, stone, stone, 20, 20, 20, 20);
  image(
    d4,
    (stone - stone / 1.2) / 2,
    (stone - stone / 1.2) / 2,
    stone / 1.2,
    stone / 1.2
  );
  pop();
}

function day6() {
  //day1
  push();
  if (
    mouseX > width / 20 - 16 &&
    mouseX < width / 20 + stone + 16 &&
    mouseY > padTop + 3.5 * stone - 16 &&
    mouseY < padTop + 4.5 * stone + 16
  ) {
    fill(125, 45, 75);
  } else {
    fill(255);
  }
  translate(width / 20, padTop + 3.5 * stone);
  strokeWeight(2);
  stroke(0, 0, 80);
  rect(0, 0, stone, stone, 20, 20, 20, 20);
  image(
    card6,
    (stone - stone / 1.2) / 2,
    (stone - stone / 1.2) / 2,
    stone / 1.2,
    stone / 1.2
  );
  pop();
}

function day9() {
  //day1
  push();
  if (
    mouseX > width - stone * 1.5 - 16 &&
    mouseX < width - stone * 1.5 + stone + 16 &&
    mouseY > padTop + 4.5 * stone - 16 &&
    mouseY < padTop + 5.5 * stone + 16
  ) {
    fill(298, 100, 50);
  } else {
    fill(0);
  }
  translate(width - stone * 1.5, padTop + 4.5 * stone);
  strokeWeight(2);
  stroke(0, 0, 80);
  rect(0, 0, stone, stone, 20, 20, 20, 20);
  image(
    d9,
    (stone - stone / 1.2) / 2,
    (stone - stone / 1.2) / 2,
    stone / 1.2,
    stone / 1.2
  );
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
  arc(width / 2 - width / 40, padTop + stone * 3, width / 2, stone, 90, 180);
  line(
    width / 2 - width / 40,
    padTop + stone * 3.5,
    width / 2 - width / 40 - 10,
    padTop + stone * 3.5 - 10
  );
  line(
    width / 2 - width / 40,
    padTop + stone * 3.5,
    width / 2 - width / 40 - 10,
    padTop + stone * 3.5 + 10
  );

  arc(width / 2 - width / 40, padTop + stone * 4, width / 4, stone / 8, 0, 180);
  line(
    width / 20 + stone,
    padTop + stone * 4,
    width / 20 + stone + 10,
    padTop + stone * 4 - 10
  );
  line(
    width / 20 + stone,
    padTop + stone * 4,
    width / 20 + stone + 10,
    padTop + stone * 4 + 10
  );
  arc(width - 1.5 * stone, padTop + stone * 4.5, stone * 2, stone, 90, 180);
  line(
    width - 1.5 * stone,
    padTop + stone * 5,
    width - 1.5 * stone - 10,
    padTop + stone * 5 - 10
  );
  line(
    width - 1.5 * stone,
    padTop + stone * 5,
    width - 1.5 * stone - 10,
    padTop + stone * 5 + 10
  );
}
