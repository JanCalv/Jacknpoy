//get the image choices
var paperButton = document.querySelector('.paper');
var rockButton = document.querySelector('.rock');
var scissorButton = document.querySelector('.scissor');

var arrChoice = ['image/paper.png', 'image/rock.png', 'image/scissor.png'];

var resultBox = document.querySelector('.modal');
var modalPicture = document.querySelector('.modal-img');
var compChoice = document.querySelector('.comp-img');

var userScore = 0;
var compScore = 0;




//applying the functions
resultBox.addEventListener('click',exitModal);
paperButton.addEventListener('click',paperSelect);
rockButton.addEventListener('click',rockSelect);
scissorButton.addEventListener('click',scissorSelect);

//reset
document.querySelector('.restart-game').addEventListener('click',function(){
    window.location.reload();
})


//create a function for the computer to produce random choices
function exitModal(){ //exit Modal
    resultBox.style.display = "none";
}

function finalScore(){
    if(userScore === 5){
        document.querySelector('.score-text').textContent = "YOU WIN!"
        document.querySelector('.selection-section').style.display = "none";
    } else if (compScore === 5){
        document.querySelector('.score-text').textContent = "COMPUTER WIN!"
        document.querySelector('.selection-section').style.display = "none";
    }
}

//PAPER
function paperSelect() {
    resultBox.style.display = "block";
    modalPicture.src = "image/paper.png";

    var randomPick = Math.floor(Math.random()*arrChoice.length);
    var result = document.querySelector('.result-text');
    var compPick = arrChoice[randomPick];
    compChoice.src = compPick;

    if(compPick === arrChoice[0]){
        document.querySelector('.result-text').textContent = "Draw!"
    } else if (compPick === arrChoice[1]) {
        document.querySelector('.result-text').textContent = "You Win!"
        var uScore = userScore = userScore + 1;
        document.querySelector('.your-score').textContent = uScore;
    } else {
        document.querySelector('.result-text').textContent = "You Lose!"
        var comScore = compScore = compScore + 1;
        document.querySelector('.comp-score').textContent = comScore;
    }

    finalScore();
    
}

function rockSelect() {
    resultBox.style.display = "block";
    modalPicture.src = "image/rock.png";

    var randomPick = Math.floor(Math.random()*arrChoice.length);
    var result = document.querySelector('.result-text');
    var compPick = arrChoice[randomPick];
    compChoice.src = compPick;

    if(compPick === arrChoice[1]){
        document.querySelector('.result-text').textContent = "Draw!"
    } else if (compPick === arrChoice[2]) {
        document.querySelector('.result-text').textContent = "You Win!"
        var uScore = userScore = userScore + 1;
        document.querySelector('.your-score').textContent = uScore;
    } else {
        document.querySelector('.result-text').textContent = "You Lose!"
        var comScore = compScore = compScore + 1;
        document.querySelector('.comp-score').textContent = comScore;
    }

    finalScore();
    
}

function scissorSelect() {
    resultBox.style.display = "block";
    modalPicture.src = "image/scissor.png";

    var randomPick = Math.floor(Math.random()*arrChoice.length);
    var result = document.querySelector('.result-text');
    var compPick = arrChoice[randomPick];
    compChoice.src = compPick;

    if(compPick === arrChoice[2]){
        document.querySelector('.result-text').textContent = "Draw!"
    } else if (compPick === arrChoice[0]) {
        document.querySelector('.result-text').textContent = "You Win!"
        var uScore = userScore = userScore + 1;
        document.querySelector('.your-score').textContent = uScore;
    } else {
        document.querySelector('.result-text').textContent = "You Lose!"
        var comScore = compScore = compScore + 1;
        document.querySelector('.comp-score').textContent = comScore;
    }
    
    finalScore();
}

