'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
let lastGuess;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //checking if input got a value or it's empty
  if (!guess)
    document.querySelector('.message').textContent = 'No Number Entered ⚠️';
  //checking if the guess was out of the range (0-20)
  else if (guess < 0 || guess > 20) {
    document.querySelector('.message').textContent =
      'Please enter a valid number (0-20)';
  }
  //checking if the user just entered the same as last guess
  else if (lastGuess === guess) {
    document.querySelector('.message').textContent =
      'Please enter another guess';
  } 
  //checking if the user enterd the correct 
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number GZ 🎖️';
    document.querySelector('.number').textContent = secretNumber; //showing the secrent Number
    //checking if your current score is higher than the highscore
    if (highscore < score) highscore = score;
    document.querySelector('.highscore').textContent = highscore; 
    document.querySelector('body').style.backgroundColor = '#32CD32'; 
    document.querySelector('.number').style.width = '320px';
    document.querySelector('.number').style.backgroundColor = '#A9A9A9	';
  } else {
    //checking if the score is less or equal to 0
    if (score <= 0)
      document.querySelector('.message').textContent = 'You lost the game! 😢';
    else {
      if (guess > secretNumber)
        document.querySelector('.message').textContent = 'Too high ⬆️';
      else document.querySelector('.message').textContent = 'Too Low ⬇️';
      //decreasing the score and showing it
      score--;
      document.querySelector('.score').textContent = score;
      if (!score)
        document.querySelector('.message').textContent =
          'You lost the game! 😢';
    }
  }
  lastGuess = guess;
});
//when we click Again button it will return the backgroundcolor to its color and the width and put ? in the secretNumber
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.backgroundColor = '#eee';
  score = 20;
  document.querySelector('.score').textContent = score;

  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing..👀';
  document.querySelector('.guess').value = '';
});
