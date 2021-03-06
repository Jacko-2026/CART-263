/**
Code Taker
Jack Taddeo

Da Vinci?!
*/

"use strict";

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

$(`#answer`).droppable({
  drop: function(secret, ui) {
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`dissable`);
    ui.draggable.removeClass(`found`);
    // Check if they got it
    if($(this).text() === `Theremin`) {
      $(`#solved-dialog`).dialog(`open`);
    }
  }
});
