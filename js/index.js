
function playerPlay() {
        playerSelection = prompt("Please choose rock paper or scissors").toLowerCase();

        if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
                alert(`You selected ${playerSelection}`);
                return playerSelection;
        } else {
                alert(`${playerSelection} is not a valid selection.`);
        }
}

function computerPlay() {
        let computerSelection = Math.floor(Math.random()*3)+1;

        switch (computerSelection) {
                case 1:
                        alert('Computer has selected rock');
                        return 'rock';
                        break;
                case 2: 
                        alert('Computer has selected paper');
                        return 'paper'; 
                        break;
                case 3:
                        alert('Computer has selected scissors');
                        return 'scissors';
                        break;
        }
}


function rockPaperScissors(playerSelection, computerSelection) {
        switch (playerSelection) {
                case 'rock':
                        return playerRock(computerSelection);
                case 'paper':
                        return playerPaper(computerSelection);
                case 'scissors':
                        return playerScissors(computerSelection);
        }
}

function playerRock(computerSelection) {
        if (computerSelection === 'rock') {
                return 'tie';
        } else if (computerSelection === 'scissors') {
                return 'You win';
        } else {
                return 'You lose';
        }
}

function playerPaper(computerSelection) {
        if (computerSelection === 'paper') {
                return 'tie';
        } else if (computerSelection === 'rock') {
                return 'You win';
        } else {
                return 'You lose';
        }
}

function playerScissors(computerSelection) {
        if (computerSelection === 'scissors') {
                return 'tie';
        } else if (computerSelection === 'paper') {
                return 'You win';
        } else {
                return 'You lose';
        }
}

function scoring(playerScore, computerScore) {
        if (playerScore === computerScore) {
                return `Computer: ${computerScore} Player: ${playerScore} TIE`;
        } else if (playerScore > computerScore) {
                return `Computer: ${computerScore} Player: ${playerScore} You have won`;
        } else{
                return `Computer: ${computerScore} Player: ${playerScore} You have lost`;
        }
}

function game() {
        let computerScore = 0
          , playerScore = 0;
        for (let round = 1; round < 6; round++) {
                switch (rockPaperScissors(playerPlay(), computerPlay())) {
                        case 'tie':
                                computerScore++;
                                playerScore++;
                                alert(`Round ${round} is a tie`);
                                break;
                        case 'You win':
                                playerScore++;
                                alert(`Round ${round} goes to player`);
                                break;
                        case 'You lose':
                                computerScore++;
                                alert(`Round ${round} goes to computer`);
                                break;
                }
        }
        return scoring(playerScore, computerScore);
}
