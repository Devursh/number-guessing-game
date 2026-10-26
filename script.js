const guessButtonElement = document.querySelector('.guessButton')
const inputElement = document.querySelector('.guess-input')

function generateRandomInt() {
    const randomInt = Math.floor(Math.random() * 100) + 1
    return randomInt
}

const randomInt = generateRandomInt()

function checkNumber() {
    const number = Number(inputElement.value)

    if (number === randomInt) {
        console.log('Equal')
    } else if (number > randomInt) {
        console.log('Too high')
    } else if (number < randomInt) {
        console.log('Too low')
    }
}