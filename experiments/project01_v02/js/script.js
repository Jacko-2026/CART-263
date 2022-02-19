/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// The bubble
let bubble = undefined;
// Highscore
let highScore = 0;
// States
let state = 'title';
let levelText = ``;
// Timer
let iText = ``;
let timerValue = 10;
// Sounds
let poppingSound;

function preload() {
  // Sounds
  soundFormats('wav');
  poppingSound = loadSound('assets/sounds/Pop.wav');
}

function setup() {
  createCanvas(640, 480);

  // Our bubble
  bubble = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -2
  };

  // Create Timer
  push();
  fill(28, 0, 189);
  textAlign(CENTER, CENTER);
  setInterval(timeIt, 1000);
  pop();
}

function draw() {
  background(0);

  // Move the bubble
  bubble.x += bubble.vx;
  bubble.y += bubble.vy;

  if (bubble.y < 0) {
    bubble.x = random(width);
    bubble.y = height;
  }

  push();
  fill(0, 100, 200);
  noStroke();
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();

  // Timer
  push();
  textSize(55);
  fill(28, 0, 189);
  textAlign(CENTER, CENTER);
  text(iText, 620, 55);
  pop();
  displayTimer();

  // Highscore
  push();
  textSize(55);
  fill(28, 0, 189);
  textAlign(CENTER, CENTER);
  text(highScore, 620, 55);
  pop();

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
  }
  timerValue = 59;
}

function level1() {
  if (timerValue < 55) {
    levelText = ``;
  }
  if (timerValue > 55) {
    levelText = `[POP THE BUBBLES]`;
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
}

function levelGameOver() {
  push();
  fill(0);
  square(0, 0, 10000)
  pop();

  push();
  textSize(55);
  fill(28, 0, 189);
  textAlign(CENTER, CENTER);
  text(highScore, 620, 55);
  pop()

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

//Timer
function displayTimer() {
  if (timerValue >= 10) {
    textSize(30);
    fill(28, 0, 189);
    textAlign(CENTER, CENTER)
    text("0:" + timerValue, 775 / 2, 50 / 2);
  }
  if (timerValue < 10) {
    textSize(30);
    fill(28, 0, 189);
    textAlign(CENTER, CENTER)
    text('0:0' + timerValue, 775 / 2, 50 / 2);
  }
  if (timerValue == 0) {
    textSize(30);
    fill(28, 0, 189);
    textAlign(CENTER, CENTER)
    text('Level Over', 725 / 2, 50 / 2 + 20);
  }
}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}

function keyPressed() {
  if ((key === `p`) && (state === `level1`)) {
    state = `paused`;
  } else if ((key === `p`) && (state === `paused`)) {
    state = `level1`;
  }
}
