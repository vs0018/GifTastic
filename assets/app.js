$(document).ready(function(){

var topics = ["Christmas", "4th of July", "Halloween"];

function renderButtons() {
    $("#button-dump").empty();

    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("holiday");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#button-dump").append(a);
    }
  };

$("#add").on("click", function(){

    var newItem = $("#newItem").val().trim();

    topics.push(newItem);
    
    renderButtons();
    });

$(document).on("click", ".holiday", function(event){
    $("#gif-dump").empty();
    
    var buttonName = $(this).attr("data-name");

    console.log(buttonName);

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
      buttonName + "&api_key=Y8jq6XrPYojVO006xsPEuYBovosMxYYZ&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        console.log(response);

        var results = response.data;
    
      for (var i = 0; i < results.length; i++) {

        var gifDiv = $("<div>");
        var p = $("<p>");
    
        p.text("Rating: " + results[i].rating);
    
        var gifImage = $("<img>");

        gifImage.attr("src", results[i].images.fixed_height.url);
    
        $(gifDiv).append(p);
        $(gifDiv).append(gifImage);
        $("#gif-dump").prepend(gifDiv);
      }
    });
});

//to start & pause gifs
$(".gif").on("click", function() {
    var state = $(this).attr("data-state")

        if (state === "still") {
            var animate = $(this).attr("data-animate");

            $(this).attr("src", animate);
            $(this).attr("data-state", "animate");

        } else if (state === "animate") {
            var still = $(this).attr("data-still");

            $(this).attr("src", still);
            $(this).attr("data-state", "still");
        };
});

renderButtons();

});