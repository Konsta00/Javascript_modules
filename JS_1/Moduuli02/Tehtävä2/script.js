document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('#result');
    const participants = parseInt(prompt('What number of participants: '));

    const names = []
    let index = 0;

    while(index < participants){
        const name = prompt(`Name of participant number ${index+1}: `);
        names.push(name)

        index++;
    }

    // SORT IN ALPHABETICAL ORDER
    names.sort()

    // LOOP THROUGH EACH NAME & CREATE LI ELEMENT AND APPEND IT PARENT OL TAG
    names.forEach(name => {
        const nameTag = document.createElement('li');
        nameTag.textContent = name;

        element.appendChild(nameTag)
    });
    

});