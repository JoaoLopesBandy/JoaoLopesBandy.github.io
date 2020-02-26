// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let onLeft, onRight, onBottomLeft, onBottomRight; // boolians
let leftFade = 0;
let rightFade = 0;
let bottomLeftFade = 0;
let bottomRightFade = 0;
const FADE_SPEED = 10;
const FADE_OUTSPEED = -10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  onLeft = true;
  onRight = false;
  onBottomRight = false;
  onBottomLeft = true;
}

function updateCurrentSide(){
//update the state variable to represent which side the mouse curser is one

  if(mouseX < width/2 && mouseY < height/2){
    print("left);")
    //mouse is on the left
    onLeft = true;
    onRight = false;
    onBottomRight = false;
    onBottomLeft = false;
  }
  else if(mouseX>width/2 && mouseY>height/2){
    //mouse is on the bottom right
    print("right");
    onRight = false;
    onLeft = false;
    onBottomRight = true;
    onBottomLeft = false;
  }
  else if(mouseX<width/2 && mouseY>height/2){
    onRight = false;
    onLeft = false;
    onBottomRight = false;
    onBottomLeft = true;
  }
  else{
    onRight = true;
    onLeft = false;
    onBottomRight = false;
    onBottomLeft = false;

}
}

function renderRectangle(){
  //draw two rectangles of varying fills

  if(onLeft){ //onleft = true
    fill(255,255,0,leftFade);
    leftFade += FADE_SPEED;
  }
  else {
    leftFade = 0;
    fill(100);
    
    
  }
  rect(0,0,width/2,height/2);
  
  if(onRight){
    fill(0,255,200,rightFade);
    rightFade += FADE_SPEED;
  }
  else {
    rightFade = 0;;
    fill(100);
    
  }
  rect(width/2,0,width/2,height/2);
  if(onBottomLeft){
    fill(0,0,255,bottomLeftFade);
    bottomLeftFade += FADE_SPEED;
  }
  else{
    fill(100);
    bottomLeftFade = 0;
  }
  rect(0,height/2,width/2,height/2);
  if(onBottomRight){
    fill(255,0,0,bottomRightFade);
    bottomRightFade += FADE_SPEED;
  }
  else{
    fill(100);
    bottomRightFade = 0;
  }
  rect(width/2,height/2,width/2,height/2);
}

function draw() {
  background(220);
  updateCurrentSide();
  //print("left:"  + onLeft + "  Right:  " + onRight);
  renderRectangle();
  
  
}
