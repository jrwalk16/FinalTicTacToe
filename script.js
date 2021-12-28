function playGame () {}

let boardSquares = Array.from(document.querySelectorAll(".square"));
let playButton = document.querySelector("#playGame");
let restart = document.querySelector("#restart");
let moves = 0;
let currentTurn = "X";
let gameStart = true;
let playerOneWins = "Player One Wins!";
let playerTwoWins = "Player Two Wins!";
let board = ['','','','','','','','',''];

const winningNumbers = [["0", "1", "2"], ["3", "4", "6"], ["6","7", "8"], ["0", "4", "8"], ["2", "4", "6"], ["0", "3", "6"], ["1","4", "7"], ["2", "5", "8"]]






// for ( let i = 0; i < boardSquares.length; i++) {
//     boardSquares[i].addEventListener('click', function(){
//         if(boardSquares[i].innerHTML.trim()== "" && gameStart == true) {
//             boardSquares[i].innerHTML = currentTurn;
//             currentTurn = currentTurn == "X" ? "O": "X"; 
//             updateGame();
//         } else {
//         alert("Pick a different square");
//         }
//     })
// }

    function moveAllowed(square) {
        if(square.innerHTML === "X" || square.innerHTML === "O") {
        alert("Pick another Square!");
        return false;
        
    } else {
    return true;
}
    }

function updateGame(index) {
    board[index] = currentTurn;
    console.log(board);
}



// const restartGame() {
//     gameStart = true;
//     currentTurn = "X";
//     board = ['','','','','','','','',''];
// }


function checkBoard (currentTurn) {
    if (board[0] === currentTurn && board[1] === currentTurn && board[2] === currentTurn ) {
        console.log("You win!");
        alert(`${currentTurn} wins!`);
        return true;
    }
     if (board[0] === currentTurn && board[3] === currentTurn && board[6] === currentTurn) {
        console.log("You win");
        alert(`${currentTurn} wins!`);
        return true;
    }    
     if (board[0] === currentTurn && board[4] === currentTurn && board[8] === currentTurn) {
        console.log("You win");
        alert(`${currentTurn} wins!`);
        return true;
    } 
     if (board[8] === currentTurn && board[2] === currentTurn && board[5] === currentTurn) {
        console.log("You win");
        alert(`${currentTurn} wins!`);
        return true;
    }
     if (board[8] === currentTurn && board[6] === currentTurn && board[7] === currentTurn) {
        console.log("You win");
        alert(`${currentTurn} wins!`);
        return true;
    }
     if (board[4] === currentTurn && board[1] === currentTurn && board[7] === currentTurn) {
        console.log("You win");
        alert(`${currentTurn} wins!`);
        return true;
    }
     if (board[4] === currentTurn && board[3] === currentTurn && board[5] === currentTurn) {
        console.log("You win");
        alert(`${currentTurn} wins!`);
        return true;
    }
     if (board[4] === currentTurn && board[2] === currentTurn && board[6] === currentTurn) {
        console.log("You win");
        alert(`${currentTurn} wins!`);
        return true;
    }
    else {
        return false;
    }
} 




function changeTurn()  {
    currentTurn = currentTurn === "X" ? "O": "X";
    console.log("X");
}

const playerClick = (square, index) => {
    if(moveAllowed(square) && gameStart) {
        square.innerHTML = currentTurn;
        updateGame(index);
        checkBoard(currentTurn);
        changeTurn(currentTurn);
        console.log("X");
    }
};

boardSquares.forEach( (square, index) => {
    square.addEventListener('click', () => playerClick(square, index));
})

// function resetGame(){
//     board = ['', '', '', '', '', '', '', '', ''];
//     currentTurn = "X";
// } 

// reset.addEventListener("click", resetGame);

// for(let boardClickCount = 0; boardSquares.length < 10; boardClickCount++) {
//     boardSquares[boardClickCount].addEventListener('click', function() {
//         if(boardClickCount % 2 == 0) {
//             console.log("X");
//         } else {
//             console.log("Y");
//         }
//     })
// }   
 

// for(let i =0; i<boardSquares.length; i++) {
//     boardSquares[i].addEventListener('click', playerChoice);
// }

// function playerChoice () {

// }




// boardSquares.forEach(square => {
//     square.addEventListener('click', playerChange)

// })



// function playerChange (event) {
//     moves ++;
//     const square = event.target.id;

//     if (moves % 2 !== 0) {
        
//         console.log("X");
//     } else {
//         console.log("O");
//     }
// }






console.log(boardSquares);
// console.log(playButton);
// console.log(restart);
console.log(board)