//create an array of strings 
var topics = ['angry', ' bored', ' disappointed', ' drunk', ' embarassed', ' excited', ' frustrated', ' happy', ' hungry', ' inpsired', ' lonely', ' love', ' nervous', ' relaxed', ' sad', ' sassy', ' scared', ' shocked', ' sick', ' tired'];

function buttons() {
$("#buttons").empty();

//create buttons using topics in array 
for (var i = 0; i < topics.length; i++){
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
$("#userSubmit").on("click", function(event) {
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

function buttonClick() {
    $(".clickMeforGif").on("click");

}
buttons();

function pausePlay() {
}
//grab 10 static non animated gifs 

//place those gifs onto page

//user click function 
//change still image to animated gif 
//when user clicks again -changes to still image

//display gif ratings 

//take form value and generate a new button 
// add it to topics array 

//create function call that takes new topic and remakes the buttons on the page 


// gify API KEY = "5OMJTXCR27pKXP4E9xeUel3ubAzaXQu8"

// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
// animal + "&api_key=dc6zaTOxFJmzC&limit=10";

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   })

//   .then(function(response) {})