/**
Intergalactic Pawn Shop Simulator
Jack Taddeo

The aim of the game is to buy, sell, and trade items that come to your shop by interacting with the customers.
In this build of the game, only the ability to buy and communicate with the customer is available.
There is an additional companion guide that gives loose bits of story and client / item information attached to this project.
Additionally, there is a mock/fake trailer in the form of a YouTube link in the readme file to show the original intent and possible future for this game.
*/

"use strict";
// Music (Credits display in the customer's text when play and or asked)
let secretSound = new Audio(`assets/sounds/secret.wav`);
let fishSound = new Audio(`assets/sounds/fish.wav`);
let jokeSound = new Audio(`assets/sounds/joke.wav`);
let mainMusic = new Audio(`assets/sounds/mainMusic.wav`);
let moneyMusic = new Audio(`assets/sounds/moneyMusic.wav`);
let ribsMusic = new Audio(`assets/sounds/ribsMusic.wav`);
mainMusic.play();
mainMusic.loop = true;
// Item & Client images
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
// Customer dialogue
let dialogue = [
  `Give me 100$.`,
  `Give me 200$.`,
  `Give me 300$.`
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
  `I don't understand what you're saying.`,
  `Huh?`,
  `Isn't this a pawn shop?`,
  `I want to barter.`,
  `Secret Tunnel! [Hidden Easter Egg]`
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
let gufResponse = [
  `How do you not know?`,
  `We are law and order in this galaxy.`,
  `We are what remains of the Rebels, I actually faught during the Seven Suns.`,
  `We are the law, so if you see an illegal activity, report it immediately.`
];
let organResponse = [
  `I don't know, I just found it somewhere.`,
  `I bought it from a Java while I was at planet Hubboo.`,
  `I stripped it from someone who tried to kill me the other day.`,
  `It's an inflated organ from a Screwku.`
];
let uraniumResponse = [
  `I don't know, I just found it somewhere.`,
  `I bought it from a Java while I was at planet Kuka.`,
  `I stripped it from someone who tried to kill me the other day.`,
  `It's an uranium rod, typically you would use it for powering an older ship.`
];
let laserResponse = [
  `I don't know, I just found it somewhere.`,
  `I bought it from a Java while I was at planet Nahbow.`,
  `I stripped it from someone who tried to kill me the other day.`,
  `It's a laser crystal, typically you would use it for making a laser sword or rifle.`
];
let ghostResponse = [
  `I don't know, I just found it somewhere.`,
  `I bought it from a Java while I was at planet Krok.`,
  `I stripped it from someone who tried to kill me the other day.`,
  `It's a ghost scripture, it's used during ceremonies.`
];
let drogoResponse = [
  `I don't know, I just found it somewhere.`,
  `I bought it from a Java while I was at planet Drapture.`,
  `I stripped it from someone who tried to kill me the other day.`,
  `It's a Drogo scale, it's used as a aphrodisiac and in a couple tribal medicines.`
];
let spiceResponse = [
  `I don't know, I just found it somewhere.`,
  `I bought it from a Java while I was at planet Froop.`,
  `I stripped it from someone who tried to kill me the other day.`,
  `It's a pound of spice, it's a drug produced in several galaxies that gives you a wormy high.`
];
let beskarResponse = [
  `I don't know, I just found it somewhere.`,
  `I bought it from a Java while I was at planet Mandor.`,
  `I stripped it from someone who tried to kill me the other day.`,
  `It's a Beskar ingot, it's exclusively used by Mandolorians to make armour.`
];
let vaseResponse = [
  `I don't know, I just found it somewhere.`,
  `I bought it from a Java while I was at planet Vimur.`,
  `I stripped it from someone who tried to kill me the other day.`,
  `It's a ceremonial vase, it's used in funerals across the known system.`
];
let folmarResponse = [
  `I don't know, I just found it somewhere.`,
  `I bought it from a Java while I was at planet Giguk.`,
  `I stripped it from someone who tried to kill me the other day.`,
  `It's a Folmar in a jar, it's served as a delicacy on some planets.`
];
let gemResponse = [
  `I don't know, I just found it somewhere.`,
  `I bought it from a Java while I was at planet Tripput.`,
  `I stripped it from someone who tried to kill me the other day.`,
  `It's a gem berry, it's given as a gift in the Stardew system.`
];
let flowerResponse = [
  `I don't know, I just found it somewhere.`,
  `I bought it from a Java while I was at planet Ugurt.`,
  `I stripped it from someone who tried to kill me the other day.`,
  `It's an Ugurt flower, it's served at weddings despite strangling harvesters.`
];
let wormResponse = [
  `I don't know, I just found it somewhere.`,
  `I bought it from a Java while I was at planet Jupo.`,
  `I stripped it from someone who tried to kill me the other day.`,
  `It's an Vermit worm, it's the traditional dish of the Tadloanians mafiaoso gang.`
];
// Detetect if the item has been bought already
let boughtItem = 0;
// Count for item inventory (selling) [INCOMPLETE]
let wormCount = 0;
let flowerCount = 0;
let gemCount = 0;
let folmarCount = 0;
let vaseCount = 0;
let beskarCount = 0;
let spiceCount = 0;
let drogoCount = 0;
let ghostCount = 0;
let organCount = 0;
let uraniumCount = 0;
let laserCount = 0;

let line1 = random(dialogue);
let line2 = document.getElementById(`line-2`);
let line1P = document.getElementById(`line-1`);
line1P.innerText = line1;

function random(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}

let amount = 5000;
let amountP = document.getElementById(`amount`);
amountP.innerText = amount;

let price;
let priceP = document.getElementById(`price`);
if (line1 === `Give me 100$.`) {
  priceP.innerText = 100;
}
if (line1 === `Give me 200$.`) {
  priceP.innerText = 200;
}
if (line1 === `Give me 300$.`) {
  priceP.innerText = 300;
}

const textbox = document.querySelector(".textbox");
let keyPressed = (e) => {
  let kc = e.keyCode;
  let text = textbox.value;
  // Basic UI update based on enter
  if (kc === 13) {
    textbox.value = ``; // Clear textbox
    line2.innerText = text; // Move the text into the bubble
    // Customer Response / Costomer & User Interaction
    if (text.includes(`huh`)) {
      line1P.innerText = random(customerResponse02);
    }
    // Identifying items
    else if ((text.includes(`details`)) && (itemImage.src.includes(`Item-01`))) {
      line1P.innerText = random(wormResponse);
    } else if ((text.includes(`details`)) && (itemImage.src.includes(`Item-02`))) {
      line1P.innerText = random(flowerResponse);
    } else if ((text.includes(`details`)) && (itemImage.src.includes(`Item-03`))) {
      line1P.innerText = random(gemResponse);
    } else if ((text.includes(`details`)) && (itemImage.src.includes(`Item-04`))) {
      line1P.innerText = random(folmarResponse);
    } else if ((text.includes(`details`)) && (itemImage.src.includes(`Item-05`))) {
      line1P.innerText = random(vaseResponse);
    } else if ((text.includes(`details`)) && (itemImage.src.includes(`Item-06`))) {
      line1P.innerText = random(beskarResponse);
    } else if ((text.includes(`details`)) && (itemImage.src.includes(`Item-07`))) {
      line1P.innerText = random(spiceResponse);
    } else if ((text.includes(`details`)) && (itemImage.src.includes(`Item-08`))) {
      line1P.innerText = random(drogoResponse);
    } else if ((text.includes(`details`)) && (itemImage.src.includes(`Item-09`))) {
      line1P.innerText = random(ghostResponse);
    } else if ((text.includes(`details`)) && (itemImage.src.includes(`Item-10`))) {
      line1P.innerText = random(organResponse);
    } else if ((text.includes(`details`)) && (itemImage.src.includes(`Item-11`))) {
      line1P.innerText = random(uraniumResponse);
    } else if ((text.includes(`details`)) && (itemImage.src.includes(`Item-12`))) {
      line1P.innerText = random(laserResponse);
    }
    // What are credits
    else if (text.includes(`what are credits`)) {
      line1P.innerText = random(customerResponse03);
    }
    // Ask what the main music is
    else if (text.includes(`music`)) {
      line1P.innerText = `My Chrysalis Highwayman`;
      ribsMusic.pause();
      moneyMusic.pause();
      mainMusic.pause();
      mainMusic.play();
    }
    // Jokes
    else if (text.includes(`tell me a joke`)) {
      line1P.innerText = random(customerJoke);
      mainMusic.pause();
      jokeSound.currentTime = 0; // Set to the start
      jokeSound.play();
    } else if (text.includes(`ribs`)) {
      line1P.innerText = `Ribs - Mouth Dreams by Neil Cicierega`;
      mainMusic.pause();
      ribsMusic.currentTime = 0; // Set to the start
      ribsMusic.play();
    }
    // Moving on to the next customer
    else if (text.includes(`next customer`)) {
      fishSound.pause();
      secretSound.pause();
      jokeSound.pause();
      ribsMusic.pause();
      moneyMusic.pause();
      itemImage.src = random(itemImages);
      clientImage.src = random(clientImages);
      line1P.innerText = random(dialogue);
      mainMusic.play();
      if (boughtItem > 0) {
        boughtItem -= 1;
      }
    }
    // Closing deals/buying items
    else if ((boughtItem < 1) && (text.includes(`buy`))) {
      line1P.innerText = `You got a deal.`;
      amountP.innerText -= priceP.innerText;
      boughtItem += 1;
      if (itemImage.src.includes(`Item-01`)) {
        wormCount += 1;
      }
      if (itemImage.src.includes(`Item-02`)) {
        flowerCount += 1;
      }
      if (itemImage.src.includes(`Item-03`)) {
        gemCount += 1;
      }
      if (itemImage.src.includes(`Item-04`)) {
        folmarCount += 1;
      }
      if (itemImage.src.includes(`Item-05`)) {
        vaseCount += 1;
      }
      if (itemImage.src.includes(`Item-06`)) {
        beskarCount += 1;
      }
      if (itemImage.src.includes(`Item-07`)) {
        spiceCount += 1;
      }
      if (itemImage.src.includes(`Item-08`)) {
        drogoCount += 1;
      }
      if (itemImage.src.includes(`Item-09`)) {
        ghostCount += 1;
      }
      if (itemImage.src.includes(`Item-10`)) {
        organCount += 1;
      }
      if (itemImage.src.includes(`Item-11`)) {
        uraniumCount += 1;
      }
      if (itemImage.src.includes(`Item-12`)) {
        laserCount += 1;
      }
    }
    else if (amountP.innerText < 100) {
      line1P.innerText = `Loadsamoney (Doin' Up the House) by Harry Enfield`;
      mainMusic.pause();
      moneyMusic.currentTime = 0; // Set to the start
      moneyMusic.play();
    }
    // Identifying items
    if (text.includes(`what is this`)) {
      console.log(itemImage.src)
      if (itemImage.src.includes(`Item-01`)) {
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
    // Identifying stolen items
    else if (text.includes(`stolen`)) {
      let mandoStolen = clientImage.src.includes(`Mando`);
      if ((itemImage.src.includes(`Item-06`)) && (mandoStolen === false)) {
        line1P.innerText = `Yes`;
        priceP.innerText -= 50;
      } else if ((itemImage.src.includes(`Item-06`)) && (mandoStolen === true)) {
        line1P.innerText = `No`
        priceP.innerText += 100;
      }
      let ghostStolen = clientImage.src.includes(`Ghost`);
      if ((itemImage.src.includes(`Item-09`)) && (ghostStolen === false)) {
        line1P.innerText = `Yes`;
        priceP.innerText -= 50;
      } else if ((itemImage.src.includes(`Item-09`)) && (ghostStolen === true)) {
        line1P.innerText = `No`
        priceP.innerText += 50;
      }
      let organStolen = itemImage.src.includes(`Item-10`);
      if ((itemImage.src.includes(`Item-10`)) && (organStolen === true)) {
        line1P.innerText = `Yes`;
        priceP.innerText -= 50;
      } else {
        line1P.innerText = `No`
        priceP.innerText += 50;
      }
    }
    // Identifying Clients
    else if (text.includes(`who`)) {
      let mandoWho = clientImage.src.includes(`Mando`);
      if (mandoWho = true) {
        line1P.innerText = `I'm a Manlorian.`;
        priceP.innerText += 25;
      }
      let ghostWho = clientImage.src.includes(`Ghost`);
      if (ghostWho = true) {
        line1P.innerText = `I'm a Ghost.`;
        priceP.innerText += 15;
      }
      let drogoWho = clientImage.src.includes(`Drogo`);
      if (drogoWho = true) {
        line1P.innerText = `I'm a Drogo.`;
        priceP.innerText += 10;
      }
      let javaWho = clientImage.src.includes(`Java`);
      if (javaWho = true) {
        line1P.innerText = `I'm a Java.`;
        priceP.innerText += 10;
      }
      let gufWho = clientImage.src.includes(`GUF`);
      if (gufWho = true) {
        line1P.innerText = `I'm a Galactic Utopia Federation Officer.`;
        priceP.innerText += 5;
      }
      let androidWho = clientImage.src.includes(`Android`);
      if (androidWho = true) {
        line1P.innerText = `I'm an Android.`;
        priceP.innerText += 25;
      }
      let tadloanianWho = clientImage.src.includes(`Tadloanian`);
      if (tadloanianWho = true) {
        line1P.innerText = `I'm a Tadloanian.`;
        priceP.innerText += 75;
      }
    }
    // Story Information (Dialogue)
    else if ((text.includes(`Galactic Utopia Federation`)) && (clientImage.src.includes(`GUF`))) {
      line1P.innerText = random(gufResponse);
    } else if ((text.includes(`GUF`)) && (clientImage.src.includes(`GUF`))) {
      line1P.innerText = random(gufResponse);
    } else if ((text.includes(`Seven Suns war`)) && (clientImage.src.includes(`GUF`))) {
      line1P.innerText = `It was war in which the Rebels and Aero Alliance fought for control of the universe, named after the destruction of Winturb and Poipo and their shared seven suns`;
    } else {
      line1P.innerText = random(customerResponse);
    }
    if (line1P.innerText === `Secret Tunnel! [Hidden Easter Egg]`) {
      secretSound.pause();
      mainMusic.pause();
      secretSound.currentTime = 0; // Set to the start
      secretSound.play(); // Play it
    } else {
      secretSound.pause(); // Stop the sound if it's not the secret tunnel message
      mainMusic.play();
    }
  }

  // Play an easter egg if you click on the Folmar in a Jar
  document.getElementById("item-image").addEventListener("click", clickedFish);
  function clickedFish() {
    if (itemImage.src.includes(`Item-04`)) {
      document.getElementById("item-image").innerHTML = fishSound.play();
    }
  }

  // Cheat Codes (for DEV purposes only)
  if (kc === 49) { // Test if the main music is working (Numpad 1)
    fishSound.pause();
    jokeSound.pause();
    secretSound.pause();
    moneyMusic.pause();
    ribsMusic.pause();
    mainMusic.play();
  }
  if (kc === 50) { // Test if the ribs music is working (Numpad 2)
    fishSound.pause();
    jokeSound.pause();
    secretSound.pause();
    moneyMusic.pause();
    ribsMusic.play();
    mainMusic.pause();
  }
  if (kc === 51) { // Test if the money music is working (Numpad 3)
    fishSound.pause();
    jokeSound.pause();
    secretSound.pause();
    moneyMusic.play();
    ribsMusic.pause();
    mainMusic.pause();
  }
  if (kc === 52) { // Test if the secret sound is working (Numpad 4)
    fishSound.pause();
    jokeSound.pause();
    secretSound.play();
    moneyMusic.pause();
    ribsMusic.pause();
    mainMusic.pause();
  }
  if (kc === 53) { // Test if the joke sound is working (Numpad 5)
    fishSound.pause();
    jokeSound.play();
    secretSound.pause();
    moneyMusic.pause();
    ribsMusic.pause();
    mainMusic.pause();
  }
  if (kc === 54) { // Test if the joke sound is working (Numpad 6)
    fishSound.play();
    jokeSound.pause();
    secretSound.pause();
    moneyMusic.pause();
    ribsMusic.pause();
    mainMusic.pause();
  }
}

document.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    return false;
  }
});
window.addEventListener("keydown", keyPressed);
