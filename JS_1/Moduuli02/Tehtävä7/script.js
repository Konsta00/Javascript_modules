// Modify the function above so that it gets the number of sides on the dice as a parameter. 
// With the modified function you can for example roll a 21-sided role-playing dice. The difference to the last exercise is that the dice rolling in the main program continues
// until the program gets the maximum number on the dice, which is asked from the user at the beginning. (2p)

// Write a function that returns a random dice roll between 1 and 6. The function should not have any parameters. 
// Write a main program that rolls the dice until the result is 6. 
// The main program should print out the result of each roll in an unordered list (<ul>). (2p)

document.addEventListener('DOMContentLoaded', () => {

    const numOfSides = parseInt(prompt('How many sides should the dice have?'));

    function rollDice(sides) {
        return Math.floor(Math.random() * sides) + 1; 
    }

    const element = document.querySelector('#result');
    let check = true;

    while (check) {
        num = rollDice(numOfSides)

        const numTag = document.createElement('li');
        numTag.textContent = num;

        element.appendChild(numTag)

        if (num === numOfSides) {
            check = false
        }
    }

});