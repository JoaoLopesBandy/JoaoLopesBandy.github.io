
let xoff = 0;
let yoff = 0;
let inc = 0.01
let start = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(51);
  stroke(255);
  noFill();
  beginShape();
  let xoff = start;
  for(let x = 0; x < width; x++){
    let y = noise(rect(xoff,yoff,xoff,yoff)) * height;
    vertex(x,y);

    xoff += 0.02;
  }
  endShape();
  
  start += inc;

  
}
