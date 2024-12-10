let angle = 0;
let saturation1 = 100;
let lightness1 = 100;
let draggingAngle = false;
let draggingsaturation1 = false;
let dragginglightness1 = false;
let ringWidth;
let radius;
let dx, dy;
let touchR = 15;
let budgie;
function preload() {
  budgie = loadImage("assets/budgieShadow.svg");
}
function setup() {
  let canvas = createCanvas(min(windowWidth, 600), windowHeight - 150);
  canvas.parent("sketch-container");
  describe("a color finder in HSL with a budgie silohuett in the middle");
  colorMode(HSL);
  angleMode(DEGREES);
  radius = min(width, height) / 5;
  ringWidth = min(width, height) / 8;
  dx = width / 5;
  dy = height / 5;
  angle = random(0, 360);
  saturation1 = random(0, 100);
  lightness1 = random(0, 100);
  textSize(16);
  textAlign(CENTER);
}

function draw() {
  background(angle, saturation1, lightness1);
  translate(width / 2, height / 2);
  noFill();
  tint(angle, saturation1, 80 - lightness1 / 2);
  image(
    budgie,
    -radius / 2 - ringWidth / 4,
    -radius / 2 - ringWidth / 2,
    radius + ringWidth / 2,
    radius + ringWidth / 2
  );

  drawRing();
  drawBBar();
  drawSBar();
  angleSelector();
  saturation1Selector();
  lightness1Selector();
  borderAndText();
}

function borderAndText() {
  noFill();
  stroke((angle + 180) % 360, 100 - saturation1, 100 - lightness1);
  rect(
    -width / 2 + dx / 4,
    -height / 2 + dy / 4,
    width - dx / 2,
    height - dy / 2
  );
  rect(
    -width / 2 + dx / 4,
    -height / 2 + dy / 4,
    width - dx / 2,
    height - dy / 2
  );
  if (lightness1 >= 70) {
    b = 100;
  } else {
    b = 0;
  }
  fill((360 - angle) % 360, 0, 100 - b);
  noStroke();
  text(
    "hsl(" +
      round(angle) +
      "deg, " +
      round(saturation1) +
      "%, " +
      round(lightness1) +
      "%)",
    0,
    height / 2 - dy / 2
  );
  rgb1 = hslToRgb(angle, saturation1, lightness1);
  text(
    "rgb(" + round(rgb1.r) + ", " + round(rgb1.g) + ", " + round(rgb1.b) + ")",
    0,
    -height / 2 + dy / 2
  );
  hexStr = rgbToHex(rgb1.r, rgb1.g, rgb1.b);
  text(hexStr, 0, -height / 2 + dy / 2 + 20);
}

function mousePressed() {
  let selX = cos(angle) * radius;
  let selY = sin(angle) * radius;
  let d = dist(mouseX - width / 2, mouseY - height / 2, selX, selY);
  if (d < 20) {
    draggingAngle = true;
    return;
  }

  let satX = -width / 2 + dx;
  let satY = map(saturation1, 0, 100, height / 2 - dy, -height / 2 + dy);
  let satD = dist(mouseX - width / 2, mouseY - height / 2, satX, satY);
  if (satD < 20) {
    draggingsaturation1 = true;
    return;
  }

  let brightX = width / 2 - dx;
  let brightY = map(lightness1, 0, 100, height / 2 - dy, -height / 2 + dy);
  let brightD = dist(mouseX - width / 2, mouseY - height / 2, brightX, brightY);
  if (brightD < 20) {
    dragginglightness1 = true;
  }
}

function touchStarted() {
  if (mouseY < 0 || mouseY > height || mouseX < 0 || mouseX > width) {
    return true; // Let the touch event pass through to other elements
  }
  let touchX = touches[0].x - width / 2;
  let touchY = touches[0].y - height / 2;

  let selX = cos(angle) * radius;
  let selY = sin(angle) * radius;
  let d = dist(touchX, touchY, selX, selY);
  if (d < 20) {
    draggingAngle = true;
    return false;
  }

  let satX = -width / 2 + dx;
  let satY = map(saturation1, 0, 100, height / 2 - dy, -height / 2 + dy);
  let satD = dist(touchX, touchY, satX, satY);
  if (satD < 20) {
    draggingsaturation1 = true;
    return false;
  }

  let brightX = width / 2 - dx;
  let brightY = map(lightness1, 0, 100, height / 2 - dy, -height / 2 + dy);
  let brightD = dist(touchX, touchY, brightX, brightY);
  if (brightD < 20) {
    dragginglightness1 = true;
    return false;
  }
  return false;
}

function mouseDragged() {
  if (draggingAngle) {
    angle = atan2(mouseY - height / 2, mouseX - width / 2);
    if (angle < 0) angle += 360;
  }
  if (draggingsaturation1) {
    let relativeY = mouseY - height / 2;
    saturation1 = map(relativeY, height / 2 - dy, -height / 2 + dy, 0, 100);
    saturation1 = constrain(saturation1, 0, 100);
  }
  if (dragginglightness1) {
    let relativeY = mouseY - height / 2;
    lightness1 = map(relativeY, height / 2 - dy, -height / 2 + dy, 0, 100);
    lightness1 = constrain(lightness1, 0, 100);
  }
}

function touchMoved() {
  if (mouseY < 0 || mouseY > height || mouseX < 0 || mouseX > width) {
    return true;
  }
  if (draggingAngle) {
    angle = atan2(touches[0].y - height / 2, touches[0].x - width / 2);
    if (angle < 0) angle += 360;
  }
  if (draggingsaturation1) {
    let relativeY = touches[0].y - height / 2;
    saturation1 = map(relativeY, height / 2 - dy, -height / 2 + dy, 0, 100);
    saturation1 = constrain(saturation1, 0, 100);
  }
  if (dragginglightness1) {
    let relativeY = touches[0].y - height / 2;
    lightness1 = map(relativeY, height / 2 - dy, -height / 2 + dy, 0, 100);
    lightness1 = constrain(lightness1, 0, 100);
  }
  return false;
}

function mouseReleased() {
  draggingAngle = false;
  draggingsaturation1 = false;
  dragginglightness1 = false;
}

function touchEnded() {
  if (mouseY < 0 || mouseY > height || mouseX < 0 || mouseX > width) {
    return true;
  }
  draggingAngle = false;
  draggingsaturation1 = false;
  dragginglightness1 = false;
  return false;
}

function windowResized() {
  radius = min(width, height) / 5;
  ringWidth = min(width, height) / 8;
  dx = width / 5;
  dy = height / 5;
  resizeCanvas(min(windowWidth, 600), windowHeight - 150);
}

function drawRing() {
  for (let a = 0; a < 360; a += 0.5) {
    stroke(a, 100, 50);
    strokeWeight(5);
    push();
    rotate(a);
    line(radius - ringWidth / 2, 0, radius + ringWidth / 2, 0);
    pop();
  }
}

function drawBBar() {
  stroke(0);
  let x = width / 2 - dx;
  let y = dy;
  for (let i = -height / 2 + y; i < height / 2 - y; i += 3) {
    let b = map(i, -height / 2 + y, height / 2 - y, 100, 0);
    fill(angle, saturation1, b);
    noStroke();
    circle(x, i, 10);
  }
}

function drawSBar() {
  stroke(0);
  let x = -width / 2 + dx;
  let y = dy;
  for (let i = -height / 2 + y; i < height / 2 - y; i += 3) {
    let s = map(i, -height / 2 + y, height / 2 - y, 100, 0);
    fill(angle, s, lightness1);
    noStroke();
    circle(x, i, 10);
  }
}

function angleSelector() {
  let selX = cos(angle) * radius;
  let selY = sin(angle) * radius;
  stroke(255);
  fill(angle, 100, 50);
  circle(selX, selY, 20);
}

function saturation1Selector() {
  let selX = -width / 2 + dx;
  let selY = map(saturation1, 0, 100, height / 2 - dy, -height / 2 + dy);

  push();
  stroke(angle, 100 - saturation1, 50);
  fill(angle, saturation1, 50);
  circle(selX, selY, 20);
  pop();
}

function lightness1Selector() {
  let selX = width / 2 - dx;
  let selY = map(lightness1, 0, 100, height / 2 - dy, -height / 2 + dy);

  push();
  stroke(angle, 100, 100 - lightness1);
  fill(angle, 100, lightness1);
  circle(selX, selY, 20);
  pop();
}

function keyPressed() {
  if (key === "c" || key === "C") {
    let hslText =
      "hsl(" +
      round(angle) +
      "deg, " +
      round(saturation1) +
      "%, " +
      round(lightness1) +
      "%)";
    navigator.clipboard
      .writeText(hslText)
      .then(() => console.log("HSL value copied to clipboard!"))
      .catch((err) => console.error("Failed to copy: ", err));
  }
}

function rgbToHex(r, g, b) {
  const toHex = (n) => {
    const hex = n.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return "#" + toHex(r) + toHex(g) + toHex(b);
}

function hslToRgb(h, s, l) {
  // Create a color in
  let c = color(h, s, l);
  // colorMode(RGB);
  t = {
    r: round(red(c)),
    g: round(green(c)),
    b: round(blue(c)),
  };
  // Get RGB values

  return t;
}
