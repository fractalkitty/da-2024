let budgie;
let offset = 135.5;
function preload() {
  budgie = loadImage("assets/anatomy.png");
}

function setup() {
  canvas = createCanvas((w = min(max(windowWidth, 360), 600)), w);
  canvas.parent("sketch-container");
  describe(
    "a budgie anatomy drawing but with randomized cute nouns for each part"
  );
  textSize(16);
  textAlign(LEFT);
  angleMode(DEGREES);
  noLoop();
  if (w < 400) {
    textSize(10);
  } else if (w < 500 && w >= 400) {
    textSize(12);
  } else {
    textSize(14);
  }
}

function draw() {
  translate(w / 2, w / 2);
  background(245, 245, 255);
  image(budgie, -width / 2, -width / 2, width, width);
  stroke(150);
  //right

  line(w / 8.3, -w / 3.34, w / 4, -w / 2.3);
  line(w / 5.5, -w / 3, w / 4, -w / 2.8);
  line(w / 5.5, -w / 3.4, w / 4, -w / 3.4);
  line(w / 5.5, -w / 3.7, w / 4, -w / 4.2);
  line(w / 6.2, -w / 4, w / 4, -w / 5.5);
  line(w / 7.2, -w / 4, w / 4, -w / 7.8);
  line(w / 6.6, -w / 4.7, w / 4, -w / 7.8);
  line(w / 7, -w / 10, w / 4, 0);
  line(w / 11, w / 13, w / 4, w / 10);
  line(w / 50, w / 10, w / 4, w / 10);
  line(w / 5.5, w / 6, w / 4, w / 6);
  //left
  line(w / 14, -w / 3, -w / 4, -w / 3);
  line(0, -w / 15, -w / 4, -w / 15);
  line(-w / 10, w / 15, -w / 4, w / 15);
  line(-w / 3, w / 3, -w / 4, w / 7);

  noStroke();
  fill(0);
  textAlign(LEFT);
  text(random(peepers), w / 4, -w / 2.3);
  text(random(snoot), w / 3.9, -w / 3.4);
  text(random(beak), w / 4, -w / 4.2);
  text(random(beard), w / 4, -w / 5.5);
  text(random(bling), w / 4, -w / 7.8);
  text(random(chest), w / 4, 0);
  text(random(toes), w / 4, w / 10);
  text(random(brow), w / 4, -w / 2.8);
  text(random(hand), w / 4, w / 6);
  // text("Click to change", -w / 2 + 10, w / 2 - 10);

  textAlign(RIGHT);
  text(random(noggin), -w / 4, -w / 3);
  text(random(wings), -w / 4, -w / 15);
  text(random(feathers), -w / 4, w / 15);
  text(random(tail), -w / 4, w / 7);
}

function windowResized() {
  w = min(max(windowWidth, 360), 600);
  if (w < 400) {
    textSize(10);
  } else if (w < 500 && w >= 400) {
    textSize(12);
  } else {
    textSize(14);
  }
  resizeCanvas(w, w);
}

function mousePressed() {
  setup();
  draw();
  return false;
}
function touchStarted() {
  setup();
  draw();
  // Prevent default touch behavior
  return false;
}

snoot = [
  "cuddle-snoot",
  "scritchy-nose",
  "seed-sniffer",
  "budgie-button",
  "chirp-snoot",
  "bell-snoot",
  "boop-snoot",
  "pocket-sniffer",
  "hoodie-nose",
  "snoot-achoo",
  "squish-dot",
  "beep-bump",
  "snoot-blob",
  "tiny-honk",
  "fluff-button",
  "nose-bean",
  "sniff-spot",
];

beak = [
  "bell-booper",
  "toe-pincher",
  "feather-zipper",
  "finger-nipper",
  "branch scuplter",
  "seed-chomper",
  "kissy-tip",
  "munch-point",
  "nibble-nub",
  "cronch-tool",
  "beaky-squeaky",
  "peck-pointer",
  "treat-tweezers",
  "birb-pincher",
  "tiny-tongs",
  "snacky-grabber",
  "food-flipper",
  "picky-picker",
  "nom-nub",
  "graby-point",
  "pinchy-boi",
  "millet-muncher",
  "click-clacker",
  "smol-snapper",
  "legendary-nibbler",
  "chaotic-snacker",
  "beak-of-holding",
];

beard = [
  "fluff-ruff",
  "chin-poof",
  "feather-floof",
  "scruff-stuff",
  "chat-poof",
  "happy-floof",
  "grumpy-puff",
  "excited-fluff",
  "gossip-tuft",
  "mood-scruff",
  "chatter-beard",
  "feelings-floof",
  "sass-poof",
  "sing-fluff",
  "bossy-beard",
  "chirpy-puff",
  "drama-floof",
  "angry-poof",
  "love-fluff",
  "tweet-tuft",
  "shout-scruff",
  "opinion-poof",
  "secret-sauce",
  "story-beard",
];

bling = [
  "sparkle-dots",
  "disco-spots",
  "party-patches",
  "glitter-dots",
  "fancy-freckles",
  "cheek-bling",
  "flash-spots",
  "dazzle-dots",
  "shine-patch",
  "glam-spots",
  "twinkle-marks",
  "shimmer-dots",
  "glitz-patch",
  "bling-dots",
  "sparkle-patch",
  "shine-specks",
  "glitter-patch",
  "razzle-dots",
  "face-gems",
  "moon-patches",
  "confetti-spots",
  "radar-dots",
  "bubble-marks",
  "rainbow-dabs",
  "star-stamps",
  "jazz-spots",
  "cosmic-patches",
  "paint-splats",
  "treasure-marks",
  "pixel-spots",
];

chest = [
  "cloud-puff",
  "marshmallow-floof",
  "happy-poof",
  "fluff-shelf",
  "chest-blob",
  "proud-poof",
  "squish-fluff",
  "chunky-puff",
  "pillow-pooch",
  "bouncy-floof",
  "pudge-puff",
  "fluffy-front",
  "chest-cloud",
  "borb-belly",
  "poofy-patch",
  "squish-shelf",
  "fluff-badge",
  "puffy-vest",
  "plump-poof",
  "king-cloud",
  "tough-tuft",
  "guard-floof",
  "alpha-puff",
  "fierce-fluff",
  "protest-poof",
  "grumpy-cloud",
  "warning-floof",
  "stubborn-puff",
  "swagger-puff",
  "dreamy-pooch",
  "battle-blob",
  "snuggle-cloud",
];

toes = [
  "grip-beans",
  "perch-grabbers",
  "tiny-toes",
  "seed-holders",
  "branch-huggers",
  "clingy-claws",
  "swing-grippers",
  "tippy-taps",
  "snuggle-stumps",
  "graspy-beans",
  "stick-squeezers",
  "food-fingers",
  "birdy-beans",
  "twiggy-grips",
  "clutchy-paws",
  "perchy-pods",
  "grabby-dots",
  "feety-beans",
  "dangly-digits",
  "pinchy-peets",
  "tippy-tappers",
  "tippy-taps",
  "pitter-peets",
  "happy-steps",
  "waddle-toes",
  "dance-beans",
  "scuttle-feet",
  "patter-paws",
  "tap-tap-toes",
  "skittery-steps",
  "prancy-peets",
  "bouncy-beans",
  "grippy-steps",
  "tappy-toes",
  "scamper-feet",
  "clickety-claws",
  "hoppy-beans",
];

brow = [
  "think-poof",
  "brow beard",
  "happy-poof",
  "snuggle-tuft",
  "love-fluff",
  "sweet-wisp",
  "giggly-puff",
  "smooch-floof",
  "cuddle-crown",
  "brow-fluff",
  "worry-tuft",
  "cranky-crown",
  "mood-mop",
  "forehead-floof",
  "grump-puff",
  "brain-beard",
  "thought-tuft",
  "wonder-wisp",
  "puzzle-poof",
  "head-fluff",
  "focus-floof",
  "pondering-puff",
  "curious-crown",
  "wisdom-wisp",
  "confusion-cloud",
  "thinking-tuft",
];

noggin = [
  "noggin-fluff",
  "mane-poof",
  "scritch-spot",
  "head-cloud",
  "fluffy-cap",
  "pet-poof",
  "crown-floof",
  "happy-helmet",
  "feather-hood",
  "fluff-cap",
  "snuggle-spot",
  "cozy-crown",
  "petting-poof",
  "sleepy-spot",
  "nap-nest",
  "cuddle-cap",
  "smooth-spot",
  "head-tuft",
  "dreamy-dome",
  "floofy-hat",
  "preening-place",
];

wings = [
  "zoom-flaps",
  "speed-springs",
  "turbo-wings",
  "nyoom-makers",
  "zippity-flaps",
  "rocket-wings",
  "whoosh-paddles",
  "zoom-zippers",
  "sprint-spans",
  "blast-flaps",
  "rapid-wings",
  "wiggle-wings",
  "flutter-zoomers",
  "speedy-spans",
  "dash-flaps",
  "hyper-wings",
  "race-rushers",
  "zoom-motors",
  "flappy-zoomies",
  "lightning-lifters",
  "fancy-fans",
  "sleepy-cloaks",
  "exercise-edges",
  "cuddle-wraps",
  "drama-flaps",
  "spin-sails",
  "tiny-umbrellas",
];

feathers = [
  "bonk-sticks",
  "zoom-zippers",
  "wall-whackers",
  "steering-sticks",
  "crash-feathers",
  "oops-ends",
  "drift-tips",
  "bump-bristles",
  "zip-strips",
  "turn-tools",
  "whoops-whiskers",
  "slide-slices",
  "door-dingers",
  "rudder-rushers",
  "smack-strips",
  "brake-brushes",
  "corner-catchers",
  "window-whiskers",
  "speed-streamers",
];

tail = [
  "balance-brush",
  "rudder-fan",
  "happy-flag",
  "wiggle-wedge",
  "landing-lever",
  "brake-feathers",
  "mood-meter",
  "steering-stick",
  "bobble-brush",
  "zip-zipper",
  "excited-fan",
  "waggly-wand",
  "stabilizer-strip",
  "bounce-banner",
  "perch-prop",
  "flutter-flag",
  "tippy-tail",
  "dance-duster",
  "zoom-rudder",
  "wobble-wiper",
];

peepers = [
  "snack-seekers",
  "mischief-marbles",
  "beads of intimidation",
  "treat-trackers",
  "sparkle-dots",
  "trouble-spotters",
  "beady-brights",
  "seed-scanners",
  "wonder-windows",
  "ping-pong-peeps",
  "curious-coins",
  "nano-noticers",
  "blink-beans",
  "zoom-zoomers",
  "shiny-sensors",
  "wiggle-watchers",
  "tiny-twinkles",
  "adventure-dots",
  "birb-beacons",
  "peek-points",
  "budgie-buttons",
  "pin-points",
  "zoom-dots",
  "happy-pins",
  "shrink-spots",
  "excited-peeps",
  "flash-beams",
  "joy-dots",
  "snap-spots",
  "blink-beads",
  "pin-poppers",
];

hand = [
  "scritch-station",
  "nibble-perch",
  "tumble-track",
  "parkour-palm",
  "bite-buddy",
  "scritch-seeker",
  "finger-nommer",
  "tiny-taxi",
  "snuggle-spot",
  "step-up-station",
  "gentle-giant",
  "nibble-nest",
  "perch-pal",
  "finger-food?",
  "budgie-bus",
  "love-ledge",
  "treat-tester",
  "happy-holder",
  "cozy-carrier",
  "finger-friend",
  "warmth-wrap",
  "nail-nibbler",
  "trusty-transport",
  "cuddle-catch",
  "chew-toy",
];
