var topics = ["Christmas", "4th of July", "Halloween"];

$("#add").on("click", function(){
    var newItem = $("#newItem").val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      newItem + "&api_key=Y8jq6XrPYojVO006xsPEuYBovosMxYYZ&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        console.log(response);

        var results = response.data;
    
      for (var i = 0; i < results.length; i++) {

      // Make a div with jQuery and store it in a variable named animalDiv.
      var gifDiv = $("<div>");
      // Make a paragraph tag with jQuery and store it in a variable named p.
      var p = $("<p>");
      // Set the inner text of the paragraph to the rating of the image in results[i].
      p.text(results[i].rating);
      // Make an image tag with jQuery and store it in a variable named animalImage.
      var gifImage = $("<img>");
      // Set the image's src to results[i]'s fixed_height.url.
      gifImage.attr("src", results[i].images.fixed_height.url);
      // Append the p variable to the animalDiv variable.
      $(gifDiv).append(p);
      // Append the animalImage variable to the animalDiv variable.
      $(gifDiv).append(gifImage);
      // Prepend the animalDiv variable to the element with an id of gifs-appear-here.
      $("#gifs-dump").prepend(gifDiv);
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