$(document).ready(function ()  {
// these are the buttons that will be added by default
  var defaultSearch = ['trending','funny','ouch','dumb dogs','cats','dogs','Bassett Hound'];

  function displayButtons() {
    $('#displayButtons').empty();

    for (var i = 0; i < actions.length; i++)  {
      var displayButton = $('<button>');
      displayButton.addclass('FML');
      displayButton.addclass('btn btn-primary');
      displayButton.attributes('name', defaultSearch [i]);
      displayButton.text(actions[i]);
      $('#displayButtons').append(displayButton);
    }
  }
});