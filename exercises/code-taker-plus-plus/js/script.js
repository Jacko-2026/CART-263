/**
Code Taker
Jack Taddeo

Break the code Detective
*/

"use strict";

let music = new Audio('assets/sounds/Columbo-Music.wav');
let musicEnd = new Audio('assets/sounds/JustOneMoreThing.wav');
music.play();
music.loop = true;

$(`#solved-dialog`).dialog({
  autoOpen: false,
  buttons: {
    "I know.": function() {
      $(this).dialog(`close`);
    }
  }
});

$(`.secret`).one(`mouseover`, function(secret) {
  $(this).addClass(`found`, 500);
  $(this).draggable({
    helper: `clone`
  });
});

$(`.answer`).droppable({
  drop: function(secret, ui) {
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`dissable`);
    ui.draggable.removeClass(`found`);
    // Check if they got it
    if($(this).text() === `Columbo`) {
      $(`#solved-dialog`).dialog(`open`);
      musicEnd.play();
    }
  }
});
