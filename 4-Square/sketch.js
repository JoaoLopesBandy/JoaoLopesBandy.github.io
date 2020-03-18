// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let onLeft, onRight, onBottomLeft, onBottomRight; // boolians
let leftFade = 50;
let rightFade = 50;
let bottomLeftFade = 50;
let bottomRightFade = 50;
const FADE_SPEED = 10;
const FADE_OUTSPEED = -10;



function setup() {
  createCanvas(windowWidth, windowHeight);
  onLeft = true;
  onRight = false;
  onBottomRight = false;
  onBottomLeft = true;
}

function updateCurrentSide() {
  //update the state variable to represent which side the mouse curser is one

  if (mouseX < width / 2 && mouseY < height / 2) {
    print("left);")
    //mouse is on the left
    onLeft = true;
    onRight = false;
    onBottomRight = false;
    onBottomLeft = false;
  }
  else if (mouseX > width / 2 && mouseY > height / 2) {
    //mouse is on the bottom right
    print("right");
    onRight = false;
    onLeft = false;
    onBottomRight = true;
    onBottomLeft = false;
  }
  else if (mouseX < width / 2 && mouseY > height / 2) {
    onRight = false;
    onLeft = false;
    onBottomRight = false;
    onBottomLeft = true;
  }
  else {
    onRight = true;
    onLeft = false;
    onBottomRight = false;
    onBottomLeft = false;

  }
}

function drawGrid() {
  fill(0, 0, leftFade);
  rect(0, 0, width / 2, height / 2);

  fill(0, 0, rightFade);
  rect(width / 2, 0, width / 2, height / 2);

  fill(0, 0, bottomLeftFade);
  rect(0, height / 2, width / 2, height / 2);

  fill(0, 0, bottomRightFade);
  rect(width / 2, height / 2, width / 2, height / 2);
}

function renderRectangle() {
  //draw two rectangles of varying fills

  if (onLeft) { //onleft = true
    if (leftFade <= 255) {
      leftFade += FADE_SPEED;
      fill(0, 0, leftFade);

    }
  }
  else {
    if (leftFade >= 50) {
      leftFade -= FADE_SPEED;
    }

  }

  if (onRight) {
    if (rightFade <= 255) {
      fill(0, 0, rightFade);
      rightFade += FADE_SPEED;
    }
  }
  else {
    if (rightFade >= 50) {
      rightFade -= FADE_SPEED;

    }

  }

  if (onBottomLeft) {
    if (bottomLeftFade <= 255) {
      fill(0, 0, bottomLeftFade);
      bottomLeftFade += FADE_SPEED;
    }
  }
  else {
    if (bottomLeftFade >= 50) {
      bottomLeftFade -= FADE_SPEED;
    }
  }

  if (onBottomRight) {
    if (bottomRightFade <= 255) {
      fill(0, 0, bottomRightFade);
      bottomRightFade += FADE_SPEED;
    }
  }
  else {
    if (bottomRightFade >= 50) {
      bottomRightFade -= FADE_SPEED;
    }
  }

}

function draw() {
  background(220);
  updateCurrentSide();
  //print("left:"  + onLeft + "  Right:  " + onRight);
  renderRectangle();
  drawGrid();
}
