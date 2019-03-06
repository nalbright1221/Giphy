//create an array of strings 
var topics = ['angry', ' bored', ' disappointed', ' drunk', ' embarassed', ' excited', ' frustrated', ' happy', ' hungry', ' inpsired', ' lonely', ' love', ' nervous', ' relaxed', ' sad', ' sassy', ' scared', ' shocked', ' sick', ' tired'];

function buttons() {
    $("#buttons").empty();

    //create buttons using topics in array 
    for (var i = 0; i < topics.length; i++) {
        var newButtons = $("<button>");
        // research adding a class and an attr to buttons - 
        newButtons.text(topics[i]);
        newButtons.addClass("clickMeForGif")
        $("#buttons").append(newButtons);
    }
}
//call buttons function to generate buttons listed in array 
buttons();

//create a new button and append it into id buttons 

//this click even runs when user hits sumbit or enter after typing in new button value 
$("#userSubmit").on("click", function (event) {
    //prevents page from reloading everytime sumbit button is  clicked 
    event.preventDefault();
    //variable that takes the value of new button user created 
    var newEmotion = $("#newEmotionButton").val().trim();

    //pushes new emotion button to our button topics array
    topics.push(newEmotion);

    //call buttons function
    buttons();

});

//create function that allows the user to click a button  for each string in the  array 
$(".clickMeForGif").on("click", function () {
    var a = $(this).text();

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + a + "&api_key=5OMJTXCR27pKXP4E9xeUel3ubAzaXQu8";

    $.ajax({
            url: queryURL,
            method: "GET"
        })

        .then(function (response) {

            var results = response.data;
            console.log(response);

            for (var i = 0; i < results.length; i++) {

                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

                    var gifDiv = $("<div>");
                    var rating = results[i].rating;
                    var p = $("<p>").text("Rating: " + rating);
                    var personImage = $("<img>");
                    personImage.attr("src", results[i].images.fixed_height.url);
                    gifDiv.addClass("pausePlay");
                    gifDiv.append(p);
                    gifDiv.append(personImage);
                    $("#gifSection").prepend(gifDiv);

                }
            }
        });
});

//grab 10 static non animated gifs 

//place those gifs onto page

//user click function 
//change still image to animated gif 
//when user clicks again -changes to still image

$(".pausePlay").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });



