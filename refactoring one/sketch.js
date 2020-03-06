let x, y, xSpeed, ySpeed;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 200;
  y = 300;
  xSpeed = random(3, 8);
  ySpeed = random(3, 8);
}

//has the square bounce off the edges of the screen
function bounceOff() { 
  x += xSpeed;
  y += ySpeed;
  if (y >= height - 75 || y <= 0) {
    ySpeed = ySpeed * -1;
  }
  else if (x >= width - 250 || x <= 0) {
    xSpeed = xSpeed * -1;
  }
}


function draw() {
  background(80, 80, 80);
  rect(x, y, 250, 75);
  bounceOff();
}
