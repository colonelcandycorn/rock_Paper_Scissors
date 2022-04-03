
function playerPlay() {
        playerSelection = prompt("Please choose rock paper or scissors").toLowerCase();

        if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
                //run game function maybe?
                alert(`You selected ${playerSelection}`)
                return playerSelection
        } else {
                alert(`${playerSelection} is not a valid selection.`)
        }
}

function computerPlay() {
        let computerSelection = Math.floor(Math.random()*3)+1;

        switch (computerSelection) {
                case 1:
                        return 'rock';
                        break;
                case 2: 
                        return 'paper'; 
                        break;
                case 3:
                        return 'scissors';
                        break;
        }
}


function rockPaperScissors(playerSelection, computerSelection) {
        switch (playerSelection) {
                case 'rock':
                        playerRock(computerSelection);
                        break;
                case 'paper':
                        playerPaper(computerSelection);
                        break;
                case 'scissors':
                        playerScissors(computerSelection);
                        break;
        }
}

function playerRock(computerSelection) {
        if (computerSelection === 'rock') {
                console.log('tie');
        } else if (computerSelection === 'scissors') {
                console.log('You win');
        } else {
                console.log('You lose');
        }
}

function playerPaper(computerSelection) {
        if (computerSelection === 'paper') {
                console.log('tie');
        } else if (computerSelection === 'rock') {
                console.log('You win');
        } else {
                console.log('You lose');
        }
}

function playerScissors(computerSelection) {
        if (computerSelection === 'scissors') {
                console.log('tie');
        } else if (computerSelection === 'paper') {
                console.log('You win');
        } else {
                console.log('You lose');
        }
}


rockPaperScissors(playerPlay(), computerPlay());



