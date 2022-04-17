
let userScore = 0;
let comuputerScore = 0;
let moves = 0;
const userScore_span = document.getElementById('p-count count');
const computerScore_span = document.getElementById('c-count count');
const result = document.getElementById('result');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const sissors = document.getElementById('s');

//Computer choice function
function getComputerChoice(){
    choices = ['r','p','s'];
   randomNumbers = [Math.floor(Math.random()*3)];
   return choices[randomNumbers]
}

function win(){
    userScore++;
    userScore_span.innerHTML = userScore;
    result.innerHTML = 'You win!'
    result.style.fontSize = '1.5rem';
    result.style.color = 'White';
    document.getElementById('mini-screen').classList.add('green-glow');  
    setTimeout(function() { document.getElementById("mini-screen").classList.remove('green-glow')}, 1000);
}


function loss(){
    comuputerScore++;
    computerScore_span.innerHTML = comuputerScore;
    result.innerHTML = 'Computer wins'
    result.style.fontSize = '1.5rem';
    result.style.color = 'White';
    document.getElementById('mini-screen').classList.add('red-glow');  
    setTimeout(function() { document.getElementById("mini-screen").classList.remove('red-glow')}, 1000);
}

function draw(){
    result.innerHTML = 'Its a draw!'
    result.style.fontSize = '1.5rem';
    result.style.color = 'White';
    document.getElementById('mini-screen').classList.add('blue-glow');  
    setTimeout(function() { document.getElementById("mini-screen").classList.remove('blue-glow')}, 1000);
}

//User choice function
function game(userChoice) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case'rp':
        case'pr':
        case'sr':
        win()
        break;

        case'rs':
        case'ps':
        case'sp':
        loss();
        break;

        case'rr':
        case'pp':
        case'ss':
        draw();
        break;
    }
};

//Main function
rock.addEventListener('click', function(){
    game('r');

    const movesLeft = document.querySelector('.movesleft');
    moves++;
    movesLeft.innerText = `Moves Left: ${10-moves}`;

    if(moves == 10){
        gameOver(game,movesLeft);


}
});

paper.addEventListener('click', function(){
    game('p');
    const movesLeft = document.querySelector('.movesleft');
    moves++;
    movesLeft.innerText = `Moves Left: ${10-moves}`;

    if(moves == 10){
        gameOver(game,movesLeft);
}

    
});
sissors.addEventListener('click', function(){
    game('s');
    const movesLeft = document.querySelector('.movesleft');
    moves++;
    movesLeft.innerText = `Moves Left: ${10-moves}`;

    if(moves == 10){
        gameOver(game,movesLeft);
}

});

  const gameOver = (playerOptions,movesLeft) => {
 
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
 
        game(option => {
            option.style.display = 'none';
        })
      
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
 
        if(userScore_span > computerScore_span){
            result.style.fontSize = '1rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if(userScore_span < computerScore_span){
            result.style.fontSize = '1rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'white'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'grid'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
