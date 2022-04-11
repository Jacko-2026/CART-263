/**
Pawn Shop Sim
Jack Taddeo

The aim of the game is to buy, sell, and trade items that come to your shop by interacting with the customers.
*/

"use strict";

let dialogue = [
  `Give me 100$.`,
  `Give me 200$.`,
  `Give me 300$.`
];

let clientImages = [
  `Item-01.png`
];

let customerJoke = [
  `Whats the best thing about the Swiss?
  Idk, but their flag is a big plus.`,
  `Why do we tell actors to “break a leg?”
Because every play has a cast.`,
  `Did you hear about the claustrophobic astronaut?
He just needed a little space.`,
  `Why don’t scientists trust atoms?
Because they make up everything.`
];
let customerResponse = [
  `What?`,
  `That's not right.`,
  `I dont understand what you're saying.`,
  `Huh?`,
  `Isnt this a pawn shop?`,
  `I want to barter.`,
  `Secret Tunnel! (Hidden Easter Egg)`
];
let customerResponse02 = [
  `Are you gonna buy this or not? I need the credits.`,
  `What are you, deaf?! I want credits.`,
  `I'm asking for credits, what do you not understand?`
];
let customerResponse03 = [
  `You dont know what credits are? They're the galactic currency.`,
  `You dont trade in credits? I thought it was the galactic currency.`,
  `How do you not know what credits are?`
];


let line1 = random(dialogue);
let line2 = document.getElementById(`line-2`);
let line1P = document.getElementById(`line-1`);

line1P.innerText = line1;

function random(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}

const kd = document.querySelectorAll(".key");
const textbox = document.querySelector(".textbox");

let keyPressed = (e) => {
  let kc = e.keyCode;
  let text = textbox.value;
    if (kc === 13) {
      textbox.value = ``;
      line2.innerText = text;
    }
    if ((kc === 13) && (line1 = random(dialogue)) && (line2.innerText !== line1P.innerText)) {
      line1P.innerText = random(customerResponse);
    }
    let secretSound = new Audio(`assets/sounds/secret.wav`);
    let jokeSound = new Audio(`assets/sounds/joke.wav`);
    if (line1P.innerText === `Secret Tunnel! (Hidden Easter Egg)`) {
      secretSound.play();
    }
    // Customer Response / Costomer & User Interaction
    let result1 = text.includes(`what`);
    if ((kc === 13) && (result1 === true)) {
      line1P.innerText = random(customerResponse02);
    }
    let result2 = text.includes(`credits`);
    if ((kc === 13) && (result2 === true)) {
      line1P.innerText = random(customerResponse03);
    }
    let result3 = text.includes(`joke`);
    if ((kc === 13) && (result3 === true)) {
      line1P.innerText = random(customerJoke);
      jokeSound.play();
    }
}

document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        return false;
    }
});

window.addEventListener("keydown", keyPressed);
