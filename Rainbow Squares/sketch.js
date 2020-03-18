
let gridSpacing = 40;


function mouseClicked() {
  if (mouseButton === LEFT) {
    gridSpacing += 5;
    background(200);
    circleGrid();
  }
}



function keyPressed() {
  if (keyCode === SHIFT) {
    if (gridSpacing != 5) {
      gridSpacing -= 5;
      background(200);
      circleGrid();
    }
  }
}

function circleGrid() {
  for (let y = 0; y < height; y += gridSpacing) {
    for (let x = 0; x < width; x += gridSpacing) {
      //let size = random(gridSpacing*0.8, gridSpacing*1.3);
      let randRed = random(255);
      let randGreen = random(255);
      let randBlue = random(255);
      if (x <= width - 40 && y <= height - 40) {
        fill(randRed, randGreen, randBlue);
        rect(x, y, gridSpacing, gridSpacing);
      }


    }
  }
}

function setup() {
  background(200)
  createCanvas(windowWidth, windowHeight);
  circleGrid();
  noLoop();
}

function draw() {


}
