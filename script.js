const guessButtonElement = document.querySelector('.guess-button');
const inputElement = document.querySelector('.guess-input');
const hintElement = document.querySelector('.hint');
const attemptsCounterElement = document.querySelector('.attempts-counter');
let previousGuess;
let previousGuesses = [];

function generateRandomInt() {
    const randomInt = Math.floor(Math.random() * 100) + 1;
    return randomInt;
};

let randomInt = generateRandomInt();

function checkNumber() {
    const number = Number(inputElement.value);
    const attempts = Number(attemptsCounterElement.textContent);
    if (Number.isInteger(number)){
        if (number > 100 || number < 0) {
            hintElement.textContent = "The number must be between 1 and 100.";
            return;
        }

        if (previousGuesses.includes(number)) {
            hintElement.textContent = "You have already guessed this.";
            return;
        }

        if (number === randomInt) {
            hintElement.textContent = "Correct! You guessed it!";
            inputElement.disabled = true;
            guessButtonElement.disabled = true;
        } else if (number > randomInt) {
            hintElement.textContent = "Too high! Try a lower number.";
        } else if (number < randomInt) {
            hintElement.textContent = "Too low! Try a higher number.";
        };

        attemptsCounterElement.textContent = attempts + 1;
        previousGuess = number;
        previousGuesses.push(number);
    } else if (!Number.isInteger(number)) {
        hintElement.textContent = 'This is not a number.'
    }
}

function newGame() {
    inputElement.disabled = false;
    guessButtonElement.disabled = false;
    attemptsCounterElement.textContent = '0';
    inputElement.value = '';
    hintElement.textContent = 'Enter a number and make your first guess!';
    previousGuesses = []
    randomInt = generateRandomInt();
}

inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkNumber();
    }
});