function ticTacToe(turns) {
    let array = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let currentPlayerSign = 'X';

    for (let line of turns) {
        [currentRow, currentCol] = line
            .split(" ")
            .map(Number);

        let isWon = false;

        for (let row = 0; row < array.length; row++) {
            if (array[row].includes(false)) {
                isWon = true;
            }
        }

        if (!isWon) {
            console.log("The game ended! Nobody wins :(");
            printBoard();
            return;
        }

        if (array[currentRow][currentCol] !== false) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        array[currentRow][currentCol] = currentPlayerSign;

        for (let i = 0; i < 3; i++) {
            if (array[i][0] === currentPlayerSign &&
                array[i][1] === currentPlayerSign &&
                array[i][2] === currentPlayerSign) {
                console.log(`Player ${currentPlayerSign} wins!`)
                printBoard();
                return;
            }

            else if (array[0][i] === currentPlayerSign &&
                array[1][i] === currentPlayerSign &&
                array[2][i] === currentPlayerSign) {
                console.log(`Player ${currentPlayerSign} wins!`)
                printBoard();
                return;
            }
        }

        if (array[0][0] === currentPlayerSign &&
            array[1][1] === currentPlayerSign &&
            array[2][2] === currentPlayerSign) {
            console.log(`Player ${currentPlayerSign} wins!`)
            printBoard();
            return;
        }

        else if (array[0][2] === currentPlayerSign &&
            array[1][1] === currentPlayerSign &&
            array[2][0] === currentPlayerSign) {
            console.log(`Player ${currentPlayerSign} wins!`)
            printBoard();
            return;
        }

        currentPlayerSign = currentPlayerSign === "X" ? "O" : "X";
    }

    function printBoard() {
        for (let row = 0; row < array.length; row++) {
            console.log(array[row].join("\t"));
        }
    }

}