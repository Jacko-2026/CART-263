/**
Haiku Generator
Jack Taddeo

Generates a random haiku!
*/

"use strict";

let fiveSyllableLines = [
  `Like crunchy cornflakes`,
  `Beauty in decay`,
  `Coolness fills the air`,
  `Fall weather is here`,
  `Golden butterflies`,
  `And rest till fall ends`,
  `A misty morning`,
  `Crunch on autumn leaves`
];
let sevenSyllableLines = [
  `Gold leaves rustle underfoot`,
  `Scarves and sweaters everywhere`,
  `Float down to the soft, moist ground`,
  `Pumpkins in the air, mossy trees`,
  `They will not come back again`
];

let line1 = random(fiveSyllableLines);
let line2 = random(sevenSyllableLines);
let line3 = random(fiveSyllableLines);

let line1P = document.getElementById(`line-1`);
let line2P = document.getElementById(`line-2`);
let line3P = document.getElementById(`line-3`);

line1P.innerText = line1;
line2P.innerText = line2;
line3P.innerText = line3;

line1P.addEventListener(`click`, lineClicked);
line2P.addEventListener(`click`, lineClicked);
line3P.addEventListener(`click`, lineClicked);

function lineClicked(event) {
  fadeOut(event.target, 1);
}

function fadeOut (element, opacity) {
  opacity -= 0.01;
  element.style[`opacity`] = opacity;
  if (opacity > 0) {
    requestAnimationFrame(function() {
      fadeOut(element, opacity);
    });
  }
  else {
    setNewLine(element);
    fadeIn(element, 0);
  }
}

function fadeIn(element, opacity) {
  opacity += 0.01;
  element.style[`opacity`] = opacity;
  if (opacity < 1) {
    requestAnimationFrame(function() {
      fadeIn(element, opacity);
    });
  }
}

function setNewLine(element) {
  if (element === line1P || element === line3P) {
    element.innerText =  random(fiveSyllableLines);
  }
  else if (element === line2P) {
    element.innerText = random (sevenSyllableLines);
  }
}

function random(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}
