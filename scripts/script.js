const Cells = document.querySelectorAll (".cell");

let checkTurn = true;

const Player_X = "X";
const Player_O = "O";
const Combination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    
    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
]


document.addEventListener("click", (event) => {
    if(event.target.matches(".cell")) {
        play(event.target.id)
    }
});


function play(id) {
    const Cell = document.getElementById(id);

    
    turn = checkTurn ? Player_X : Player_O;
    
    Cell.textContent = turn; 
    Cell.classList.add(turn); 
    checkWinner(turn);
}

function checkWinner(turn) {
    const Winner = Combination.some((comb) => {
        return comb.every((index) => {
            return Cells[index].classList.contains(turn);
        })
    });

    if (Winner){
        endGame(turn);
    } else if (checkTie()) {
        endGame();
    } else {
        checkTurn = !checkTurn;
    }

}

function checkTie(){
    let x = 0;
    let o = 0;

    for (index in Cells){
        if(!isNaN(index)){
            if (Cells[index].classList.contains(Player_X)) {
                x++;
            }

            if(Cells[index].classList.contains(Player_O)) {
                o++;
            }
        }
    }    
    return x + o === 9 ? true : false;
}


function endGame(Winner = null) {
    c

    if(Winner){
        h2.innerHTML = `Player <span>${Winner}</span> Wins!`;
    } else {
        h2.innerHTML = "Tie!";
    }

}

// function start_restart(){

// }

// function playerOrMachine(){

// }

// function scoreboard(){
    
// }

// function MachinePlaying(){

// }