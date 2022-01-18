"use strict";

let state = 'title';

let levelText = ``;

const NUM_ANIMAL_IMAGES = 10;
const NUM_ANIMALS = 100;

let animalImages = [];
let animals = [];

let sausageDogImage = undefined;
let sausageDog = undefined;

// Timer
let iText = ``;
let timerValue = 10;

// Sounds
let bark;

function preload() {
  for (let i = 0; i < NUM_ANIMAL_IMAGES; i++) {
    let animalImage = loadImage(`assets/images/animal${i}.png`)
    animalImages.push(animalImage);
  }

  sausageDogImage = loadImage('assets/images/sausage-dog.png');

// Sounds
  soundFormats('wav');
  bark = loadSound('assets/sounds/bark');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create the animals
  for (let i = 0; i < NUM_ANIMALS; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let animalImage = random(animalImages);
    let animal = new Animal(x, y, animalImage);
    animals.push(animal);
  }

  let x = random(0, width);
  let y = random(0, height);
  sausageDog = new SausageDog(x, y, sausageDogImage);

// Create Timer
push();
fill(28, 0, 189);
textAlign(CENTER, CENTER);
setInterval(timeIt, 1000);
pop();
}

function draw() {
  background(255, 255, 0);

  for (let i = 0; i < animals.length; i++) {
    animals[i].update();
  }
  sausageDog.update();

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
  }
else if (state === 'level1') {
  level1();
  }
else if (state === 'levelGameOver') {
  levelGameOver();
  }
}

// Levels +Title Screen & Victory Screens
function title() {
  push();
  fill(255, 255, 0);
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
  text('[PRESS "ENTER"]', width / 2, 725);
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
  levelText = `[FIND THE SAUSSAGE DOG]`;
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
  textSize(85);
  fill(28, 0, 189);
  textAlign(CENTER, CENTER);
  text('GAME OVER!', width / 2, height / 2);
  pop();

  push();
  textSize(65);
  fill(28, 0, 189);
  textAlign(CENTER, CENTER);
  text('[PRESS "E" TO CONTINUE]', width / 2, 725);
  pop();

  if (keyIsDown(69)) {
    state = 'title';
    timerValue = 59;

  for (let i = 0; i < NUM_ANIMALS; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let animalImage = random(animalImages);
    let animal = new Animal(x, y, animalImage);
    animals.push(animal);
  }
    let x = random(0, width);
    let y = random(0, height);
    sausageDog = new SausageDog(x, y, sausageDogImage);
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

function mousePressed() {
  sausageDog.mousePressed();
}
