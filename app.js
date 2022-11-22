let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button')
const outcome = document.querySelector('.outcome');
const scoreDiv = document.querySelector('.score');
const runScorePlayer = document.querySelector('.runScorePlayer');
const runScoreComp = document.querySelector('.runScoreComp');
const p = document.createElement('p');
const newGame = document.createElement('button');
const h2 = document.createElement('h2');


//function to generate a computer choice.
function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"]
    let random = choice[Math.floor(Math.random() * choice.length)]
    return random;
}

//function to determine you wins a round. 

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

//Eventlistener for Buttons
buttons.forEach(button => {
 button.addEventListener('click', () =>{
    const computerSelection = getComputerChoice();
    const playerSelection = `${button.className}`;
    playRound(playerSelection,computerSelection);
 } )
})

//Function to check for a Winner
const checkWinner = (playerScore,computerScore) => {
    if(playerScore === 5){
        h2.classList.add('playerWin');
        h2.innerText = `You Win! Final Score is: ${playerScore} to ${computerScore}`;

        newGame.classList.add('newGameBtn');
        newGame.innerText = 'New Game'

        scoreDiv.appendChild(h2);
        scoreDiv.appendChild(newGame);

        document.querySelector('.rock').disabled = true;

        buttons.forEach(button => {
            button.disabled = true;
              } )

    } else if (computerScore === 5){
        h2.classList.add('compWin');
        h2.innerText = `You Lose. Final Score is: ${computerScore} to ${playerScore}`;

        newGame.classList.add('newGameBtn');
        newGame.innerText = 'New Game'

        scoreDiv.appendChild(h2);
        scoreDiv.appendChild(newGame);

        buttons.forEach(button => {
            button.disabled = true;
              } )
           }
    }

    newGame.addEventListener('click', () =>{
        buttons.forEach(button => {
            button.disabled = false;
              } )

        playerScore = 0;
        computerScore = 0;
        runScorePlayer.innerText = `You: ${playerScore}`;
        runScoreComp.innerText = `Computer: ${computerScore}`; 
        outcome.innerText = '';
        h2.innerText = '';  
        newGame.remove(newGame);
    })       


