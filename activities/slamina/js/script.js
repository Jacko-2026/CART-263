"use strict";

const animals =  [
      "aardvark",
      "alligator",
      "alpaca",
      "antelope",
      "ape",
      "armadillo",
      "baboon",
      "badger",
      "bat",
      "bear",
      "beaver",
      "bison",
      "boar",
      "buffalo",
      "bull",
      "camel",
      "canary",
      "capybara",
      "cat",
      "chameleon",
      "cheetah",
      "chimpanzee",
      "chinchilla",
      "chipmunk",
      "cougar",
      "cow",
      "coyote",
      "crocodile",
      "crow",
      "deer",
      "dingo",
      "dog",
      "donkey",
      "dromedary",
      "elephant",
      "elk",
      "ewe",
      "ferret",
      "finch",
      "fish",
      "fox",
      "frog",
      "gazelle",
      "gila monster",
      "giraffe",
      "gnu",
      "goat",
      "gopher",
      "gorilla",
      "grizzly bear",
      "ground hog",
      "guinea pig",
      "hamster",
      "hedgehog",
      "hippopotamus",
      "hog",
      "horse",
      "hyena",
      "ibex",
      "iguana",
      "impala",
      "jackal",
      "jaguar",
      "kangaroo",
      "koala",
      "lamb",
      "lemur",
      "leopard",
      "lion",
      "lizard",
      "llama",
      "lynx",
      "mandrill",
      "marmoset",
      "mink",
      "mole",
      "mongoose",
      "monkey",
      "moose",
      "mountain goat",
      "mouse",
      "mule",
      "muskrat",
      "mustang",
      "mynah bird",
      "newt",
      "ocelot",
      "opossum",
      "orangutan",
      "oryx",
      "otter",
      "ox",
      "panda",
      "panther",
      "parakeet",
      "parrot",
      "pig",
      "platypus",
      "polar bear",
      "porcupine",
      "porpoise",
      "prairie dog",
      "puma",
      "rabbit",
      "raccoon",
      "ram",
      "rat",
      "reindeer",
      "reptile",
      "rhinoceros",
      "salamander",
      "seal",
      "sheep",
      "shrew",
      "silver fox",
      "skunk",
      "sloth",
      "snake",
      "squirrel",
      "tapir",
      "tiger",
      "toad",
      "turtle",
      "walrus",
      "warthog",
      "weasel",
      "whale",
      "wildcat",
      "wolf",
      "wolverine",
      "wombat",
      "woodchuck",
      "yak",
      "zebra"
    ];

    // States
    let state = 'title';
    let levelText = ``;

    let currentAnimal = '';
    let currentAnswer = '';

    // Timer
    let iText = ``;
    let timerValue = 10;

    // Sounds
    let rightAnswer;
    let wrongAnswer;

function preload() {
  // Sounds
    soundFormats('wav');
    rightAnswer = loadSound('assets/sounds/ding');
    wrongAnswer = loadSound('assets/sounds/buzz');
  }

function setup() {
  createCanvas(windowHeight, windowHeight);

  if (annyang) {
    let commands = {
      'I think it is *animal': guessAnimal
    };
    annyang.addCommands(commands);
    annyang.start();
    annyang.debug(true);

    textSize(32);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
  }

  // Create Timer
  push();
  fill(28, 0, 189);
  textAlign(CENTER, CENTER);
  setInterval(timeIt, 1000);
  pop();
}

function draw() {
  background (0);

  if (currentAnswer === currentAnimal) {
    fill(0, 255, 0);
  }
  else {
    fill(255, 0, 0);
  }
  text(currentAnswer, width/2, height/2);

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
  levelText = `[GUESS THE ANIMAL]`;
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
// Reset Timer
  timerValue = 54;

  if (currentAnswer === currentAnimal) {
    rightAnswer.play();
  }
  else {
    wrongAnswer.play();
  }

  currentAnimal = random(animals);
  let reverseAnimal = reverseString(currentAnimal);
  responsiveVoice.speak(reverseAnimal);
}

function guessAnimal(animal) {
  currentAnswer = animal.toLowerCase();
  console.log(currentAnswer);
}

/**
Reverses the provided string
*/
function reverseString(string) {
  // Split the string into an array of characters
  let characters = string.split('');
  // Reverse the array of characters
  let reverseCharacters = characters.reverse();
  // Join the array of characters back into a string
  let result = reverseCharacters.join('');
  // Return the result
  return result;
}
