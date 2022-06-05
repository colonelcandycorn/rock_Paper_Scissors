var computerScore = 0;
var playerScore = 0;
var round = 1;
var gameState = true;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const playerScorediv = document.querySelector('.playerScore');
const computerScorediv = document.querySelector('.computerScore')
const roundDiv = document.querySelector('.round');
const newGame = document.querySelector('#newGame');

function computerPlay() {
        let computerSelection = Math.floor(Math.random()*3)+1;

        switch (computerSelection) {
                case 1:
                        console.log('Computer has selected rock');
                        return 'rock';
                        break;
                case 2: 
                        console.log('Computer has selected paper');
                        return 'paper'; 
                        break;
                case 3:
                        console.log('Computer has selected scissors');
                        return 'scissors';
                        break;
        }
}


function playRound(playerSelection, computerSelection = computerPlay()) {
        if (gameState) {
                switch (playerSelection) {
                        case 'rock':
                                if (computerSelection === 'rock') {
                                        endRound('tie');
                                        break;
                                } else if (computerSelection === 'scissors') {
                                        endRound('You win');
                                        break;
                                } else {
                                        endRound('You lose');
                                        break;
                                }
                        case 'paper':
                                if (computerSelection === 'paper') {
                                        endRound('tie');
                                        break;
                                } else if (computerSelection === 'rock') {
                                        endRound('You win');
                                        break;
                                } else {
                                        endRound('You lose');
                                        break;
                                }
                        case 'scissors':
                                if (computerSelection === 'scissors') {
                                        endRound('tie');
                                        break;
                                } else if (computerSelection === 'paper') {
                                        endRound('You win');
                                        break;
                                } else {
                                        endRound('You lose');
                                        break;
                                }
                }
        } else {
                restartGame();
        }
}

function endRound(result) {
        switch (result) {
                case 'tie':
                        computerScore++;
                        playerScore++;
                        console.log(`Round ${round} is a tie`);
                        break;
                case 'You win':
                        playerScore++;
                        console.log(`Round ${round} goes to player`);
                        break;
                case 'You lose':
                        computerScore++;
                        console.log(`Round ${round} goes to computer`);
                        break;
        }
        round++;
        updateScore();
}

function updateScore() {
        playerScorediv.textContent =  `${playerScore}`;
        computerScorediv.textContent = `${computerScore}`;
        roundDiv.textContent = `Round: ${round}`;
        if (playerScore == 5 || computerScore == 5) {
                endGame();       
        } 
}

function endGame() {
        gameState = false;
        if (playerScore == 5) {
                roundDiv.textContent = `Player Wins! Start a new game?`
        } else {
                roundDiv.textContent = `Computer Wins! Start a new game?`
        }
}

function restartGame(e) {
        gameState = true;
        playerScore = 0;
        computerScore = 0;
        round = 1;
        updateScore();
}
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));
newGame.addEventListener('click', restartGame);