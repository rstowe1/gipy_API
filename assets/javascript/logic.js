// these are the buttons that will be added by default
$(document).ready(function () {


  gifSearch = ['trending', 'funny', 'ouch', 'dumb dogs', 'cats', 'dogs', 'Bassett Hound'];

  $('#search-input').on('click focusin', function () {
    this.value = '';
  });

// Add value to the array to be displayed on the side
  $('#newGif').on('click', function () {
    var newSearch = $('#search-input').val().trim();
    event.preventDefault();
    gifSearch.push(newSearch);
    $('#search-input').val("");

    return mkButtons();
  });

// Removes last value in the array - to be displayed on the side
  $('#nixGif').on('click', function () {
    var remSearch = $('#search-input').val().trim();
    event.preventDefault();
    gifSearch.splice($.inArray(remSearch, gifSearch), 1);
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

// function printGifs() {
//   var lookItUp = $(this).attr('data-name');
//   var apiKeys = ()
//
// }

// from here, I am trying to call the data from the API
function printGifs() {
  var lookItUp = $(this).attr('data-name');
  var apiKey = 'http://api.giphy.com/v1/gifs/search?q=' + lookItUp + '&api_key=3KfFlY9qMiR9dTwVrNy3k6EeBolnRrH2&limit=10';
  // apiKey.done(function (data) {
  //   console.log("success got data", data);
  // });
  $.ajax({
    url: apiKey,
    method: 'GET'
  })
    .end(function (tester) {
      console.log(tester);
      $('#gifImages').empty();
      var gdImages = tester.data;
      if (gdImages !== '' || 0) {
        console.log(gdImages);
      }
      for (var i = 0; i < gdImages.length; i++) {
        var imgPrint = $('<div>');
        imgPrint.addClass('imgPrint');

        var images = $('<img>');
        images.attr('src', gdImages[i].images.fixed_height_still.url);
        images.attr('data-still',gdImages[i].images.fixed_height_still.url);
        images.attr('data-animate',gdImages[i].images.fixed_height_still.url);
        images.attr('data-state', 'still');
        images.addClass('gif');
        $('#gifImages').append(imgPrint);
      }
    });
}

$(document).on('click','lookItUp',printGifs);
$(document).on('click','.image',function () {
  var state = $(this).attr('data-state');

  if (state === 'still') {
    $(this).attr('src', $(this).data('animate'));
    $(this).attr('data-state', 'animate');
  } else {
    $(this).attr('src'.data('still'));
    $(this).attr('data-state', 'still');
  }
});









