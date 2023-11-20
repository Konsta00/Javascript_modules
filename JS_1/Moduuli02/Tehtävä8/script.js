document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('#result');
    const testArray = ['Johnny', 'DeeDee', 'Joey', 'Marky'];

    function concat(array) {
        let string = '';

        array.forEach(element => {
            string += element
        });

        return string;
    }

    const names = concat(testArray);
    element.textContent = names;
});