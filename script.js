let userScore = 0;
let computerScore = 0;
let moves = 0;
const userScore_span = document.getElementById('p-count count');
const computerScore_span = document.getElementById('c-count count');
const miniScreen = document.getElementById('mini-screen');
const result = document.getElementById('result');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const sissors = document.getElementById('s');
const reloadBtn = document.querySelector('.reload');
const gameOverText = document.querySelector('.move');
const movesLeft = document.getElementById('movesleft');
const optionsBtn = document.querySelector('.options');

//results functions
function win(){
    userScore++;
    userScore_span.innerText = userScore;
    result.innerText = 'You win';
    miniScreen.classList.add('green-glow');
    setTimeout(function greenGlow (){
        miniScreen.classList.remove('green-glow')
    }, 1000);
    

}

function loss(){
    computerScore++;
    computerScore_span.innerText = computerScore;
    result.innerText = 'Computer wins';
    miniScreen.classList.add('red-glow');
    setTimeout(function redGlow (){
        miniScreen.classList.remove('red-glow')},1000
    );



}

function draw(){
    result.innerText = 'Draw';
    miniScreen.classList.add('blue-glow');
    setTimeout(function redGlow (){
        miniScreen.classList.remove('blue-glow')},1000
    );

}

//computer choice function
function getComputerChoice(){
   let choices = ['r','p','s'];
   let randomNumbers = Math.floor(Math.random()*3);
    return choices[randomNumbers];
}


//user choice function
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case'rs':
        case'pr':
        case'sp':
        win();
        break;

        case'rp':
        case'ps':
        case'sr':
        loss();
        break;

        case'rr':
        case'pp':
        case'ss':
        draw();
        break;

    }
    
}

//main function
rock.addEventListener('click', function (){
    game('r');
    let movesLeft = document.getElementById('movesleft');
    moves++;
    movesLeft.innerText = `Moves Left: ${10-moves}`;
    if(moves == 10){
        gameOver();
    }

});

paper.addEventListener('click', function (){
    game('p');
    let movesLeft = document.getElementById('movesleft');
    moves++;
    movesLeft.innerText = `Moves Left: ${10-moves}`;
    if(moves == 10){
        gameOver();
    }
});

sissors.addEventListener('click', function (){
    game('s');
    let movesLeft = document.getElementById('movesleft');
    moves++;
    movesLeft.innerText = `Moves Left: ${10-moves}`;
    if(moves == 10){
        gameOver();
    }
});

function gameOver() {

    if(userScore > computerScore){
        result.style.fontSize = '1rem';
        result.innerText = 'You Won The Game'
        result.style.color = '#308D46';
    }

    else if(userScore < computerScore){
        result.style.fontSize = '1rem';
        result.innerText = 'You Lost The Game';
        result.style.color = 'red';
    }

    else{
        result.style.fontSize = '2rem';
        result.innerText = 'Tie';
        result.style.color = 'white'
    }

    optionsBtn.style.display = 'none';



    reloadBtn.innerText = 'Restart';
    reloadBtn.style.display = 'grid'
    reloadBtn.addEventListener('click',function() {
        window.location.reload();
    });

    movesLeft.style.display = 'none';
    gameOverText.innerText = 'Game Over!';
}
