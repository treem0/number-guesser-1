import { compareNumber } from './function.js';

//Initialize DOM elements

const randomNumber = Math.floor(Math.random() * 21);
const guess = document.getElementById('userGuess');
const winLoseResult = document.getElementById('winLoseResult');
const guessFeedback = document.getElementById('guessFeedback');
const triesRemainingDisplay = document.getElementById('triesRemaining');
const submitButton = document.getElementById('submitButton');
const actualNumber = document.getElementById('actualNumber');
const actualNumberPrompt = document.getElementById('actualNumberPrompt');

triesRemainingDisplay.textContent = 3;
let triesRemaining = 3;

actualNumber.textContent = randomNumber;

// Set event handlers

submitButton.addEventListener('click', () => {
    const userGuess = guess.value;
    const checkGuess = compareNumber (userGuess, randomNumber); 
    
    if (checkGuess === 0) {
        winLoseResult.textContent = 'You\'re the winner!';
        guessFeedback.textContent = ' right on!';
        submitButton.setAttribute('disabled', false);
    } else if
    (checkGuess === -1) {
        guessFeedback.textContent = ' low';
        triesRemaining -= 1;
        triesRemainingDisplay.textContent = triesRemaining;
    } else {
        guessFeedback.textContent = ' high';
        triesRemaining -= 1;
        triesRemainingDisplay.textContent = triesRemaining;
    }

    if (triesRemaining === 0) {
        submitButton.setAttribute('disabled', false);
        winLoseResult.textContent = 'You lost!';
        actualNumber.classList.remove('hidden');
        actualNumberPrompt.classList.remove('hidden');
        
    }

});




