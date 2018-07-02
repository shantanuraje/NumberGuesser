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
    winningNumber = getRandomNum(min, max),
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

//play again event listener
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
    
})

//listen for guessed number
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    //validate input
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number betweem ${min} and ${max}`, 'red')
    }

    //check if won
    if (guess === winningNumber) {
        //game over - WON
        gameOver(true, `${winningNumber} is correct, You WIN !!!` )

    } else {
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            //game over - LOST
            gameOver(false, `Game over, You LOST. The correct number was ${winningNumber} !!!`);

        } else {
            //game continues - answer wrong
            guessInput.style.borderColor = 'red';
            //clear input
            guessInput.value = '';
            //display message
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
})

//set display message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

//get winning number
function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//game over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    //game over - WON
    //disable input
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor = color;
    //set text color
    setMessage(msg, color);

    //play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';

    //class added after so we need event delegation
    document.getElementsByClassName('play')

}