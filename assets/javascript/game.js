
window.onload = function() {
//HANGMAN-GAME

// This is the JS for Hangman

/////////////////// pseudo code this program ///////////////////////


// create an array of random words
// create an array for guess lines/underscores
// create an array to hold letters already guessed by user
// create a variable tallying guesses remaining for user
// create a variable for counting # wins
// computer chooses word at random
// depeding on random word string.length set number guessLines
// when key pressed isolate keyID for users choice via document.onKeyUp event 
// check if user guess correct
	//if yes, then store in array A and display "YES!"
	//if no, then store in array B and display "Sorry, no.."
// End game if:
	//unsolved after X user tries (display "YES!")
	//user correctly guesses all letters (display "No, sorry..")

 ///////////////////////////////////////////////////////////////////

var computerGuess = [];
var userGuess = [];
var guessed = [];
var lines = [];
var guessRemain = 12;
var wins = 0;

function startGame(){
	// create an array of words for computer to randomly select
	var word = ["kirk", "spock", "enterprise", "klingon", "quadrant", "transporter", "tricorder", "phaser", "stardate", "warp", "holodeck"];

	// create empty array for guess lines/underscores
	lines = [];

	// create an array to hold letters already guessed by user
	guessed = [];
	document.getElementById("guessed").innerHTML = guessed.join("  ");

	userGuess = []
	// create a variable counter for # wins
	// var wins = 0;

	// create a variable tallying guesses remaining for user
	guessRemain = 12;


	// computer chooses word at random from array word and stores in computerGuess var
	computerGuess = word[Math.floor(Math.random() * word.length)];
	// print word to console for testing
	console.log(computerGuess);

	// depeding on random word string.length set number guessLines
	for (var i = 0; i < computerGuess.length; i++) {
		// print each letter of random word to console for testing
		// console.log(computerGuess[i]);
		//for each i in random word chosen push a additional _ to lines var
		lines.push("_");
	}
		//print correct # lines to console for testing
		console.log(lines);

	// display correct # lines in DOM by grabbing element id for <p> tag what to display lines in and setting equal to lines array
	function setLines() {
	    document.getElementById("word-lines").innerHTML = lines.join(" ");
	}
	setLines()

}

// when key pressed isolate keyID for users choice via document.onkeyup event 
// this function is run whenever the user presses a key
document.onkeyup = function(event) {
	//this tells us what key was pressed
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	// print key pressed to console for testing
	// console.log(userGuess);
	console.log(computerGuess);


// check if user guess correct
	if (computerGuess.indexOf(userGuess) > -1) {
		// console.log("yes")
		// console.log(userGuess)
		// loops through each index of string to check if match with key pressed by user
		for (var i = 0; i < computerGuess.length; i++) {
		if (computerGuess[i] == userGuess) {
			console.log("yes! " + userGuess + " exists");
			lines[i] = userGuess;
			console.log(lines);
			// userGuess is pushed to array guessed
			guessed.push(userGuess);
			// then printed to DOM in #id guessed element
			document.getElementById("guessed").innerHTML = guessed.join("  ");
			console.log(guessed.join());
			// prints lines array (underscores) to DOM in word-lines element
			document.getElementById("word-lines").innerHTML = lines.join(" ");
			// decreases remaining guesses by one (removed this - child friendly version)
			// guessRemain--;

			// prints to DOM in remaining element
			document.getElementById("remaining").innerHTML = guessRemain;
			console.log(guessRemain);

			// invokes gameDecision function 
			gameDecision();
			}
		}
	}
	//if not, then store in userGuess in guessed array and reduce guessRemain by one
	else {
			console.log("no");
			console.log(userGuess);
			guessed.push(userGuess);
			document.getElementById("guessed").innerHTML = guessed.join("  ");
			console.log(guessed.join());
			guessRemain--;
			document.getElementById("remaining").innerHTML = guessRemain;
			console.log(guessRemain);
			gameDecision();
	}
}

// End game if:
function gameDecision() {
	//unsolved after X user tries (display "You Lose..")
	// if (guessRemain === 0) {
	// 	alert("You Lose...Try Again");
	// 	// location.reload();
	// 	startGame();
	// }
	// //user correctly guesses all letters (display "Congrats! You Win!")
	// else if (lines.join("") === computerGuess) {
	// 	alert("WINNER! Congrats!");
	// 	wins++;
	// 	console.log(wins);
	// 	document.getElementById("wins").innerHMTL = wins;

	// 	// location.reload();
	// 	// audioElement.play();
	// 	startGame();
	// }

	if ((lines.join('') === computerGuess) && (guessRemain > 0) ) {
		// audioElement.play(); create var audio and isolate audio element
		var audio = document.getElementById("winAudio1"); 
		// play audio for winners
		function playAudio() { 
    	audio.play(); 
    	}
    	playAudio();
    	alert("WINNER!! Congrats!");
		wins++;
		document.getElementById('wins').innerHTML = wins;
		console.log(document.getElementById('wins').innerHTML = wins);
		startGame();
	}

	else if (guessRemain <= 0) {
		// audioElement.play(); create var audio and isolate audio element
		var loseAudio = document.getElementById("loseAudio1"); 
		var loseAudio2 = document.getElementById("loseAudio2");
		// play audio for losers
		function playAudio() { 
    	loseAudio.play(); 
    	// for more fun use the below audio
    	// loseAudio2.play();
    	}
    	playAudio();
		alert ("You Lose...Try Again");
		startGame();
	}
}

startGame();

}

