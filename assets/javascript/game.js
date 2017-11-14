// This is the JS for Hangman

// pseudo code this program


// create an array of random words
// computer chooses word at random
// depeding on random word string.length set number guessLines
// prompt user directions or ask if want to play
// when key pressed isolate keyID for users choice via document.onKeyUp event 
// check if user guess correct
	//if yes, then store in array A and display "YES!"
	//if no, then store in array B and display "Sorry, no.."
// End game if:
	//unsolved after X user tries (display "YES!")
	//user correctly guesses all letters (display "No, sorry..")

 




// create an array of random words
var words = ["packers", "patriots", "niners", "cowboys"];



// prompt user if want to play then basic directions

var play = document.prompt("Press Ok to Play");
if (play == true) {
	// computer chooses word at random
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	console.log(computerGuess);
	// depeding on random word string.length set number guessLines
	var lines = [];


	for (var i = 0; i < computerGuess.length; i++) {
		console.log(computerGuess[i]);
		lines.push("_");
	}
}
else {
	alert("Fine. Be that way.")
}

alert("Use the keyboard and try to guess the word or phrase.")

// when key pressed isolate keyID for users choice via document.onKeyUp event 
// this function is run whenever the user presses a key
document.onKeyUp = function(event) {
	//this tells us what key was pressed
	var userGuess = event.key;
}
// check if user guess correct
	//if yes, then store in array A and display "YES!"
	//if no, then store in array B and display "Sorry, no.."
// End game if:
	//unsolved after X user tries (display "YES!")
	//user correctly guesses all letters (display "No, sorry..")







