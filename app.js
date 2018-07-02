/*
Game functions:
    - player must guess number between a min and max
    - player gets certain number of guesses
    - notify player of guesses remaining
    - notify player of correct answer if lost
    - let player choose to play again
*/ 

//game values
let min = 1, 
    max = 10,
    winningNumber = 2,
    guessesLeft = 3;

//ui elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//assign ui min and max
minNum.textContent = min;
maxNum.textContent = max;

//listen for guessed number
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    //validate input
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number betweem ${min} and ${max}`, 'red')
    }

    //check if won
    if (guess === winningNumber) {
        //disable input
        guessInput.disabled = true;
        //change border color
        guessInput.style.borderColor = 'green';
        setMessage(`${winningNumber} is correct, You WIN !!!`, 'green')
    }else{

    }
})

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}