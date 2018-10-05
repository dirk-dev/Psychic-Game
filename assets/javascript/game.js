// creates array that computer selects choice from
let computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// defines variables used in scoreboard
let wins = 0;
let losses = 0;
let guesses_left = 9;

//creates an array to store user guesses & logs to console
let letters_guessed = [];
console.log("letters guessed: " + letters_guessed);

// computer randomly chooses from the computerChoices array
//Math.random returns a number between 0 and 1, and Math.floor changes it to an integer 
let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// event occurs when user releases a key on the keyboard
document.onkeyup = function (event) {

    // the user keystroke is the event; also ensures input is read as lower case
    let userGuess = event.key;
    userGuess = userGuess.toLowerCase();

    // populates the letters_guessed array with user input for onscreen display
    letters_guessed.push(userGuess);

    // displays user & computer guesses to the console.log
    console.log("user guess = " + userGuess + " computer guess = " + computerGuess);

    // user conditions for win, loss, 1 less guess, with code to reset guess count after win/loss
    if (userGuess === computerGuess) {
        wins++;
        guesses_left = 9;
        //resets letters_guessed array to 0
        letters_guessed.length = 0;

    } else if (userGuess !== computerGuess && guesses_left > 0) {
        guesses_left--;

    } else if (userGuess !== computerGuess && guesses_left === 0) {
        losses++;
        guesses_left = 9;
        //resets letters_guessed array to 0
        letters_guessed.length = 0;

    }
    //updates the onscreen scoreboard
    document.getElementById('score_wins').innerHTML = "Wins: " + wins;
    document.getElementById('score_losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses_left').innerHTML = "Guesses left: " + guesses_left;
    document.getElementById('guesses_current').innerHTML = "Your guesses so far: " + letters_guessed;

}