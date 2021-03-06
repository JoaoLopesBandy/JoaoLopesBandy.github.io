// This example is adapted from Learning Processing Example 5-3 by Daniel Shiffman
// http://www.learningprocessing.com
// Refactor the following code. Be sure the refactored version:
//  - is readable
//  - is able to work easily with any canvas size

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePosition(){
  //draws rectangle if mouse is top-left of the screen
  if (mouseX < width / 2 && mouseY < height / 2) {
    rect(0, 0, width / 2, height / 2);
  }
  //draws rectangle if mouse is top-right of the screen
  else if (mouseX > width / 2 && mouseY < height / 2) {
    rect(width / 2, 0, width / 2, height / 2);
  }
  //draws rectangle if mouse is bottom-left of the screen
  else if (mouseX < width / 2 && mouseY > height / 2) {
    rect(0, height / 2, width / 2, height / 2);
  }
  //draws rectangle if mouse is bottom-right of the screen
  else if (mouseX > width / 2 && mouseY > height / 2) {
    rect(width / 2, height / 2, width / 2, height / 2);
  }
}

function squares(){
  //Splits the screen into quarters
  stroke(0);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  squares();
  mousePosition();
}
