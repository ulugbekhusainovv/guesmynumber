'use strict';

//selectors
const againBtn = document.querySelector('.again');
const numberEl = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');

let score = 20;
let highscore = 0;

// events
checkBtn.addEventListener('click', check);
againBtn.addEventListener('click', again);
// rendomNumbers
let randomNumber = Math.floor(Math.random() * 20 + 1);
console.log(randomNumber);
//  functions
function check() {
  const inputValue = +guessInput.value;
  if (inputValue) {
    if (inputValue > randomNumber) {
      messageEl.textContent = '📈 Too high!';
      score--;
      scoreEl.textContent = score;
      document.body.style.background = '#222';
      numberEl.textContent = '?';
    } else if (inputValue < randomNumber) {
      messageEl.textContent = '📉 Too low!';
      score--;
      scoreEl.textContent = score;
      document.body.style.background = '#222';
      numberEl.textContent = '?';
    } else if (inputValue == randomNumber) {
      numberEl.textContent = randomNumber;
      messageEl.textContent = 'You are win...🎉';
      document.body.style.background = 'green';

      if (highscore < score) {
        highscore = score;
        highscoreEl.textContent = highscore;
      }
      console.log(randomNumber);
    } else {
      score--;
      scoreEl.textContent = score;
      document.body.style.background = '#222';
      messageEl.textContent = 'Start guessing...';
      numberEl.textContent = '?';
    }
  }
}
// again
function again() {
  messageEl.textContent = 'Start guessing...';
  document.body.style.background = '#222';
  numberEl.textContent = '?';
  randomNumber = Math.floor(Math.random() * 20 + 1);
  guessInput.textContent = '';
  score = 20;
  scoreEl.textContent = '20';
  console.log(randomNumber);
}
