"use strict";

/**
Spy Profile Generator
Jack Taddeo

Generates a randomized spy profile for the user, and password protects it.
*/

let spyProfile = {
  name: '**REDACTED**',
  alias: '**REDACTED**',
  secretWeapon: '**REDACTED**',
  password: '**REDACTED**'
};

let instrumentData = undefined;
let objectData = undefined;
let tarotData = undefined;


function preload() {
  instrumentData = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json');
  objectData = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json');
  tarotData = loadJSON('https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json');
}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  let data = JSON.parse(localStorage.getItem('spy-profile-data'));

  if (data !== null) {
    let username = prompt('Agent! What is your name?!');
    let password = prompt('Agent! What is your password?!');
    if ((password == data.password) && (username == data.name)) {
      spyProfile.name = data.name;
      spyProfile.alias = data.alias;
      spyProfile.secretWeapon = data.secretWeapon;
      spyProfile.password = data.password;
    }
  }
  else {
    generateSpyProfile();
  }
}


function generateSpyProfile() {
  spyProfile.name = prompt('Agent! What is your name?!');
  let instrument = random(instrumentData.instruments);
  spyProfile.alias = `The ${instrument}`;
  spyProfile.secretWeapon = random(objectData.objects);
  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords);

  localStorage.setItem('spy-profile-data', JSON.stringify(spyProfile));
}


function draw() {
  background(255);

  let profile = `** SPY PROFILE! DO NOT DISTRIBUTE! **

Name: ${spyProfile.name}
Alias: ${spyProfile.alias}
Secret Weapon: ${spyProfile.secretWeapon}
Password: ${spyProfile.password}`;

  push();
  textFont('Courier, monospace');
  textSize(24);
  textAlign(LEFT, TOP);
  fill(0);
  text(profile, 100, 100);
  pop();
}

// Cheat Codes
  // Reset Profile with "C"
function keyPressed() {
  if (key === `c`) {
    localStorage.clear();
  }
  // Reset secret weapon with "K"
  if (key === `k`) {
    spyProfile.secretWeapon = random(objectData.objects);
  }
}
