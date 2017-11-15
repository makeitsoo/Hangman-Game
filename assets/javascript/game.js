//HANGMAN-GAME 

// 1. [Watch the demo](hangman-game-demo.mov).

// 2. Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!

// 3. Use key events to listen for the letters that your players will type.

// 4. Display the following on the page:

// 5. Press any key to get started!

// 6. Wins: (# of times user guessed the word correctly).

//    * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

//    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

// 7. Number of Guesses Remaining: (# of guesses remaining for the user).

// 8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

// 9. After the user wins/loses the game should automatically choose another word and make the user play it.





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

 




// create an array of random words and two empty arrays for wins/losses
var words = ["packers", "patriots", "niners", "cowboys"];
var miss = [];
var hit = [];
var guessRemain = 11;


// prompt user if want to play then basic directions

alert("Press any key to get started!");
alert("Use the keyboard and try to guess the word or phrase.")
document.onKeyUp = function(event); {
	console.log("Test");
}


	// computer chooses word at random
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	console.log(computerGuess);

	// depeding on random word string.length set number guessLines
	var lines = [];

	for (var i = 0; i < computerGuess.length; i++) {
		console.log(computerGuess[i]);
		lines.push("_");


// when key pressed isolate keyID for users choice via document.onKeyUp event 
// this function is run whenever the user presses a key
document.onKeyUp = function(event) {
	//this tells us what key was pressed
	var userGuess = event.key;

// check if user guess correct
	if (words.indexOf(userGuess) > -1) {
		for (var i = 0; i < words.length; i++) {
			if (words[i] == userGuess) {
				lines[i] = userGuess;
				console.log(lines);
				hit++;
				guessRemain--;
				gameDecision();
			}
		}
	}
	//if not, then store in array "miss"
	else {
		miss.push(userGuess);
		console.log("miss");
		console.log(miss);
		miss--;
		guessRemain--;
		gameDecision();
	}

	
// End game if:
function gameDecision() {
	//unsolved after X user tries (display "You Lose..")
	if (guessRemain === 0) {
		alert("You Lose...");
	}
	if (hit === words.length) {
		alert("WINNER! Congrats!");
	}
}
	//user correctly guesses all letters (display "Congrats! You Win!")

}





