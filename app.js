import { compareNumber } from './function.js';

//Initialize DOM elements

const randomNumber = Math.floor(Math.random() * 21);
const guess = document.getElementById('user-guess');
const winLoseResult = document.getElementById('win-lose-result');
const guessFeedback = document.getElementById('guess-feedback');
const triesRemainingDisplay = document.getElementById('tries-remaining');
const submitButton = document.getElementById('submit-button');
const actualNumber = document.getElementById('actual-number');
const actualNumberPrompt = document.getElementById('actual-number-prompt');

triesRemainingDisplay.textContent = 3;
let triesRemaining = 3;

actualNumber.textContent = randomNumber;

// Set event handlers

function guessWin() {
    winLoseResult.textContent = 'You\'re the winner!';
    guessFeedback.textContent = ' right on!';
    submitButton.setAttribute('disabled', false);
}
function tooLow(){
    guessFeedback.textContent = ' low';
    triesRemaining -= 1;
    triesRemainingDisplay.textContent = triesRemaining;
}
function tooHigh(){
    guessFeedback.textContent = ' high';
    triesRemaining -= 1;
    triesRemainingDisplay.textContent = triesRemaining;
}
function youLost(){
    submitButton.setAttribute('disabled', false);
    winLoseResult.textContent = 'You lost!';
    actualNumber.classList.remove('hidden');
    actualNumberPrompt.classList.remove('hidden');

}
const userGuess = guess.value;
const checkGuess = compareNumber (userGuess, randomNumber); 

// Calls high,low,win,loss functions and determines winner

function determineWinner() {
    
    if (checkGuess === 0) {
        guessWin();
    } else if (checkGuess === -1) {
        tooLow();
    } else {
        tooHigh();
    } if (triesRemaining === 0) {
        youLost();
    }
}

submitButton.addEventListener('click', determineWinner);






