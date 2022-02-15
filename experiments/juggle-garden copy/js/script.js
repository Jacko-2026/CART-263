"use strict";

let gravityForce = 0.0025;

let paddle;

let balls = [];
let numBalls = 10;


function setup() {
  createCanvas(800,800);

  paddle = new Paddle(140,18);

  for (let i = 0; i < numBalls; i++) {
    let x = random(0,width);
    let y = random(-400,-100);
    let ball = new Ball(x,y);
    balls.push(ball);
  }
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
