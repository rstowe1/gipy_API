// these are the buttons that will be added by default
$(document).ready(function () {


  var gifSearch = ['trending', 'funny', 'ouch', 'dumb dogs', 'cats', 'dogs', 'Bassett Hound'];


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

    return mkButtons();
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


// from here, I am trying to call the data from the API
  function prntGifs() {
    var lookItUp = $(this).attr('data-name');
    var host = 'http://api.giphy.com/v1/gifs/search?q=';
    var key = '3KfFlY9qMiR9dTwVrNy3k6EeBolnRrH2';
    var lim = '&limit=10';
    var apiKey = host + lookItUp + key + lim;
    $.ajax({
      url: apiKey,
      method: 'GET'
    });

    apiKey.done(function (response) {
      console.log("success got data", response);
      $('#gifImages').empty();
      var gdImages = response.data;
      if (gdImages === '' || 0) {
        alert('well, Damn theres nothing there!')
      }
      for (var i = 0; i < gdImages.length; i++) {
        var imgPrint = $('<div>');
        imgPrint.addClass('imgPrint');

        var prntRating = $('<p>').text('Rating ' + gdImages[i].rating);
        imgPrint.append(prntRating);
        var images = $('<img>');
        images.attr('src', apiKey[i].images.fixed_height_still.url);
        images.attr('alt', apiKey[i].images.fixed_height_still.url);
        images.attr('data-still', apiKey[i].images.fixed_height_still.url);
        images.attr('data-animate', apiKey[i].images.fixed_height_still.url);
        images.attr('data-state', 'still');
        images.addClass('gif');
        imgPrint.append(prntRating);
        ('#gifImages').append(imgPrint)
      }
    });

    $(document).on('click', '.lookItUp', prntGifs);
    $(document).on('click', '.image', function () {
      var state = $(this).attr('data-state');

      if (state === 'still') {
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
      } else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
      }
    });


  }


});