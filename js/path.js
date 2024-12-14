let stone = 120;
let padTop = 100;
let buttons = [];
let connections = [];
let budgie, clockB, pbudge, budgieCursor, d4, card6, d9;

function preload() {
  budgie = loadImage("assets/budgieShadow.svg");
  clockB = loadImage("assets/minutes.png");
  pbudge = loadImage("assets/pixelBudgie.png");
  budgieCursor = loadImage("assets/flapping.gif");
  d4 = loadImage("assets/day4card.jpg");
  card6 = loadImage("assets/card6.png");
  d9 = loadImage("assets/vibebudgie.png");
  d14 = loadImage("assets/poemcolor.png");
}

class Button {
  constructor(x, y, color, image, link, size = stone) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.hoverColor = color;
    this.image = image;
    this.link = link;
  }

  isHovered() {
    return (
      mouseX > this.x - 16 &&
      mouseX < this.x + this.size + 16 &&
      mouseY > this.y - 16 &&
      mouseY < this.y + this.size + 16
    );
  }

  display() {
    push();
    if (this.isHovered()) {
      fill(this.hoverColor);
    } else {
      fill(100);
    }

    strokeWeight(2);
    stroke(0, 0, 80);
    translate(this.x, this.y);
    rect(0, 0, this.size, this.size, 20);

    if (this.image) {
      image(
        this.image,
        (stone - stone / 1.2) / 2,
        (stone - stone / 1.2) / 2,
        stone / 1.2,
        stone / 1.2
      );
    }
    pop();
  }

  handleClick() {
    if (this.isHovered()) {
      window.location.href = this.link;
    }
  }
}

class RainbowButton extends Button {
  display() {
    push();
    if (this.isHovered()) {
      fill(267, 39, 75);
    } else {
      fill(100);
    }

    strokeWeight(2);
    stroke(0, 0, 80);
    translate(this.x, this.y);
    rect(0, 0, this.size, this.size, 20);

    translate(this.size / 2, this.size / 2);
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
}

class ClockButton extends Button {
  display() {
    push();
    if (this.isHovered()) {
      fill(136, 27, 79);
    } else {
      fill(120);
    }

    strokeWeight(2);
    stroke(0, 0, 80);
    translate(this.x + this.size / 2, this.y);
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
}

class Connection {
  constructor(startButton, endButton, style = "zigzag") {
    this.start = startButton;
    this.end = endButton;
    this.style = style;
  }

  display() {
    strokeWeight(2);
    stroke(0, 0, 60);
    noFill();

    let startX = this.start.x + this.start.size / 2;
    let startY = this.start.y + this.start.size / 2;
    let endX = this.end.x + this.end.size / 2;
    let endY = this.end.y + this.end.size / 2;

    if (this.style === "zigzag") {
      this.drawZigzag(startX, startY, endX, endY);
    } else if (this.style === "curve") {
      this.drawCurve(startX, startY, endX, endY);
    } else {
      line(startX, startY, endX, endY);
    }
  }

  drawZigzag(startX, startY, endX, endY) {
    let midY = (startY + endY) / 2;
    beginShape();
    vertex(startX, startY);
    vertex((startX + endX) / 2, midY);
    vertex(endX, endY);
    endShape();
    this.drawArrowhead(
      endX,
      endY,
      atan2(endY - midY, endX - (startX + endX) / 2)
    );
  }

  drawCurve(startX, startY, endX, endY) {
    let midX = (startX + endX) / 2;
    let cpY = startY + (endY - startY) * 0.5;

    beginShape();
    vertex(startX, startY);
    quadraticVertex(midX, cpY, endX, endY);
    endShape();
    this.drawArrowhead(endX, endY, atan2(endY - cpY, endX - midX));
  }

  drawArrowhead(x, y, angle) {
    push();
    translate(x, y);
    rotate(angle);
    line(0, 0, -10, -10);
    line(0, 0, -10, 10);
    pop();
  }
}

function setup() {
  let canvas1 = createCanvas(400, 1500);
  canvas1.parent("sketch-container");
  colorMode(HSL);
  angleMode(DEGREES);
  noCursor();

  let pathX = width / 2 - stone / 2;
  buttons = [
    new RainbowButton(pathX, padTop, color(267, 39, 75), budgie, "./day1.html"),
    new ClockButton(
      pathX - stone / 2,
      padTop + stone * 1.5,
      color(136, 27, 79),
      null,
      "./day2.html"
    ),
    new Button(
      pathX + stone / 2,
      padTop + stone * 3,
      color(307, 39, 85),
      pbudge,
      "./day3.html"
    ),
    new Button(
      pathX - stone / 2,
      padTop + stone * 4.5,
      color(55, 55, 55),
      d4,
      "./day5.html"
    ),
    new Button(
      pathX + stone / 2,
      padTop + stone * 6,
      color(125, 45, 75),
      card6,
      "./day6.html"
    ),
    new Button(
      pathX,
      padTop + stone * 7.5,
      color(298, 100, 50),
      d9,
      "./day9.html"
    ),
    new Button(
      pathX,
      padTop + stone * 9,
      color(200, 80, 60),
      d14,
      "./day14.html"
    ), // Add new button
  ];

  connections = [];
  for (let i = 0; i < buttons.length - 1; i++) {
    connections.push(new Connection(buttons[i], buttons[i + 1], "zigzag"));
  }
}

function draw() {
  if (!keyIsPressed) {
    background(200, 50, 20);
  }

  // Draw path background
  push();
  stroke(0, 0, 80, 0.2);
  strokeWeight(stone / 2);
  noFill();
  beginShape();
  for (let i = 0; i < buttons.length; i++) {
    let btn = buttons[i];
    curveVertex(btn.x + stone / 2, btn.y + stone / 2);
  }
  endShape();
  pop();

  connections.forEach((connection) => connection.display());
  buttons.forEach((button) => button.display());

  fill(0);
  circle(mouseX, mouseY, 32);
  image(budgieCursor, mouseX - 16, mouseY - 16);
}

function mousePressed() {
  buttons.forEach((button) => button.handleClick());
}

function windowResized() {
  resizeCanvas(400, windowHeight);
}
