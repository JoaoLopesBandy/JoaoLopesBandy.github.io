//Chess Board

let squareWidthApart = 0;
let squareHeightApart = 0;

function setup() {
  createCanvas(600, 600);
  noLoop();
}

function chessBoard() {
  for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
      rect(squareWidthApart, squareHeightApart, 75, 75);
      squareWidthApart += 75;
    }
    squareHeightApart += 75;
    squareWidthApart = 0;
  }
}

function draw() {
  chessBoard();

}