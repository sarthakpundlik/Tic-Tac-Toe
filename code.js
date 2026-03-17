let currentPlayer = "X";
let statusbar = document.getElementById("statusbar");
let board = document.getElementById("board");

let scoreX = 0;
let scoreO = 0;

// CREATE BOARD
for (let r = 1; r <= 3; r++) {
    for (let c = 1; c <= 3; c++) {
        let btn = document.createElement("button");
        board.appendChild(btn);
        btn.innerHTML = "";
        btn.id = "b" + r + c;
        btn.className = "btn";
        btn.addEventListener("click", btnClicked);
    }
}

// BUTTON CLICK
function btnClicked(e) {
    if (e.target.innerHTML !== "") return;

    e.target.innerHTML = currentPlayer;

    if (checkWinner()) {
        alert("Winner is: " + currentPlayer);

        if (currentPlayer === "X") {
            scoreX++;
            document.getElementById("scoreX").innerHTML = scoreX;
        } else {
            scoreO++;
            document.getElementById("scoreO").innerHTML = scoreO;
        }

        resetBoard();
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusbar.innerHTML = "Current Player : " + currentPlayer;
}

// RESET BOARD
function resetBoard() {
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => {
        btn.innerHTML = "";
        btn.disabled = false;
    });

    currentPlayer = "X";
    statusbar.innerHTML = "Current Player : " + currentPlayer;
}

// RESTART BUTTON
document.getElementById("restartBtn").addEventListener("click", resetBoard);

// WIN CHECK (same logic improved slightly)
function checkWinner() {

    // rows
    for (let r = 1; r <= 3; r++) {
        if (
            getVal(r,1) === currentPlayer &&
            getVal(r,2) === currentPlayer &&
            getVal(r,3) === currentPlayer
        ) return true;
    }

    // columns
    for (let c = 1; c <= 3; c++) {
        if (
            getVal(1,c) === currentPlayer &&
            getVal(2,c) === currentPlayer &&
            getVal(3,c) === currentPlayer
        ) return true;
    }

    // diagonals
    if (
        getVal(1,1) === currentPlayer &&
        getVal(2,2) === currentPlayer &&
        getVal(3,3) === currentPlayer
    ) return true;

    if (
        getVal(1,3) === currentPlayer &&
        getVal(2,2) === currentPlayer &&
        getVal(3,1) === currentPlayer
    ) return true;

    return false;
}

function getVal(r,c){
    return document.getElementById("b"+r+c).innerHTML;
}
