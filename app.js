const X_MARK = 'x'
const O_MARK = 'o'
// Define combinations that make a player wins the game
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const squareElements = document.querySelectorAll('[data-square]')
const board = document.getElementById('board')
const winningMsg = document.getElementById('winningMsg')
const restartBtn = document.getElementById('restartBtn')
const winningMsgText = document.querySelector('.data-winning-msg')
let oTurn

startGame()

restartBtn.addEventListener('click', startGame)

function startGame() {
    oTurn = false
    squareElements.forEach(square => {
        square.classList.remove(X_MARK)
        square.classList.remove(O_MARK)
        square.removeEventListener('click', handleClick)
        // We set once to true so we can only fire/trigger by clicking the element once
        square.addEventListener('click', handleClick, { once: true })
    })
    setBoardHoverClass(board)
    winningMsg.classList.remove('active')
}

function handleClick(e) {
    const square = e.target
    // Check for the current mark
    const currMark = oTurn ? O_MARK : X_MARK
    putMark(square, currMark)
    if (checkWinner(currMark)) {
        endGame(false)
    }
    else if (isDraw()) {
        endGame(true)
    }
    else {
        switchTurns()
        setBoardHoverClass(board)
    }
}

function endGame(draw) {
    if (draw) {
        winningMsgText.innerText = "Draw!"
    }
    else {
        winningMsgText.innerText = `${oTurn ? "O" : "X"} Wins!`
    }
    winningMsg.classList.add('active')
}

function isDraw() {
    return [...squareElements].every(square => square.classList.contains(X_MARK) || square.classList.contains(O_MARK))
}

// Function to add class to the element that triggered the event (put mark X or O to the square)
function putMark(square, mark) {
   square.classList.add(mark)
}

function switchTurns() {
    // Switch O to X and vice versa
    oTurn = !oTurn
}

function setBoardHoverClass(board) {
    board.classList.remove(X_MARK)
    board.classList.remove(O_MARK)
    if (oTurn) {
        board.classList.add(O_MARK)
    }
    else {
        board.classList.add(X_MARK)
    }
}

function checkWinner(currMark) {
    /* Check if an some of the combination is true, and also every square
        in that combination has the same mark either X or O */
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(squareIndex => {
            return squareElements[squareIndex].classList.contains(currMark)
        }) 
    }) 
}