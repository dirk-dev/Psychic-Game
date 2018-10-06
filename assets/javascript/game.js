// creates array that computer selects choice from
let letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// defines variables used in scoreboard
let wins = 0;
let losses = 0;
let guessesLeft = 9;

//creates an array to store user guesses & logs to console
let lettersGuessed = [];

// computer randomly chooses from the computerChoices array
//Math.random returns a number between 0 and 1, and Math.floor changes it to an integer 
let computerGuess = letterArray[Math.floor(Math.random() * letterArray.length)];

// event occurs when user releases a key on the keyboard
document.onkeyup = function (event) {

    // the user keystroke is the event; also ensures input is read as upper case to match computerChoices array
    let userGuess = event.key;
    userGuess = userGuess.toUpperCase();

    // populates the letters_guessed array with user input for display in the "Your guesses so far: "
    lettersGuessed.push(userGuess);

    // displays user & computer guesses to the console.log
    console.log("user guess = " + userGuess + " computer guess = " + computerGuess);

    // user conditions for win
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        lettersGuessed.length = 0;

        // user conditions for loss
    } else if (userGuess != computerGuess && guessesLeft === 1) {
        losses++;
        guessesLeft = 9;
        lettersGuessed.length = 0;

        // incorrect guess reduces guesses left by 1
    } else {
        guessesLeft--;

    }

    //updates the onscreen scoreboard
    document.getElementById('score_wins').innerHTML = "Wins: " + wins;
    document.getElementById('score_losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses_left').innerHTML = "Guesses left: " + guessesLeft;
    document.getElementById('guesses_current').innerHTML = "Your guesses so far: " + lettersGuessed;

}