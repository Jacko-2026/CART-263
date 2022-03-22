/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let dialogue = [
  `Give me 100$.`,
  `Give me 200$.`,
  `Give me 300$.`
];

let customerResponse = [
  `What?`,
  `That's not right.`,
  `Secret Tunnel!`
];

let line1 = random(dialogue);
let line2 = document.getElementById(`line-2`);

let line1P = document.getElementById(`line-1`);

line1P.innerText = line1;

line1P.addEventListener(`click`, lineClicked);

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
  if (element === line1P) {
    element.innerText =  random(dialogue);
  }
  else if (element === line2) {
    element.innerText = ``;
  }
}

function random(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}


const kd = document.querySelectorAll(".key");
const textbox = document.querySelector(".textbox");

let keyPressed = (e) => {

  let kc = e.keyCode;

    if ( (kc >= 65 && kc <= 90) || kc == 32) {
        if (kc == 81) { kd[0].classList.add("key__down"); }
        else if (kc == 87) { kd[1].classList.add("key__down"); }
        else if (kc == 69) { kd[2].classList.add("key__down"); }
        else if (kc == 82) { kd[3].classList.add("key__down"); }
        else if (kc == 84) { kd[4].classList.add("key__down"); }
        else if (kc == 89) { kd[5].classList.add("key__down"); }
        else if (kc == 85) { kd[6].classList.add("key__down"); }
        else if (kc == 73) { kd[7].classList.add("key__down"); }
        else if (kc == 79) { kd[8].classList.add("key__down"); }
        else if (kc == 80) { kd[9].classList.add("key__down"); }
        else if (kc == 65) { kd[10].classList.add("key__down"); }
        else if (kc == 83) { kd[11].classList.add("key__down"); }
        else if (kc == 68) { kd[12].classList.add("key__down"); }
        else if (kc == 70) { kd[13].classList.add("key__down"); }
        else if (kc == 71) { kd[14].classList.add("key__down"); }
        else if (kc == 72) { kd[15].classList.add("key__down"); }
        else if (kc == 74) { kd[16].classList.add("key__down"); }
        else if (kc == 75) { kd[17].classList.add("key__down"); }
        else if (kc == 76) { kd[18].classList.add("key__down"); }
        else if (kc == 90) { kd[19].classList.add("key__down"); }
        else if (kc == 88) { kd[20].classList.add("key__down"); }
        else if (kc == 67) { kd[21].classList.add("key__down"); }
        else if (kc == 86) { kd[22].classList.add("key__down"); }
        else if (kc == 66) { kd[23].classList.add("key__down"); }
        else if (kc == 78) { kd[24].classList.add("key__down"); }
        else if (kc == 77) { kd[25].classList.add("key__down"); }
        else if (kc == 32) {
            kd[26].classList.add("key__down");
            textbox.innerHTML += "&nbsp;";
        }
    }

    if (kc === 13) {
      let text = textbox.value;
      textbox.value = ``;
      line2.innerText = text;
      line2.addEventListener(`click`, lineClicked);
    }
    if ((kc === 13) && (line2.innerText !== line1P.innerText)) {
      line1P.innerText = random(customerResponse);
    }
}

document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        return false;
    }
});

let keyReleased = (e) => {
   let kc = e.keyCode;
  if (kc == 81) { kd[0].classList.remove("key__down"); }
        else if (kc == 87) { kd[1].classList.remove("key__down"); }
        else if (kc == 69) { kd[2].classList.remove("key__down"); }
        else if (kc == 82) { kd[3].classList.remove("key__down"); }
        else if (kc == 84) { kd[4].classList.remove("key__down"); }
        else if (kc == 89) { kd[5].classList.remove("key__down"); }
        else if (kc == 85) { kd[6].classList.remove("key__down"); }
        else if (kc == 73) { kd[7].classList.remove("key__down"); }
        else if (kc == 79) { kd[8].classList.remove("key__down"); }
        else if (kc == 80) { kd[9].classList.remove("key__down"); }
        else if (kc == 65) { kd[10].classList.remove("key__down"); }
        else if (kc == 83) { kd[11].classList.remove("key__down"); }
        else if (kc == 68) { kd[12].classList.remove("key__down"); }
        else if (kc == 70) { kd[13].classList.remove("key__down"); }
        else if (kc == 71) { kd[14].classList.remove("key__down"); }
        else if (kc == 72) { kd[15].classList.remove("key__down"); }
        else if (kc == 74) { kd[16].classList.remove("key__down"); }
        else if (kc == 75) { kd[17].classList.remove("key__down"); }
        else if (kc == 76) { kd[18].classList.remove("key__down"); }
        else if (kc == 90) { kd[19].classList.remove("key__down"); }
        else if (kc == 88) { kd[20].classList.remove("key__down"); }
        else if (kc == 67) { kd[21].classList.remove("key__down"); }
        else if (kc == 86) { kd[22].classList.remove("key__down"); }
        else if (kc == 66) { kd[23].classList.remove("key__down"); }
        else if (kc == 78) { kd[24].classList.remove("key__down"); }
        else if (kc == 77) { kd[25].classList.remove("key__down"); }
        else if (kc == 32) { kd[26].classList.remove("key__down"); }
}

window.addEventListener("keydown", keyPressed);
window.addEventListener("keyup", keyReleased);
