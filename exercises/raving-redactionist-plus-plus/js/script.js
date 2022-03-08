"use strict";

$(`.top-secret`).on(`click`, redact);
setInterval(revelation, 500);

let gaspSound = new Audio(`assets/sounds/gasp.wav`);
let markerSound = new Audio(`assets/sounds/marker.wav`);
let officeSound = new Audio(`assets/sounds/office.wav`);

officeSound.play();

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
