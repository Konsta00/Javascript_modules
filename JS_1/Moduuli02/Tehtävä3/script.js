document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('#result');

    const dogs = []
    let index = 0;

    while(index < 6){
        const name = prompt(`Name of dog number ${index+1}: `);
        dogs.push(name)

        index++;
    }

    // SORT IN ALPHABETICAL ORDER
    dogs.sort()
    // REVERSE
    dogs.reverse()

    // LOOP THROUGH EACH NAME & CREATE LI ELEMENT AND APPEND IT PARENT UL TAG
    dogs.forEach(name => {
        const nameTag = document.createElement('li');
        nameTag.textContent = name;

        element.appendChild(nameTag)
    });
    

});