// these are the buttons that will be added by default
$(document).ready();
gifSearch = ['trending', 'funny', 'ouch', 'dumb dogs', 'cats', 'dogs', 'Bassett Hound'];

$('#search-input').on('click focusin', function () {
  this.value = '';
});

// Add value to the array to be displayed on the side
$('#newGif').on('click',function()  {
  var newSearch = $('#search-input').val().trim();
  event.preventDefault();
  gifSearch.push(newSearch);
  $('#search-input').val("")
});

// Removes last value in the array - to be displayed on the side
$('#nixGif').on('click',function()  {
  var remSearch = $('#search-input').val().trim();
  event.preventDefault();
 gifSearch.splice($.inArray(remSearch,gifSearch),1);
  $('#search-input').val("")
});

function displayButton() {
  for (var i = 0; i < gifSearch.length; i++) {
    var dispButton = $(':button');
    dispButton.addClass('FML');
    dispButton.addClass('btn btn-primary');
    dispButton.attr('name', gifSearch[i]);
    dispButton.text(gifSearch[i]);
    $('#giphySearches').append(dispButton);
  }

}





  // function displayButtons() {
  //   $('#giphySearches').empty();
  //
  //   for (var i = 0; i < actions.length; i++) {
  //     var dispButton = $(':button');
  //     dispButton.addclass('FML');
  //     dispButton.addclass('btn btn-primary');
  //     dispButton.attr('name', defaultSearch [i]);
  //     dispButton.text(actions[i]);
  //     $('#giphySearches').append(dispButton);
  //   }
  // }
  //
  // // Add a new search
  // function newButton() {
  //   $('#newGif').on('click', function () {
  //     var newSearch = $('#search-input').val().trim();
  //
  //   });
  //
  //   defaultSearch.push(newSearch)
  // }
  //
  // function remButton() {
  //   $('#nixGif').on('click', function() {
  //     var newSearch = $('#search-input').val().trim();
  //
  //     gifSearch.push(newSearch)
  //
  //   });
  //
  // }
// });