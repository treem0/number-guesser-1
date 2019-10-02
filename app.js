import { compareNumber } from './function.js'

//Initialize DOM elements

const randomNumber = Math.floor(Math.random() * 10) +1;
const guess = document.getElementById("userGuess");
const winLoseResult = document.getElementById("winLoseResult");
const guessFeedback = document.getElementById("guessFeedback");
const triesRemainingDisplay = document.getElementById("triesRemaining");
const submitButton = document.getElementById("submitButton");

triesRemainingDisplay.textContent = 3;
let triesRemaining = 3;

// Set event handlers

submitButton.addEventListener('click', () => {
    const userGuess = guess.value;
    const checkGuess = compareNumber (userGuess, randomNumber); 
    console.log(checkGuess);
    
    if (checkGuess === 0) {
        winLoseResult.textContent = 'You\'re the winner!';
    } else if
        (checkGuess === -1) {
        guessFeedback.textContent = ' low.';
        triesRemaining -= 1;
        triesRemainingDisplay.textContent=triesRemaining;
    } else {
        guessFeedback.textContent = ' high.';
        triesRemaining -= 1;
        triesRemainingDisplay.textContent=triesRemaining;
    }

    if (triesRemaining === 0) {
        submitButton.setAttribute('disabled', false);
        winLoseResult.textContent = 'You lost!';
    }

})




