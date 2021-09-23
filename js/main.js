// Variables

let list = ["serendipity", "heathen", "tadpole", "pangram", "abracadabra", "flabbergasted"];
let wordToGuess = list[Math.floor(Math.random() * list.length)];
let hiddenWord = []
let points = 7

// Functions

function secretWord() {
    for (let i=0; i<wordToGuess.length; i++){
        hiddenWord[i] = " _ ";
    } alert(hiddenWord.join(""))
}

function askPlayerLetter() {
    let letter = prompt("Choose a letter:");
    while (letter.length != 1){
        letter = prompt("Choose a letter:");
    } return letter;
}

function checkAnswer() {
    for (let i=0; i<wordToGuess.length; i++){
        if (playerLetter == wordToGuess[i]){
            hiddenWord[i] = playerLetter
        }
    }
    wordToGuess.includes(playerLetter)? points : points--;
    i = 0 ;
    return alert(hiddenWord.join("") + "\nYou still have " + points + " chance(s).");
} 

// Game

secretWord();

while (points != 0 && hiddenWord.includes(" _ ")){
    var playerLetter = askPlayerLetter();
    checkAnswer();
}

points === 0 ? alert("You lost") : alert("Congratulations you win");



