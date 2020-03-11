
let xoff = 0;
let yoff = 0;
let inc = 0.01;
let start = 0;
const RECTWIDTH = 0.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);

}

function generateTerrain(){
  let xoff = start;
  for (let x = 0; x < width; x += RECTWIDTH) {
    let y = map(noise(yoff), 0, 1, 0, height);
    rect(x, height, x + RECTWIDTH, y);

    yoff += 0.001;
  }
  start += inc;
}

function drawFlag(){
  
}


function draw() {
  yoff = start;
  background(51);
  stroke(255);
  noFill();
  generateTerrain();
  
  

  


}
