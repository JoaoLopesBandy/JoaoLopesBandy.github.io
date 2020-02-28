
let gridSpacing = 40;

function mouseClicked(){
  circleGrid();
}

function circleGrid() {
  for (let y = gridSpacing / 2; y < height; y += gridSpacing) {
    for (let x = gridSpacing / 2; x < width; x += gridSpacing) {
      //let size = random(gridSpacing*0.8, gridSpacing*1.3);
      let randRed = random(255);
      let randGreen = random(255);
      let randBlue = random(255);
      fill(randRed,randGreen,randBlue);
      rect(x, y, gridSpacing, gridSpacing);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  circleGrid();
}

function draw() {
  
}
