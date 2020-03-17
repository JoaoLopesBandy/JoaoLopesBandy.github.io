let moveDeer = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function lake() {
  fill(2, 182, 237);
  ellipse(1800, 650, 700, 115)
}
function tree(x, y) {
  fill(1, 111, 111);
  triangle(x + 500, y + 100, x + 550, y - 100, x + 600, y + 100);
  fill(43, 38, 22);
  rect(x + 538, y + 100, 25, 50)
}

function deer(x, y) {
  x = moveDeer;

  fill(186, 135, 89);
  rect(x - 50, y, 15, 80);
  rect(x + 30, y, 15, 80);
  rect(x - 60, y - 55, 30, 50);
  ellipse(x, y, 130, 40);
  triangle(x - 60, y - 30, x - 90, y - 40, x - 60, y - 55);
  fill(214, 151, 124);
  rect(x - 50, y - 90, 15, 40);
  rect(x - 85, y - 90, 50, 10);
  rect(x - 60, y - 110, 5, 20);
  rect(x - 70, y - 110, 5, 20);
  rect(x - 40, y - 110, 5, 20);
  rect(x - 50, y - 110, 5, 20);
  rect(x - 85, y - 110, 5, 20);


}

function crossHair(x, y) {
  fill(0);
  noFill();
  strokeWeight(9);
  ellipse(x, y, 500, 500);
  line(x - 250, y, x + 250, y);
  line(x, y - 250, x, y + 250);
  strokeWeight(1);
}
function bang(x,y){
  fill()
  ellipse()
}

function mountains(x, y) {
  fill(123, 149, 150);
  triangle(x, y + 500, x + 60, y + 300, x + 150, y + 500)
  triangle(250, 500, 400, 170, 470, 500)
  triangle(120, 500, 230, 200, 270, 500)
  triangle(430, 500, 600, 300, 900, 500)
  triangle(1870, 500, 1900, 300, 2200, 500)
  triangle(840, 500, 1000, 150, 1100, 500)
  triangle(1275, 500, 1350, 300, 1430, 500)
  triangle(1400, 500, 1550, 200, 1650, 500)
  triangle(1050, 500, 1200, 300, 1300, 500)
  triangle(1620, 500, 1700, 234, 1880, 500)
}

function ground() {
  fill(7, 102, 32);
  rect(0, 500, windowWidth, 600);
}

function draw() {
  background(3, 152, 252);
  mountains(0, 0);
  ground();
  lake();
  tree(0, 500)
  deer(800, 600);
  crossHair(mouseX, mouseY);
  if (keyIsDown(LEFT_ARROW)) {
    moveDeer -= 10;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    moveDeer += 10;
  }
}
