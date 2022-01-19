function computerPlay (max) {
    let choice = Math.floor(Math.random() * max)
    
    if (choice == 0) {
        return "rock"
    } else if (choice == 1) {
        return "paper"
    } else return "scissors"
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    
    if (playerSelection == "rock" && computerSelection == "paper") {
        return `You lose the round! Paper beats Rock`
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return `You win the round! Rock beats Scissors`
    }  else if (playerSelection == "paper" && computerSelection == "scissors") {
        return `You lose the round ! Scissors beats Paper`
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return `You win the round! Paper beats Rocks`
    } if (playerSelection == "scissors" && computerSelection == "rock") {
        return `You lose the round! Rock beats Scissors`
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return `You win the round! Scissors beats Paper`
    }  else return `Round ends in draw` 

}


function game() {
    let playerScore = 0
    let computerScore = 0
    let result = ""

    for (let i=0; i<5; i++) {
        let playerSelection = prompt("Select Rock, Paper, or Scissors");
        let computerSelection = computerPlay(3);
        result = playRound(playerSelection, computerSelection)
        if (result.includes("win")) {
            playerScore = playerScore + 1
        } else if (result.includes("lose")) {
            computerScore = computerScore + 1
        }
        console.log(result)
        console.log(`The score is Player ${playerScore}-${computerScore} CPU`)
    }

    let finalScore = ""

    if (playerScore > computerScore) {
        finalScore = `You won the match!`
    } else if (computerScore > playerScore) {
        finalScore = `CPU won the match!`
    } else finalScore = `Match ended in draw!`
    return finalScore
}

console.log(game())