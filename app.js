function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"]
    let random = choice[Math.floor(Math.random() * choice.length)]
    return random;
}


let computerSelection = getComputerChoice();
let playerSelection = prompt('Enter in Rock, Paper, or Scissors').toLowerCase();

function playRound(playerSelection,computerSelection){
    let playerScore = 0;
    let computerScore = 0;
    
    if(computerSelection === "paper" && playerSelection === 'rock'){
    return  "You Lose. Paper beats Rock.";

}else if(computerSelection === "paper" && playerSelection === 'scissors') {
    return "You Win! Scissors beat Paper";

} else if(computerSelection === "scissors" && playerSelection === 'rock') {
    return "You Win! Rock beats Scissors.";

}else if(computerSelection === "scissors" && playerSelection === 'paper') {
    return "You Lose. Scissors beat Paper.";

}else if(computerSelection === "rock" && playerSelection === 'paper') {
    return "You Win! Paper beats Rock ";

}else if(computerSelection === "rock" && playerSelection === 'scissors') {
    return "You Lose. Rock beat Scissors";

} else {
    return "Tie";
}

}

console.log(playRound(playerSelection,computerSelection));

