// Variables

let list = ["SERENDIPITY", "HEATHEN", "TADPOLE", "PANGRAM", "ABRACADABRA", "FLABBERGASTED", "UNINTENTIONNALY", "WHOOPS", "HALLELUJAH", "BINGO", "OUCH", "YUMMY", "AWESOME", "TYRANNOSAURUS", "DRAGONFLY"];
let hiddenWord = [];
let usedLetters = [];
let points = 7;

// Functions

function generateWord() {
    return list[Math.floor(Math.random() * list.length)]; // computer chooses randomly a word in the list
  }

function secretWord() {
    for (let i=0; i<wordToGuess.length; i++){
        hiddenWord[i] = " _ "; // transform the chosen word in underscore
    }
    i = 0;
    alert(`The password is: ${hiddenWord.join("")}`);
}

function askPlayerLetter() {
    let letter = prompt(`Choose a letter.\n\nBe careful to not choose one you have already checked, otherwise you will lose a chance:\n${usedLetters}`);
    if (letter === null){ // if player clicked on cancel's button, function stops there, player will be redirect to dashboard 
        return null; // first step
    }
    while (letter.length != 1){ // check if the player enters one letter only
        letter = prompt(`Choose a letter.\n\nBe careful to not choose one you have already checked, otherwise you will lose a chance:\n${usedLetters}`);
    } return letter.toUpperCase();
}

function checkAnswer() {
    if (usedLetters.includes(` ${playerLetter} `)){ // check if the player chooses a letter already checked
        points--; // if yes, even if it was a letter in the word to guess he loses one point
    } else {
        usedLetters.push(` ${playerLetter} `); // if not the letter is add to the variable keeping check of already used letters
        for (let i=0; i<wordToGuess.length; i++){ // check if the letter chosen by the player is in the word, 
            if (playerLetter == wordToGuess[i]){ // if yes, all the underscores where the letter occurs are replaced by it
                hiddenWord[i] = playerLetter;
            }
        }
        wordToGuess.includes(playerLetter)? points : points--;
    }
    i = 0 ;
    return alert(`The password is: ${hiddenWord.join("")}\n\nYou still have ${points} chance(s).`);
} 

// Game

do {
    var val = prompt("Welcome to the Hangman game.\n\nPlease enter 'R' to check the rules, 'S' to start the game, and 'Q' to quit."); // dashboard
switch (val) {
    case "R":
    case "r":
        alert("Somewhere\n\n\tWhat are you doing here, human? Trying to steal some treasures, aren't you?\n\n\t...What?! You lost your way, and ended 'unintentionnaly' in the treasure room? Would you believe it? And why is there a broken rope on the floor, just below the window up there?\n\n\t...You have no idea? Of course. Well, anyway now you're stuck here and when the guards found you, you're going to be hanged. Ha ha ha, serves you right!\n\n\t...Ok ok, stop crying, you're going to make me deaf! You're so lucky to have met me, the GREAT and INCREDIBLE spirit of this land. Since I'm nice and in a good mood, I'm going to help you. If you go back to the main room you will see a door with a 'S' on it. Open this door and give the correct password to the guard. He will let you out without looking at you and you will be safe. If not... you will get a pretty rope around your neck. Ha ha ha.\n\n\t...I said stop crying for the love of me!\n\n\t...You don't know the password? Well, did I say I was INCREDIBLE? Of course I know the password, there is nothing I don't know! So you tell me a letter and I'm going to tell you if the letter is in the password and where. Ok? You have 7 chances.\n\n\t...What? You want me to give you the password? Keep dreaming! Stealing is bad, be grateful the GREAT ME is helping you! Oh and remember don't be stupid, there are only letters in the password, if you choose a special character like '/', you will waste a chance. The same goes if you choose a previously chosen letter even if it was one in the password.\n\n\tNow off you go, and good luck!");
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
            alert("Coward!\n\n\tYou're such a poor loser!\n\n\t\tShame on you!")
        } else {
            points === 0 ? alert("You have been hanged.\n\nGAME OVER") : alert("Congratulations you have found the password.\n\nYour neck is safe for now.");
        }
        hiddenWord = [] // reset the variables to start
        usedLetters = []
        points = 7;
        break;
    case "Q": // quit the game
    case "q":
    case null: // if the player has clicked on cancel's button, it's equal "to quit the game"
        alert("Thanks for playing.");
        break;
    }
} while (val !== "Q" && val !== "q" && val !== null);