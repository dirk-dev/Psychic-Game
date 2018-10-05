// creates array that computer selects choice from
computerChoices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// defines variables used in scoreboard
let wins = 0;
let losses = 0;
let guesses_left = 9;

//creates an array to store user guesses & logs to console
let letters_guessed = [];
console.log("letters guessed: " + letters_guessed);

// computer randomly chooses from the computerChoices array
//Math.random returns a number between 0 and 1, and Math.floor changes it to an integer 

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// event occurs when user releases a key on the keyboard
document.onkeyup = function (event) {

    // the user keystroke is the event; also ensures input is read as upper case to match computerChoices array
    let userGuess = event.key;
    userGuess = userGuess.toUpperCase();

    // populates the letters_guessed array with user input for display in the "Your guesses so far: "
    letters_guessed.push(userGuess);

    // displays user & computer guesses to the console.log
    console.log("user guess = " + userGuess + " computer guess = " + computerGuess);

    // user conditions for win
    if (userGuess === computerGuess) {
        wins++;
        guesses_left = 9;
        letters_guessed.length = 0;

        // user conditions for loss
    } else if (userGuess != computerGuess && guesses_left === 1) {
        losses++;
        guesses_left = 9;
        letters_guessed.length = 0;

        // user conditions for incorrect guess
    } else {
        guesses_left--;

    }

    //updates the onscreen scoreboard
    document.getElementById('score_wins').innerHTML = "Wins: " + wins;
    document.getElementById('score_losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses_left').innerHTML = "Guesses left: " + guesses_left;
    document.getElementById('guesses_current').innerHTML = "Your guesses so far: " + letters_guessed;

}