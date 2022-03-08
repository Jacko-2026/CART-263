"use strict";

$(`.top-secret`).on(`click`, redact);
setInterval(revelation, 500);

let gaspSound;
let markerSound;

function preload() {
  // Sounds
  soundFormats('wav');
  gaspSound = loadSound('assets/sounds/gasp.wav');
  markerSound = loadSound('assets/sounds/marker.wav');
}

function redact(event) {
  markerSound.play();

  $(this).removeClass(`revealed`);
  $(this).addClass(`redacted`);
}

function revelation() {
  gaspSound.play();

  $(`.redacted`).each(attemptReveal);
}


function attemptReveal() {
  let r = Math.random();
  if (r < 0.1) {
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
  }
}
