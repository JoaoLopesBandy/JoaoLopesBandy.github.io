
let gridSpacing = 20;
const PADDING = 20;

function border() {
  strokeWeight(15);
  fill (100);
  rect(width/2, height/2, width, height);
  strokeWeight(2);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

}

function draw() {
  background(50);
  border();
  drawGrid();


}


function drawGrid() {
  for (let x = gridSpacing / 2 + PADDING; x < width; x += gridSpacing) {
    for (let y = gridSpacing / 2 + PADDING; y < height; y += gridSpacing) {
      rect(x, y, gridSpacing, gridSpacing);
    }
  }

}