let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('button')


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
        return document.getElementById("results").innerHTML = `You lose the round! Paper beats Rock`
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return document.getElementById("results").innerHTML = `You win the round! Rock beats Scissors`
    }  else if (playerSelection == "paper" && computerSelection == "scissors") {
        return document.getElementById("results").innerHTML = `You lose the round ! Scissors beats Paper`
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return document.getElementById("results").innerHTML = `You win the round! Paper beats Rocks`
    } if (playerSelection == "scissors" && computerSelection == "rock") {
        return document.getElementById("results").innerHTML = `You lose the round! Rock beats Scissors`
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return document.getElementById("results").innerHTML = `You win the round! Scissors beats Paper`
    }  else return document.getElementById("results").innerHTML = `Round ends in draw` 
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

let rock = document.getElementById("rock");
rock.addEventListener("click", function (event) {
    let playerSelection = "rock";
    let computerSelection = computerPlay(3);
    playRound(playerSelection, computerSelection);
    if (document.getElementById("results").innerHTML.includes("win")) {
        playerScore += 1
        document.getElementById("playerscore").innerHTML = `Player score: ${playerScore}` 
    } else if (document.getElementById("results").innerHTML.includes("lose")) {
        computerScore += 1
        document.getElementById("computerscore").innerHTML = `Computer score: ${computerScore}`
    }
    if (playerScore == 5 || computerScore == 5) {
        document.getElementById("finalscore").innerHTML = `Game is over, reload the page to play again` 
        disableButtons()
    }
});

let paper = document.getElementById("paper");
paper.addEventListener("click", function (event) {
    let playerSelection = "paper";
    let computerSelection = computerPlay(3);
    playRound(playerSelection, computerSelection);
    if (document.getElementById("results").innerHTML.includes("win")) {
        playerScore += 1
        document.getElementById("playerscore").innerHTML = `Player score: ${playerScore}` 
    } else if (document.getElementById("results").innerHTML.includes("lose")) {
        computerScore += 1
        document.getElementById("computerscore").innerHTML = `Computer score: ${computerScore}`
    }
    if (playerScore == 5 || computerScore == 5) {
        document.getElementById("finalscore").innerHTML = `Game is over, reload the page to play again`
        disableButtons()
        }
});

let scissors = document.getElementById("scissors");
scissors.addEventListener("click", function (event) {
    let playerSelection = "scissors";
    let computerSelection = computerPlay(3);
    playRound(playerSelection, computerSelection);
    if (document.getElementById("results").innerHTML.includes("win")) {
        playerScore += 1
        document.getElementById("playerscore").innerHTML = `Player score: ${playerScore}` 
    } else if (document.getElementById("results").innerHTML.includes("lose")) {
        computerScore += 1
        document.getElementById("computerscore").innerHTML = `Computer score: ${computerScore}`
    }
    if (playerScore == 5 || computerScore == 5) {
        document.getElementById("finalscore").innerHTML = `Game is over, reload the page to play again` 
        disableButtons()
    }
});