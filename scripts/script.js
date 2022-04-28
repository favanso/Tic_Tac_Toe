const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
let gameState = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let minute = 0;
let second = 0;
let millisecond = 0;
let cron;

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



function start() {
  resetTimer();
  cron = setInterval(() => {
    timer();
  }, 10);
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
  if (document.getElementById("PvC").checked && currentPlayer == "O") {
    setTimeout(Computer(), 2000);
  }
}

function restart(text) {
  var txt = text;
  if (confirm(txt)) {
    document.getElementById("game").innerHTML = "Game";
    document.getElementById("turn").innerHTML = "Press Start!";
    document.getElementById("PvP").checked = true;
    document.getElementById("0").innerHTML = "";
    document.getElementById("1").innerHTML = "";
    document.getElementById("2").innerHTML = "";
    document.getElementById("3").innerHTML = "";
    document.getElementById("4").innerHTML = "";
    document.getElementById("5").innerHTML = "";
    document.getElementById("6").innerHTML = "";
    document.getElementById("7").innerHTML = "";
    document.getElementById("8").innerHTML = "";
    gameState = ["", "", "", "", "", "", "", "", ""];
    txt2 = "Press Start button to Play";
  } else {
    txt2 = "Thank you for playing";
    disableScreen();
  }
  document.getElementById("game").innerHTML = txt2;
  
}

function cell0() {
  if (document.getElementById("0").innerHTML == "") {
    document.getElementById("0").innerHTML = currentPlayer;
    gameState[0] = currentPlayer;
    handleResultValidation();
  }
}
function cell1() {
  if (document.getElementById("1").innerHTML == "") {
    document.getElementById("1").innerHTML = currentPlayer;
    gameState[1] = currentPlayer;
    handleResultValidation();
  }
}
function cell2() {
  if (document.getElementById("2").innerHTML == "") {
    document.getElementById("2").innerHTML = currentPlayer;
    gameState[2] = currentPlayer;
    handleResultValidation();
  }
}
function cell3() {
  if (document.getElementById("3").innerHTML == "") {
    document.getElementById("3").innerHTML = currentPlayer;
    gameState[3] = currentPlayer;
    handleResultValidation();
  }
}
function cell4() {
  if (document.getElementById("4").innerHTML == "") {
    document.getElementById("4").innerHTML = currentPlayer;
    gameState[4] = currentPlayer;
    handleResultValidation();
  }
}
function cell5() {
  if (document.getElementById("5").innerHTML == "") {
    document.getElementById("5").innerHTML = currentPlayer;
    gameState[5] = currentPlayer;
    handleResultValidation();
  }
}
function cell6() {
  if (document.getElementById("6").innerHTML == "") {
    document.getElementById("6").innerHTML = currentPlayer;
    gameState[6] = currentPlayer;
    handleResultValidation();
  }
}
function cell7() {
  if (document.getElementById("7").innerHTML == "") {
    document.getElementById("7").innerHTML = currentPlayer;
    gameState[7] = currentPlayer;
    handleResultValidation();
  }
}
function cell8() {
  if (document.getElementById("8").innerHTML == "") {
    document.getElementById("8").innerHTML = currentPlayer;
    gameState[8] = currentPlayer;
    handleResultValidation();
  }
}

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
    restart("Do you want to play again? \n" + winningMessage());
    return;
  }
  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    restart("Do you want to play again? \n" + drawMessage());
    return;
  }

  handlePlayerChange();
}

function handlePlayerChange() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";

  document.getElementById("turn").innerHTML = currentPlayerTurn();
  if (document.getElementById("PvC").checked && currentPlayer == "O") {
    setTimeout(Computer(), 5000);
  }
}

function Computer() {
  numberChose = Math.floor(Math.random() * 9);
  if (gameState[numberChose] == "") {
    switch (numberChose) {
      case 0:
        document.getElementById("0").innerHTML = currentPlayer;
        break;
      case 1:
        document.getElementById("1").innerHTML = currentPlayer;
        break;
      case 2:
        document.getElementById("2").innerHTML = currentPlayer;
        break;
      case 3:
        document.getElementById("3").innerHTML = currentPlayer;
        break;
      case 4:
        document.getElementById("4").innerHTML = currentPlayer;
        break;
      case 5:
        document.getElementById("5").innerHTML = currentPlayer;
        break;
      case 6:
        document.getElementById("6").innerHTML = currentPlayer;
        break;
      case 7:
        document.getElementById("7").innerHTML = currentPlayer;
        break;
      case 8:
        document.getElementById("8").innerHTML = currentPlayer;
        break;
    }
    gameState[numberChose] = currentPlayer;
    handleResultValidation();
  } else {
    for (i = 0; gameState.length; i++) {
      if (gameState[i] == "") {
        switch (numberChose) {
          case 0:
            document.getElementById("0").innerHTML = currentPlayer;
            break;
          case 1:
            document.getElementById("1").innerHTML = currentPlayer;
            break;
          case 2:
            document.getElementById("2").innerHTML = currentPlayer;
            break;
          case 3:
            document.getElementById("3").innerHTML = currentPlayer;
            break;
          case 4:
            document.getElementById("4").innerHTML = currentPlayer;
            break;
          case 5:
            document.getElementById("5").innerHTML = currentPlayer;
            break;
          case 6:
            document.getElementById("6").innerHTML = currentPlayer;
            break;
          case 7:
            document.getElementById("7").innerHTML = currentPlayer;
            break;
          case 8:
            document.getElementById("8").innerHTML = currentPlayer;
            break;
        }
      }
      gameState[i] = currentPlayer;
      handleResultValidation();
      return;
    }
  }
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById("minute").innerText = returnData(minute);
  document.getElementById("second").innerText = returnData(second);
}

function resetTimer() {
  minute = 0;
  second = 0;
  millisecond = 0;

  document.getElementById("minute").innerText = "00";
  document.getElementById("second").innerText = "00";
}

function returnData(input) {
  return input > 10 ? input : `0${input}`;
}
function disableScreen() {

  var div= document.createElement("div");
  div.className += "overlay";
  document.body.appendChild(div);
}