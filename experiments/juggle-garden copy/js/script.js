"use strict";

let gravityForce = 0.0025;

let paddle;

let balls = [];
let numBalls = 3;

// Timer
let iText = ``;
let timerValue = 10;

function setup() {
  createCanvas(800,800);

  paddle = new Paddle(140,18);

  for (let i = 0; i < numBalls; i++) {
    let x = random(0,width);
    let y = random(-400,-100);
    let ball = new Ball(x,y);
    balls.push(ball);
  }

  // Create Timer
  push();
  fill(28, 0, 189);
  textAlign(CENTER, CENTER);
  setInterval(timeIt, 1000);
  pop();
}

function draw() {
  background(0);

  paddle.move();
  paddle.display();

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(paddle);
      ball.display();
    }
  }

  // Timer
  push();
  textSize(55);
  fill(28, 0, 189);
  textAlign(CENTER, CENTER);
  text(iText, 620, 55);
  pop();
  displayTimer();
}

//Timer
function displayTimer() {
  if (timerValue >= 10) {
    textSize(30);
    fill(255, 255, 255);
    textAlign(CENTER, CENTER)
    text("0:" + timerValue, 400, 25);
  }
  if (timerValue < 10) {
    textSize(30);
    fill(255, 255, 255);
    textAlign(CENTER, CENTER)
    text('0:0' + timerValue, 400, 25);
  }
  if (timerValue == 0) {
    textSize(30);
    fill(255, 255, 255);
    text('Level Over', 400, 60);
  }
}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}
