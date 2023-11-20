document.addEventListener('DOMContentLoaded', () => {
    const ul = document.querySelector('#leaplist')

    const start = parseInt(prompt('Enter start year'))
    const end = parseInt(prompt('Enter end year'))

    const isLeapYear = (year) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    
    for (let index = start; index < end; index += 4) {
        if (isLeapYear(index)){
            let li = document.createElement('li');
            li.innerHTML = `${index}`

            ul.appendChild(li)
        }   
    }
});