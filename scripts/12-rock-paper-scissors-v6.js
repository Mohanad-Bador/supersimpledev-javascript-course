let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0 };

updateScoreElement();
function pickComputerMove(){
  let randomNumber = Math.random();
  if(randomNumber <= 1/3) return 'rock';
  else if (randomNumber <= 2/3) return 'paper';
  else return 'scissors';}
  
document.querySelector('.js-rock-button').addEventListener('click', () => playGame('rock'));

document.querySelector('.js-paper-button').addEventListener('click', () => playGame('paper'));

document.querySelector('.js-scissors-button').addEventListener('click', () => playGame('scissors'));

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r') playGame('rock');
  else if (event.key === 'p') playGame('paper');
  else if (event.key === 's') playGame('scissors');
  else if(event.key === 'a') autoPlay();
  else if(event.key === 'Backspace') resetScore();
})

function playGame (playerMove) {
  const computerMove = pickComputerMove();
  let result ='';

  if(playerMove === computerMove) result = 'Tie!';
  else if (playerMove === 'rock') {
    if (computerMove === 'scissors') result = 'You Win!';
    else result = 'You Lose!';
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') result = 'You Win!';
    else result = 'You Lose!';
  }	else if (playerMove === 'scissors') {
    if (computerMove === 'paper') result = 'You Win!';
    else result = 'You Lose!';
  }
  if (result === 'You Win!') score.wins++;
  else if(result === 'You Lose!') score.losses++;
  else score.ties++;
  
  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You
<img src="Assets/${playerMove}-emoji.png" 
class="move-icon"> 
<img src="Assets/${computerMove}-emoji.png"
class="move-icon"> 
Computer`
  updateScoreElement();
}

function updateScoreElement () {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Lossess: ${score.losses}, Ties: ${score.ties}`;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
}

function confirmReset() {
  document.querySelector('.js-reset-confirmation').innerHTML=`Are you sure you want to reset the score? 
    <button class="js-reset-button-yes">Yes</button>
    <button class="js-reset-button-no">No</button>;`
    document.querySelector('.js-reset-button-yes').addEventListener('click', () => {
      document.querySelector('.js-reset-confirmation').innerHTML='';
      resetScore();
    })
    
    document.querySelector('.js-reset-button-no').addEventListener('click', () => {
      document.querySelector('.js-reset-confirmation').innerHTML='';
    })
}

let isAutoPlaying = false;
let intervalId;
function autoPlay() {
  if(!isAutoPlaying){
    intervalId = setInterval( () => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    document.querySelector('.js-auto-play-button').innerHTML = 'Stop Playing';
  }
  else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector('.js-auto-play-button').innerHTML = 'Auto Play';
  }
}

document.querySelector('.js-auto-play-button').addEventListener('click', autoPlay);

document.querySelector('.js-reset-score-button').addEventListener('click', confirmReset);
