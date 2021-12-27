let startGame1, cont, again, randNum, pocket, counter = 0;
let prize = 0;
const maxPrize = 100, midPrize = 50, minPrize = 25, maxCounter = 3, initialMaxValue = 8, initialPrize = 0, 
initialCounter = 0, changeOfRange = 4, coefOfPrize = 2;
let prizeArray = [maxPrize, midPrize, minPrize]
let max = 8;

function startGame() {
    startGame1 = confirm('Do you want to play a game?');
}
startGame();

if (startGame1) {
    game();
} else {
    alert('You did not become a billionaire, but can.')
}

function game() {
    randNum = Math.floor(Math.random() * max);
    do {
        pocket = +prompt(`Choose a roulette pocket number from 0 to ${max}\nAttempts left: ${maxCounter - counter}\n` +
        `Total prize: ${prize}.\nPossible prize on current attempt: ${prizeArray[counter]}`);
        counter++;
        console.log(pocket)
    } while (pocket !== randNum && counter < maxCounter && pocket !== null)
    check()
}

function check() {
    if (pocket === randNum) {
        prize += prizeArray[counter - 1];
        cont = confirm(`Thank you for participation. Your prize is ${prize}$. Do you want to continue?`)
        newGame();
    } else {
        alert(`Thank you for participation. Your prize is 0$.`);
        again = confirm(`Do you want to play a game again?`)
        if (again) {
            max = initialMaxValue;
            prizeArray = [maxPrize, midPrize, minPrize];
            counter = initialCounter;
            prize = initialPrize;
            game();
        } else {
            alert('Thank you for patricipation!')
        }
    }
}

function newGame() {
    if (cont === true) {
        max += changeOfRange;
        prizeArray = prizeArray.map(value => value * coefOfPrize);
        counter = initialCounter;
        game();
    } else {
        alert(`Thank you for participation. Your prize is ${prize}$`);
    }
}