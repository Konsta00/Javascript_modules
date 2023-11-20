document.addEventListener('DOMContentLoaded', () => {
    const confirmation = confirm("Should I calculate the square root?");
    const element = document.querySelector('#num');
    let num;

    if (confirmation) {
        num = prompt('Give the number to be calculated');
        console.log(num)
    } else {
        element.innerHTML = 'The square root is not calculated.';
    }

    if (num  > 0) {
        const sqrt_num = Math.sqrt(num);

        element.innerHTML = `Numbers square root is ${sqrt_num}`;
    }
})