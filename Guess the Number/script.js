let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const guessArr = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resultParams");

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

function validateGuess(guess) { // check if number is between 1 & 100
    if (isNaN(guess)) {
        alert('Enter a valid number!');
    }
    else if (guess < 1 || guess > 100) {
        alert('Enter a number between 1 & 100.');
    }
    else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over!!! The number was ${randomNumber}.`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) { // check if the guessed number is correct, high or low
    if (guess === randomNumber) {
        displayMessage(`You guessed it right!! ${guess} is the number!`);
    }
    else if (guess < randomNumber) {
        displayMessage(`It's less than the actual number.`);
    }
    else {
        displayMessage(`It's more than the actual number.`)
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessArr.innerHTML += `${guess} | `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) { // displays low or high
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
    const newGame = document.querySelector('#newGame');
    newGame.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        lowOrHigh.innerHTML = '';
        prevGuess = [];
        numGuess = 1;
        guessArr.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', ''); // since it should be key-value pair
    p.classList.add('button');
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        // alert(guess);
        validateGuess(guess);
    });
}