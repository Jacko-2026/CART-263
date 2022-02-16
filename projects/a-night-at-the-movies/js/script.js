"use strict";

let gravityForce = 0.0025;

let paddle;

let balls = [];
let numBalls = 3;

// Timer
let iText = ``;
let timerValue = 30;

// States
let state = 'title';
let levelText = ``;

function setup() {
  createCanvas(800,800);

  paddle = new Paddle(140,18);

  if (paddle.width === 0) {
    state = 'levelGameOver';
  }

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

  // Timer
  push();
  textSize(55);
  fill(28, 0, 189);
  textAlign(CENTER, CENTER);
  text(iText, 620, 55);
  pop();
  displayTimer();

  // Screens/States
  if (state === 'title') {
    title();
  } else if (state === 'level1') {
    level1();
  } else if (state === 'levelGameOver') {
    levelGameOver();
  } else if (state === 'paused') {
    paused();
  }
}

//Timer
function displayTimer() {
  if (timerValue >= 10) {
    textSize(30);
    fill(255);
    textAlign(CENTER, CENTER)
    text("0:" + timerValue, 400, 25);
  }
  if (timerValue < 10) {
    textSize(30);
    fill(255);
    textAlign(CENTER, CENTER)
    text('0:0' + timerValue, 400, 25);
  }
  if (timerValue == 0) {
    textSize(30);
    fill(255);
    text('Level Over', 400, 60);
  }
}
function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}

// Levels +Title Screen & Victory Screens
function title() {
  push();
  fill(0);
  square(0, 0, 10000)
  pop();

  push();
  textSize(100);
  fill(28, 0, 189);
  textAlign(CENTER, CENTER);
  text('START', width / 2, height / 2);
  pop();

  push();
  textSize(25);
  fill(28, 0, 189);
  textAlign(CENTER, CENTER);
  text('[PRESS "ENTER"]', width / 2, 350);
  pop();

  if ((state === 'title') && (keyIsDown(13))) {
    state = 'level1';
    numBalls = numBalls +3;
  }
  timerValue = 59;
}

function level1() {

  if (timerValue < 55) {
    levelText = ``;
  }
  if (timerValue > 55) {
    levelText = `[BOUNCE THE BALLS]`;
  }

  push();
  textSize(54);
  fill(28, 0, 189);
  textAlign(CENTER, CENTER);
  text(levelText, width / 2, height / 2);
  pop();

  if (timerValue == 0) {
    state = 'levelGameOver';
  }

  paddle.move();
  paddle.display();

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(paddle);
      ball.bounceCanvas();
      ball.display();
    }
  }
}

function levelGameOver() {
  push();
  fill(0);
  square(0, 0, 10000)
  pop();

  push();
  textSize(85);
  fill(28, 0, 189);
  textAlign(CENTER, CENTER);
  text('GAME OVER!', width / 2, height / 2);
  pop();

  push();
  textSize(25);
  fill(28, 0, 189);
  textAlign(CENTER, CENTER);
  text('[PRESS "E" TO CONTINUE]', width / 2, 350);
  pop();

  if (keyIsDown(69)) {
    state = 'title';
    timerValue = 59;
  }
}

function paused() {
  push();
  fill(0);
  square(0, 0, 10000)
  pop();

  timerValue = 59;

  push();
  textSize(45);
  fill(28, 0, 189);
  textAlign(CENTER, CENTER);
  text('[GAME PAUSED]', width / 2, height / 2);
  pop();

  push();
  textSize(25);
  fill(28, 0, 189);
  textAlign(CENTER, CENTER);
  text('[PRESS "E" TO CONTINUE]', width / 2, 350);
  pop();

  if (keyIsDown(69)) {
    state = 'level1';
    timerValue = 59;
  }
}

function keyPressed() {
  if ((key === `p`) && (state === `level1`)) {
    state = `paused`;
  } else if ((key === `p`) && (state === `paused`)) {
    state = `level1`;
  }
}
