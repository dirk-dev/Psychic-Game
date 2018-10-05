// creates array that computer selects choice from
let computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// defines variables used in scoreboard
let wins = 0;
let losses = 0;
let guesses_left = 0;
let guesses_current = 0;

// occurs when user releases a key on the keyboard
document.onkeyup = function (event){

// the user keystroke is the event; also ensures input is read as lower case
    let userGuess = event.key;
    userGuess = userGuess.toLowerCase();
}