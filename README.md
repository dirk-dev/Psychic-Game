# Psychic-Game

The goal of **Psychic Game** is to guess the random letter the computer has selected. You have 9 chances to guess the letter. 
If you guess the letter correctly within 9 tries, you win that round. If not, you lose.

The game will detect any keystroke the user makes, so be careful what key you press.

This project was a class exercise in JavaScript, as well as some work in CSS and HTML.

**Psychic-Game** was coded by me, and is maintained by me.

The deployed app can be found at https://dirk-kiesewetter.github.io/Psychic-Game/

_____________________________________________________________________________________________
**Technical details:**

**Problems:**
Psychic Game needed to randomly chose a letter and evaluate the user key input against that letter. User input needed to be recorded, and added to the onscreen display. Guesses left needed to be decremented with each guess, and wins/losses updated accordingly. Also, user input needed to be adjusted so that it matched the case of the array contents. Lastly, a mechanism was needed to prevent multiple inputs of the same key from being counted.

**Solutions:**
* An array of the letters was created, and a function created using Math.random and Math.floor to randomly select a letter. A second array of user guesses was created, and an if/else if/else conditional used to compare user input against the randomized letter. 
* User input was adjusted using the .toUpperCase function so that it matches the letter case in the computer choice array.
* an if conditional was used to only push user input into the array if it had not already been guessed.

**Technical Details:**
* JavaScript was used for the program logic. The function .getElementById was used to populate the screen, and functions and conditionals were used for the game logic.