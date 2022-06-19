// const rock = document.querySelector("#rock");
// const paper = document.querySelector("#paper");
// const scissors = document.querySelector("#scissors");

let playerScore = 0;
let computerScore = 0;
let round = 0;
const buttons = document.querySelectorAll("button");

const results = document.querySelector("#results");
results.textContent = `Rock, Paper, or Scissors?`
buttons.forEach(btn => {
    btn.addEventListener('click', runButton);
});

function updateRound(resultFormatted){
    round++;
    if(round >= 5){
        buttons.forEach(btn => {
            btn.removeEventListener('click', runButton);
        });
        if(playerScore > computerScore){
            results.textContent = `Round 5/5: You Win!
            Score:  ${playerScore} : ${computerScore}`;
        }else if (computerScore > playerScore){
            results.textContent = `Round 5/5: You Lose!
            Score:  ${playerScore} : ${computerScore}`
        }else{
            results.textContent = `Round 5/5:Draw!
            Score:  ${playerScore} : ${computerScore}`
        }
    }  else{ 
        let roundText = `Round ${round}/5: Rock, Paper, or Scissors?`;
        results.textContent =  `${roundText} \n ${resultFormatted}`;
    }
}


function runButton(e){
    let btn = e.target;
    let playerChoice = btn.getAttribute('id');
    let computerChoice = computerPlay()
    let result = rpsRound(playerChoice, computerChoice);
    let resultFormatted = resultString(result, playerChoice, computerChoice);
    updateRound(resultFormatted);
}
function resultString(roundResult, player, computer){
    let win = function(player, computer){
        playerScore++;
        return `You Win! ${capitalize(player)} beats ${capitalize(computer)}
        Score:  ${playerScore} : ${computerScore}`; 
    }
    let lose = function(player, computer){
        computerScore++;
        return  `You Lose! ${capitalize(computer)} beats ${capitalize(player)}
        Score:  ${playerScore} : ${computerScore}`;
    }
    let draw = function(player, computer){
        return `Draw! 
        Score:  ${playerScore} : ${computerScore}`;
    }
    switch (roundResult){
        case 'win':
            return win(player,computer);
        break;    
        case 'lose':
            return lose(player,computer);
        break;
        case 'draw':
            return draw(player,computer);
        break;
    }
}





function computerPlay(){
    let rand = Math.floor(Math.random()*3);
    let out;
    switch (rand){
        case 0:
            out = "Rock";
        break;
        case 1:
            out = "Paper";
        break;
        case 2:
            out = "Scissors";
        break;
    }
    return out;
}


function rpsRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    
    let win = function(player, computer){
        return `You Win! ${capitalize(player)} beats ${capitalize(computer)}`; 
    }
    let lose = function(player, computer){
        return `You Lose! ${capitalize(computer)} beats ${capitalize(player)}`;
    }
    let draw = function(player, computer){
        return `Draw!`;
    }
   
    if (player == 'rock'){
        if (computer == 'rock') return 'draw';
        if (computer == 'paper') return 'lose';
        if (computer == 'scissors') return 'win';
    }
    if (player == 'paper'){
        if (computer == 'rock') return 'win';
        if (computer == 'paper') return 'draw';
        if (computer == 'scissors') return 'lose';
    }
    if (player == 'scissors'){
        if (computer == 'rock') return 'lose';
        if (computer == 'paper') return 'win';
        if (computer == 'scissors') return 'draw';
    }
    return;
}

function capitalize(word){
    let lowerWord = word.toLowerCase();
    let firstLetter = lowerWord.substr(0,1).toUpperCase();
    let rest = lowerWord.substr(1);
    return firstLetter + rest;
}