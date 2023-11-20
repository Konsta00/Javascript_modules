function sortClass() {
    classes = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']
    const random = Math.floor(Math.random() * classes.length)

    let name = document.getElementById('name').value;
    let sorted = document.getElementById('sortedClass');

    sorted.innerHTML = `${name}, you are ${classes[random]}`

}