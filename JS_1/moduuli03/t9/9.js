const button = document.querySelector('#start');
const element = document.querySelector('#result');

function split(input) {
    return input.split(/(\D)/).filter(Boolean);
}

function calculate(input) {
    const nums = split(input);

    const num1 = parseInt(nums[0], 10);
    const num2 = parseInt(nums[2], 10);
    const operation = nums[1];

    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Invalid operation';
    }
}

button.addEventListener('click', () => {
    const input = document.querySelector('#calculation').value;

    element.innerHTML = calculate(input);
});