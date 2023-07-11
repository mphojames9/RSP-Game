let playerScore = 0;
let computerScore = 0;
let moves = 2;
const playerScore_display = document.querySelector(".pScore");
const results = document.querySelector(".temporaryResults");
const rounds = document.querySelector(".roundCounter-span");
const computerChoice_backGround = document.querySelector(".computerChoice");
const computerScore_display = document.querySelector(".cScore");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const sissorBtn = document.querySelector("#sissor");
const startBtn = document.querySelector("#startBtn");
const mainGame = document.querySelector(".game");
const startPage = document.querySelector(".startDiv");
const playerScoreStar_1 = document.getElementById("ps1");
const playerScoreStar_2 = document.getElementById("ps2");
const playerScoreStar_3 = document.getElementById("ps3");
const computerScoreStar_1 = document.getElementById("cs1");
const computerScoreStar_2 = document.getElementById("cs2");
const computerScoreStar_3 = document.getElementById("cs3");
const gameOverSec = document.querySelector(".gameOverSec");
const winnerSec = document.querySelector("#gameResults");
const playAgainBtn = document.querySelector("#playAgain");
const homeBtn = document.querySelector("#home");

startBtn.addEventListener("click",()=>{
    mainGame.style.display = "flex";
    startPage.style.display = "none";
})

rockBtn.addEventListener("click",()=>{
    main('rock');
    paperBtn.style="background-image: none";
    sissorBtn.style="background-image: none";
})

paperBtn.addEventListener("click",()=>{
    main('paper');
    sissorBtn.style="background-image: none";
    rockBtn.style="background-image: none";
})

sissorBtn.addEventListener("click",()=>{
    main('sissors');
    paperBtn.style="background-image: none";
    rockBtn.style="background-image: none";
})

function computerSelection(){
    selections = ['rock','paper','sissors'];
    randomNum = Math.floor(Math.random()*3);
    return selections[randomNum]
}

function main(playerSelection){
    const computerChoice = computerSelection();
    if(playerSelection === "rock" && computerChoice === "rock"){
            computerChoice_backGround.style = "background-image: url(img/rock.png)";
        tie();
    }else if(playerSelection === "rock" && computerChoice === "paper"){
        computerChoice_backGround.style = "background-image: url(img/paper.png)";
        loss();
    }else if(playerSelection === "rock" && computerChoice === "sissors"){
        computerChoice_backGround.style = "background-image: url(img/sissor.png)";
        win();
    }else if(playerSelection === "paper" && computerChoice === "rock"){
        computerChoice_backGround.style = "background-image: url(img/rock.png)";
        win();
    }else if(playerSelection === "paper" && computerChoice === "paper"){
        computerChoice_backGround.style = "background-image: url(img/paper.png)";
        tie();
    }else if(playerSelection === "paper" && computerChoice === "sissors"){
        computerChoice_backGround.style = "background-image: url(img/sissor.png)";
        loss();
    }else if(playerSelection === "sissors" && computerChoice === "rock"){
        computerChoice_backGround.style = "background-image: url(img/rock.png)";
        loss();
    }else if(playerSelection === "sissors" && computerChoice === "paper"){
        computerChoice_backGround.style = "background-image: url(img/paper.png)";
        win();
    }else if(playerSelection === "sissors" && computerChoice === "sissors"){
        computerChoice_backGround.style = "background-image: url(img/sissor.png)";
        tie();
    }
    scoreUpdate();
    moves++
}
function win(){
    playerScore++;
    results.innerHTML = "You win";
    rounds.innerHTML = `${moves}`;
    displayElements();

}
function loss(){
    computerScore++;
    results.innerHTML = "You lose";
    rounds.innerHTML = `${moves}`;
    displayElements();
}

function tie(){
    results.innerHTML = "Tie";
    rounds.innerHTML = `${moves}`;
    displayElements();
}

function displayElements(){
    results.style.display  = 'block';
    function test(){
        results.style.display = "none"
    }
    function restoreBackImg(){
    rockBtn.style="background-image: (img/rock.png)";
    paperBtn.style="background-image: (img/paper.png)";
    sissorBtn.style="background-image: (img/sissor.png)";
    computerChoice_backGround.style="background-image: url(img/loading.gif)";
    }
    setTimeout(test,1500);
    setTimeout(restoreBackImg,1500);
}

function scoreUpdate(){
    if(playerScore === 1){
        playerScoreStar_1.classList.add("checked");
    }else if(playerScore === 2){
          playerScoreStar_2.classList.add("checked");
    }else if(playerScore === 3){
          playerScoreStar_3.classList.add("checked");
};

    if(computerScore === 1){
            computerScoreStar_1.classList.add("checked");
    }else if(computerScore === 2){
        computerScoreStar_2.classList.add("checked");
    }else if(computerScore === 3){
        computerScoreStar_3.classList.add("checked");
    };

    if(playerScore === 3 || computerScore === 3){
        gameOver();
    }
}

function gameOver(){
    gameOverSec.style.display = "flex";

    if(playerScore > computerScore){
        winnerSec.innerHTML = "You win";
    }else{
        winnerSec.innerHTML = "You loss";
    }
    playerScore_display.innerHTML = playerScore;
    computerScore_display.innerHTML = computerScore;
    mainGame.classList.add("opacity");

    playAgainBtn.addEventListener("click",()=>{
        gameOverSec.style.display = "none";

        playerScore = 0;
        computerScore = 0;
        moves = 2;
        rounds.innerHTML = "1";
        playerScoreStar_1.classList.remove("checked");
        playerScoreStar_2.classList.remove("checked");
        playerScoreStar_3.classList.remove("checked");

        computerScoreStar_1.classList.remove("checked");
        computerScoreStar_2.classList.remove("checked");
        computerScoreStar_3.classList.remove("checked");

        mainGame.classList.remove("opacity");

    })
    homeBtn.addEventListener("click", ()=>{
        location.reload();
    })
}