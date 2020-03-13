// diagonal line art

let GRID_SIZE = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(1000);
}

function diagonal(x, y, s, dir) {
  // dir 0→ ascending. 1 → descemding
  if (dir === 0) {
    line(x - s / 2, y + s / 2, x + s / 2, y - s / 2);
  }
  else {
    line(x - s / 2, y - s / 2, x + s / 2, y + s / 2);

  }

}

function createTiles() {
  for (let x = GRID_SIZE / 2; x < width; x += GRID_SIZE) {
    for (let y = GRID_SIZE / 2; y < height; y += GRID_SIZE) {
      diagonal(x, y, GRID_SIZE, int(random(2)));
    }
  }

}

function draw() {
  GRID_SIZE = map(mouseX,0,width,3, 60);
  randomSeed(seed);
  background(30);
  border();
  createTiles();
}

function border() {
  strokeWeight(15);
  fill(50)
  rect(0, 0, width, height);
  strokeWeight(2);
}