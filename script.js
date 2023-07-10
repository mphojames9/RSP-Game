let playerScore = 0;
let computerScore = 0;
let moves = 1;
const playerScore_display = document.querySelector(".playerScoreCounter");
const results = document.querySelector(".temporaryResults");
const rounds = document.querySelector(".roundCounter-span");
const computerChoice_backGround = document.querySelector(".computerChoice");
const computerScore_display = document.querySelector(".computerScoreCounter");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const sissorBtn = document.querySelector("#sissor");

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
    displayElements();

}
function loss(){
    computerScore++;
    computerScore_display.innerHTML = computerScore;
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

