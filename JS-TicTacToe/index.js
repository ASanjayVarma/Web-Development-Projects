//declaring the required variables
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");

//writing all possible conditions to win
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//need array of placeholders
let options = ["", "", "", "", "", "", "", "", ""];

//track of current player
let currentPlayer = "X";

//track if game is running or not
let running = false;

initializeGame();

//function to initialize the game
function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}


//checking condition for the cell which is clicked
function cellClicked(){
    //this is the cell we are clicking on
    const cellIndex = this.getAttribute("cellIndex"); 
    //check if cell is empty
    //update only when box is empty
    if(options[cellIndex] != "" || !running){ 
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}

//updating cell
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

//code to change X and O
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}

//to check if someone won or should be continue
function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length;i++)
    {
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" ||cellB == "" ||cellC == "")
        {
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    }
    else if(!options.includes(""))//for draws
    {
        statusText.textContent = 'Draw!';
        running = false;
    }
    else{
        changePlayer();
    }
}

//function to restart the game whenever the button is clicked
function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}

