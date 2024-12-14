let colors = [];

function setup() {
  c = min(800, max(windowWidth * 0.9, 350));
  const canvas = createCanvas(c, c);
  canvas.parent("canvas-container");
  background(240);
  noStroke();
  updatePoem(); // Initialize with default poem
}

function updatePoem() {
  const poemText = document.getElementById("poemInput").value;
  // Convert to lowercase before splitting and filtering
  colors = poemText
    .toLowerCase()
    .split("\n")
    .filter((line) => line.trim() !== "");
  background(240);
}

function downloadImage() {
  saveCanvas("poem-visualization", "png");
}

function draw() {
  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < colors[i].length; j++) {
      let t = colors[i][j].charCodeAt();
      fill(
        205 * abs(sin((t * PI) / 80 - PI / 4)),
        235 * abs(sin((t * PI) / 80 - PI / 3)),
        255 * abs(sin((t * PI) / 80 - PI / 2))
      );
      stroke(
        205 * abs(sin((t * PI) / 80 - PI / 4)),
        235 * abs(sin((t * PI) / 80 - PI / 3)),
        255 * abs(sin((t * PI) / 80 - PI / 2))
      );
      rect(
        (j * width) / colors[i].length,
        (i * height) / colors.length,
        width / colors[i].length,
        height / colors.length
      );
      fill(0);
      if (keyIsPressed && keyCode === 84) {
        textAlign(CENTER, CENTER);
        text(
          colors[i][j],
          ((j + 0.5) * width) / colors[i].length,
          ((i + 0.5) * height) / colors.length
        );
      }
    }
  }
}
