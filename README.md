# OVERVIEW

1st Unit final project, TicTacToe game. 



## WireFrame Link
https://wireframe.cc/yvdjW3


### Game Link

https://epic-northcutt-5e5740.netlify.app/

#### User Stories

* user can start a new game.
* user can click on a square adding X then O rotating through the game.
* user is shown a message if they win, lose or draw.
* user cannot click on the same square twice.
* user game does not continue once player achieves win, lose or draw.
* user can hit the restart button to play again without the page refreshing.



The program uses vanilla HTML, CSS and JavaScript. I solved for the winner by setting up && operators for all winning combinations. If one of the conditions is met the program alerts which player, X or O, wins the game. The last if statement in the checkBoard checks for a tie. It counts the moves until 9 and if none of the winning combinations is met the players are alerted of a tie. The conditions are checked by the program adding X or O to an empty array then checking if 3 symbols make up a row. My initial plan was very basic. I wanted a board in the top middle of the page with player symbols below. One thing I initially planned on was a counter to keep track of how many games each player has won. I will try to add this feature in the future. One thing I can improve is the simplicity of my checkBoard function. Most of my if statements show the same code which I am sure could be run with a for loop. 
