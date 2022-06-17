function game(){
    let round = 0;
    let playerScore = 0;
    let computerScore = 0;
    let win = function(player, computer){
        playerScore++;
        console.log(`You Win! ${capitalize(player)} beats ${capitalize(computer)}
        Score:  ${playerScore} : ${computerScore}`); 
    }
    let lose = function(player, computer){
        computerScore++;
        console.log(`You Lose! ${capitalize(computer)} beats ${capitalize(player)}
        Score:  ${playerScore} : ${computerScore}`);
    }
    let draw = function(player, computer){
        console.log(`Draw! 
        Score:  ${playerScore} : ${computerScore}`);
    }
    for(let i = 0; i < 5; i++){
        round++;
        let player = prompt(`Round ${round}: Rock, Paper, or Scissors?`);
        let computer = computerPlay();
        let result = rpsRound(player,computer);
        switch (result){
            case 'win':
                win(player,computer);
            break;
            case 'lose':
                lose(player,computer);
            break;
            case 'draw':
                draw(player,computer);
            break;
        }
    }
    if(playerScore > computerScore){
        console.log("You win!");
    }else if (computerScore > playerScore){
        console.log("You lose!");
    }else{
        console.log("Draw!");
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