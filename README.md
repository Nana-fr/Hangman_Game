# Project n°2: Hangman Game


The game is case-insensitive.

There is a dashboard with 3 possibilities:
* "R" to checks the rules.
* "S" to start the game.
* "Q" to quit the game.
If the player clicks on cancel's button it will be eqaul to a "Q".


## The game


1. The computer chooses a word randomly in a list and hides it by replacing each letter with an underscore.
2. The player tries to guess the word by suggesting one and only one letter. If there are more than one character or none, the player will be ask again to enter a letter.
If the letter chosen has already been chosen previously in the game, the player will lose one point even if the letter occurs in the word to guess. The previous letters will be display on the screen.
The computer doesn't check if the player entered a letter or a special character like "/", ":", "%"... or a space.
Since all of the words in the list contain only letters, the player will lose one point if the character he entered is not a letter.
If the player clicks on cancel's button, he will go back to dashboard.
3. The computer checks if the letter occurs in the word.
	* If yes, it will appear in all its correct positions.
	* If not, the player loses one point and try another letter.
4. If the player finds the word he wins. If he uses up all his 7 chances and still doesn't know the word, he loses the game.
5. The player goes back to dashboard. 

![Hangman_game](https://store-images.microsoft.com/image/apps.46615.9007199266245438.597853cb-2827-48be-8a82-5013d1366d7c.e90a925a-eb13-450b-accf-89ecd1ac73b2?mode=scale&q=90&h=200&w=200&background=%23464646)
