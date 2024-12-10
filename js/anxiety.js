let vibe;
let planets;
let synth;
let isPlaying = false;
let animationTime = 0;

function preload() {
  vibe = loadImage("https://assets.codepen.io/4559259/vibebudgie.png");
  synth = loadSound("https://assets.codepen.io/4559259/synth2.m4a");
}

function setup() {
  w = windowWidth * 0.9;
  let canvas = createCanvas(w, w);
  canvas.parent("sketch-container2"); // Make sure this matches your HTML ID
  noStroke();
  m = round(max(windowWidth, windowHeight));
  imageMode(CENTER);
  synth.setLoop(true);

  // Use the existing canvas reference instead of creating a new one
  if (canvas.elt && canvas.elt.parentElement) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.removedNodes.forEach((node) => {
          if (node === canvas.elt || node.contains(canvas.elt)) {
            cleanup();
          }
        });
      });
    });
    observer.observe(canvas.elt.parentElement, {
      childList: true,
      subtree: true,
    });
  }
}

// Rest of your existing draw() code remains the same...

function cleanup() {
  if (synth && synth.isPlaying()) {
    synth.stop();
    isPlaying = false;
  }
}

function mousePressed() {
  if (synth.isLoaded()) {
    if (isPlaying) {
      synth.stop();
    } else {
      // Stop any other playing audio elements before starting this one
      const allAudioElements = document.getElementsByTagName("audio");
      for (let audio of allAudioElements) {
        audio.pause();
      }
      synth.play();
    }
    isPlaying = !isPlaying;
  }
}

// Optional: Add this if you want to ensure audio stops when switching pages/closing
window.addEventListener("beforeunload", cleanup);

function cleanup() {
  if (synth && synth.isPlaying()) {
    synth.stop();
    isPlaying = false;
    noLoop();
  }
}

function draw() {
  t = frameCount / 50;

  n = 100;
  translate(width / 2, height / 2);
  background(201, 0, 188);

  strokeWeight(4);
  noFill();
  for (let i = 0; i < m * 1.8; i += 4) {
    stroke(201 - i / 2, 0, 188 - i / 4);

    circle(0, 0, i * 2);
  }
  tint(255, 50 * abs(cos(t / 5)));
  push();
  scale(cos(t / 5), cos(t / 5));
  image(vibe, 0, -w / 6, w * 1.8, w * 2);
  pop();

  stroke(
    17 + abs(cos(t / 4)) * 150,
    abs(cos(t / 4)) * 150,
    66 + abs(cos(t / 4)) * 150,
    50
  );
  strokeWeight(2);

  for (let i = 0; i < n; i += 0.2) {
    line(
      0,
      0,
      -width * 20 + (i * width * 150) / n + ((200 * t) % ((width * 300) / n)),
      height / 2
    );
    line(
      0,
      0,
      -width * 20 + (i * width * 150) / n + ((-200 * t) % ((width * 300) / n)),
      -height / 2
    );
  }
  for (let i = 1; i < 100; i += 10) {
    arc(0, 0, i * 20, i * 10, PI / 100, PI - PI / 100);
    arc(0, 0, i * 20, i * 10, PI / 100 + PI, -PI / 100);
  }
  stroke(255);
  if (!isPlaying) {
    triangle(-w / 3, -w / 3, -w / 3, w / 3, w / 3, 0);
  }
}
function windowResized() {
  setup();
  draw();
}

function mousePressed() {
  // Get the canvas position relative to the viewport
  let canvas = document.querySelector("canvas");
  let rect = canvas.getBoundingClientRect();

  // Check if click is inside canvas bounds
  if (
    mouseX < 0 ||
    mouseX > width ||
    mouseY < 0 ||
    mouseY > height ||
    !mouseInCanvas(rect)
  ) {
    return true; // Let the click pass through if outside canvas
  }

  if (synth.isLoaded()) {
    if (isPlaying) {
      synth.stop();
      noLoop();
    } else {
      const allAudioElements = document.getElementsByTagName("audio");
      for (let audio of allAudioElements) {
        audio.pause();
      }
      synth.play();
      loop();
    }
    isPlaying = !isPlaying;
  }
  return false;
}

function mouseInCanvas(rect) {
  return (
    mouseY >= rect.top &&
    mouseY <= rect.bottom &&
    mouseX >= rect.left &&
    mouseX <= rect.right
  );
}

// function touchStarted() {
//   if (mouseY < 0 || mouseY > height || mouseX < 0 || mouseX > width) {
//     return true; // Let the touch event pass through to other elements
//   }
//   frameCount = 0;
//   if (synth.isLoaded()) {
//     if (isPlaying) {
//       synth.stop();
//       noLoop(); // Stop animation when stopping audio
//     } else {
//       const allAudioElements = document.getElementsByTagName("audio");
//       for (let audio of allAudioElements) {
//         audio.pause();
//       }
//       synth.play();
//       loop(); // Start animation when playing audio
//     }
//     isPlaying = !isPlaying;
//   }
//   // Prevent default touch behavior
//   return false;
// }

function touchStarted() {
  // Get the canvas position relative to the viewport
  let canvas = document.querySelector("canvas");
  let rect = canvas.getBoundingClientRect();

  // Check if touch is inside canvas bounds
  if (
    mouseX < 0 ||
    mouseX > width ||
    mouseY < 0 ||
    mouseY > height ||
    !mouseInCanvas(rect)
  ) {
    return true; // Let the touch pass through if outside canvas
  }

  // Resume audio context if it's suspended
  if (getAudioContext().state !== "running") {
    getAudioContext().resume();
  }

  if (synth.isLoaded()) {
    if (isPlaying) {
      synth.stop();
      noLoop();
    } else {
      const allAudioElements = document.getElementsByTagName("audio");
      for (let audio of allAudioElements) {
        audio.pause();
      }
      // Add a small delay to ensure audio context is ready
      setTimeout(() => {
        synth.play();
        loop();
      }, 100);
    }
    isPlaying = !isPlaying;
  }
  return false;
}

// Optional: Add this if you want to ensure audio stops when switching pages/closing
window.addEventListener("beforeunload", cleanup);
