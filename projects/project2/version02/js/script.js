/**
Pawn Shop Sim
Jack Taddeo

The aim of the game is to buy, sell, and trade items that come to your shop by interacting with the customers.
*/

"use strict";

let clientImage = document.getElementById(`client-image`);
let clientImages = [
  `assets/images/clients/Tadloanian-01.png`,
  `assets/images/clients/Android-01.png`,
  `assets/images/clients/Android-02.png`,
  `assets/images/clients/Drogo-01.png`,
  `assets/images/clients/Drogo-02.png`,
  `assets/images/clients/Drogo-03.png`,
  `assets/images/clients/Ghost-01.png`,
  `assets/images/clients/Ghost-02.png`,
  `assets/images/clients/GUF-01.png`,
  `assets/images/clients/GUF-02.png`,
  `assets/images/clients/Java-01.png`,
  `assets/images/clients/Java-02.png`,
  `assets/images/clients/Mando-01.png`,
  `assets/images/clients/Mando-02.png`,
  `assets/images/clients/Mando-03.png`
];
clientImage.src = random(clientImages);
let dialogue = [
  `Give me 100$.`,
  `Give me 200$.`,
  `Give me 300$.`
];

let itemImage = document.getElementById(`item-image`);
let itemImages = [
  `assets/images/items/Item-01.png`,
  `assets/images/items/Item-02.png`,
  `assets/images/items/Item-03.png`,
  `assets/images/items/Item-04.png`,
  `assets/images/items/Item-05.png`,
  `assets/images/items/Item-06.png`,
  `assets/images/items/Item-07.png`,
  `assets/images/items/Item-08.png`,
  `assets/images/items/Item-09.png`,
  `assets/images/items/Item-10.png`,
  `assets/images/items/Item-11.png`,
  `assets/images/items/Item-12.png`
];
itemImage.src = random(itemImages);

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

let amount = 1000;
let amountP = document.getElementById(`amount`);
amountP.innerText = amount;

let price;
let priceP = document.getElementById(`price`);
priceP.innerText = price;
if (line1 === `Give me 100$.`) {
  priceP.innerText = 100;
}
if (line1 === `Give me 200$.`) {
  priceP.innerText = 200;
}
if (line1 === `Give me 300$.`) {
  priceP.innerText = 300;
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
    let huh = text.includes(`huh`);
    if ((kc === 13) && (huh === true)) {
      line1P.innerText = random(customerResponse02);
    }
    let what = text.includes(`what are credits`);
    if ((kc === 13) && (what === true)) {
      line1P.innerText = random(customerResponse03);
    }
    let joke = text.includes(`tell me a joke`);
    if ((kc === 13) && (joke === true)) {
      line1P.innerText = random(customerJoke);
      jokeSound.play();
    }
    let next = text.includes(`next customer`);
    if ((kc === 13) && (joke === true)) {
      itemImage.src = random(itemImages);
      clientImage.src = random(clientImages);
    }
    let result4 = text.includes(`what is this`);
    if ((kc === 13) && (result4 === true)) {
      console.log(itemImage.src)
      if (itemImage.src.includes (`Item-01`)) {
        line1P.innerText = `It's a Vermit Worm.`
      }
      if (itemImage.src.includes(`Item-02`)) {
        line1P.innerText = `It's a Ugurt Flower.`
      }
      if (itemImage.src.includes(`Item-03`)) {
        line1P.innerText = `It's a Gem Berry.`
      }
      if (itemImage.src.includes(`Item-04`)) {
        line1P.innerText = `It's a Folmar in a Jar.`
      }
      if (itemImage.src.includes(`Item-05`)) {
        line1P.innerText = `It's a Ceremonial Vase.`
      }
      if (itemImage.src.includes(`Item-06`)) {
        line1P.innerText = `It's a Beskar Steel Ingot.`
      }
      if (itemImage.src.includes(`Item-07`)) {
        line1P.innerText = `It's a Pound of Spice.`
      }
      if (itemImage.src.includes(`Item-08`)) {
        line1P.innerText = `It's a Drogo Scale.`
      }
      if (itemImage.src.includes(`Item-09`)) {
        line1P.innerText = `It's a Ghost Scripture.`
      }
      if (itemImage.src.includes(`Item-10`)) {
        line1P.innerText = `It's a Unknown Organ.`
      }
      if (itemImage.src.includes(`Item-11`)) {
        line1P.innerText = `It's a Uranium Rod.`
      }
      if (itemImage.src.includes(`Item-12`)) {
        line1P.innerText = `It's a Laser Crystal.`
      }
    }
    let result5 = text.includes(`stolen`);
    if ((kc === 13) && (result5 === true)) {
      let mandoStolen = clientImage.src.includes(`Mando`);
      if ((itemImage.src.includes (`Item-06`)) && (mandoStolen === false)) {
        line1P.innerText = `Yes`
      }
      else if ((itemImage.src.includes (`Item-06`)) && (mandoStolen === true)) {
        line1P.innerText = `No`
      }
      let ghostStolen = clientImage.src.includes(`Ghost`);
      if ((itemImage.src.includes (`Item-09`)) && (ghostStolen === false)) {
        line1P.innerText = `Yes`
      }
      else if ((itemImage.src.includes (`Item-09`)) && (ghostStolen === true)) {
        line1P.innerText = `No`
      }
      let organStolen = itemImage.src.includes(`Item-10`);
      if ((itemImage.src.includes (`Item-10`)) && (ghostStolen === true)) {
        line1P.innerText = `Yes`
      }
    }
}

document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        return false;
    }
});

window.addEventListener("keydown", keyPressed);
