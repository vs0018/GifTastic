var topics = ["Christmas", "4th of July", "Halloween"];

$("#add").on("click", function(){





});

//to start & pause gifs
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