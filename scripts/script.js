const statusDisplay = document.getElementById("game");
const turnDisplay = document.getElementById("turn");
const gamePlayed = document.getElementById("gamePlayed");
const PvP = document.getElementById("PvP");
const PvC = document.getElementById("PvC");

let gamePlayedTimes = [];

let gameActive = false;
function start() {
  handleRestartGame();
  if (document.getElementById("PvP").checked) {
    chose = "Player v Player. <br/>";
  } else {
    chose = "Player v Computer. <br/>";
  }
  player = Math.floor(Math.random() * 2) + 1;
  if (player == 1) {
    currentPlayer = "X";
  } else {
    currentPlayer = "O";
  }
  document.getElementById("turn").innerHTML =
    "Starting a New Game. <br/>" + chose + currentPlayer + " starts First.";
}

function playAgain() {
  document.getElementById("turn").innerHTML = "Press Start!";
  document.getElementById("PvP").checked = true;
  document.getElementById("playAgain").disabled = true;
}

let gameState = ["", "", "", "", "", "", "", "", ""];
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

function cell0() {
  if (document.getElementById("0").innerHTML == "" && gameActive) {
    document.getElementById("0").innerHTML = currentPlayer;
    gameState[0] = currentPlayer;
    handleResultValidation();
  }
}
function cell1() {
  if (document.getElementById("1").innerHTML == "" && gameActive) {
    document.getElementById("1").innerHTML = currentPlayer;
    gameState[1] = currentPlayer;
    handleResultValidation();
  }
}
function cell2() {
  if (document.getElementById("2").innerHTML == "" && gameActive) {
    document.getElementById("2").innerHTML = currentPlayer;
    gameState[2] = currentPlayer;
    handleResultValidation();
  }
}
function cell3() {
  if (document.getElementById("3").innerHTML == "" && gameActive) {
    document.getElementById("3").innerHTML = currentPlayer;
    gameState[3] = currentPlayer;
    handleResultValidation();
  }
}
function cell4() {
  if (document.getElementById("4").innerHTML == "" && gameActive) {
    document.getElementById("4").innerHTML = currentPlayer;
    gameState[4] = currentPlayer;
    handleResultValidation();
  }
}
function cell5() {
  if (document.getElementById("5").innerHTML == "" && gameActive) {
    document.getElementById("5").innerHTML = currentPlayer;
    gameState[5] = currentPlayer;
    handleResultValidation();
  }
}
function cell6() {
  if (document.getElementById("6").innerHTML == "" && gameActive) {
    document.getElementById("6").innerHTML = currentPlayer;
    gameState[6] = currentPlayer;
    handleResultValidation();
  }
}
function cell7() {
  if (document.getElementById("7").innerHTML == "" && gameActive) {
    document.getElementById("7").innerHTML = currentPlayer;
    gameState[7] = currentPlayer;
    handleResultValidation();
  }
}
function cell8() {
  if (document.getElementById("8").innerHTML == "" && gameActive) {
    document.getElementById("8").innerHTML = currentPlayer;
    gameState[8] = currentPlayer;
    handleResultValidation();
  }
}

// document
//   .querySelectorAll("cell")
//   .forEach((cell) => cell.addEventListener("onClick", handleCellClick));

// function handleCellClick(clickedCellEvent) {
//     document.getElementById("turn").innerHTML = "HI"
//   const clickedCell = clickedCellEvent.target;
//   const clickedCellIndex = parseInt(clickedCell.getAttribute("id"));

//   if (gameState[clickedCellIndex] !== "" || !gameActive) {
//     return;
//   }

//   handleCellPlayed(clickedCell, clickedCellIndex);
//   handleResultValidation();
// }

// function handleCellPlayed(clickedCell, clickedCellIndex) {
//   gameState[clickedCellIndex] = currentPlayer;
//   clickedCell.innerHTML = currentPlayer;
// }

function handleResultValidation() {
  let roundWon = false;
  for (i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    document.getElementById("game").innerHTML = winningMessage();
    gameActive = false;
    document.getElementById("playAgain").disabled = false;
    document.getElementById("turn").innerHTML = "Do you like to play again?";
    return;
  }
  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    document.getElementById("game").innerHTML = drawMessage();
    gameActive = false;
    document.getElementById("playAgain").disabled = false;
    document.getElementById("turn").innerHTML = "Do you like to play again?";
    return;
  }

  handlePlayerChange();
}

function handlePlayerChange() {
  //
  currentPlayer = currentPlayer === "X" ? "O" : "X";

  document.getElementById("turn").innerHTML = currentPlayerTurn();
  if (document.getElementById("PvC").checked && currentPlayer == "O") {
    setTimeout(Computer(), 2000);
  }
}

function handleRestartGame() {
  gameActive = true;
  //TIMER
  currentPlayer = "X";
  gameState = ["", "", "", "", "", "", "", "", ""];
  document.querySelectorAll("cell").forEach((cell) => (cell.innerHTML = ""));
}

function Computer() {
  //random and check
}
