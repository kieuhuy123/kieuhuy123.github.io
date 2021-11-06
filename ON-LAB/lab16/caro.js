let boxes = Array.from(document.getElementsByClassName("box"));

let playText = document.getElementById("playText");

let restartBtn = document.getElementById("restartBtn");

let spaces = [];
let O_TEXT = "O";
let X_TEXT = "X";
let currentPlayer ;

let drawBoard = function() {
  boxes.forEach((box, index) => {
    let styleString = "";
    if (index < 3) {
      styleString += "border-bottom: 3px solid var(--pink);";
    }
    if (index % 3 === 0) {
      styleString += "border-right: 3px solid var(--pink);";
    }
    if (index % 3 == 2) {
      styleString += "border-left: 3px solid var(--pink);";
    }
    if (index > 5) {
      styleString += "border-top: 3px solid var(--pink);";
    }
    box.style = styleString;
    box.addEventListener("click", boxClicked);
  });
    
};


let boxClicked = function(e) {
  let id = e.target.id;
  console.log(id);

  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    if (playerHasWon()) {
        playText.innerText = `${currentPlayer} has won! `;
       
      return;
    }
    currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
  }
};

let playerHasWon = function() {
  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      console.log(`${currentPlayer} wins on the top`);
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      console.log(`${currentPlayer} wins on left. `);
      return true;
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      console.log(`${currentPlayer} wins diagonally. `);
      return true;
    }
  }
  if (spaces[8] === currentPlayer) {
    if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
      console.log(`${currentPlayer} win on right`);
      return true;
    }
    if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
      console.log(`${currentPlayer} wins on the botto,. `);
      return true;
    }
  }
  if (spaces[4] === currentPlayer) {
    if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
      console.log(`${currentPlayer} wins `);
      return true;
    }
    if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
      console.log(`${currentPlayer} wins vertically in the middle. `);
      return true;
    }
    if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
      console.log(`${currentPlayer} wins`);
      return true;
    }
  }
};




let restart = function () {
    spaces.forEach(function (space, index) {
        spaces[index] = null;
    })
    boxes.forEach(function (box) {
        box.innerText = '';
    })
    playText.innerText = "Choi game ik!";
    currentPlayer = O_TEXT;
    
};

restartBtn.addEventListener("click", restart);

restart();
drawBoard();
