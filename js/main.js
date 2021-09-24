// Variables

let list = ["SERENDIPITY", "HEATHEN", "TADPOLE", "PANGRAM", "ABRACADABRA", "FLABBERGASTED"];
let hiddenWord = []
let points = 7

// Functions

function generateWord() {
    return list[Math.floor(Math.random() * list.length)];
  }

function secretWord() {
    for (let i=0; i<wordToGuess.length; i++){
        hiddenWord[i] = " _ ";
    } i = 0;
    alert(hiddenWord.join(""));
}

function askPlayerLetter() {
    let letter = prompt("Choose a letter:").toUpperCase();
    if (letter === null){
        return null;
    }
    while (letter.length != 1){
        letter = prompt("Choose a letter:").toUpperCase();
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

do {
    var val = prompt("R for rules, P for play, and Q to quit").toUpperCase();
switch (val) {
    case "R":
        alert("rules");
        break;
    case "P":
        var wordToGuess = generateWord();
        secretWord();
        while (points != 0 && hiddenWord.includes(" _ ")){
            var playerLetter = askPlayerLetter();
            if (playerLetter === null){
                points ===0;
                break;
            }
            checkAnswer();  
        }
        if (playerLetter !== null){
            points === 0 ? alert("You lost") : alert("Congratulations you win");
        }
        hiddenWord = []
        points = 7;
        break;
    case "Q":
    case null:
        alert("Thanks for playing");
        break;
    }
} while (val !== "Q");