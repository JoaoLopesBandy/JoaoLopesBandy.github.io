// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let onLeft, onRight; // boolians
let leftFade = 0;
let rightFade = 0;
const FADE_SPEED = 3;


function setup() {
  createCanvas(windowWidth, windowHeight);
  onLeft = true;
  onRight = false;
}

function updateCurrentSide(){
//update the state variable to represent which side the mouse curser is one

  if(mouseX < width/2){
    print("left);")
    //mouse is on the left
    onLeft = true;
    onRight = false;
  }
  else{
    //mouse is on the right
    print("right");
    onRight = true;
    onLeft = false;
  }
  print(onLeft,onRight);

}

function renderRectangle(){
  //draw two rectangles of varying fills

  if(onLeft){ //onleft = true
    fill(0,leftFade);
    leftFade += FADE_SPEED;
  }
  else {
    fill(255);
    leftFade = 0;
  }
  rect(0,0,width/2,height);
  
  if(onRight){
    fill(0,rightFade);
    rightFade += FADE_SPEED;
  }
  else {
    fill(255);
    rightFade = 0;
  }
  rect(width/2,0,width/2,height);
}

function draw() {
  background(220);
  updateCurrentSide();
  //print("left:"  + onLeft + "  Right:  " + onRight);
  renderRectangle();
  if(mouseX > width*.25 ** mouseX < width*.75 && mouseY > height*.25 && mouseY < height*.75){
    fill(90,160,240,120);
  }
  else {
    fill(20,200,20,120);
  }
  
  rect(width*.25,height*.25, width/2,height/2);
}
