
$(document).ready(function(){

var theNumber;
var currentGuess;
var feedbackComment;
var guessCounter = 0;

var generateNumber = function () {
	theNumber = Math.floor((Math.random() * 100) + 1);

	console.log("generateNumber ", theNumber);
}

var startNewGame = function () {
	$("#userGuess").val("");
	$("#guessList").empty();
	$("#feedback").text("Make your Guess!");
	guessCounter = 0;
  	$("#count").text(guessCounter);
	generateNumber();
}



var evaluateGuess = function () {

		console.log("guess ", currentGuess);

		var absoluteDiff = Math.abs(theNumber - currentGuess);

		console.log("diff ", absoluteDiff);

		guessCounter ++;

			if (absoluteDiff > 50) {
				feedbackComment = "Ice Cold";
			}  

			else if (absoluteDiff > 30) {
				feedbackComment = "Cold";
			} 

			else if (absoluteDiff > 20) {
				feedbackComment = "Warm";
			}

			else if (absoluteDiff > 10) {
				feedbackComment = "Hot";
			}

			else if (absoluteDiff >= 1) {
				feedbackComment = "Very Hot";
			}

			else {
				feedbackComment = "You got it!!!";
			}

			return feedbackComment;
}

startNewGame();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$("a.new").click(startNewGame);

  	$("#guessButton").click(function(e) {
  		e.preventDefault(e);

  		currentGuess = Number($("#userGuess").val());

  		console.log(currentGuess, typeof currentGuess);

		if (typeof currentGuess == "number" && isFinite(currentGuess) && currentGuess % 1 === 0) {

	  		evaluateGuess();
	  		console.log("feedback ", feedbackComment);

	  		$("#feedback").text(feedbackComment);
	  		$("#count").text(guessCounter);
	  		$("#guessList").prepend("<li>" + currentGuess + "</li>");

	  	}

  		else { 
  			$("#feedback").text("Enter only whole numbers from 1 to 100");

  		}

  		$("#userGuess").val("");

  	});


});