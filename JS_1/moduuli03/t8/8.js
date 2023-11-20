const button = document.querySelector('#start');
const result = document.querySelector('#result');

button.addEventListener('click', () => {
    const operation = document.querySelector('#operation').value;
    const num1 = parseInt(document.querySelector('#num1').value);
    const num2 = parseInt(document.querySelector('#num2').value);

    if (operation == 'add') {
        const sum = num1 + num2;
        result.innerHTML = sum;
    }else if(operation == 'sub') {
        const sub = num1 - num2;
        result.innerHTML = sub;
    } else if (operation == 'multi'){
        const mul = num1 * num2;
        result.innerHTML = mul;
    } else {
        const div = num1 / num2;
        result.innerHTML = div;
    }
});

