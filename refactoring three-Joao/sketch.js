//Black and White Target

let circleWidth = 400;
let circleLength = 400;

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function drawCircles() {
  //Draws 10 circles, each being 40 px smaller
  for (let i = 0; i <= 10; i++) {
    ellipse(200, 200, circleWidth, circleLength);
    circleWidth -= 40;
    circleLength -= 40;
  }

}

function draw() {
  background(240);
  drawCircles();
}