/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// The user's webcam
let video = undefined;
// The Handpose model
let handpose = undefined;
// The current set of predictions
let predictions = [];
// The bubble
let bubble = undefined;
let bubble02 = undefined;
let bubble03 = undefined;
// Highscore
let highScore = 0;
// States
let state = 'title';
let levelText = ``;
// Timer
let iText = ``;
let timerValue = 10;
// Tutorial / Info Text
let tutText = ``;
// Sounds
let poppingSound;

function preload() {
  // Sounds
  soundFormats('wav');
  poppingSound = loadSound('assets/sounds/Pop.wav');
}

function setup() {
  createCanvas(640, 480);

  // Access user's webcam
    video = createCapture(VIDEO);
    video.hide();

    // Load the handpose model
    handpose = ml5.handpose(video, {
      flipHorizontal: true
    }, function() {
      console.log(`Model loaded.`);
    });

    // Listen for predictions
    handpose.on(`predict`, function(results) {
      console.log(results);
      predictions = results;
    });

  // Our bubble
  bubble = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -2
  };
  bubble02 = {
    x: random(width),
    y: height,
    size: 75,
    vx: 0,
    vy: -2
  };
  bubble03 = {
    x: random(width),
    y: height,
    size: 50,
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

  push();
  textSize(15);
  fill(200, 100, 100);
  textAlign(LEFT);
  text(tutText, 30, 50);
  pop();

  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];

    // Check bubble popping
    let d = dist(tipX, tipY, bubble.x, bubble.y);
    let d2 = dist(tipX, tipY, bubble02.x, bubble02.y);
    let d3 = dist(tipX, tipY, bubble03.x, bubble03.y);

    if ((d < bubble.size / 2) && (key === `b`)) {
      bubble.x = random(width);
      bubble.y = height;
      highScore += 1;
      poppingSound.play();
    }
    if ((d2 < bubble02.size / 2) && (key === `r`)) {
      bubble02.x = random(width);
      bubble02.y = height;
      highScore += 1;
      poppingSound.play();
    }
    if ((d3 < bubble03.size / 2) && (key === `y`)) {
      bubble03.x = random(width);
      bubble03.y = height;
      highScore += 1;
      poppingSound.play();
    }

    // Pin body
    push();
    noFill();
    stroke(255, 255, 255);
    strokeWeight(2);
    line(baseX, baseY, tipX, tipY);
    pop();

    // Pin head
    push();
    noStroke();
    fill(255, 0, 0);
    ellipse(baseX, baseY, 20);
    pop();
  }

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
  text(highScore, 600, 55);
  pop();

  // Screens/States
  if (state === 'title') {
    title();
  } else if (state === 'level1') {
    level1();
  } else if (state === 'level2') {
    level2();
  } else if (state === 'level3') {
    level3();
  } else if (state === 'levelGameOver') {
    levelGameOver();
  } else if (state === 'paused') {
    paused();
  }
}

function createBubble01() {
  push();
  fill(0, 100, 200);
  noStroke();
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();

  // Move the bubble
  bubble.x += bubble.vx;
  bubble.y += bubble.vy;

  if (bubble.y < 0) {
    bubble.x = random(width);
    bubble.y = height;
  }
}
function createBubble02() {
  push();
  fill(255, 8, 0);
  noStroke();
  square(bubble02.x, bubble02.y, bubble02.size);
  pop();

  // Move the bubble
  bubble02.x += bubble02.vx;
  bubble02.y += bubble02.vy;

  if (bubble02.y < 0) {
    bubble02.x = random(width);
    bubble02.y = height;
  }
}
function createBubble03() {
  push();
  fill(252, 186, 3);
  noStroke();
  ellipse(bubble03.x, bubble03.y, bubble03.size);
  pop();

  // Move the bubble
  bubble03.x += bubble03.vx;
  bubble03.y += bubble03.vy;

  if (bubble03.y < 0) {
    bubble03.x = random(width);
    bubble03.y = height;
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
  timerValue = 20;
}

function level1() {
  createBubble01();

  if (timerValue < 20) {
    levelText = ``;
  }
  if (timerValue > 18) {
    levelText = `[POP THE BUBBLES]`;
  }

  push();
  textSize(54);
  fill(28, 0, 189);
  textAlign(CENTER, CENTER);
  text(levelText, width / 2, height / 2);
  pop();

  if ((timerValue == 0) && (highScore > 9)) {
    highScore = 0;
    state = 'level2';
    timerValue = 25;
  } else if ((timerValue == 0) && (highScore < 9)) {
    state = 'levelGameOver';
  }
}
function level2() {
  createBubble01();
  createBubble02();

  if (timerValue < 25) {
    levelText = ``;
  }
  if (timerValue > 23) {
    levelText = `[POP THE BUBBLES]`;
  }

  push();
  textSize(54);
  fill(28, 0, 189);
  textAlign(CENTER, CENTER);
  text(levelText, width / 2, height / 2);
  pop();

  if ((timerValue == 0) && (highScore > 14)) {
    highScore = 0;
    state = 'level3';
    timerValue = 20;
  } else if ((timerValue == 0) && (highScore < 14)) {
    state = 'levelGameOver';
  }
}
function level3() {
  createBubble01();
  createBubble02();
  createBubble03();

  if (timerValue < 30) {
    levelText = ``;
  }
  if (timerValue > 28) {
    levelText = `[POP THE BUBBLES]`;
  }

  push();
  textSize(54);
  fill(28, 0, 189);
  textAlign(CENTER, CENTER);
  text(levelText, width / 2, height / 2);
  pop();

  if ((timerValue == 0) && (highScore > 19)) {
    highScore = 0;
    state = 'levelVic';
    timerValue = 30;
  } else if ((timerValue == 0) && (highScore < 19)) {
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
  text(highScore, 600, 55);
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
    highScore = 0;
    state = 'title';
    timerValue = 59;
  }
}
function levelVic() {
  push();
  textSize(64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text('LEVEL COMPLETE!', width / 2, height / 2);
  pop();

  push();
  textSize(25);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text('[PRESS "ENTER"]', width / 2, 725);
  pop();

  if ((state === 'levelVic') && (keyIsDown(13))) {
    state = 'title';
  }
  timerValue = 20;
}

function paused() {
  push();
  fill(0);
  square(0, 0, 10000)
  pop();

  timerValue = 20;

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
  text('[PRESS 1, 2, or 3 TO CONTINUE]', width / 2, 350);
  pop();

  if (keyIsDown(49)) {
    state = 'level1';
    timerValue = 20;
  } else if (keyIsDown(50)) {
    state = 'level2';
    timerValue = 25;
  } else if (keyIsDown(51)) {
    state = 'level3';
    timerValue = 30;
  }
}

//Timer
function displayTimer() {
  if (timerValue >= 10) {
    textSize(30);
    fill(28, 0, 189);
    textAlign(CENTER, CENTER)
    text("0:" + timerValue, 320, 20);
  }
  if (timerValue < 10) {
    textSize(30);
    fill(28, 0, 189);
    textAlign(CENTER, CENTER)
    text('0:0' + timerValue, 320, 20);
  }
  if (timerValue == 0) {
    textSize(30);
    fill(28, 0, 189);
    textAlign(CENTER, CENTER)
    text('Level Over', 320, 50);
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
  } else if ((key === `p`) && (state === `level2`)) {
    state = `paused`;
  } else if ((key === `p`) && (state === `level3`)) {
    state = `paused`;
  }

  else if ((keyCode === 73) && (state === 'level1') && (tutText === ``)) {
    tutText = `[Press "B" & use your finger to pop Blue enemies]`;
  } else if ((keyCode === 73) && (state === 'level1') && (tutText === `[Press "B" & use your finger to pop Blue enemies]`)) {
    tutText = ``
  } else if ((keyCode === 73) && (state === 'level2') && (tutText === ``)) {
    tutText = `[Press "R" & use your finger to pop Red enemies]`;
  } else if ((keyCode === 73) && (state === 'level2') && (tutText === `[Press "R" & use your finger to pop Red enemies]`)) {
    tutText = ``
  } else if ((keyCode === 73) && (state === 'level3') && (tutText === ``)) {
    tutText = `[Press "Y" & use your finger to pop Yellow enemies]`;
  } else if ((keyCode === 73) && (state === 'level3') && (tutText === `[Press "Y" & use your finger to pop Yellow enemies]`)) {
    tutText = ``
  }
}
