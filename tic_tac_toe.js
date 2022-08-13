const grid = document.querySelector("#grid");
let gameBoardArray = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
const restartButton = document.querySelector('.restart');
const resultOverlay = document.querySelector('.result-screen-overlay');
const overlayRestartButton = document.querySelector('.overlay-restart');
const resultLetter = document.querySelector('.result-letter');
const result = document.querySelector('.result');

// Module
const gameBoard = (() => {
    // Methods
    const createGameBoard = () => {
        for (let i = 0; i < 9; i++) {
            const gameBoardCell = document.createElement('div');
            gameBoardCell.innerHTML = gameBoardArray[i];
            gameBoardCell.addEventListener('click', (event) => {
                if (gameBoardArray[i] == ' ') {
                    gameBoardCell.innerHTML = gameBoardArray[i];
                    if (playerX.turn === 1) {
                        gameBoardArray.splice(i, 1, 'X');
                        console.log(gameBoardArray);
                        playerX.turn = 2;
                        playerO.turn = 1;
                        displayController.checkWinner(gameBoardArray);
                        displayController.update();
                    } else if (playerO.turn === 1) {
                        gameBoardArray.splice(i, 1, 'O');
                        console.log(gameBoardArray);
                        playerX.turn = 1;
                        playerO.turn = 2;
                        displayController.checkWinner(gameBoardArray);
                        displayController.update();
                    }
                } else if (gameBoardArray[i] != ' ') {
                    event.preventDefault();
                }
            })
            restartButton.addEventListener('click', displayController.restart)
            overlayRestartButton.addEventListener('click', displayController.restart)
            gameBoardCell.setAttribute('style', 'width: 100px; height: 100px; border-bottom: 1px solid black; border-right: 1px solid black; border-top: 1px solid black; border-left: 1px solid black; font-size: 100px; display: flex; justify-content: center; align-items: center; font-family: Roboto;');
            grid.appendChild(gameBoardCell);
        }
    }
    return {createGameBoard};
})();

// Module #2
const displayController = (() => {
    const update = () => {
        grid.innerHTML = '';
        gameBoard.createGameBoard();
    };

    const restart = () => {
        resultOverlay.style.display = 'none';
        gameBoardArray = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
        grid.innerHTML = '';
        playerX.turn = 1;
        playerO.turn = 2;
        update();
    };

    const checkWinner = (array) => {
        if (array[0] == 'X' && array[1] == 'X' && array[2] == 'X') {
            resultLetter.innerHTML = 'X won!';
            resultOverlay.style.display = 'block';
        } else if (array[3] == 'X' && array[4] == 'X' && array[5] == 'X') {
            resultLetter.innerHTML = 'X won!';
            resultOverlay.style.display = 'block';
        } else if (array[6] == 'X' && array[7] == 'X' && array[8] == 'X') {
            resultLetter.innerHTML = 'X won!';
            resultOverlay.style.display = 'block';
        } else if (array[0] == 'X' && array[3] == 'X' && array[6] == 'X') {
            resultLetter.innerHTML = 'X won!';
            resultOverlay.style.display = 'block';
        } else if (array[1] == 'X' && array[4] == 'X' && array[7] == 'X') {
            resultLetter.innerHTML = 'X won!';
            resultOverlay.style.display = 'block';
        } else if (array[2] == 'X' && array[5] == 'X' && array[8] == 'X') {
            resultLetter.innerHTML = 'X won!';
            resultOverlay.style.display = 'block';
        } else if (array[0] == 'X' && array[4] == 'X' && array[8] == 'X') {
            resultLetter.innerHTML = 'X won!';
            resultOverlay.style.display = 'block';
        } else if (array[2] == 'X' && array[4] == 'X' && array[6] == 'X') {
            resultLetter.innerHTML = 'X won!';
            resultOverlay.style.display = 'block';

        // Check if O wins
        } else if (array[0] == 'O' && array[1] == 'O' && array[2] == 'O') {
            resultLetter.innerHTML = 'O won!';
            resultOverlay.style.display = 'block';
        } else if (array[3] == 'O' && array[4] == 'O' && array[5] == 'O') {
            resultLetter.innerHTML = 'O won!';
            resultOverlay.style.display = 'block';
        } else if (array[6] == 'O' && array[7] == 'O' && array[8] == 'O') {
            resultLetter.innerHTML = 'O won!';
            resultOverlay.style.display = 'block';
        } else if (array[0] == 'O' && array[3] == 'O' && array[6] == 'O') {
            resultLetter.innerHTML = 'O won!';
            resultOverlay.style.display = 'block';
        } else if (array[1] == 'O' && array[4] == 'O' && array[7] == 'O') {
            resultLetter.innerHTML = 'O won!';
            resultOverlay.style.display = 'block';
        } else if (array[2] == 'O' && array[5] == 'O' && array[8] == 'O') {
            resultLetter.innerHTML = 'O won! ';
            resultOverlay.style.display = 'block';
        } else if (array[0] == 'O' && array[4] == 'O' && array[8] == 'O') {
            resultLetter.innerHTML = 'O won!';
            resultOverlay.style.display = 'block';
        } else if (array[2] == 'O' && array[4] == 'O' && array[6] == 'O') {
            resultLetter.innerHTML = 'O won!';
            resultOverlay.style.display = 'block';
        } else if (array[0] != ' ' && array[1] != ' ' && array[2] != ' ' && array[3] != ' ' && array[4] != ' ' && array[5] != ' ' && array[6] != ' ' && array[7] != ' ' && array[8] != ' ') {
            resultLetter.innerHTML = 'Tie!';
            resultOverlay.style.display = 'block';
            console.log('tie')
        }
    };
    return {update, restart, checkWinner};
})();

// Factory Function
const Player = (turn, sign) => {
    return {turn, sign};
};

// Creating players
const playerX = Player(1, 'X');
const playerO = Player(2, 'O');

gameBoard.createGameBoard();