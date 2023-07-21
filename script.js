'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
let score = 20;
let highscore = 0;
let lastGuess;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess)
    document.querySelector('.message').textContent = 'No Number Entered ⚠️';
  else if (guess < 0 || guess > 20) {
    document.querySelector('.message').textContent =
      'Please enter a valid number (0-20)';
  } else if (lastGuess === guess) {
    document.querySelector('.message').textContent =
      'Please enter another guess';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number GZ 🎖️';
    document.querySelector('.number').textContent = secretNumber;
    if (highscore < score) highscore = score;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('body').style.backgroundColor = '#32CD32';
    document.querySelector('.number').style.width = '320px';
    document.querySelector('.number').style.backgroundColor = '#A9A9A9	';
  } else {
    if (score <= 0)
      document.querySelector('.message').textContent = 'You lost the game! 😢';
    else {
      if (guess > secretNumber)
        document.querySelector('.message').textContent = 'Too high ⬆️';
      else document.querySelector('.message').textContent = 'Too Low ⬇️';
      score--;
      document.querySelector('.score').textContent = score;
      if (!score)
        document.querySelector('.message').textContent =
          'You lost the game! 😢';
    }
  }
  lastGuess = guess;
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.backgroundColor = '#eee';
  score = 20;
  document.querySelector('.score').textContent = score;

  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  console.log(secretNumber);
  document.querySelector('.message').textContent = 'Start guessing..👀';
  document.querySelector('.guess').value = '';
});
