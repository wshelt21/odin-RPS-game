let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button')
const outcome = document.querySelector('.outcome');
const scoreDiv = document.querySelector('.score');
const runScorePlayer = document.querySelector('.runScorePlayer');
const runScoreComp = document.querySelector('.runScoreComp');
const p = document.createElement('p');



function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"]
    let random = choice[Math.floor(Math.random() * choice.length)]
    return random;
}

function playRound(playerSelection,computerSelection){

    if(computerSelection === "paper" && playerSelection === 'rock'){
    computerScore++
    runScoreComp.innerText = `Computer: ${computerScore}`;
    p.innerText = `You Lose. ${computerSelection} beats ${playerSelection}.`
    checkWinner(playerScore,computerScore);
    
}else if(computerSelection === "paper" && playerSelection === 'scissors') {
    playerScore++
    runScorePlayer.innerText = `You: ${playerScore}`;
    p.innerText = `You Win! ${playerSelection} beats ${computerSelection}.`
    outcome.appendChild(p);
    checkWinner(playerScore,computerScore);

} else if(computerSelection === "scissors" && playerSelection === 'rock') {
    playerScore++
    runScorePlayer.innerText = `You: ${playerScore}`;
    p.innerText = `You Win! ${playerSelection} beats ${computerSelection}.`
    checkWinner(playerScore,computerScore);

}else if(computerSelection === "scissors" && playerSelection === 'paper') {
    computerScore++
    runScoreComp.innerText = `Computer: ${computerScore}`;
    p.innerText = `You Lose. ${computerSelection} beats ${playerSelection}.`
    checkWinner(playerScore,computerScore);

}else if(computerSelection === "rock" && playerSelection === 'paper') {
    playerScore++
    runScorePlayer.innerText = `You: ${playerScore}`;
    p.innerText = `You Win! ${playerSelection} beats ${computerSelection}.`
    checkWinner(playerScore,computerScore);

}else if(computerSelection === "rock" && playerSelection === 'scissors') {
    computerScore++
    runScoreComp.innerText = `Computer: ${computerScore}`;  
    p.innerText = `You Lose. ${computerSelection} beats ${playerSelection}.`
    checkWinner(playerScore,computerScore);

} else {
    p.innerText = `Tie`
}
outcome.appendChild(p);
}

const checkWinner = (playerScore,computerScore) => {
    const h2 = document.createElement('h2');
    if(playerScore === 5){
        h2.classList.add('playerWin');
        h2.innerText = `You Win! Final Score is: ${playerScore} to ${computerScore}`;
    } else if (computerScore === 5){
        h2.classList.add('compWin');
        h2.innerText = `You Lose. Final Score is: ${computerScore} to ${playerScore}`;
    }
    scoreDiv.appendChild(h2);
}


buttons.forEach(button => {
 button.addEventListener('click', () =>{
    const computerSelection = getComputerChoice();
    const playerSelection = `${button.className}`;
    playRound(playerSelection,computerSelection);
 } )
})




