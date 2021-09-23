var list = ["serendipity", "heathen", "saperlipopette", "tadpole", "pangram", "abracadabra", "flabbergasted"];
var wordToGuess = list[Math.floor(Math.random() * list.length)];
var hiddenWord = []
var points = 7

function secretWord() {
    for (let i=0; i<wordToGuess.length; i++){
        hiddenWord[i] = " _ ";
    } alert(hiddenWord.join(""))
}
secretWord();

var letter = prompt("Choose a letter:");

function playerGuess() {
    while (letter.length != 1){
    letter = prompt("Choose a letter:");
    }
}

function checkAnswer() {
    for (let i=0; i<wordToGuess.length; i++){
        if (letter == wordToGuess[i]){
            hiddenWord[i] = letter
        } 
    }alert(hiddenWord.join("") + points--);
}


while (points != 0 || hiddenWord.includes(" _ ")){
    letter = prompt("Choose a letter:");
    playerGuess();
    checkAnswer();
}


