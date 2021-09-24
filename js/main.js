// Variables

let list = ["SERENDIPITY", "HEATHEN", "TADPOLE", "PANGRAM", "ABRACADABRA", "FLABBERGASTED"];
let hiddenWord = []
let points = 7

// Functions

function generateWord() {
    return list[Math.floor(Math.random() * list.length)]; // computer chooses randomly a word in the list
  }

function secretWord() {
    for (let i=0; i<wordToGuess.length; i++){
        hiddenWord[i] = " _ "; // transform the chosen word in underscore
    }
    i = 0;
    alert(hiddenWord.join(""));
}

function askPlayerLetter() {
    let letter = prompt("Choose a letter:");
    if (letter === null){ // if player clicked on cancel's button, function stops there, player will be redirect to dashboard 
        return null; // first step
    }
    while (letter.length != 1){ // check if the player enters one letter only
        letter = prompt("Choose a letter:");
    } return letter;
}

function checkAnswer() {
    for (let i=0; i<wordToGuess.length; i++){ // check if the letter chosen by the player is in the word, 
        if (playerLetter.toUpperCase() == wordToGuess[i]){ // if yes, all the underscores where the letter occurs are replaced by it
            hiddenWord[i] = playerLetter.toUpperCase();
        }
    }
    wordToGuess.includes(playerLetter.toUpperCase())? points : points--;
    i = 0 ;
    return alert(`${hiddenWord.join("")}\nYou still have ${points} chance(s).`);
} 


// Game

do {
    var val = prompt("Welcome to the Hangman game.\nPlease enter 'R' to check the rules, 'S' to start the game, and 'Q' to quit."); // dashboard
switch (val) {
    case "R":
    case "r":
        alert("rules");
        break;
    case "S": // start the game
    case "s":
        var wordToGuess = generateWord();
        secretWord();
        while (points != 0 && hiddenWord.includes(" _ ")){
            var playerLetter = askPlayerLetter();
            if (playerLetter === null){ // if the player has clicked on cancel's button previously it will stop the loop and go back to dashboard
                points === 0; // second step
                break;
            }
            checkAnswer();  
        }
        if (playerLetter === null){ // if the player has clicked on cancel's button previously, he will go back to dashboard, final step
            alert("Coward!")
        } else {
            points === 0 ? alert("You have been hanged.\nGAME OVER") : alert("Congratulations you have found the password.\nYour neck is safe for now.");
        }
        hiddenWord = [] // reset the variables
        points = 7;
        break;
    case "Q": // quit the game
    case "q":
    case null: // if the player has clicked on cancel's button, it's equal "to quit the game"
        alert("Thanks for playing.");
        break;
    }
} while (val !== "Q" && val !== "q" && val !== null);