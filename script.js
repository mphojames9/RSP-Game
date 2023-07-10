let playerScore = 0;
let computerScore = 0;
let moves = 1;
const playerScore_display = document.querySelector(".playerScoreCounter");
const results = document.querySelector("#tempResults");
const rounds = document.querySelector(".roundCounter-span");
const computerScore_display = document.querySelector(".computerScoreCounter");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const sissorBtn = document.querySelector("#sissor");

rockBtn.addEventListener("click",()=>{
    main('rock');
})

paperBtn.addEventListener("click",()=>{
    main('paper');
})

sissorBtn.addEventListener("click",()=>{
    main('sissors');
})

function computerSelection(){
    selections = ['rock','paper','sissors'];
    randomNum = Math.floor(Math.random()*3);
    return selections[randomNum]
}

function main(playerSelection){
    const computerChoice = computerSelection();
    if(playerSelection === "rock" && computerChoice === "rock"){
        tie();
    }else if(playerSelection === "rock" && computerChoice === "paper"){
        loss();
    }else if(playerSelection === "rock" && computerChoice === "sissors"){
        win();
    }else if(playerSelection === "paper" && computerChoice === "rock"){
        win();
    }else if(playerSelection === "paper" && computerChoice === "paper"){
        tie();
    }else if(playerSelection === "paper" && computerChoice === "sissors"){
        loss();
    }else if(playerSelection === "sissors" && computerChoice === "rock"){
        loss();
    }else if(playerSelection === "sissors" && computerChoice === "paper"){
        win();
    }else if(playerSelection === "sissors" && computerChoice === "sissors"){
        tie();
    }
    if(rounds.innerHTML === "5"){
        console.log("game over")
    }
    moves++
}

function win(){
    playerScore++;
    playerScore_display.innerHTML = playerScore;
    results.innerHTML = "You win";
    rounds.innerHTML = `${moves}`;
}
function loss(){
    computerScore++;
    computerScore_display.innerHTML = computerScore;
    results.innerHTML = "You lose";
    rounds.innerHTML = `${moves}`;
}

function tie(){
    results.innerHTML = "Tie";
    rounds.innerHTML = `${moves}`;
}