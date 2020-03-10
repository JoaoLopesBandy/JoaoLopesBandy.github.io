
let xoff = 0;
let yoff = 0;
let inc = 0.02;
let start = 0;
const RECTWIDTH = 7;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);

}

function draw() {
  yoff = 0;
  background(51);
  stroke(255);
  noFill();
  beginShape();
  let xoff = start;
  for (let x = 0; x < width; x += RECTWIDTH) {
    let y = map(noise(yoff), 0, 1, 0, height);
    rect(x, height, x + RECTWIDTH, y);

    yoff += 0.01;

  }
  x += inc;
  //endShape();

  


}
