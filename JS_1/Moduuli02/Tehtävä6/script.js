// Write a function that returns a random dice roll between 1 and 6. The function should not have any parameters. 
// Write a main program that rolls the dice until the result is 6. 
// The main program should print out the result of each roll in an unordered list (<ul>). (2p)

document.addEventListener('DOMContentLoaded', () => {

    function rollDice() {
        return Math.floor(Math.random() * 6) + 1; 
    }

    const element = document.querySelector('#result');
    let check = true;

    while (check) {
        num = rollDice()

        const numTag = document.createElement('li');
        numTag.textContent = num;

        element.appendChild(numTag)

        if (num === 6) {
            check = false
        }
    }

});