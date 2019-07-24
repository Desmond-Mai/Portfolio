// var user =  
var whoseTurnItIs = 1;

var board = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
var wins = false

//"" is blank
//blue "blue"
//red: "red"

function changeColor(block, num) {
    var color = block.style.backgroundColor;
    if (color != "green" && color != "blue" && wins == false) {
        if ((num >= 35 && num <= 41) || board[num + 7] == "blue" || board[num + 7] == "green") {
            if (whoseTurnItIs == 1) {
                board[num] = "blue";
                block.style.backgroundColor = "blue";
                whoseTurnItIs = 2;
                //block.innerHTML = "board["+ num +  "] " + board[num];
            }
            else {
                block.style.backgroundColor = "green";
                whoseTurnItIs = 1;
                board[num] = "green";
                //block.innerHTML = "board["+ num +  "] " + board[num];
            }
            console.log(board)
            checkwin("blue");
            checkwin("green");
        }

    }

}
function checkwin(player) {
    // check if top row wins
    if (board[0] == player && board[1] == player && board[2] == player && board[3] == player) {
        wins = true
        displayMessage(player);
    }
    // checks if left vertical row wins
    else if (board[1] == player && board[2] == player && board[3] == player && board[4] == player) {
        wins = true
        displayMessage(player);
    }
    // checks if middle row wins
    else if (board[2] == player && board[3] == player && board[4] == player && board[5] == player) {
        wins = true
        displayMessage(player);
    }
    // check if middle vertical row wins
    else if (board[3] == player && board[4] == player && board[5] == player && board[6] == player) {
        displayMessage(player);
    }
    // check if right vertical row wins
    else if (board[7] == player && board[8] == player && board[9] == player && board[10] == player) {
        wins = true
        displayMessage(player);
    }
    // bottom row wins
    else if (board[8] == player && board[9] == player && board[10] == player && board[11] == player) {
        wins = true
        displayMessage(player);
    }

    //left diaganol wins
    else if (board[9] == player && board[10] == player && board[11] == player && board[12] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[10] == player && board[11] == player && board[12] == player && board[13] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[14] == player && board[15] == player && board[16] == player && board[17] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[15] == player && board[16] == player && board[17] == player && board[18] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[16] == player && board[17] == player && board[18] == player && board[19] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[17] == player && board[18] == player && board[19] == player && board[20] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[21] == player && board[22] == player && board[23] == player && board[24] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[22] == player && board[23] == player && board[24] == player && board[25] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[23] == player && board[24] == player && board[25] == player && board[26] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[24] == player && board[25] == player && board[26] == player && board[27] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[28] == player && board[29] == player && board[30] == player && board[31] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[29] == player && board[30] == player && board[31] == player && board[32] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[30] == player && board[31] == player && board[32] == player && board[33] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[31] == player && board[32] == player && board[33] == player && board[34] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[35] == player && board[36] == player && board[37] == player && board[38] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[36] == player && board[37] == player && board[38] == player && board[39] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[37] == player && board[38] == player && board[39] == player && board[40] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[38] == player && board[39] == player && board[40] == player && board[41] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[0] == player && board[7] == player && board[14] == player && board[21] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[7] == player && board[14] == player && board[21] == player && board[28] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[14] == player && board[21] == player && board[28] == player && board[35] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[1] == player && board[8] == player && board[15] == player && board[22] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[8] == player && board[15] == player && board[22] == player && board[29] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[15] == player && board[22] == player && board[29] == player && board[36] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[2] == player && board[9] == player && board[16] == player && board[23] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[9] == player && board[16] == player && board[23] == player && board[30] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[16] == player && board[23] == player && board[30] == player && board[37] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[3] == player && board[10] == player && board[17] == player && board[24] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[10] == player && board[17] == player && board[24] == player && board[31] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[17] == player && board[24] == player && board[31] == player && board[38] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[4] == player && board[11] == player && board[18] == player && board[25] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[11] == player && board[18] == player && board[25] == player && board[32] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[18] == player && board[25] == player && board[32] == player && board[39] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[5] == player && board[12] == player && board[19] == player && board[26] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[12] == player && board[19] == player && board[26] == player && board[33] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[19] == player && board[26] == player && board[33] == player && board[40] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[6] == player && board[13] == player && board[20] == player && board[27] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[13] == player && board[20] == player && board[27] == player && board[34] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[20] == player && board[27] == player && board[34] == player && board[41] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[14] == player && board[22] == player && board[30] == player && board[38] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[7] == player && board[15] == player && board[23] == player && board[31] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[15] == player && board[23] == player && board[31] == player && board[39] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[0] == player && board[8] == player && board[16] == player && board[24] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[8] == player && board[16] == player && board[24] == player && board[32] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[16] == player && board[24] == player && board[32] == player && board[40] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[1] == player && board[9] == player && board[17] == player && board[25] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[9] == player && board[17] == player && board[25] == player && board[33] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[17] == player && board[25] == player && board[33] == player && board[41] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[2] == player && board[10] == player && board[18] == player && board[26] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[2] == player && board[10] == player && board[18] == player && board[26] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[10] == player && board[18] == player && board[26] == player && board[34] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[3] == player && board[11] == player && board[19] == player && board[27] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[3] == player && board[9] == player && board[15] == player && board[21] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[4] == player && board[10] == player && board[16] == player && board[22] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[10] == player && board[16] == player && board[22] == player && board[28] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[5] == player && board[11] == player && board[17] == player && board[23] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[11] == player && board[17] == player && board[23] == player && board[29] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[17] == player && board[23] == player && board[29] == player && board[35] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[6] == player && board[12] == player && board[18] == player && board[24] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[12] == player && board[18] == player && board[24] == player && board[30] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[18] == player && board[24] == player && board[30] == player && board[36] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[13] == player && board[19] == player && board[25] == player && board[31] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[19] == player && board[25] == player && board[31] == player && board[37] == player) {
        wins = true
        displayMessage(player);
    }
    else if (board[20] == player && board[26] == player && board[32] == player && board[38] == player) {
        wins = true
        displayMessage(player);
    }

}

function displayMessage(player) {
    var message = document.createElement("H2");
    message.setAttribute("id", "message");
    message.innerHTML = player + " wins!";
    var body = document.querySelector("body");
    body.appendChild(message);
}
var turns = 13;