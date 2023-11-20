const element = document.querySelector('#result');

const rolls = prompt('How many times should be dice be rolled?');
let rolls_array = []
let sum = 0

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

// expects a number
for (let i = 0; i < rolls; i++) {
    const roll = randomIntFromInterval(1, 6)

    rolls_array.push(roll)
}

rolls_array.forEach(num => {
    sum += num
});

element.innerHTML = `The sum after the rolls is ${sum}`