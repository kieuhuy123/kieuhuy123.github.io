const COL = 30;
const ROW = 30;

let turn = "O";


function creatCell() {
    let td = document.createElement("td");

    td.addEventListener("click", function (ev) {
        this.textContent = turn;
        turn = turn == "X" ? "O" : "X";
    } ,
        {
            once: true;
        }
    
    )

    return td;
};

function creatRow() {
    let tr = document.createElement("tr");

    for (let i = 0; i < COL; i++){
        
    }
};

function creatTable() {
    let tbl = document.createElement("table");

}

function check() {
    if (checkVertical()) {

    }
};

function checkVertical() {
    
}