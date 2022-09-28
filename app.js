let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"]
    let random = choice[Math.floor(Math.random() * choice.length)]
    return random;
}

function playRound(playerSelection,computerSelection){

    if(computerSelection === "paper" && playerSelection === 'rock'){
    computerScore++
    return  "You Lose. Paper beats Rock.";
    
}else if(computerSelection === "paper" && playerSelection === 'scissors') {
    playerScore++
    return "You Win! Scissors beat Paper";

} else if(computerSelection === "scissors" && playerSelection === 'rock') {
    playerScore++
    return "You Win! Rock beats Scissors.";

}else if(computerSelection === "scissors" && playerSelection === 'paper') {
    computerScore++
    return "You Lose. Scissors beat Paper.";

}else if(computerSelection === "rock" && playerSelection === 'paper') {
    playerScore++
    return "You Win! Paper beats Rock ";

}else if(computerSelection === "rock" && playerSelection === 'scissors') {
    computerScore++
    return "You Lose. Rock beat Scissors";

} else {
    return "Tie";
}

}



/*console.log(playRound(playerSelection,computerSelection));*/

function game(){
    for(let i = 0; i <5; i++) {
        let playerSelection = prompt('Enter in Rock, Paper, or Scissors').toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
}

if (playerScore > computerScore){
    return "Congrats! You Win!"
} else if (playerScore < computerScore){
    return "You Lose.";
} else {
    return "It's a Tie.";
}
}

console.log(game());
