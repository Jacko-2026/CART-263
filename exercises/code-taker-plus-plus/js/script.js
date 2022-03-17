/**
Code Taker
Jack Taddeo

Break the code Detective
*/

"use strict";

let music = new Audio('Columbo-Music.wav');
music.addEventListener('loadeddata', () => {
  let duration = music.duration;
})

$(`#solved-dialog`).dialog({
  autoOpen: false,
  buttons: {
    "I know.": function() {
      $(this).dialog(`close`);
    }
  }
});

$(`.event`).one(`mouseover`, function(event) {
  $(this).addClass(`found`, 500);
  $(this).draggable({
    helper: `clone`
  });
});

$(`answer`).droppable({
  drop: function(event, ui) {
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`dissable`);
    ui.draggable.removeClass(`found`);
    // Check if they got it
    if($(this).text() === `Columbo`) {
      $(`#solved-dialog`).dialog(`open`);
    }
  }
});
