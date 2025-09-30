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