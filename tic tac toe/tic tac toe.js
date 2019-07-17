// var user =  
var whoseTurnItIs = 1;

var board = ["", "", "", "", "", "", "", "", ""]
//"" is blank
//blue "blue"
//red: "red"

function changeColor(block, num) {
    var color = document.querySelector(block).style.backgroundColor;
    if (color != "green" && color != "blue") {
        if (whoseTurnItIs == 1) {
            board[num] = "blue";
            document.querySelector(block).style.backgroundColor = "blue";
            whoseTurnItIs = 2;
            //block.innerHTML = "board["+ num +  "] " + board[num];
        }
        else {
            document.querySelector(block).style.backgroundColor = "green";
            whoseTurnItIs = 1;
            board[num] = "green";
            //block.innerHTML = "board["+ num +  "] " + board[num];
        }
        console.log(board)
        checkwin("blue");
        checkwin("green");
        
    }
}
function checkwin(player) {
    // check if top row wins
    if (board[0] == board[1] && board[2] == board[1] && board[0] == player) {
        console.log(player + " wins")
    }
    // checks if left vertical row wins
    else if (board[0] == board[3] && board[6] == board[3] && board[0] == player)  {
        console.log(player + " wins")
    }
    // checks if middle row wins
    else if (board[3] == board[4] && board[5] == board[4] && board[3] == player) {
        console.log(player + " wins")
    }
    // check if middle vertical row wins
    else if (board[1] == board[4] && board[7] == board[4] && board[1] == player) {
        console.log(player + " wins")
    }
    // check if right vertical row wins
    else if (board[2] == board[5] && board [8] == board[5] && board[2] == player) {
         console.log(player + " wins")
    }
    // bottom row wins
    else if (board[6] == board[7] && board[8] == board[7] && board[6] == player){
        console.log(player + " wins")
    }
    //right diaganol wins
    else if (board[0] == board[4] && board[8] == board[4] && board[0] == player){
        console.log(player + " wins")
    }
    //left diaganol wins
    else if (board[2] == board[4] && board[6] == board[4] && board[2] == player) {
        console.log(player + "wins")
    }
    


}

document.querySelector("#top-left").onclick = function () {
    changeColor("#top-left", 0);
    //top-left is
}


document.querySelector("#top-middle").onclick = function () {
    changeColor("#top-middle", 1);
}

document.querySelector("#top-right").onclick = function () {
    changeColor("#top-right", 2);
}
document.querySelector("#middle-left").onclick = function () {
    changeColor("#middle-left", 3);
}

document.querySelector("#middle-middle").onclick = function () {
    changeColor("#middle-middle", 4);
}
document.querySelector("#middle-right").onclick = function () {
    changeColor("#middle-right", 5);

}
document.querySelector("#bottom-left").onclick = function () {
    changeColor("#bottom-left", 6);
}

document.querySelector("#bottom-middle").onclick = function () {
    changeColor("#bottom-middle", 7);
}

document.querySelector("#bottom-right").onclick = function () {
    changeColor("#bottom-right", 8);
}



var turns = 9;

