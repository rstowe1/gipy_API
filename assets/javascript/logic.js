// these are the buttons that will be added by default
$(document).ready(function () {


let gifSearch = ['trending', 'funny', 'ouch', 'dumb dogs', 'cats', 'dogs', 'Bassett Hound'];

$('#search-input').on('click focusin', function () {
  this.value = '';
});

// Add value to the array to be displayed on the side
$('#newGif').on('click',function()  {
  var newSearch = $('#search-input').val().trim();
  event.preventDefault();
  gifSearch.push(newSearch);
  $('#search-input').val("");

 return mkButtons();
});

// Removes last value in the array - to be displayed on the side
$('#nixGif').on('click',function()  {
  var remSearch = $('#search-input').val().trim();
  event.preventDefault();
 gifSearch.splice($.inArray(remSearch,gifSearch),1);
  $('#search-input').val("");

 return mkButtons()
});

function mkButtons() {

  $('#giphySearches').empty();
  for (var i = 0; i < gifSearch.length; i++) {
    var dispButton = $('<button>');
    dispButton.addClass('giphy');
    dispButton.addClass('btn btn-primary');
    dispButton.attr('data-name', gifSearch[i]);
    dispButton.text(gifSearch[i]);
    $('#giphySearches').append(dispButton);

  }
}
  return mkButtons();
});




