function playGame() { 
//global variables
let boardSquares = Array.from(document.querySelectorAll(".square"));
let restart = document.querySelector("#restart");
let moves = 0;
let currentTurn = "X";
let gameStart = true;
let board = ['','','','','','','','',''];







//check to see if move is allowed by player by checking to see if any text in the red box

    function moveAllowed(square) {
        if(square.innerHTML === "X" || square.innerHTML === "O") {
        alert("Pick another Square!");
        return false;
        
    } else {
    return true;
}
    }


    //updates board array 
function updateGame(index) {
    board[index] = currentTurn;
}



//checks board array for any winning condition. If any lines within () then lines below are run.
function checkBoard (currentTurn) {
    moves ++;
    if (board[0] === currentTurn && board[1] === currentTurn && board[2] === currentTurn ) {
        alert(`${currentTurn} wins!`);
        gameStart = false;
        playGame();
    }
     if (board[0] === currentTurn && board[3] === currentTurn && board[6] === currentTurn) {
        alert(`${currentTurn} wins!`);
        gameStart = false;
        playGame();
    }    
     if (board[0] === currentTurn && board[4] === currentTurn && board[8] === currentTurn) {
        alert(`${currentTurn} wins!`);
        gameStart = false;
        playGame();
    } 
     if (board[8] === currentTurn && board[2] === currentTurn && board[5] === currentTurn) {
        alert(`${currentTurn} wins!`);
        gameStart = false;
        playGame();
    }
     if (board[8] === currentTurn && board[6] === currentTurn && board[7] === currentTurn) {
        alert(`${currentTurn} wins!`);
        gameStart = false;
        playGame();
    }
     if (board[4] === currentTurn && board[1] === currentTurn && board[7] === currentTurn) {
        alert(`${currentTurn} wins!`);
        gameStart = false;
        playGame();
    }
     if (board[4] === currentTurn && board[3] === currentTurn && board[5] === currentTurn) {
        alert(`${currentTurn} wins!`);
        gameStart = false;
        playGame();
    }
     if (board[4] === currentTurn && board[2] === currentTurn && board[6] === currentTurn) {
        alert(`${currentTurn} wins!`);
        gameStart = false;
        playGame();
    }
    if (moves == 9 && gameStart == true) {
        isTie();
    }
    else {
        return true;
    }
} 


//run in case of tie in game
function isTie(){
    alert("Its a Tie!")
}


//lets players rotate through X and O.
function changeTurn()  {
    currentTurn = currentTurn === "X" ? "O": "X";
}

const playerClick = (square, index) => {
    if(moveAllowed(square) && gameStart) {
        square.innerHTML = currentTurn;
        updateGame(index);
        checkBoard(currentTurn);
        changeTurn(currentTurn);
    }
};


//event listener function that allows clicks on red squares
boardSquares.forEach( (square, index) => {
    square.addEventListener('click', () => playerClick(square, index));
})


//makes restart button clear out board to initial settings

restart.addEventListener("click", (e) =>  {
    board = ['','','','','','','','',''];
    currentTurn = "X";
    boardSquares.forEach(function (square) {
        square.innerText = "" ;
    }) 
    console.log("event");
});
}

playGame(); //Initializes game function







