// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function lake(){
  fill(2, 182, 237);
  ellipse(1800, 650, 700, 115)
}
function tree(x,y){
  fill(1,111,111);
  triangle(x, y, x+50, y-200, x+100, y);
  fill(43, 38, 22);
  rect(538, 500, 25, 50)
}

function mountains(x,y){
  fill(123, 149, 150);
  triangle(x, y+500, x+60, y+300, x+150, y+500)
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

function ground(){
  fill(7, 102, 32);
  rect(0, 500, windowWidth,600);
}

function draw() {
  background(3, 152, 252);
  mountains(0,0);
  ground();
  lake();
  tree(0,500)
}
