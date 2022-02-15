"use strict";

let gravityForce = 0.0025;

let paddle;

let balls = [];
let numBalls = 10;

let superBalls = [];
let numSuperBalls = 1;

let state = 'simulation';

function setup() {
  createCanvas(800,800);

  paddle = new Paddle(140,18);

  for (let i = 0; i < numBalls; i++) {
    let x = random(0,width);
    let y = random(-400,-100);
    let ball = new Ball(x,y);
    balls.push(ball);
  }

  for (let i = 0; i < numSuperBalls; i++) {
    let x = random(0,width);
    let y = random(-400,-100);
    let superBall = new SuperBall(x,y);
    superBalls.push(superBall);
  }
}

function draw() {
  background(0);

  if (state === 'simulation') {
    simulation();
  }
  else if (state === 'badEnding') {
    badEnding();
  }
  else if (state === 'goodEnding') {
    goodEnding();
  }

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

  for (let i = 0; i < superBalls.length; i++) {
    let superBall = superBalls[i];
    if (superBall.active) {
      superBall.gravity(gravityForce);
      superBall.move();
      superBall.bounce(paddle);
      superBall.display();
    }
  }
}

function simulation(){
  for (let i = 0; i < superBalls.length; i++) {
    let superBall = superBalls[i];
    if (superBall.active === false) {
    state = 'badEnding';
    }
    if (superBall.x > 800 || superBall.x < 0) {
      state = 'goodEnding'
    }
  }
}

function badEnding() {
  push();
  textSize(100);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('GAME OVER',width/2,height/2);
  pop();
}

function goodEnding() {
  push();
  textSize(100);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text('CONGRATS!',width/2,height/2);
  pop();
}


function mouseClicked() {
  let ball = new Ball(mouseX,mouseY);
  balls.push(ball);
}
