$(document).ready(function () {
// these are the buttons that will be added by default
  var defaultSearch = ['trending', 'funny', 'ouch', 'dumb dogs', 'cats', 'dogs', 'Bassett Hound'];

  function displayButtons() {
    $('#giphySearches').empty();

    for (var i = 0; i < actions.length; i++) {
      var dispButton = $(':button');
      dispButton.addclass('FML');
      dispButton.addclass('btn btn-primary');
      dispButton.attr('name', defaultSearch [i]);
      dispButton.text(actions[i]);
      $('#giphySearches').append(dispButton);
    }
  }
  function newButton() {
    $('#newGif').on('click', function() {
      var newSearch = $('#search-input').val().trim();

      if (search = '') {
        return false;
      }
      action.push(newSearch);

      display (newSearch);
      return false;
    })

  }
});